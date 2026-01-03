/**
 * @copyright 2025 ekeneakabogu
*/ 

/**
 * Node Modules
*/
import { useEffect, useState } from "react";
import Lenis from "lenis";
import { AnimatePresence } from "motion/react";

/**
 * Components
 */
import { Cover } from "@/components/Cover";
import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { Resume } from "@/components/Resume";
import { Contact } from "@/components/Contact";

export const App = () => {
  const [showCover, setShowCover] = useState(true);

  useEffect(() => {
    const lenis = new Lenis();
    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);
  }, []);

  return (
    <>
      {/* COVER PAGE */}
      <AnimatePresence>
        {showCover && (
          <Cover onFinish={() => setTimeout(() => setShowCover(false), 500)} />
        )}
      </AnimatePresence>

      {/* MAIN CONTENT */}
      {!showCover && (
        <main className="flex flex-col container mx-auto p-10 max-w-4xl
        lg:pr-36 lg:pl-0 lg:max-w-6xl">
          <Hero />
          <About />
          <Projects />
          <Services />
          <Resume />
          <Contact />
        </main>
      )}
    </>
  );
};
