import React from "react";
import { motion } from "framer-motion";

const Teste = () => {
  const TESTE = [
    {
      year: "2023 - Present",
      role: "Senior Full Stack Developer",
      company: "Google Inc.",
      description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
      technologies: ["Javascript", "React.js", "Next.js", "mongoDB"],
    },
    {
      year: "2022 - 2023",
      role: "Frontend Developer",
      company: "Adobe",
      description: `Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
      technologies: ["HTML", "CSS", "Vue.js", "mySQL"],
    },
    {
      year: "2021 - 2022",
      role: "Full Stack Developer",
      company: "Facebook",
      description: `Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
      technologies: ["Python", "Svelte", "Three.js", "Postgres"],
    },
    {
      year: "2020 - 2021",
      role: "Software Engineer",
      company: "Paypal",
      description: `Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.`,
      technologies: ["Ruby", "Rails", "PHP", "Sqlite"],
    },
  ];

  return (
    <div
      id="cursos"
      className="pt-[2rem] md:pt-[4rem] bg-[#121212] border-b border-neutral-900 pb-8 text-white"
    >
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl font-bold uppercase"
      >
        My <span className="text-yellow-400">Experience</span>
      </motion.h1>
      <div className="w-[90%] ml-4">
        {TESTE.map((teste, index) => (
          <div
            className="mb-8 flex flex-wrap lg:justify-center md:justify-center"
            key={index}
          >
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="mt-3 w-full lg:w-1/4"
            >
              <p className="mb-2 text-center text-sm text-neutral-400">
                {teste.year}
              </p>
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className="w-full max-w-xl lg:w-3/4 mt-3"
            >
              <h6 className="mb-2 font-semibold">
                {teste.role} -{" "}
                <span className="text-sm text-purple-100">{teste.company}</span>
              </h6>
              <p className="mb-4 text-neutral-400">{teste.description}</p>
              {teste.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="mr-2 mt-4 rounded bg-neutral-800 px-2 py-1 text-sm font-medium text-[#55e6a5]"
                >
                  {tech}
                </span>
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Teste;
