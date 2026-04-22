import { Toaster } from 'sonner';
import Header from './components/Header';
import Hero from './components/Hero';
import LogoCarousel from './components/LogoCarousel';
import FeaturedProjects from './components/FeaturedProjects';
import Projects from './components/Projects';
import Experience from './components/Experience';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <LogoCarousel />
        <FeaturedProjects />
        <Projects />
        <Experience />
        <About />
        <Contact />
      </main>
      <Toaster position="top-center" />
      <Footer />
    </div>
  );
}
