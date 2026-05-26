export interface SkillGroup {
  category: string;
  description: string;
  icon: string;
  skills: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    category: 'Mobile',
    description: 'My core platform, Android-first with solid iOS depth.',
    icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="2" width="14" height="20" rx="2"/><circle cx="12" cy="18" r="1" fill="currentColor" stroke="none"/></svg>`,
    skills: ['Kotlin', 'Jetpack Compose', 'Android SDK', 'MVVM', 'Dagger', 'Swift'],
  },
  {
    category: 'Testing',
    description: 'Unit, integration, and UI automation coverage.',
    icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/></svg>`,
    skills: ['JUnit', 'MockK', 'Espresso', 'Automation Testing'],
  },
  {
    category: 'Observability',
    description: 'Analytics, crash reporting, and A/B experimentation.',
    icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>`,
    skills: ['Firebase', 'Amplitude', 'DataDog', 'Optimizely'],
  },
  {
    category: 'CI / CD',
    description: 'Build pipelines, version control, and deployment.',
    icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><line x1="6" y1="3" x2="6" y2="15"/><circle cx="18" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><path d="M18 9a9 9 0 0 1-9 9"/></svg>`,
    skills: ['Jenkins', 'Git', 'GitHub Actions'],
  },
  {
    category: 'AI Tooling',
    description: 'AI-assisted development at the workflow level.',
    icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`,
    skills: ['Claude', 'Cursor', 'Codex'],
  },
];
