import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 md:pr-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Hi, I'm <span className="text-blue-600">Carlos Moreira</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-8">
              Full Stack Developer specializing in modern web applications
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="#projects"
                className="inline-flex items-center justify-center rounded-md bg-blue-600 px-6 py-3 text-base font-medium text-white transition-colors hover:bg-blue-500"
              >
                View Projects
              </Link>
              <Link
                href="#contact"
                className="inline-flex items-center justify-center rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 px-6 py-3 text-base font-medium text-gray-900 dark:text-gray-100 transition-colors hover:bg-gray-50 dark:hover:bg-gray-800"
              >
                Contact Me
              </Link>
            </div>
          </div>
          <div className="md:w-1/2 mt-12 md:mt-0">
            <div className="relative h-64 w-64 md:h-80 md:w-80 mx-auto">
              <div className="absolute inset-0 rounded-full bg-blue-100 dark:bg-blue-900/20"></div>
              <Image
                src="/images/profile.jpg"
                alt="Carlos Moreira"
                fill
                className="rounded-full object-cover p-2"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
