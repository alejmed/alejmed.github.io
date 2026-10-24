import puppeteer from 'puppeteer-core';
import { execSync } from 'child_process';
import { resolve } from 'path';
import { buildHTML } from './resume-html.mjs';

const executablePath = execSync(
  'which google-chrome-stable 2>/dev/null || which google-chrome 2>/dev/null || which chromium-browser 2>/dev/null',
  { encoding: 'utf8' }
).trim();

async function generate(mode) {
  const browser = await puppeteer.launch({
    executablePath,
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-gpu'],
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 820, height: 1200 });

  // Load self-contained HTML directly — no web server, no CSS variable indirection
  // 'load' fires once stylesheet/font requests complete; networkidle0 hangs on keep-alive connections
  await page.setContent(buildHTML(mode), { waitUntil: 'load', timeout: 30000 });
  await page.evaluate(() => document.fonts.ready);

  // Measure exact content height
  const pdfHeight = await page.evaluate(() =>
    document.querySelector('.page').scrollHeight
  );

  await page.pdf({
    path: resolve(`dist/resume-${mode}.pdf`),
    width: '820px',
    height: `${pdfHeight}px`,
    printBackground: true,
    margin: { top: '0', right: '0', bottom: '0', left: '0' },
  });

  await browser.close();
  console.log(`Generated dist/resume-${mode}.pdf (820×${pdfHeight}px)`);
}

await generate('light');
await generate('dark');
