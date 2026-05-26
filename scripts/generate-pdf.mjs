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
  await page.setViewport({ width: 816, height: 1056 });
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

  // Measure content height for a single-page PDF
  const height = await page.evaluate(() => {
    const wrap = document.querySelector('.resume-wrap');
    return (wrap ?? document.body).scrollHeight;
  });

  await page.pdf({
    path: resolve(`dist/resume-${mode}.pdf`),
    width: '816px',
    height: `${height}px`,
    printBackground: true,
    margin: { top: '0', right: '0', bottom: '0', left: '0' },
  });

  await browser.close();
  console.log(`Generated dist/resume-${mode}.pdf (${height}px tall)`);
}

await generate('light');
await generate('dark');
