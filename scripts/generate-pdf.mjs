import puppeteer from 'puppeteer-core';
import { execSync } from 'child_process';
import { resolve } from 'path';

const executablePath = execSync(
  'which google-chrome-stable 2>/dev/null || which google-chrome 2>/dev/null || which chromium-browser 2>/dev/null',
  { encoding: 'utf8' }
).trim();

const THEMES = {
  light: {
    bg:     '#fdfaf4',
    text:   '#1c1a16',
    muted:  '#6b5f4e',
    accent: '#3b6e38',
    border: '#e0d9ce',
  },
  dark: {
    bg:     '#171511',
    text:   '#eee8de',
    muted:  '#9e9285',
    accent: '#72b86f',
    border: '#282420',
  },
};

function buildHTML(mode) {
  const c = THEMES[mode];

  return /* html */`<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500&family=Space+Grotesk:wght@600;700&display=swap" rel="stylesheet">
  <style>
    *, *::before, *::after { margin: 0; padding: 0; box-sizing: border-box; }

    html, body {
      background: ${c.bg};
      -webkit-font-smoothing: antialiased;
    }

    body {
      font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
      font-size: 13px;
      line-height: 1.55;
      color: ${c.text};
      background: ${c.bg};
    }

    .page {
      width: 820px;
      padding: 2.75rem 3.25rem 3rem;
      background: ${c.bg};
    }

    /* ── Header ── */
    .header {
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
      gap: 2rem;
    }

    .name {
      font-family: 'Space Grotesk', sans-serif;
      font-size: 2rem;
      font-weight: 700;
      letter-spacing: -0.04em;
      line-height: 1;
      color: ${c.text};
    }

    .job-title {
      margin-top: 0.3rem;
      font-size: 0.82rem;
      font-weight: 500;
      color: ${c.accent};
    }

    .contact {
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      justify-content: flex-end;
      gap: 0.25rem 0;
      font-size: 0.7rem;
      color: ${c.muted};
      text-align: right;
    }

    .contact span { white-space: nowrap; }
    .dot { opacity: 0.4; margin: 0 0.25rem; }

    /* ── Divider ── */
    .divider {
      height: 1px;
      background: ${c.border};
      margin: 1.4rem 0;
    }

    /* ── Section heading ── */
    .section-heading {
      font-family: 'Space Grotesk', sans-serif;
      font-size: 0.6rem;
      font-weight: 700;
      letter-spacing: 0.16em;
      text-transform: uppercase;
      color: ${c.accent};
      margin-bottom: 0.9rem;
    }

    /* ── Experience ── */
    .jobs { display: flex; flex-direction: column; gap: 1.35rem; }

    .job-header {
      display: flex;
      justify-content: space-between;
      align-items: baseline;
      margin-bottom: 0.4rem;
    }

    .company {
      font-family: 'Space Grotesk', sans-serif;
      font-size: 0.92rem;
      font-weight: 700;
      letter-spacing: -0.02em;
      color: ${c.text};
    }

    .location {
      font-size: 0.7rem;
      color: ${c.muted};
      margin-left: 0.4rem;
    }

    .descriptor {
      font-size: 0.65rem;
      font-weight: 600;
      letter-spacing: 0.06em;
      text-transform: uppercase;
      color: ${c.muted};
    }

    .role-header {
      display: flex;
      justify-content: space-between;
      align-items: baseline;
      margin-bottom: 0.4rem;
    }

    .role-title {
      font-family: 'Space Grotesk', sans-serif;
      font-size: 0.82rem;
      font-weight: 600;
      color: ${c.text};
    }

    .period {
      font-size: 0.68rem;
      color: ${c.muted};
    }

    .bullets {
      list-style: none;
      padding-left: 0.8rem;
      display: flex;
      flex-direction: column;
      gap: 0.28rem;
    }

    .bullets li {
      font-size: 0.75rem;
      line-height: 1.55;
      color: ${c.muted};
      position: relative;
    }

    .bullets li::before {
      content: '·';
      position: absolute;
      left: -0.8rem;
      font-weight: 700;
      color: ${c.accent};
    }

    .bullets strong {
      font-weight: 600;
      color: ${c.text};
    }

    /* ── Skills ── */
    .skills { display: flex; flex-direction: column; gap: 0.38rem; }

    .skill-row {
      display: grid;
      grid-template-columns: 110px 1fr;
      gap: 0.75rem;
      align-items: baseline;
    }

    .skill-cat {
      font-family: 'Space Grotesk', sans-serif;
      font-size: 0.72rem;
      font-weight: 600;
      color: ${c.text};
    }

    .skill-list {
      font-size: 0.75rem;
      color: ${c.muted};
    }

    /* ── Education ── */
    .edu-row {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      gap: 1rem;
    }

    .edu-school {
      font-family: 'Space Grotesk', sans-serif;
      font-size: 0.88rem;
      font-weight: 700;
      letter-spacing: -0.02em;
      color: ${c.text};
    }

    .edu-degree {
      margin-top: 0.2rem;
      font-size: 0.75rem;
      color: ${c.muted};
    }

    .edu-year {
      font-family: 'Space Grotesk', sans-serif;
      font-size: 1.5rem;
      font-weight: 700;
      letter-spacing: -0.03em;
      color: ${c.accent};
      opacity: 0.85;
    }
  </style>
</head>
<body>
<div class="page">

  <!-- Header -->
  <div class="header">
    <div>
      <div class="name">Alejandro Blanco</div>
      <div class="job-title">Senior Mobile Software Engineer</div>
    </div>
    <div class="contact">
      <span>alejmedina@duck.com</span><span class="dot">·</span><span>github.com/alejmed</span><span class="dot">·</span><span>alejmed.github.io</span><span class="dot">·</span><span>Remote</span>
    </div>
  </div>

  <div class="divider"></div>

  <!-- Experience -->
  <div class="section-heading">Experience</div>
  <div class="jobs">

    <div>
      <div class="job-header">
        <div><span class="company">EarnIn</span><span class="location">Palo Alto, CA · Remote</span></div>
        <span class="descriptor">Fintech · Earned Wage Access</span>
      </div>
      <div class="role-header">
        <span class="role-title">Senior Software Engineer</span>
        <span class="period">Aug 2022 – Present</span>
      </div>
      <ul class="bullets">
        <li><strong>EarnIn Card:</strong> Led 7-engineer cross-platform team (3 Android, 4 iOS) to launch and GA, driving 600K+ waitlist signups and 1M+ Live Pay transactions post-launch.</li>
        <li><strong>Account Activity:</strong> Full Android ownership of EarnIn's ledger-based transaction system, covering BE/FE contracts, engineering design, Jetpack Compose UI, and product/design iteration.</li>
        <li><strong>AI Mobile Lead:</strong> Architected EarnIn's AI-assisted mobile development workflow: memory management, custom local CI tooling, emulator/simulator automation, and iOS/Android best practices. Adopted team-wide.</li>
        <li><strong>Cross-Team Alignment:</strong> Defined scope, timelines, and stakeholder alignment across multiple product initiatives; drove API contract definition across product, design, and backend teams.</li>
      </ul>
    </div>

    <div>
      <div class="job-header">
        <div><span class="company">eBay</span><span class="location">San Jose, CA</span></div>
        <span class="descriptor">E-Commerce · Buyer Experience</span>
      </div>
      <div class="role-header">
        <span class="role-title">Software Developer</span>
        <span class="period">Sep 2021 – Aug 2022</span>
      </div>
      <ul class="bullets">
        <li>Identified and resolved backend bugs across high-traffic Buyer Experience purchase flows.</li>
        <li>Assisted migration of legacy Spring services to Spring Boot, modernizing backend architecture.</li>
        <li>Updated and validated Jenkins CI/CD job configurations to ensure correct pipeline behavior post-migration.</li>
        <li>Monitored Grafana dashboards during rollouts to verify metrics aligned with expected baselines.</li>
      </ul>
    </div>

  </div>

  <div class="divider"></div>

  <!-- Skills -->
  <div class="section-heading">Skills</div>
  <div class="skills">
    <div class="skill-row"><span class="skill-cat">Mobile</span><span class="skill-list">Kotlin · Jetpack Compose · Android SDK · MVVM · Dagger · Swift</span></div>
    <div class="skill-row"><span class="skill-cat">Testing</span><span class="skill-list">JUnit · MockK · Espresso · Automation Testing</span></div>
    <div class="skill-row"><span class="skill-cat">Observability</span><span class="skill-list">Firebase · Amplitude · DataDog · Optimizely</span></div>
    <div class="skill-row"><span class="skill-cat">CI / CD</span><span class="skill-list">Jenkins · Git · GitHub Actions</span></div>
    <div class="skill-row"><span class="skill-cat">AI Tooling</span><span class="skill-list">Claude · Cursor · Codex</span></div>
  </div>

  <div class="divider"></div>

  <!-- Education -->
  <div class="section-heading">Education</div>
  <div class="edu-row">
    <div>
      <div class="edu-school">California State University, Sacramento</div>
      <div class="edu-degree">B.S. Computer Science</div>
    </div>
    <span class="edu-year">2021</span>
  </div>

</div>
</body>
</html>`;
}

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
