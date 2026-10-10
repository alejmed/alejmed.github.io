# alejmed.github.io

Personal portfolio site for Alejandro Medina, built with [Astro](https://astro.build) as a static site.

## Pages

Home, Projects, Experience, Skills, Education, Resume, Contact, and Built With. Page content lives in `src/data/` (`projects.ts`, `experience.ts`, `skills.ts`).

## Develop

```sh
npm install
npm run dev      # local dev server
npm run build    # static build to dist/
npm run check    # astro type check
npm run format   # prettier
```

`scripts/generate-pdf.mjs` renders the resume PDF (`public/resume.pdf`) with a local Chrome via puppeteer-core.

## Deploy

GitHub Actions workflows were removed (no paid Actions minutes), so the site is not auto-deployed. Build locally and publish `dist/` by hand when needed.
