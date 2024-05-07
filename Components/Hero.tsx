/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Particle from "./Particle";
import TextEffect from "./TextEffect";
import Image from "next/image";
import {
  AcademicCapIcon,
  ArrowDownCircleIcon,
} from "@heroicons/react/20/solid";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div id="home" className="h-[88vh] bg-[url('/images/banner.jpg')] mt-[10vh] bg-cover bg-center">
      <Particle />
      <div className="w-[80%] grid-cols-1 mx-auto grid lg:grid-cols-2 gap-[3rem] h-[100%] items-center">
        <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1 }}>
          <h1 className="text-[35px] md:text-[50px] text-white font-bold ">
            HI, I'm<span className="text-yellow-400"> Helton</span>
          </h1>
          {/* Definições */}
          <TextEffect />
          <p className="mt-[1.5rem] text-[20px] text-[#ffffff92]">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores
            quas, tempore aliquam nesciunt veritatis, suscipit deserunt modi
            excepturi neque natus quod ea mollitia expedita ex repellendus?
            Excepturi tempora illum et!
          </p>
          {/* Botões */}
          <div className="mt-[2rem] flex-col space-y-6 sm:space-y-0 sm:flex sm:flex-row sm:space-x-2">
            <div>
              <a
                href="/Currículo.pdf"
                download
                className="hover:bg-yellow-400 transition-all duration-200 inline-flex items-center px-[2rem] py-[1rem] text-[18px] font-bold uppercase bg-[#55e6a5] text-black rounded-full cursor-pointer gap-2"
              >
                Download CV
                <ArrowDownCircleIcon className="w-[1.6rem] h-[1.7rem] text-black" />
              </a>
            </div>

            <div className="flex items-center space-x-2">
              <a href="https://github.com/Helton1000" target="_blank">
                <FaGithubSquare className="w-[4rem] h-[4rem] hover:text-yellow-400 transition-all duration-200 text-[#55e6a5]" />
              </a>
              <a href="https://www.linkedin.com/in/hfbarbosa/" target="_blank">
                <FaLinkedin className="w-[4rem] h-[4rem] hover:text-yellow-400 transition-all duration-200 text-[#55e6a5]" />
              </a>
            </div>
          </div>
        </motion.div>
        {/* Foto */}
        <motion.div 
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: 100 }}
        transition={{ duration: 1 }}
        className="w-[500px] hidden relative lg:flex items-center rounded-full h-[500px] ml-20">
          <Image
            src="/images/ic1.jpg"
            alt="user"
            layout="fill"
            className="object-cover rounded-full border border-purple-500"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
