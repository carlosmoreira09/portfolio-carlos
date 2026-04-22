'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { projects } from '../data/projects';

export default function FeaturedProjects() {
  const featured = projects.filter((p) => p.featured);

  return (
    <section className="relative w-full py-20 md:py-28">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-600 dark:text-blue-400">
            Flagship Work
          </span>
          <h2 className="mt-2 text-3xl font-bold md:text-4xl">
            Two products I built <span className="italic text-gray-400">from scratch</span>
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-gray-600 dark:text-gray-400">
            100% owned — product discovery, architecture, frontend, backend, DevOps and deployment.
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-2">
          {featured.map((project, idx) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.7, delay: idx * 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all hover:shadow-2xl dark:border-gray-800 dark:bg-gray-900"
            >
              <div
                className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${project.accentFrom} ${project.accentTo}`}
              />

              <div
                className={`relative flex h-52 items-center justify-center overflow-hidden bg-gradient-to-br ${project.accentFrom} ${project.accentTo}`}
              >
                <motion.div
                  className="absolute inset-0 opacity-20"
                  animate={{ backgroundPosition: ['0% 0%', '100% 100%'] }}
                  transition={{ duration: 20, repeat: Infinity, repeatType: 'reverse' }}
                  style={{
                    backgroundImage:
                      'radial-gradient(circle at 30% 30%, rgba(255,255,255,0.4), transparent 40%), radial-gradient(circle at 70% 70%, rgba(255,255,255,0.3), transparent 40%)',
                    backgroundSize: '200% 200%',
                  }}
                />
                {project.logo && (
                  <div className="relative z-10 flex h-full w-full items-center justify-center p-8">
                    <Image
                      src={project.logo}
                      alt={project.title}
                      width={280}
                      height={120}
                      className="max-h-24 w-auto object-contain drop-shadow-lg"
                    />
                  </div>
                )}
                {project.segment && (
                  <span className="absolute top-4 right-4 rounded-full bg-white/95 px-3 py-1 text-xs font-semibold text-gray-900 shadow">
                    {project.segment}
                  </span>
                )}
              </div>

              <div className="p-6 md:p-8">
                <div className="mb-2 flex items-center justify-between gap-4">
                  <h3 className="text-2xl font-bold">{project.title}</h3>
                  {project.demo && (
                    <Link
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-sm font-semibold text-blue-600 transition-colors hover:text-blue-500 dark:text-blue-400"
                    >
                      Live <ArrowUpRight className="h-4 w-4" />
                    </Link>
                  )}
                </div>
                {project.tagline && (
                  <p className="text-sm font-medium text-gray-500 dark:text-gray-400">{project.tagline}</p>
                )}
                <p className="mt-4 text-sm leading-relaxed text-gray-700 dark:text-gray-300">
                  {project.description}
                </p>

                {project.impact && project.impact.length > 0 && (
                  <ul className="mt-5 space-y-2">
                    {project.impact.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2 text-sm text-gray-700 dark:text-gray-300"
                      >
                        <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-emerald-500" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}

                <div className="mt-6 flex flex-wrap gap-1.5">
                  {project.technologies.map((t) => (
                    <span
                      key={t}
                      className="rounded-md bg-gray-100 px-2 py-1 text-xs font-medium text-gray-800 dark:bg-gray-800 dark:text-gray-200"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
