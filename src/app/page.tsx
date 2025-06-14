import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import {Toaster} from "sonner";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-24 gap-16 sm:p-20 sm:pb-24 font-[family-name:var(--font-geist-sans)]">
      <Header />
      <main className="flex flex-col gap-[16px] row-start-2 items-center sm:items-start">
          <div>
              <Hero />
          </div>
          <div>
              <Projects />
          </div>
          <div>
              <About />
          </div>
          <div className="w-full flex justify-center">
              <Contact />
          </div>
      </main>
      <Toaster position='top-center'/>
      <Footer />
    </div>
  );
}
