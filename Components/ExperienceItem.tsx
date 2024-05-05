import React from "react";

interface Props {
  title: string;
  year: string;
  Button?: boolean;
  description: string;
}

const ExperienceItem = ({
  title,
  year,
  Button = false,
  description,
}: Props) => {
  return (
    <div className="mb-[4rem] md:mb-[8rem]">
      <span className="px-[2rem] text-[#55e6a5] py-[0.9rem] font-bold text-[18px] border-[2px] border-[#55e6a5]">
        {year}
      </span>
      <h1 className="mt-[2rem] uppercase font-semibold mb-[1rem] text-[20px] sm:text-[25px] md:text-[30px] text-white">
        {title}
      </h1>
      <p className="text-[#aaaaaa] font-normal w-[80%] text-[17px] opacity-80">
        {description}
      </p>
      {Button && (
        <a className="relative flex h-[50px] w-40 items-center justify-center rounded-2xl font-bold overflow-hidden bg-[#55e6a5] text-black uppercase shadow-2xl transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-yellow-400 before:duration-500 before:ease-out hover:before:h-56 hover:before:w-56 mt-[1rem]">
          <span className="relative z-10">Learn More</span>
        </a>
      )}
    </div>
  );
};

export default ExperienceItem;
