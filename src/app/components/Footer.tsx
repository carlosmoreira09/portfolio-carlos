import Link from 'next/link';
import { Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white py-8 dark:border-gray-800 dark:bg-gray-950">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-6 md:flex-row">
        <p className="text-sm text-gray-600 dark:text-gray-400">
          © {new Date().getFullYear()} Carlos Moreira. Built with Next.js, Tailwind &amp; Framer Motion.
        </p>
        <div className="flex items-center gap-4 text-gray-500">
          <Link
            href="https://github.com/carlosmoreira09"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="transition-colors hover:text-gray-900 dark:hover:text-white"
          >
            <Github className="h-5 w-5" />
          </Link>
          <Link
            href="https://linkedin.com/in/carlosmoreira09"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="transition-colors hover:text-gray-900 dark:hover:text-white"
          >
            <Linkedin className="h-5 w-5" />
          </Link>
          <Link
            href="mailto:cesmoreira90@hotmail.com"
            aria-label="Email"
            className="transition-colors hover:text-gray-900 dark:hover:text-white"
          >
            <Mail className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
