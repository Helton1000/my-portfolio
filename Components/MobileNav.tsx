import { XMarkIcon } from "@heroicons/react/20/solid";
import React from "react";

interface Props {
  nav: boolean;
  closeNav: () => void;
}

const MobileNav = ({ nav, closeNav }: Props) => {
  const navAnimation = nav ? "translate-x-0" : "translate-x-[-100%]";

  const handleNavLinkClick = () => {
    closeNav(); // Fecha o MobileNav quando um item de navegação é clicado
  };

  return (
    <div
      className={`fixed ${navAnimation} transform transition-all duration-300 top-0 left-0 right-0 bottom-0 z-[1000000] bg-[#09101a]`}
    >
      <div className="w-[100vw] h-[100vh] flex flex-col items-center justify-center">
        <a href="#home" className="nav-link-mobile" onClick={handleNavLinkClick}>HOME</a>
        <a href="#sobre" className="nav-link-mobile" onClick={handleNavLinkClick}>SOBRE</a>
        <a href="#skills" className="nav-link-mobile" onClick={handleNavLinkClick}>SKILLS</a>
        <a href="#projetos" className="nav-link-mobile" onClick={handleNavLinkClick}>PROJETOS</a>
        <a href="#cursos" className="nav-link-mobile" onClick={handleNavLinkClick}>CURSOS</a>
        <a href="#contato" className="nav-link-mobile" onClick={handleNavLinkClick}>CONTACT</a>
      </div>
      {/* Botao de fechar nav */}
      <div
        onClick={closeNav}
        className="absolute z-[100000000] cursor-pointer top-[2rem] right-[2rem] w-[2rem] h-[2rem] text-yellow-400"
      >
        <XMarkIcon />
      </div>
    </div>
  );
};

export default MobileNav;
