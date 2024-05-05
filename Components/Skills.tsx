/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { FaGithubSquare } from "react-icons/fa";
import SkillCard from "./SkillCard";

const Skills = () => {
  return (
    <div id="skills">
      <div className="bg-[#121212] pt-[7.4rem]  pb-[5rem]">
        <div className="grid w-[80%] mx-auto grid-cols-1 lg:grid-cols-7 gap-[3rem] items-center">
          <div className="col-span-3">
            <h1 className="text-white text-[28px] sm:text-[33px] md:text-[45px] font-bold uppercase">
              My <span className="text-yellow-400">Skills</span>
            </h1>
            <p className="text-[15px] mb-[1.5rem] text-white opacity-70 mt-[1.5rem]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa quia
              aperiam consequatur nesciunt adipisci, tempore voluptatibus omnis,
              distinctio officiis nisi unde sapiente, alias excepturi quas
              veniam aspernatur ab eaque officia. Lorem, ipsum dolor sit amet
              consectetur adipisicing. Lorem, ipsum dolor sit amet consectetur
              adipisicing elit. Esse nemo repudiandae iste ducimus. Fuga officia
              voluptatibus, beatae ut blanditiis, sunt dolorum distinctio
              tenetur, modi vitae deleniti maiores magni libero quisquam. Lorem
              ipsum dolor sit, amet consectetur adipisicing elit. Ipsum sapiente
              magni consequatur voluptas, sint ex perferendis fugit inventore
              optio similique incidunt deleniti illo quisquam obcaecati eligendi
              suscipit et tempora dolorum?
            </p>
          </div>
          <div className="col-span-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-3 xl:grid-cols-4 gap-[1rem] items-center">
              <div data-aos="flip-left" data-aos-anchor-placement="top-center">
                <SkillCard
                  title="React JS"
                  image="/images/react.svg"
                  level="Intermediario"
                />
              </div>
              <div
                data-aos="flip-left"
                data-aos-anchor-placement="top-center"
                data-aos-delay="200"
              >
                <SkillCard
                  title="HTML-5"
                  image="/images/html5.svg"
                  level="Intermediario"
                />
              </div>
              <div
                data-aos="flip-left"
                data-aos-anchor-placement="top-center"
                data-aos-delay="400"
              >
                <SkillCard
                  title="Javascript"
                  image="/images/javascript.svg"
                  level="Intermediario"
                />
              </div>
              <div
                data-aos="flip-left"
                data-aos-anchor-placement="top-center"
                data-aos-delay="600"
              >
                <SkillCard
                  title="Typescript"
                  image="/images/typescript.svg"
                  level="Intermediario"
                />
              </div>
              <div
                data-aos="flip-left"
                data-aos-anchor-placement="top-center"
                data-aos-delay="200"
              >
                <SkillCard
                  title="CSS3"
                  image="/images/css.svg"
                  level="Intermediario"
                />
              </div>
              <div
                data-aos="flip-left"
                data-aos-anchor-placement="top-center"
                data-aos-delay="400"
              >
                <SkillCard
                  title="NodeJS"
                  image="/images/nodejs.svg"
                  level="Intermediario"
                />
              </div>
              <div
                data-aos="flip-left"
                data-aos-anchor-placement="top-center"
                data-aos-delay="600"
              >
                <SkillCard
                  title="Next JS"
                  image="/images/nextjs.svg"
                  level="Intermediario"
                />
              </div>
              <div
                data-aos="flip-left"
                data-aos-anchor-placement="top-center"
                data-aos-delay="800"
              >
                <SkillCard
                  title="Python"
                  image="/images/python.svg"
                  level="Intermediario"
                />
              </div>
              <div
                data-aos="flip-left"
                data-aos-anchor-placement="top-center"
              >
                <SkillCard
                  title="Java"
                  image="/images/java.svg"
                  level="Intermediario"
                />
              </div>
              <div
                data-aos="flip-left"
                data-aos-anchor-placement="top-center"
              >
                <SkillCard
                  title="Tailwind"
                  image="/images/tailwind.svg"
                  level="Intermediario"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
