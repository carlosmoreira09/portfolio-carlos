export const skillsByCategory = {
  Backend: ['Node.js', 'NestJS (Fastify)', 'Express', 'REST APIs', 'WebSockets', 'JWT', 'TypeORM'],
  Frontend: ['React', 'Next.js', 'TypeScript', 'TailwindCSS', 'Framer Motion', 'AngularJS'],
  Database: ['PostgreSQL (multi-tenant)', 'MySQL', 'Amazon RDS'],
  DevOps: ['VPS', 'GitHub Actions', 'PM2', 'Docker', 'Reverse Proxy', 'Security Hardening'],
  Observability: ['Zabbix', 'Dynatrace', 'Sentry', 'ServiceNow'],
};

export const segments = [
  { name: 'SaaS Multi-tenant', level: 'Deep', icon: 'layers' },
  { name: 'HealthTech', level: 'Strong', icon: 'stethoscope' },
  { name: 'FinTech / Wealth', level: 'Strong', icon: 'chart' },
  { name: 'Industrial & Offshore', level: 'Native', icon: 'rig' },
  { name: 'Mobility / Rental ERP', level: 'Shipped', icon: 'bike' },
  { name: 'Retail & Procurement', level: 'Shipped', icon: 'cart' },
];

export const strengths = [
  {
    title: 'End-to-End Delivery',
    body: 'From discovery and architecture to deployment on VPS with CI/CD. I build the whole stack, not just parts of it.',
  },
  {
    title: 'Multi-tenant Systems',
    body: 'Data isolation, role-based access, per-tenant configuration — core to every SaaS I ship.',
  },
  {
    title: 'Translating Operations into Software',
    body: '15+ years in offshore oil & gas give me an unusual edge: I model software around how the work actually happens in the field.',
  },
  {
    title: 'Pragmatic Architecture',
    body: 'Modular, boring where it should be boring. I favor readable code and production-ready patterns over clever abstractions.',
  },
];

export const developing = [
  'Advanced Kubernetes & cloud-native patterns (EKS / GKE)',
  'Event-driven architectures (Kafka, RabbitMQ)',
  'AI/LLM integration into SaaS workflows',
  'Observability at scale (OpenTelemetry)',
];

export const codingStyle = [
  'TypeScript-first, strict mode everywhere',
  'Prefer composition over inheritance',
  'Small, reviewable PRs over big-bang merges',
  'Write code that reads like the business domain',
  'Production mindset: logging, error boundaries, migrations from day one',
];

export const codingPrinciples = [
  'Fix root causes, not symptoms',
  'Design for failure — offshore taught me that',
  'Boring tech until you need sharp tools',
  'Ship, measure, then iterate',
];
