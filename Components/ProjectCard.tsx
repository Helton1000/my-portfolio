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
      className="mx-auto grid w-[80%] grid-cols-1 items-center gap-20 pt-[4rem] lg:grid-cols-2"
    >
      <div className="relative transform cursor-pointer rounded-xl bg-gray-800 p-4 shadow-md transition-all duration-200 hover:rotate-6">
        <Image
          src={`${image}`}
          alt={title}
          width={500}
          height={500}
          className="mx-auto rounded-xl object-contain shadow-md"
        />
      </div>

      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: 100 }}
        transition={{ duration: 1 }}
      >
        <h1 className="mt-[0.2rem] text-[25px] font-[600] text-white">
          {title}
        </h1>

        <p className="mt-[1rem] text-[15px] text-white opacity-65">
          {description}
        </p>
        <div className="mt-4 flex gap-6">
          <a href={urlG} target="_blank">
            <FaGithub size={28} color="yellow" />
          </a>
          <a href={urlD} target="_blank">
            <IoIosLink size={28} color="yellow" />
          </a>
        </div>
        <div className="mt-[1.3rem] grid grid-cols-2 gap-[2rem] sm:grid-cols-3 xl:grid-cols-4">
          {tech && (
            <h1 className="rounded-lg bg-blue-700 px-6 py-3 text-center text-white">
              {tech}
            </h1>
          )}

          {tech2 && (
            <h1 className="rounded-lg bg-white px-6 py-3 text-center text-black">
              {tech2}
            </h1>
          )}

          {tech3 && (
            <h1 className="rounded-lg bg-sky-500 px-6 py-3 text-center text-black">
              {tech3}
            </h1>
          )}

          {tech4 && (
            <h1 className="rounded-lg bg-blue-500 px-6 py-3 text-center text-white">
              {tech4}
            </h1>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProjectCard;
