import "@/styles/globals.css";
import Hero from "@/Components/Hero";
import MobileNav from "@/Components/MobileNav";
import Nav from "@/Components/Nav";
import About from "@/Components/About";
import React, { useEffect, useState } from "react";
import Skills from "@/Components/Skills";
import Projects from "@/Components/Projects";
import Contact from "@/Components/Contact";
import Footer from "@/Components/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import Experience from "@/Components/Experience";

const PaginaInicial = () => {
  const [nav, setNav] = useState(false);
  const openNav = () => setNav(true);
  const closeNav = () => setNav(false);

  // Animação
  useEffect(() => {
    AOS.init({
      disable: false,
      startEvent: "DOMContentLoaded",
      initClassName: "aos-init",
      animatedClassName: "aos-animate",
      useClassNames: false,
      disableMutationObserver: false,
      debounceDelay: 50,
      throttleDelay: 99,

      offset: 120,
      delay: 0,
      duration: 1000,
      easing: "ease",
      once: true,
      mirror: false,
      anchorPlacement: "top-bottom",
    });
  }, []);

  return (
    <div className="overflow-x-hidden">
      <div>
        {/* Navbar */}
        <MobileNav nav={nav} closeNav={closeNav} />
        <Nav openNav={openNav} />
        {/* intro */}
        <Hero />
      </div>
      {/* Sobre */}
      <div className="relative z-[30]">
        <About />

        {/* Skills */}
        <Skills />
        <Projects />
        <Experience />

        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default PaginaInicial;
