import { ExperienceType } from '../types';

export const experiences: ExperienceType[] = [
  {
    role: 'Full Stack Engineer — Senior',
    company: 'HESEA Technology',
    period: '2024 — Present',
    location: 'Remote',
    summary:
      'Leading design and delivery of multi-tenant SaaS platforms end-to-end, from architecture to production.',
    highlights: [
      'Multi-tenant SaaS with NestJS + Next.js + PostgreSQL',
      'Scalable APIs and modular frontend architectures',
      'CI/CD pipelines on VPS with reverse proxy and security hardening',
    ],
    stack: ['NestJS', 'Next.js', 'PostgreSQL', 'TypeORM', 'Docker', 'GitHub Actions'],
  },
  {
    role: 'Full Stack Engineer — Mid-level',
    company: 'Santander (F1RST Digital)',
    period: '2022 — 2024',
    location: 'Brazil',
    summary:
      'Built integration APIs and observability tooling for enterprise-scale banking infrastructure.',
    highlights: [
      'Observability across 5,000+ servers (Dynatrace, Zabbix, ServiceNow)',
      'Integration APIs with Java 11 + Node.js and AngularJS front-ends',
      'Automation dashboards reducing operational overhead',
    ],
    stack: ['Java 11', 'Node.js', 'AngularJS', 'Dynatrace', 'Zabbix'],
  },
  {
    role: 'Backend / Full Stack Developer',
    company: 'HESEA',
    period: '2020 — 2022',
    location: 'Remote',
    summary:
      'Built and refactored legacy systems while delivering production features across multiple SaaS products.',
    highlights: [
      'Scalable APIs and legacy refactors (PHP, WordPress, JavaScript)',
      'Performance and reliability improvements',
      'Production features for multiple SaaS platforms',
    ],
    stack: ['PHP', 'WordPress', 'JavaScript', 'MySQL'],
  },
  {
    role: 'Cementing Supervisor / Offshore Engineer',
    company: 'Schlumberger',
    period: '2011 — 2020',
    location: 'Africa · South America · Europe',
    summary:
      'A decade leading high-risk ultra-deepwater operations — the operational backbone behind how I build industrial software today.',
    highlights: [
      'Mission-critical equipment and real-time decision making under pressure',
      'Coordinated multidisciplinary teams and client operations worldwide',
      'Deep expertise in operational workflows, maintenance and field logistics',
    ],
    stack: ['Offshore Ops', 'Real-Time Systems', 'Field Logistics', 'Safety Critical'],
  },
];
