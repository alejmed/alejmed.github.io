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
  // Wide viewport so content renders at its natural width (max-width: 820px)
  await page.setViewport({ width: 1200, height: 1056 });
  await page.emulateMediaType('screen');

  // Let the page's own theme script detect OS preference
  await page.emulateMediaFeatures([
    { name: 'prefers-color-scheme', value: mode },
  ]);

  await page.goto('http://localhost:3000/resume/', {
    waitUntil: 'networkidle0',
    timeout: 30000,
  });

  await page.evaluate(() => document.fonts.ready);

  // Hide controls and tighten outer padding for PDF
  await page.evaluate(() => {
    const controls = document.querySelector('.controls');
    if (controls) controls.style.display = 'none';
    const wrap = document.querySelector('.resume-wrap');
    if (wrap) wrap.style.padding = '1.5rem 1.5rem 1.5rem';
  });

  // Measure rendered dimensions for a single-page, no-clip PDF
  const { pdfWidth, pdfHeight } = await page.evaluate(() => {
    const wrap = document.querySelector('.resume-wrap') ?? document.body;
    return { pdfWidth: wrap.scrollWidth, pdfHeight: wrap.scrollHeight };
  });

  await page.pdf({
    path: resolve(`dist/resume-${mode}.pdf`),
    width: `${pdfWidth}px`,
    height: `${pdfHeight}px`,
    printBackground: true,
    margin: { top: '0', right: '0', bottom: '0', left: '0' },
  });

  await browser.close();
  console.log(`Generated dist/resume-${mode}.pdf (${height}px tall)`);
}

await generate('light');
await generate('dark');
