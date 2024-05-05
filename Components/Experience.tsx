import React from "react";
import ExperienceItem from "./ExperienceItem";

const Experience = () => {
  return (
    <div
      id="cursos"
      className="pt-[4rem] md:pt-[8rem] pb-[5rem] bg-[#121212]"
    >
      <h1 className="heading_primary heading">
        Cursos e <span className="text-yellow-300">Experiências</span>
      </h1>
      <div className="w-[80%] mx-auto pt-[4rem] md:pt-[8rem] grid grid-cols-1 md:grid-cols-2 gap-[2rem] items-center">
        <div>
          <ExperienceItem
            title="React Developer"
            year="2014-2022"
            description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum veritatis neque quisquam odit ea deleniti sint qui cupiditate, corrupti recusandae repudiandae quas eius a doloribus illo, dicta voluptatum rem dignissimos!"
            Button={true}
          />
          <ExperienceItem
            title="Fullstack Developer"
            year="2016-2020"
            description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum veritatis neque quisquam odit ea deleniti sint qui cupiditate, corrupti recusandae repudiandae quas eius a doloribus illo, dicta voluptatum rem dignissimos!"
          />
        </div>
        <div>
          <ExperienceItem
            title="Bradesco Developer"
            year="2014-2022"
            description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum veritatis neque quisquam odit ea deleniti sint qui cupiditate, corrupti recusandae repudiandae quas eius a doloribus illo, dicta voluptatum rem dignissimos!Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum veritatis neque quisquam odit ea deleniti sint qui cupiditate, corrupti recusandae repudiandae quas eius a doloribus illo, dicta voluptatum rem dignissimos!"
            Button={true}
          />
          <ExperienceItem
            title="Java Developer"
            year="2014-2022"
            description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum veritatis neque quisquam odit ea deleniti sint qui cupiditate, corrupti recusandae repudiandae quas eius a doloribus illo, dicta voluptatum rem dignissimos!"
          />
        </div>
        <div>
          <ExperienceItem
            title="Next Developer"
            year="2014-2022"
            description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum veritatis neque quisquam odit ea deleniti sint qui cupiditate, corrupti recusandae repudiandae quas eius a doloribus illo, dicta voluptatum rem dignissimos!"
          />
          <ExperienceItem
            title="Node JS Developer"
            year="2014-2022"
            description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum veritatis neque quisquam odit ea deleniti sint qui cupiditate, corrupti recusandae repudiandae quas eius a doloribus illo, dicta voluptatum rem dignissimos!Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum veritatis neque quisquam odit ea deleniti sint qui cupiditate, corrupti recusandae repudiandae quas eius a doloribus illo, dicta voluptatum rem dignissimos!"
            Button={true}
          />
        </div>
        <div>
          <ExperienceItem
            title="Bradesco Developer"
            year="2014-2022"
            description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum veritatis neque quisquam odit ea deleniti sint qui cupiditate, corrupti recusandae repudiandae quas eius a doloribus illo, dicta voluptatum rem dignissimos!"
          />
          <ExperienceItem
            title="Java Developer"
            year="2014-2022"
            description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum veritatis neque quisquam odit ea deleniti sint qui cupiditate, corrupti recusandae repudiandae quas eius a doloribus illo, dicta voluptatum rem dignissimos!"
          />
        </div>
      </div>
    </div>
  );
};

export default Experience;
