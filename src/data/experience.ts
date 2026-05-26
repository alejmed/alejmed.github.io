export interface CompanyLink {
  label: string;
  url: string;
}

export interface Role {
  title: string;
  period: string;
  bullets: string[];
}

export interface Job {
  company: string;
  location: string;
  logo: string;
  descriptor: string;
  tags: string[];
  link: CompanyLink;
  roles: Role[];
}

export const jobs: Job[] = [
  {
    company: 'EarnIn',
    location: 'Palo Alto, CA · Remote',
    logo: 'https://logo.clearbit.com/earnin.com',
    descriptor: 'Fintech · Earned Wage Access',
    tags: ['Android', 'iOS', 'Kotlin', 'Swift', 'Jetpack Compose'],
    link: {
      label: 'earnin.com',
      url: 'https://www.earnin.com',
    },
    roles: [
      {
        title: 'Senior Software Engineer',
        period: 'Aug 2022 – Present',
        bullets: [
          '<strong>EarnIn Card:</strong> Led 7-engineer cross-platform team (3 Android, 4 iOS) to launch and GA, driving 600K+ waitlist signups and 1M+ Live Pay transactions post-launch.',
          "<strong>Account Activity:</strong> Full Android ownership of EarnIn's ledger-based transaction system — BE/FE contracts, engineering design, Jetpack Compose UI, and product/design iteration.",
          '<strong>Cross-Team Alignment:</strong> Defined scope, timelines, and stakeholder alignment across multiple product initiatives; drove API contract definition across product, design, and backend teams.',
          "<strong>AI Mobile Lead:</strong> Architected EarnIn's AI-assisted mobile development workflow — memory management, custom local CI tooling, emulator/simulator automation, and iOS/Android best practices. Adopted team-wide.",
        ],
      },
    ],
  },
  {
    company: 'eBay',
    location: 'San Jose, CA',
    logo: 'https://logo.clearbit.com/ebay.com',
    descriptor: 'E-Commerce · Buyer Experience',
    tags: ['Java', 'Spring Boot', 'Jenkins', 'Grafana'],
    link: { label: 'ebay.com', url: 'https://www.ebay.com' },
    roles: [
      {
        title: 'Software Developer',
        period: 'Sep 2021 – Aug 2022',
        bullets: [
          'Identified and resolved backend bugs across high-traffic Buyer Experience purchase flows.',
          'Assisted migration of legacy Spring services to Spring Boot, modernizing backend architecture.',
          'Updated and validated Jenkins CI/CD job configurations to ensure correct pipeline behavior post-migration.',
          'Monitored Grafana dashboards during rollouts to verify metrics aligned with expected baselines.',
        ],
      },
    ],
  },
];
