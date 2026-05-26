import puppeteer from 'puppeteer-core';
import { execSync } from 'child_process';
import { resolve } from 'path';

const executablePath = execSync(
  'which google-chrome-stable 2>/dev/null || which google-chrome 2>/dev/null || which chromium-browser 2>/dev/null',
  { encoding: 'utf8' }
).trim();

const browser = await puppeteer.launch({
  executablePath,
  args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-gpu'],
});

const page = await browser.newPage();
await page.setViewport({ width: 820, height: 1122 });
await page.emulateMediaType('screen');

await page.goto('http://localhost:3000/resume/', {
  waitUntil: 'networkidle0',
  timeout: 30000,
});

await page.evaluate(() => document.fonts.ready);

// Hide screen-only controls before capture
await page.evaluate(() => {
  const el = document.querySelector('.controls');
  if (el) el.style.display = 'none';
});

await page.pdf({
  path: resolve('dist/resume.pdf'),
  format: 'A4',
  printBackground: true,
  margin: { top: '1.2cm', right: '1.5cm', bottom: '1.2cm', left: '1.5cm' },
});

await browser.close();
console.log('Generated dist/resume.pdf');
