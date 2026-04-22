import Image from 'next/image';
import Link from 'next/link';
import { Github, ArrowUpRight } from 'lucide-react';
import { ProjectType } from '../types';

interface ProjectCardProps {
  project: ProjectType;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const cover = project.logo ?? project.image;
  return (
    <div className="group flex h-full flex-col overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl dark:border-gray-800 dark:bg-gray-900">
      <div
        className={`relative flex h-44 items-center justify-center overflow-hidden bg-gradient-to-br ${
          project.accentFrom ?? 'from-slate-400'
        } ${project.accentTo ?? 'to-slate-600'}`}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.35),transparent_50%)]" />
        {cover && (
          <Image
            src={cover}
            alt={project.title}
            width={200}
            height={80}
            className="relative z-10 max-h-20 w-auto object-contain drop-shadow-md transition-transform duration-500 group-hover:scale-110"
          />
        )}
        {project.segment && (
          <span className="absolute top-3 right-3 rounded-full bg-white/95 px-2.5 py-0.5 text-[11px] font-semibold text-gray-900 shadow">
            {project.segment}
          </span>
        )}
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-lg font-bold">{project.title}</h3>
        {project.tagline && (
          <p className="mt-0.5 text-xs font-medium text-gray-500 dark:text-gray-400">{project.tagline}</p>
        )}
        <p className="mt-3 flex-1 text-sm text-gray-600 dark:text-gray-400">{project.description}</p>
        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.technologies.slice(0, 6).map((tech) => (
            <span
              key={tech}
              className="rounded-md bg-gray-100 px-2 py-0.5 text-[11px] font-medium text-gray-800 dark:bg-gray-800 dark:text-gray-200"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="mt-5 flex gap-2">
          {project.github && (
            <Link
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-md border border-gray-300 px-3 py-1.5 text-xs font-semibold transition-colors hover:bg-gray-100 dark:border-gray-700 dark:hover:bg-gray-800"
            >
              <Github className="h-3.5 w-3.5" />
              Code
            </Link>
          )}
          {project.demo && (
            <Link
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-md bg-blue-600 px-3 py-1.5 text-xs font-semibold text-white transition-colors hover:bg-blue-500"
            >
              Live
              <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
