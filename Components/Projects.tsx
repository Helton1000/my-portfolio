import React from "react";
import ProjectCard from "./ProjectCard";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <div id="projetos" className="pt-[5rem] pb-[3rem] bg-gray-900">
      <motion.div 
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: -100 }}
      transition={{ duration: 0.5 }}
      className="text-center">
        <p className="heading_mini heading">Recent Works</p>
        <h1 className="heading_primary heading">
          My Best <span className="text-yellow-300">Projetcs</span>
        </h1>
      </motion.div>

      <ProjectCard
        title="Projeto 1"
        description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque a
        ipsam quidem quis hic beatae explicabo, laborum esse nulla ratione
        suscipit numquam voluptate dicta ipsum porro, corporis recusandae!
        Harum, aspernatur. Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Impedit similique, voluptate facilis nostrum consequuntur
        molestias assumenda reprehenderit quasi numquam! Voluptatum voluptate
        at libero distinctio illum, voluptatem reiciendis cupiditate
        voluptates nihil?"
        tech="React"
        tech2="Next Js"
        tech3="Tailwind"
        tech4="Typescript"
        image="/images/p1.png"
      />
      <ProjectCard
        title="Clone Steam"
        description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque a
        ipsam quidem quis hic beatae explicabo, laborum esse nulla ratione
        suscipit numquam voluptate dicta ipsum porro, corporis recusandae!
        Harum, aspernatur. Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Impedit similique, voluptate facilis nostrum consequuntur
        molestias assumenda reprehenderit quasi numquam! Voluptatum voluptate
        at libero distinctio illum, voluptatem reiciendis cupiditate
        voluptates nihil?"
        urlD="https://clone-steam.vercel.app/"
        tech="React"
        tech2="CSS"
        tech3="Javascript"
        tech4="HTML"
        image="/images/projeto2.png"
      />
      <ProjectCard
        title="Projeto 3"
        description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque a
        ipsam quidem quis hic beatae explicabo, laborum esse nulla ratione
        suscipit numquam voluptate dicta ipsum porro, corporis recusandae!
        Harum, aspernatur. Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Impedit similique, voluptate facilis nostrum consequuntur
        molestias assumenda reprehenderit quasi numquam! Voluptatum voluptate
        at libero distinctio illum, voluptatem reiciendis cupiditate
        voluptates nihil?"
        tech="React"
        tech2="Next Js"
        tech3="Tailwind"
        tech4="Typescript"
        image="/images/p1.png"
      />
      <ProjectCard
        title="Projeto 4"
        description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque a
        ipsam quidem quis hic beatae explicabo, laborum esse nulla ratione
        suscipit numquam voluptate dicta ipsum porro, corporis recusandae!
        Harum, aspernatur. Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Impedit similique, voluptate facilis nostrum consequuntur
        molestias assumenda reprehenderit quasi numquam! Voluptatum voluptate
        at libero distinctio illum, voluptatem reiciendis cupiditate
        voluptates nihil? Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis dicta perspiciatis nihil, ab reiciendis laudantium nam fugit temporibus, repellat error architecto! Tenetur modi facere possimus laudantium ipsum perferendis dolorum facilis!"
        urlD="https://bikcraft-wheat.vercel.app/"
        tech="Javascript"
        tech2="CSS"
        tech3="HTML"
        tech4="Figma"
        image="/images/projeto3.png"
      />
    </div>
  );
};

export default Projects;
