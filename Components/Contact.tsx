import React from "react";

const Contact = () => {
  return (
    <div id="contato" className="pt-[5rem] pb-[3rem] bg-gray-900">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-[2rem] items-center w-[80%] mx-auto">
        <div>
          <p className="heading_mini">Get in Touch</p>
          <h1 className="text-white text-[28px] sm:text-[33px] md:text-[45px] font-bold uppercase">
            Meu <span className="text-yellow-400">Contato</span>
          </h1>
          <p className="text-[15px] text-white mt-[1rem] opacity-75">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
            molestiae consectetur libero maiores architecto enim eos dolores
            deserunt perferendis provident?
          </p>
          <h1 className="mt-[2rem] mb-[2rem] text-[30px] text-yellow-300 underline font-bold">
            +55 92 98462-6960
          </h1>
        </div>
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-[1rem] items-center">
            <input
              type="text"
              placeholder="Nome"
              className="py-[0.7rem] outline-none text-white bg-gray-800 rounded-md px-4"
            />
            <input
              type="email"
              placeholder="Email"
              className="py-[0.7rem] outline-none text-white bg-gray-800 rounded-md px-4"
            />
          </div>
          <input
            type="text"
            placeholder="Subject"
            className="py-[0.7rem] mt-[1.5rem] mb-[1.5rem] w-full outline-none text-white bg-gray-800 rounded-md px-4"
          />
          <textarea
            placeholder="Mensagem"
            rows={4}
            className="py-[0.7rem] mb-[1.5rem] rounded-md w-full outline-none text-white bg-gray-800 px-4"
          ></textarea>
          <button className="py-[0.7rem] mb-[1.5rem] w-full outline-none text-white bg-blue-700 hover:bg-blue-800 rounded-md px-4">Submit</button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
