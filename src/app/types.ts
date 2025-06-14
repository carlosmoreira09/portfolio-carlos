export interface ProjectType {
  id: string;
  title: string;
  description: string;
  image?: string;
  technologies: string[];
  github?: string;
  demo?: string;
  featured?: boolean;
}
