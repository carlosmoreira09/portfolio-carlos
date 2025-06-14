import { ProjectType } from '../types';

export const projects: ProjectType[] = [
  {
    id: 'locmoto',
    title: 'LocMoto',
    description: 'An multi-tenancy motorcycle rental platform for vehicle management, booking system, inventory management, maintenance management, traffic fines management, financial management and client management',
    image: '/locmoto2.png',
    technologies: ['React', 'NestJS','TypeScript', 'NextJS', 'TailwindCSS', 'JWT', 'PostgreSQL', 'Node.js', 'Virtual Machine'],
    github: 'https://github.com/carlosmoreira09/frontend-locmoto',
    demo: 'https://www.locmoto.com.br'
  },
  {
    id: 'clintia',
    title: 'ClintIA',
    description: 'An multi-tenancy clinical management platform for clinical data analysis, booking system and patient management.',
    image: '/logoClintiaLogin.png',
    technologies: ['React', 'Express', 'TypeScript','PostgreSQL', 'Node.js', 'TailwindCSS', 'Amazon RDS', 'JWT'],
    github: 'https://github.com/ClintIA',
    demo: 'https://www.clintia.com.br',
  },
  {
    id: 'shopping-list',
    title: 'Shopping List',
    description: 'A shopping list application with real-time updates and collaborative features, allow manager handle with different supplier and create, edit and export the list, then you can feed the system with this list and generate another list with the best prices. ',
    image: '/logojr.jpeg',
    technologies: ['React', 'NodeJS', 'ExpressJS 5', 'MySQL', 'TailwindCSS', 'Virtual Machine'],
    github: 'https://github.com/carlosmoreira09?tab=repositories',
    demo: 'https://jrdrogaria.com.br',
  },
  {
    id: 'app-free',
    title: 'AppFree',
    description: 'A full responsive mobile application for assist users manage theirs money, creating a budget to spent per day and allow register theirs daily transactions and give the balance of the day.',
    image: '/iconmoney.png',
    technologies: ['React', 'ExpressJS','PostgreSQL', 'TypeScript', 'Node.js'],
    github: 'https://github.com/carlosmoreira09?tab=repositories',
    demo: 'https://www.freeapp.com.br'
  }
];
