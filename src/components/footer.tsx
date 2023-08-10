import React from "react";
import { FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="my-7 py-6 text-1xl flex justify-between">
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
          href="https://www.instagram.com/stephanmingoes"
          target="_blank"
          className="text-red-600"
          rel="noopener noreferrer"
        >
          <FaInstagram size={24} />
        </a>
        <a
          href="https://twitter.com/stephanmingoes"
          target="_blank"
          className="text-blue-700"
          rel="noopener noreferrer"
        >
          <FaTwitter size={24} />
        </a>
      </div>
    </div>
  );
}
