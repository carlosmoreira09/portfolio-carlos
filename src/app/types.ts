export interface ProjectType {
  id: string;
  title: string;
  tagline?: string;
  description: string;
  image?: string;
  logo?: string;
  technologies: string[];
  github?: string;
  demo?: string;
  featured?: boolean;
  segment?: string;
  impact?: string[];
  accentFrom?: string;
  accentTo?: string;
}

export interface ExperienceType {
  role: string;
  company: string;
  period: string;
  location: string;
  summary: string;
  highlights: string[];
  stack: string[];
}
