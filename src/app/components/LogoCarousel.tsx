'use client';

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, FreeMode } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';

const logos = [
  { src: '/images/projects/marina-logo.png', alt: 'Marina Planner' },
  { src: '/images/projects/clinical-logo.png', alt: 'Clinical SaaS' },
  { src: '/images/projects/locmoto-logo-full.png', alt: 'LocMoto' },
  { src: '/images/projects/clintia-logo.png', alt: 'ClintIA' },
  { src: '/images/projects/cotaradar-logo.png', alt: 'CotaRadar' },
  { src: '/images/projects/shopping-logo.png', alt: 'Shopping List' },
  { src: '/images/projects/appfree-icon.png', alt: 'AppFree' },
  { src: '/images/projects/bodyfitness-logo.svg', alt: 'BodyFitness' },
  { src: '/images/projects/barbara-logo.png', alt: 'Barbara Reis Psi' },
];

export default function LogoCarousel() {
  return (
    <section className="w-full py-12 md:py-16">
      <div className="container mx-auto px-6">
        <div className="mb-8 text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-gray-500 dark:text-gray-400">
            Shipped Products
          </span>
          <h2 className="mt-2 text-2xl font-bold md:text-3xl">
            Real projects. <span className="text-gray-400">Real users.</span>
          </h2>
        </div>

        <div className="relative overflow-hidden">
          {/* edge fade masks */}
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-white to-transparent dark:from-gray-950 sm:w-24" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-white to-transparent dark:from-gray-950 sm:w-24" />

          <Swiper
            modules={[Autoplay, FreeMode]}
            slidesPerView={2}
            spaceBetween={32}
            loop
            freeMode
            speed={4000}
            autoplay={{ delay: 0, disableOnInteraction: false, pauseOnMouseEnter: true }}
            allowTouchMove
            breakpoints={{
              640: { slidesPerView: 3, spaceBetween: 40 },
              768: { slidesPerView: 4, spaceBetween: 48 },
              1024: { slidesPerView: 5, spaceBetween: 56 },
              1280: { slidesPerView: 6, spaceBetween: 64 },
            }}
            className="!overflow-visible"
          >
            {[...logos, ...logos].map((logo, i) => (
              <SwiperSlide key={i} className="!flex !items-center !justify-center">
                <div className="group relative flex h-20 w-full items-center justify-center rounded-xl border border-gray-200/70 bg-white/60 px-6 backdrop-blur transition-all hover:scale-105 hover:border-blue-400 hover:shadow-lg dark:border-gray-800 dark:bg-gray-900/40 dark:hover:border-blue-500/60">
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={140}
                    height={56}
                    className="max-h-12 w-auto object-contain opacity-70 grayscale transition-all duration-300 group-hover:opacity-100 group-hover:grayscale-0"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
