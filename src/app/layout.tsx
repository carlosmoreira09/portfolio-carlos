import './globals.css';
import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Carlos Moreira | Software Engineer — SaaS & Industrial Systems',
  description:
    'Software Engineer with 5+ years building scalable SaaS platforms and 15+ years in offshore oil & gas operations. Specialized in multi-tenant architectures, real-time systems and full-stack delivery.',
  icons: { icon: 'favicon.ico' },
  keywords: [
    'Carlos Moreira',
    'Software Engineer',
    'Full Stack Developer',
    'NestJS',
    'Next.js',
    'PostgreSQL',
    'SaaS',
    'Multi-tenant',
    'Offshore Software',
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen bg-white text-gray-900 antialiased dark:bg-gray-950 dark:text-gray-100">
        {children}
      </body>
    </html>
  );
}
