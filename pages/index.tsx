import Hero from "@/Components/Hero";
import MobileNav from "@/Components/MobileNav";
import Nav from "@/Components/Nav";
import About from "@/Components/About";
import React, { useState } from "react";
import Skills from "@/Components/Skills";
import Projects from "@/Components/Projects";

const PaginaInicial = () => {
  const [nav, setNav] = useState(false);
  const openNav = () => setNav(true);
  const closeNav = () => setNav(false);

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
        <Skills/>
        <Projects/>
      </div>
    </div>
  );
};

export default PaginaInicial;
