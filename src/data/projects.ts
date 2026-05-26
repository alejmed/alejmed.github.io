export interface Project {
  id: string;
  name: string;
  role: string;
  company: string;
  tags: string[];
  description: string;
  highlights: string[];
  screenshots: string[];
  repoUrl?: string;
}

export const projects: Project[] = [
  {
    id: 'ai-workflow',
    name: 'AI Mobile Development Workflow',
    role: 'Architect',
    company: 'EarnIn',
    tags: ['Internal Tooling', 'Android', 'iOS', 'AI'],
    description:
      "Pioneered and architected EarnIn's AI-assisted mobile development workflow, covering context management, custom local CI tooling, emulator and simulator automation, and platform-specific best practices for both Android and iOS. Adopted team-wide as the foundation for how the mobile org writes code.",
    highlights: ['Team-wide adoption', 'Local CI tooling', 'Memory management system'],
    screenshots: [],  // internal tool — terminal mockup used instead
  },
  {
    id: 'earnin-card',
    name: 'EarnIn Card',
    role: 'Cross-Platform Mobile Lead',
    company: 'EarnIn',
    tags: ['Android', 'iOS', 'Kotlin', 'Swift'],
    description:
      'Led a 7-engineer cross-platform team (3 Android, 4 iOS) to design, build, and launch the EarnIn Card. Drove scope definition, timelines, and stakeholder alignment from inception through GA, resulting in 600K+ waitlist signups and 1M+ Live Pay transactions post-launch.',
    highlights: ['600K+ waitlist signups', '1M+ Live Pay transactions', '7-engineer team'],
    // Drop screenshots into public/screenshots/earnin-card/ named 01.png, 02.png, etc.
    screenshots: [],
  },
  {
    id: 'account-activity',
    name: 'Account Activity',
    role: 'Android Owner',
    company: 'EarnIn',
    tags: ['Android', 'Kotlin', 'Jetpack Compose'],
    description:
      "Took full Android ownership of EarnIn's ledger-based transaction history system. Defined BE/FE API contracts, authored the engineering design document, built the Jetpack Compose UI, and iterated with product and design through launch.",
    highlights: ['Full-stack ownership', 'Jetpack Compose UI', 'API contract definition'],
    // Drop screenshots into public/screenshots/account-activity/ named 01.png, 02.png, etc.
    screenshots: [],
  },
  {
    id: 'this-portfolio',
    name: 'This Portfolio',
    role: 'Designer & Engineer',
    company: 'Personal',
    tags: ['Astro', 'TypeScript', 'CSS', 'GitHub Actions', 'GitHub Pages'],
    description:
      'Designed and engineered from scratch — not just prompted. Built on Astro with a hand-written CSS design system using custom properties for theming, TypeScript for the typed data layer, and GitHub Actions for CI/CD. Specific decisions throughout: WCAG AA contrast ratios, OS-synced dark mode via matchMedia, blur fade-in animations that respect prefers-reduced-motion, scale-on-press button feedback, and concentric border radii. The commit history is public.',
    highlights: ['WCAG AA accessible', 'Custom CSS design system', 'GitHub Actions CI/CD'],
    screenshots: [],
    repoUrl: 'https://github.com/alejmed/alejmed.github.io',
  },
];
