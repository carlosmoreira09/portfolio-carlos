'use client';

import { motion } from 'framer-motion';
import { Code2, Layers, Stethoscope, LineChart, Ship, Bike, ShoppingCart, Sparkles } from 'lucide-react';
import { skillsByCategory, segments, strengths, developing, codingStyle, codingPrinciples } from '../data/profile';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  layers: Layers,
  stethoscope: Stethoscope,
  chart: LineChart,
  rig: Ship,
  bike: Bike,
  cart: ShoppingCart,
};

export default function About() {
  return (
    <section id="about" className="w-full py-20 md:py-28">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 max-w-3xl"
        >
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-600 dark:text-blue-400">
            About Me
          </span>
          <h2 className="mt-2 text-3xl font-bold md:text-4xl">
            Engineer with an <span className="italic text-gray-400">operational backbone</span>
          </h2>
          <p className="mt-4 text-gray-600 dark:text-gray-400">
            I spent a decade leading high-risk offshore operations in ultra-deepwater before fully transitioning into
            software. That background shapes how I design systems today: reliability-first, failure-aware, and built around
            how the business actually operates — not how we&apos;d like it to.
          </p>
        </motion.div>

        {/* Strengths */}
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {strengths.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative overflow-hidden rounded-xl border border-gray-200 bg-white p-5 transition-all hover:-translate-y-1 hover:shadow-lg dark:border-gray-800 dark:bg-gray-900"
            >
              <div className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-blue-500 to-indigo-500 opacity-0 transition-opacity group-hover:opacity-100" />
              <Sparkles className="h-5 w-5 text-blue-500" />
              <h3 className="mt-3 font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">{s.body}</p>
            </motion.div>
          ))}
        </div>

        {/* Skills + Segments + Style */}
        <div className="mt-16 grid gap-12 lg:grid-cols-5">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            <h3 className="mb-5 text-xl font-bold">Core Skills</h3>
            <div className="space-y-4">
              {Object.entries(skillsByCategory).map(([cat, list]) => (
                <div key={cat} className="rounded-xl border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-900">
                  <div className="mb-2 text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400">
                    {cat}
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {list.map((s) => (
                      <span
                        key={s}
                        className="rounded-md bg-gray-100 px-2.5 py-1 text-xs font-medium text-gray-800 dark:bg-gray-800 dark:text-gray-200"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <h3 className="mt-10 mb-5 text-xl font-bold">Currently Leveling Up</h3>
            <ul className="grid gap-2 md:grid-cols-2">
              {developing.map((d) => (
                <li
                  key={d}
                  className="flex items-start gap-2 rounded-lg border border-dashed border-gray-300 bg-gray-50/60 p-3 text-sm dark:border-gray-700 dark:bg-gray-900/40"
                >
                  <Code2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-amber-500" />
                  <span className="text-gray-700 dark:text-gray-300">{d}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <h3 className="mb-5 text-xl font-bold">Industry Segments</h3>
            <div className="grid gap-3">
              {segments.map((s) => {
                const Icon = iconMap[s.icon] ?? Layers;
                return (
                  <div
                    key={s.name}
                    className="flex items-center justify-between rounded-lg border border-gray-200 bg-white p-3 dark:border-gray-800 dark:bg-gray-900"
                  >
                    <div className="flex items-center gap-3">
                      <div className="rounded-md bg-blue-50 p-2 text-blue-600 dark:bg-blue-500/10 dark:text-blue-400">
                        <Icon className="h-4 w-4" />
                      </div>
                      <span className="text-sm font-medium">{s.name}</span>
                    </div>
                    <span className="rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white">
                      {s.level}
                    </span>
                  </div>
                );
              })}
            </div>

            <h3 className="mt-10 mb-5 text-xl font-bold">Coding Style</h3>
            <div className="rounded-xl border border-gray-200 bg-gradient-to-br from-gray-50 to-white p-5 dark:border-gray-800 dark:from-gray-900 dark:to-gray-950">
              <ul className="space-y-2 text-sm">
                {codingStyle.map((c) => (
                  <li key={c} className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-500" />
                    <span className="text-gray-700 dark:text-gray-300">{c}</span>
                  </li>
                ))}
              </ul>
              <div className="my-4 h-px bg-gray-200 dark:bg-gray-800" />
              <div className="flex flex-wrap gap-1.5">
                {codingPrinciples.map((p) => (
                  <span
                    key={p}
                    className="rounded-full border border-gray-300 px-2.5 py-1 text-[11px] font-medium text-gray-700 dark:border-gray-700 dark:text-gray-300"
                  >
                    {p}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
