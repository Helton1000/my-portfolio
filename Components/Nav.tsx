import { Bars3Icon } from "@heroicons/react/20/solid";
import React from "react";

interface Props {
  openNav: () => void;
}

const Nav = ({ openNav }: Props) => {
  return (
    <div className="w-[100%] fixed z-[10000] top-0 h-[12vh] bg-[#141c27] shadow-md">
      <div className="flex items-center justify-between w-[80%] mx-auto h-[100%]">
        <a className="flex-[0.6]" href="#home">
          <h1 className="text-[25px] text-white font-bold">
            WEB
            <span className="text-yellow-300">DEV</span>
          </h1>
        </a>
        <a href="#sobre" className="nav-link">SOBRE</a>
        <a href="#skills" className="nav-link">SKILLS</a>
        <a href="#projetos" className="nav-link">PROJETOS</a>
        <a href="#cursos" className="nav-link">CURSOS</a>
        <a href="#contato" className="nav-link">CONTATO</a>
        {/* Menu hamburguer */}
        <div onClick={openNav}>
          <Bars3Icon className="w-[2rem] md:hidden h-[2rem] cursor-pointer text-yellow-300" />
        </div>
      </div>
    </div>
  );
};

export default Nav;
