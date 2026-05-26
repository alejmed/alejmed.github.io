import puppeteer from 'puppeteer-core';
import { execSync } from 'child_process';
import { resolve } from 'path';

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
  await page.emulateMediaType('screen');
  await page.emulateMediaFeatures([{ name: 'prefers-color-scheme', value: mode }]);

  // Match viewport exactly to resume max-width so margin:auto doesn't offset content
  await page.setViewport({ width: 820, height: 1056 });

  await page.goto('http://localhost:3000/resume/', {
    waitUntil: 'networkidle0',
    timeout: 30000,
  });

  await page.evaluate(() => document.fonts.ready);

  await page.evaluate(() => {
    const controls = document.querySelector('.controls');
    if (controls) controls.style.display = 'none';
    // Remove screen padding so card fills the full width
    const wrap = document.querySelector('.resume-wrap');
    if (wrap) { wrap.style.padding = '0'; wrap.style.maxWidth = 'none'; }
  });

  const pdfHeight = await page.evaluate(() => {
    const wrap = document.querySelector('.resume-wrap') ?? document.body;
    return wrap.scrollHeight;
  });

  await page.pdf({
    path: resolve(`dist/resume-${mode}.pdf`),
    width: '820px',
    height: `${pdfHeight}px`,
    printBackground: true,
    margin: { top: '0', right: '0', bottom: '0', left: '0' },
  });

  await browser.close();
  console.log(`Generated dist/resume-${mode}.pdf (820x${pdfHeight}px)`);
}

await generate('light');
await generate('dark');
