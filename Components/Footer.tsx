import { EnvelopeIcon, MapIcon, PhoneIcon } from "@heroicons/react/20/solid";
import React from "react";

const Footer = () => {
  return (
    <div className="pt-[5rem] pb-[3rem] bg-black">
      <div className="w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[2rem] border-b-[1.4px] pb-5 border-gray-600 border-opacity-40">
        <div className="text-white text-[18px]">
          <h1 className="text-[30px] text-white font-bold">
            Helton
            <span className="text-yellow-400"> Barbosa</span>
          </h1>

          <p className="text-[14px] mt-[0.5rem] text-white opacity-70">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur
            fugiat numquam consectetur vero. Eius velit ipsa nemo! Reprehenderit
            modi sapiente provident, corporis, ipsum cumque debitis quas, nam
            repellat quidem alias.
          </p>

          <p className="mt-[1.3rem] text-yellow-300 underline font-semibold">
            helton1000xd8@gmail.com
          </p>
        </div>
        <div className="md:mx-auto">
          <h1 className="text-white font-semibold mb-[1.4rem] text-[17px]">
            Link Rápido
          </h1>
          <a
            href="#sobre"
            className="block text-white text-opacity-80 mb-4 cursor-pointer hover:text-yellow-300 uppercase underline"
          >
            Sobre
          </a>
          <a
            href="#skills"
            className="block text-white text-opacity-80 mb-4 cursor-pointer hover:text-yellow-300 uppercase underline"
          >
            skills
          </a>
          <a
            href="#projetos"
            className="block text-white text-opacity-80 mb-4 cursor-pointer hover:text-yellow-300 uppercase underline"
          >
            projetos
          </a>
          <a
            href="#cursos"
            className="block text-white text-opacity-80 mb-4 cursor-pointer hover:text-yellow-300 uppercase underline"
          >
            cursos
          </a>
        </div>
        <div className="lg:mx-auto">
          <h1 className="text-white font-semibold mb-[1.4rem] text-[17px]">
            Endereço
          </h1>
          <div className="flex items-center mt-[1rem] space-x-2">
            <MapIcon className="w-[1rem] h-[1rem] text-yellow-300" />
            <p className="text-[17px] font-normal text-white opacity-75">
              Manaus, Amazonas
            </p>
          </div>
          <div className="flex items-center mt-[1rem] space-x-2">
            <EnvelopeIcon className="w-[1rem] h-[1rem] text-yellow-300" />
            <p className="text-[17px] font-normal text-white opacity-75">
              helton1000xd8@hgmail.com
            </p>
          </div>
          <div className="flex items-center mt-[1rem] space-x-2">
            <PhoneIcon className="w-[1rem] h-[1rem] text-yellow-300" />
            <p className="text-[17px] font-normal text-white opacity-75">
              +55 92 98462-6960
            </p>
          </div>
        </div>
      </div>
      <div className="mt-[1.4rem] w-[80%] mx-auto text-white opacity-70">
        &#169; Copyright Helton Ribeiro Barbosa Filho 2024
      </div>
    </div>
  );
};

export default Footer;
