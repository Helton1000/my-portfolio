import { EnvelopeIcon, MapIcon, PhoneIcon } from "@heroicons/react/20/solid";
import { motion } from "framer-motion";
import React from "react";

const Footer = () => {
  return (
    <div className="bg-black pb-[3rem] pt-[5rem]">
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 0.5 }}
        className="mx-auto grid w-[80%] grid-cols-1 gap-[2rem] border-b-[1.4px] border-gray-600 border-opacity-40 pb-5 md:grid-cols-2 lg:grid-cols-3"
      >
        <div className="text-[18px] text-white">
          <h1 className="text-[30px] font-bold text-white">
            Helton
            <span className="text-yellow-400"> Barbosa</span>
          </h1>

          <p className="mt-[0.5rem] text-[14px] text-white opacity-70">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur
            fugiat numquam consectetur vero. Eius velit ipsa nemo! Reprehenderit
            modi sapiente provident, corporis, ipsum cumque debitis quas, nam
            repellat quidem alias.
          </p>

          <p className="mt-[1.3rem] font-semibold text-yellow-300 underline">
            helton1000xd8@gmail.com
          </p>
        </div>
        <div className="md:mx-auto">
          <h1 className="mb-[1.4rem] text-[17px] font-semibold text-white">
            Link Rápido
          </h1>
          <a
            href="#sobre"
            className="mb-4 block cursor-pointer uppercase text-white text-opacity-80 underline hover:text-yellow-300"
          >
            Sobre
          </a>
          <a
            href="#skills"
            className="mb-4 block cursor-pointer uppercase text-white text-opacity-80 underline hover:text-yellow-300"
          >
            skills
          </a>
          <a
            href="#projetos"
            className="mb-4 block cursor-pointer uppercase text-white text-opacity-80 underline hover:text-yellow-300"
          >
            projetos
          </a>
          <a
            href="#cursos"
            className="mb-4 block cursor-pointer uppercase text-white text-opacity-80 underline hover:text-yellow-300"
          >
            cursos
          </a>
          <a
            href="#home"
            className="mb-4 block cursor-pointer uppercase text-white text-opacity-80 underline hover:text-yellow-300"
          >
            home
          </a>
        </div>
        <div className="lg:mx-auto">
          <h1 className="mb-[1.4rem] text-[17px] font-semibold text-white">
            Informações
          </h1>
          <div className="mt-[1rem] flex items-center space-x-2">
            <MapIcon className="h-[1rem] w-[1rem] text-yellow-300" />
            <p className="text-[17px] font-normal text-white opacity-75">
              Manaus, Amazonas
            </p>
          </div>
          <div className="mt-[1rem] flex items-center space-x-2">
            <EnvelopeIcon className="h-[1rem] w-[1rem] text-yellow-300" />
            <p className="text-[17px] font-normal text-white opacity-75">
              helton1000xd8@hgmail.com
            </p>
          </div>
          <div className="mt-[1rem] flex items-center space-x-2">
            <PhoneIcon className="h-[1rem] w-[1rem] text-yellow-300" />
            <p className="text-[17px] font-normal text-white opacity-75">
              +55 92 98462-6960
            </p>
          </div>
        </div>
      </motion.div>
      <div className="mx-auto mt-[1.4rem] w-[80%] text-white opacity-70">
        &#169; Copyright Helton Ribeiro Barbosa Filho 2024
      </div>
    </div>
  );
};

export default Footer;
