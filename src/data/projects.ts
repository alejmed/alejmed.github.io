export interface Project {
  id: string;
  name: string;
  role: string;
  company: string;
  tags: string[];
  description: string;
  highlights: string[];
}

export const projects: Project[] = [
  {
    id: 'ai-workflow',
    name: 'AI Mobile Development Workflow',
    role: 'Architect',
    company: 'EarnIn',
    tags: ['Internal Tooling', 'Android', 'iOS', 'AI'],
    description:
      "Pioneered and architected EarnIn's AI-assisted mobile development workflow — covering context management, custom local CI tooling, emulator and simulator automation, and platform-specific best practices for both Android and iOS. Adopted team-wide as the foundation for how the mobile org writes code.",
    highlights: ['Team-wide adoption', 'Local CI tooling', 'Memory management system'],
  },
  {
    id: 'earnin-card',
    name: 'EarnIn Card',
    role: 'Cross-Platform Mobile Lead',
    company: 'EarnIn',
    tags: ['Android', 'iOS', 'Kotlin', 'Swift'],
    description:
      'Led a 7-engineer cross-platform team (3 Android, 4 iOS) to design, build, and launch the EarnIn Card. Drove scope definition, timelines, and stakeholder alignment from inception through GA — resulting in 600K+ waitlist signups and 1M+ Live Pay transactions post-launch.',
    highlights: ['600K+ waitlist signups', '1M+ Live Pay transactions', '7-engineer team'],
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
  },
];
