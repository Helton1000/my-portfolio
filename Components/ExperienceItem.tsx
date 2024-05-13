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
      <span className="border-[2px] border-[#55e6a5] px-[2rem] py-[0.9rem] text-[18px] font-bold text-[#55e6a5]">
        {year}
      </span>
      <h1 className="mb-[1rem] mt-[2rem] text-[20px] font-semibold uppercase text-white sm:text-[25px] md:text-[30px]">
        {title}
      </h1>
      <p className="w-[80%] text-[17px] font-normal text-[#aaaaaa] opacity-80">
        {description}
      </p>
      <a
        className={`relative mt-[1rem] flex h-[50px] w-40 items-center justify-center overflow-hidden rounded-2xl bg-[#55e6a5] font-bold uppercase text-black shadow-2xl transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-yellow-400 before:duration-500 before:ease-out hover:before:h-56 hover:before:w-56 ${Button ? "" : "invisible"}`}
      >
        <span className="relative z-10">Learn More</span>
      </a>
    </div>
  );
};

export default ExperienceItem;
