import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import { FaGithub } from "react-icons/fa";
import { IoIosLink } from "react-icons/io";

interface Props {
  image: string;
  title: string;
  description: string;
  tech?: string;
  tech2?: string;
  tech3?: string;
  tech4?: string;
  urlG?: string;
  urlD?: string;
}

const ProjectCard = ({
  image,
  title,
  description,
  tech,
  tech2,
  tech3,
  tech4,
  urlG,
  urlD,
}: Props) => {
  return (
    <motion.div
      whileInView={{ opacity: 1, x: 0 }}
      initial={{ opacity: 0, x: -100 }}
      transition={{ duration: 1 }}
      className="grid w-[80%] mx-auto pt-[4rem] grid-cols-1 lg:grid-cols-2 gap-20 items-center"
    >
      <div className="p-4 rounded-xl relative cursor-pointer hover:rotate-6 transform transition-all duration-200 bg-gray-800 shadow-md">
        <Image
          src={`${image}`}
          alt={title}
          width={500}
          height={500}
          className="object-contain rounded-xl mx-auto shadow-md"
        />
      </div>

      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: 100 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-[25px] mt-[0.2rem] text-white font-[600]">
          {title}
        </h1>

        <p className="text-[15px] text-white opacity-65 mt-[1rem]">
          {description}
        </p>
        <div className="flex mt-4 gap-6">
          <a href={urlG} target="_blank">
            <FaGithub size={28} color="yellow"/>
          </a>
          <a href={urlD} target="_blank">
            <IoIosLink size={28} color="yellow"/>
          </a>
        </div>
        <div className="mt-[1.3rem] grid-cols-2 grid sm:grid-cols-3 xl:grid-cols-4 gap-[2rem]">
          {tech && (
            <h1 className="px-6 py-3 bg-blue-700 text-white rounded-lg text-center">
              {tech}
            </h1>
          )}

          {tech2 && (
            <h1 className="px-6 py-3 bg-white text-black rounded-lg text-center">
              {tech2}
            </h1>
          )}

          {tech3 && (
            <h1 className="px-6 py-3 bg-sky-500 text-black rounded-lg text-center">
              {tech3}
            </h1>
          )}

          {tech4 && (
            <h1 className="px-6 py-3 bg-blue-500 text-white rounded-lg text-center">
              {tech4}
            </h1>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProjectCard;
