import React from "react";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <div id="projetos" className="pt-[5rem] pb-[3rem] bg-gray-900">
      <div className="text-center">
        <p className="heading_mini heading">Recent Works</p>
        <h1 className="heading_primary heading">
          My Best <span className="text-yellow-300">Projetcs</span>
        </h1>
      </div>

      <ProjectCard
        title="Projeto 1"
        tech="React"
        tech2="Next Js"
        tech3="Tailwind"
        tech4="Typescript"
        image="/images/p1.png"
      />
    </div>
  );
};

export default Projects;
