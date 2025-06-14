import { ProjectType } from '../types';

export const projects: ProjectType[] = [
  {
    id: 'locmoto',
    title: 'LocMoto',
    description: 'An multi-tenancy motorcycle rental platform for vehicle management, booking system, inventory management, maintenance management, traffic fines management, financial management and client management',
    image: '/locmoto2.png',
    technologies: ['React', 'TypeScript', 'NextJS', 'TailwindCSS', 'JWT', 'PostgreSQL', 'Node.js', 'Virtual Machine'],
    github: 'https://github.com/carlosmoreira09/frontend-locmoto',
  },
  {
    id: 'clintia',
    title: 'ClintIA',
    description: 'An multi-tenancy clinical management platform for clinical data analysis and patient management.',
    image: '/logoClintiaLogin.png',
    technologies: ['React', 'TypeScript','PostgreSQL', 'Node.js', 'TailwindCSS', 'Amazon RDS', 'JWT'],
    github: 'https://github.com/ClintIA',
    demo: 'https://www.clintia.com.br',
  },
  {
    id: 'shopping-list',
    title: 'Shopping List',
    description: 'A shopping list application with real-time updates and collaborative features, allow manager handle with different supplier and create, edit and export the list, then you can feed the system with this list and generate another list with the best prices. ',
    image: '/logojr.jpeg',
    technologies: ['React', 'MySQL', 'TailwindCSS', 'Virtual Machine'],
    github: 'https://github.com/carlosmoreira09?tab=repositories',
    demo: 'https://jrdrogaria.com.br',
  },
  {
    id: 'app-free',
    title: 'AppFree',
    description: 'A mobile application for finding free and discounted services in your area.',
    image: '/iconmoney.png',
    technologies: ['React', 'PostgreSQL', 'TypeScript', 'Node.js'],
    github: 'https://github.com/carlosmoreira09?tab=repositories',
    demo: 'www.freeapp.com.br'
  },
  {
    id: 'web-training',
    title: 'Web Training',
    description: 'A platform for personal training generate training sheet to your athlete. It provides an intuitive interface to manage exercises, allow upload videos to each exercise. With it, users can structure their workouts according to their personal.',
    image: '/webtraining.png',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Node.js'],
    github: 'https://github.com/carlosmoreira09?tab=repositories',
  },
];
