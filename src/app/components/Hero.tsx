'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion, type Variants } from 'framer-motion';
import { ArrowRight, Download, Mail, MapPin, Sparkles } from 'lucide-react';

const stats = [
  { label: 'Years in Software', value: '5+' },
  { label: 'Years Offshore', value: '15+' },
  { label: 'SaaS Shipped', value: '7+' },
  { label: 'Servers Monitored', value: '5k+' },
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: 0.1 * i, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

export default function Hero() {
  return (
    <section id="hero" className="relative w-full overflow-hidden pt-28 pb-24 md:pt-36 md:pb-32">
      {/* animated gradient blobs */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <motion.div
          className="absolute -top-32 -left-24 h-[28rem] w-[28rem] rounded-full bg-gradient-to-br from-blue-500/30 via-indigo-500/20 to-transparent blur-3xl"
          animate={{ y: [0, 40, 0], x: [0, 30, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute -bottom-40 -right-24 h-[32rem] w-[32rem] rounded-full bg-gradient-to-tr from-amber-400/25 via-orange-500/15 to-transparent blur-3xl"
          animate={{ y: [0, -30, 0], x: [0, -20, 0] }}
          transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.08),transparent_60%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(100,116,139,0.07)_1px,transparent_1px),linear-gradient(to_bottom,rgba(100,116,139,0.07)_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_80%)]" />
      </div>

      <div className="container mx-auto px-6">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div>
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={0}
              className="inline-flex items-center gap-2 rounded-full border border-blue-200/60 bg-blue-50/80 px-3 py-1 text-xs font-medium text-blue-700 shadow-sm backdrop-blur dark:border-blue-500/30 dark:bg-blue-500/10 dark:text-blue-300"
            >
              <Sparkles className="h-3.5 w-3.5" />
              Open to relocate · GMT+3
            </motion.div>

            <motion.h1
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={1}
              className="mt-5 text-4xl font-bold leading-tight tracking-tight md:text-5xl lg:text-6xl"
            >
              Hi, I&apos;m{' '}
              <span className="bg-gradient-to-r from-blue-600 via-indigo-500 to-amber-500 bg-clip-text text-transparent">
                Carlos Moreira
              </span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={2}
              className="mt-5 text-base text-gray-700 dark:text-gray-300 md:text-lg"
            >
              <span className="font-semibold text-gray-900 dark:text-gray-100">Software Engineer</span> building
              scalable SaaS platforms and real-time systems. 5+ years in software,{' '}
              <span className="font-semibold text-gray-900 dark:text-gray-100">15+ years in offshore oil &amp; gas</span>
              {' '}— I translate complex field operations into reliable, production-ready software.
            </motion.p>

            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={3}
              className="mt-3 text-sm text-gray-600 dark:text-gray-400 md:text-base"
            >
              Multi-tenant architectures · NestJS + Next.js + PostgreSQL · End-to-end delivery from architecture to VPS.
            </motion.p>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={4}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <Link
                href="#projects"
                className="group inline-flex items-center gap-2 rounded-md bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition-all hover:shadow-blue-600/40 hover:-translate-y-0.5"
              >
                View Projects
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="#contact"
                className="inline-flex items-center gap-2 rounded-md border border-gray-300 bg-white/60 px-6 py-3 text-sm font-semibold text-gray-900 backdrop-blur transition-colors hover:bg-white dark:border-gray-700 dark:bg-gray-900/40 dark:text-gray-100 dark:hover:bg-gray-900"
              >
                <Mail className="h-4 w-4" />
                Contact Me
              </Link>
              <a
                href="mailto:cesmoreira90@hotmail.com"
                className="inline-flex items-center gap-2 rounded-md px-3 py-3 text-sm font-medium text-gray-500 transition-colors hover:text-gray-900 dark:hover:text-white"
              >
                <Download className="h-4 w-4" />
                Request CV
              </a>
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={5}
              className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4"
            >
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="rounded-lg border border-gray-200/70 bg-white/60 p-3 backdrop-blur dark:border-gray-800 dark:bg-gray-900/40"
                >
                  <div className="text-xl font-bold text-gray-900 dark:text-white md:text-2xl">{s.value}</div>
                  <div className="text-[11px] uppercase tracking-wider text-gray-500 dark:text-gray-400">
                    {s.label}
                  </div>
                </div>
              ))}
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={6}
              className="mt-6 flex items-center gap-4 text-xs text-gray-500 dark:text-gray-400"
            >
              <span className="inline-flex items-center gap-1.5">
                <MapPin className="h-3.5 w-3.5" />
                Brazil · Remote-first
              </span>
              <span className="inline-flex items-center gap-1.5">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                </span>
                Available for new projects
              </span>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative mx-auto aspect-square w-full max-w-md"
          >
            <motion.div
              className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500 via-indigo-500 to-amber-500 opacity-30 blur-2xl"
              animate={{ scale: [1, 1.08, 1], rotate: [0, 30, 0] }}
              transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
            />
            <div className="absolute inset-6 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 p-[2px]">
              <div className="h-full w-full rounded-full bg-white dark:bg-gray-950">
                <Image
                  src="/images/projects/PlaygroundImage.jpg"
                  alt="Carlos Moreira"
                  fill
                  className="rounded-full object-cover p-3"
                />
              </div>
            </div>

            {/* orbiting badges */}
            <motion.div
              className="absolute -top-2 right-6 rounded-full border border-gray-200 bg-white px-3 py-1 text-xs font-semibold shadow-md dark:border-gray-800 dark:bg-gray-900"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            >
              ⚡ NestJS · Next.js
            </motion.div>
            <motion.div
              className="absolute bottom-4 -left-2 rounded-full border border-gray-200 bg-white px-3 py-1 text-xs font-semibold shadow-md dark:border-gray-800 dark:bg-gray-900"
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            >
              🛢️ 15y Offshore → Code
            </motion.div>
            <motion.div
              className="absolute -bottom-2 right-10 rounded-full border border-gray-200 bg-white px-3 py-1 text-xs font-semibold shadow-md dark:border-gray-800 dark:bg-gray-900"
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
            >
              🔐 Multi-tenant SaaS
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
