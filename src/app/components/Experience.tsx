'use client';

import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';
import { experiences } from '../data/experience';

export default function Experience() {
  return (
    <section id="experience" className="w-full bg-gray-50/60 py-20 md:py-28 dark:bg-gray-900/40">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-600 dark:text-blue-400">
            Experience
          </span>
          <h2 className="mt-2 text-3xl font-bold md:text-4xl">From offshore rigs to production code</h2>
        </motion.div>

        <div className="relative mx-auto max-w-4xl">
          <div className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-blue-500 via-indigo-500 to-amber-500 md:left-1/2" />

          {experiences.map((exp, idx) => {
            const isLeft = idx % 2 === 0;
            return (
              <motion.div
                key={`${exp.company}-${exp.period}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className={`relative mb-10 md:grid md:grid-cols-2 md:gap-10 ${isLeft ? '' : 'md:[&>*:first-child]:col-start-2'}`}
              >
                {/* dot */}
                <div className="absolute left-4 top-4 -ml-[9px] h-4 w-4 rounded-full border-4 border-white bg-gradient-to-br from-blue-500 to-indigo-600 shadow md:left-1/2" />

                <div className={`ml-12 md:ml-0 ${isLeft ? 'md:pr-10 md:text-right' : 'md:col-start-2 md:pl-10'}`}>
                  <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700 dark:bg-blue-500/10 dark:text-blue-300">
                    <Briefcase className="h-3 w-3" />
                    {exp.period}
                  </div>
                  <h3 className="mt-2 text-xl font-bold">{exp.role}</h3>
                  <p className="text-sm font-semibold text-gray-600 dark:text-gray-400">
                    {exp.company} · {exp.location}
                  </p>
                  <p className="mt-3 text-sm text-gray-600 dark:text-gray-400">{exp.summary}</p>

                  <ul className={`mt-4 space-y-1.5 text-sm ${isLeft ? 'md:text-right' : ''}`}>
                    {exp.highlights.map((h) => (
                      <li key={h} className="text-gray-700 dark:text-gray-300">
                        · {h}
                      </li>
                    ))}
                  </ul>

                  <div className={`mt-4 flex flex-wrap gap-1.5 ${isLeft ? 'md:justify-end' : ''}`}>
                    {exp.stack.map((s) => (
                      <span
                        key={s}
                        className="rounded-md bg-white px-2 py-0.5 text-[11px] font-medium text-gray-700 shadow-sm ring-1 ring-gray-200 dark:bg-gray-900 dark:text-gray-300 dark:ring-gray-800"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
