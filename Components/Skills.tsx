/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { FaGithubSquare } from "react-icons/fa";
import SkillCard from "./SkillCard";

const Skills = () => {
  return (
    <div className="bg-[#121212] pt-[4rem] pb-[3rem]">
      <div className="grid w-[80%] mx-auto grid-cols-1 lg:grid-cols-7 gap-[3rem] items-center">
        <div className="col-span-3">
          <h1 className="text-white text-[28px] sm:text-[33px] md:text-[45px] font-bold uppercase">
            My <span className="text-yellow-400">Skills</span>
          </h1>
          <p className="text-[15px] mb-[1.5rem] text-white opacity-70 mt-[1.5rem]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa quia
            aperiam consequatur nesciunt adipisci, tempore voluptatibus omnis,
            distinctio officiis nisi unde sapiente, alias excepturi quas veniam
            aspernatur ab eaque officia.
            Lorem, ipsum dolor sit amet consectetur adipisicing. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse nemo repudiandae iste ducimus. Fuga officia voluptatibus, beatae ut blanditiis, sunt dolorum distinctio tenetur, modi vitae deleniti maiores magni libero quisquam.
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum sapiente magni consequatur voluptas, sint ex perferendis fugit inventore optio similique incidunt deleniti illo quisquam obcaecati eligendi suscipit et tempora dolorum?
          </p>
          <a className="relative flex h-[50px] w-40 items-center justify-center rounded-2xl font-bold overflow-hidden bg-[#55e6a5] text-black uppercase shadow-2xl transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-yellow-400 before:duration-500 before:ease-out hover:before:h-56 hover:before:w-56">
            <span className="relative z-10">Learn More</span>
          </a>
        </div>
        <div className="col-span-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-3 xl:grid-cols-4 gap-[1rem] items-center">
                <div>
                    <SkillCard title="React JS" image="/images/react.svg" level="Intermediario"/>
                </div>
                <div>
                    <SkillCard title="HTML-5" image="/images/html5.svg" level="Intermediario"/>
                </div>
                <div>
                    <SkillCard title="Javascript" image="/images/javascript.svg" level="Intermediario"/>
                </div>
                <div>
                    <SkillCard title="Typescript" image="/images/typescript.svg" level="Intermediario"/>
                </div>
                <div>
                    <SkillCard title="CSS3" image="/images/css.svg" level="Intermediario"/>
                </div>
                <div>
                    <SkillCard title="NodeJS" image="/images/nodejs.svg" level="Intermediario"/>
                </div>
                <div>
                    <SkillCard title="Next JS" image="/images/nextjs.svg" level="Intermediario"/>
                </div>
                <div>
                    <SkillCard title="Python" image="/images/python.svg" level="Intermediario"/>
                </div>
                <div>
                    <SkillCard title="Java" image="/images/java.svg" level="Intermediario"/>
                </div>
                <div>
                    <SkillCard title="Tailwind" image="/images/tailwind.svg" level="Intermediario"/>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
