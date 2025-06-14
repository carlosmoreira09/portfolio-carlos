import Image from 'next/image';

export default function About() {
  const skills = [
    'JavaScript',
    'TypeScript',
    'React',
    'Next.js',
    'Node.js',
    'Express',
    'MongoDB',
    'PostgreSQL',
    'TailwindCSS',
    'Git',
    'Docker',
    'AWS',
  ];

  return (
    <section id="about" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 md:pr-12 mb-8 md:mb-0">
            <div className="relative h-64 w-full md:h-96 rounded-lg overflow-hidden">
              <Image
                src="/images/about.jpg"
                alt="About Carlos Moreira"
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">About Me</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
              I'm a passionate Full Stack Developer with expertise in building modern web applications.
              With several years of experience in the industry, I've worked on a variety of projects
              ranging from small business websites to complex enterprise applications.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
              I enjoy solving complex problems and creating intuitive, efficient solutions.
              My goal is to build applications that not only meet business requirements but also
              provide an excellent user experience.
            </p>
            <div>
              <h3 className="text-xl font-semibold mb-4">Skills & Technologies</h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
