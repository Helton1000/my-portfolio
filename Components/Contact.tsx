import React, { useState } from "react";
import { FaPaperPlane } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSending, setIsSending] = useState(false);

  function sendEmail(e: { preventDefault: () => void }) {
    e.preventDefault();
    setIsSending(true);

    const templateParams = {
      from_name: name,
      message: message,
      email: email,
    };

    emailjs
      .send(
        "service_13p25f8",
        "template_qj5ast2",
        templateParams,
        "6W059NkiXAAhRHg_y"
      )
      .then(
        (response) => {
          console.log("Email enviado", response.status, response.text);
          setName("");
          setEmail("");
          setMessage("");
        },
        (error) => {
          console.log("Erro: ", error);
        }
      )
      .finally(() => {
        setIsSending(false);
      });
  }

  return (
    <div id="contato" className="pt-[7.5rem] pb-[5rem] bg-gray-900">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-[2rem] items-center w-[80%] mx-auto">
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 1 }}
        >
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
        </motion.div>
        <motion.form onSubmit={sendEmail}
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1 }}>
          <input
            type="text"
            placeholder="Nome"
            required
            maxLength={500}
            onChange={(e) => setName(e.target.value)}
            value={name}
            className="py-[0.7rem] mb-[1.5rem] h-14 w-full outline-none text-white bg-gray-800 rounded-md px-4"
          />
          <input
            type="email"
            required
            maxLength={500}
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            placeholder="Email"
            className="py-[0.7rem] h-14 w-full outline-none text-white bg-gray-800 rounded-md px-4"
          />
          <textarea
            placeholder="Mensagem"
            name="message"
            required
            maxLength={500}
            onChange={(e) => setMessage(e.target.value)}
            value={message}
            className="py-[1rem] mt-[1.5rem] mb-[1.5rem] h-52 rounded-md w-full outline-none text-white bg-gray-800 px-4"
          ></textarea>
          <button
            type="submit"
            disabled={isSending}
            className={`group flex items-center justify-center gap-2 h-[3rem] w-[8rem] bg-[#55e6a5] text-black font-bold rounded-full outline-none transition-all focus:scale-110 hover:scale-110 ${
              isSending
                ? "bg-gray-400 cursor-not-allowed"
                : "hover:bg-[#41b983]"
            } active:scale-105`}
          >
            {isSending ? "Enviando..." : "Enviar"}
            <FaPaperPlane className="text-xs opacity-90" />
          </button>
        </motion.form>
      </div>
    </div>
  );
};

export default Contact;
