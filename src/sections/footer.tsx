import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { FiMail } from "react-icons/fi";

export default function Footer() {
  return (
    <div className="my-7 py-6 text-1xl flex justify-between flex-wrap">
      <span>Stephan Mingoes &copy; {new Date().getFullYear()}</span>
      <div className=" flex space-x-4">
        <a
          href="https://www.linkedin.com/in/stephanmingoes"
          className="text-blue-600"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin size={24} />
        </a>
        <a
          href="https://www.github.com/stephanmingoes"
          className="text-blue-950"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub size={24} />
        </a>
        <a
          href="mailto:stephanmingoes@gmail.com"
          className="text-red-600"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FiMail size={24} />
        </a>
      </div>
    </div>
  );
}
