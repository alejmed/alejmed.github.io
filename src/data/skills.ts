export interface SkillGroup {
  category: string;
  skills: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    category: 'Mobile',
    skills: ['Kotlin', 'Jetpack Compose', 'Android SDK', 'MVVM', 'Dagger', 'Swift'],
  },
  {
    category: 'Testing',
    skills: ['JUnit', 'MockK', 'Espresso', 'Automation Testing'],
  },
  {
    category: 'Observability',
    skills: ['Firebase', 'Amplitude', 'DataDog', 'Optimizely'],
  },
  {
    category: 'CI / CD',
    skills: ['Jenkins', 'Git', 'GitHub Actions'],
  },
  {
    category: 'AI Tooling',
    skills: ['Claude', 'Cursor', 'Codex'],
  },
];
