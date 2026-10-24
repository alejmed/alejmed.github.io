import { readFileSync } from 'fs';

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

const TEMPLATE_URL = new URL('./resume-template.html', import.meta.url);

// The resume page Chrome prints to PDF: resume-template.html with the theme's colors filled in.
export function buildHTML(mode) {
  const theme = THEMES[mode];
  const template = readFileSync(TEMPLATE_URL, 'utf8').replace(/\n$/, '');
  return template.replace(/\{\{(\w+)\}\}/g, (_, colorName) => theme[colorName]);
}
