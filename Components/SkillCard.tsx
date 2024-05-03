import Image from "next/image";
import React from "react";

interface Props {
  image: string;
  title: string;
  level: string;
}

const SkillCard = ({ image, title, level }: Props) => {
  return (
    <div className="p-6 hover:bg-red-600 duration-300 transition-all cursor-pointer text-center rounded-lg bg-gray-900">
      <Image
        src={`${image}`}
        alt={title}
        width={80}
        height={80}
        className="object-cover mx-auto"
      />
      <h1 className="text-[18px] mt-[1rem] text-white font-[600]">{title}</h1>
      {/* <div className="bg-black mt-[1rem] rounded-lg p-2 text-white opacity-40 level overflow-hidden">
        <span className="text-sm lg:text-base">{level}</span>
      </div> */}
    </div>
  );
};

export default SkillCard;
