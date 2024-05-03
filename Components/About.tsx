import { ArrowDownCircleIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import React from "react";

const about = () => {
  return (
    <div className="bg-[#121121] pb-[3rem] pt-[4rem] md:pt-[8rem]">
      <div className="grid grid-cols-1 md:grid-cols-2 w-[80%] mx-auto gap-[3rem] items-center">
        <div>
          <h1 className="text-[20px] font-bold uppercase text-[#55e6a5] mb-[1rem]">
            conheça mais
          </h1>
          <h2 className="text-[25px] md:text-[35px] lg:text-[45px] md:leading-[3rem] leading-[2rem] capitalize mb-[3rem] font-bold text-white">
            SOBRE<span className="text-yellow-400"> MIM</span>
          </h2>
          <div className="mb-[3rem] flex items-center md:space-x-10">
            <span
              className="w-[100px] hidden md:block h-[5px]
            bg-slate-400 rounded-sm"
            ></span>
            <p className="text-[19px] text-slate-300 w-[80%]">
              Olá! Meu nome é [Seu Nome], e sou um entusiasta de tecnologia
              apaixonado por criar experiências digitais incríveis.
              <br />
              <br />
              Desde tenra idade, fui fascinado pelo mundo da programação e do
              design web, e essa paixão me levou a embarcar em uma jornada
              emocionante de aprendizado e autodesenvolvimento.
              <br />
              <br />
              Com um fundo sólido em ciência da computação e design de interface
              de usuário, estou constantemente buscando aprimorar minhas
              habilidades e me manter atualizado com as últimas tendências e
              tecnologias do setor.
            </p>
          </div>
          <a
            href="/Currículo.pdf"
            download
            className="hover:bg-yellow-400 transition-all duration-200 inline-flex items-center px-[2rem] py-[1rem] text-[18px] font-bold uppercase bg-[#55e6a5] text-black rounded-full cursor-pointer gap-2"
          >
            Download CV
            <ArrowDownCircleIcon className="w-[1.6rem] h-[1.7rem] text-black" />
          </a>
        </div>
        <div className="lg:w-[500px] mx-auto md:mx-0 mt-[2rem] lg:mt-0 lg:h-[500px] w-[300px] h-[300px] relative hidden md:block">
          <Image
            src="/images/header.svg"
            alt="user"
            layout="fill"
            objectFit="contain"
            className="relative z-[11] w-[100%] h-[100%] object-contain animate-wiggle ml-20"
          />
        </div>
      </div>
    </div>
  );
};

export default about;
