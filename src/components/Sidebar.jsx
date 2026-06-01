// import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope, FaWhatsapp } from "react-icons/fa";
import "../styles/css/style.min.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <a
        aria-label="LinkedIn"
        href="https://www.linkedin.com/in/gustavo-yoshizawa/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedin />
      </a>
      <a
        aria-label="GitHub"
        href="https://github.com/gustavoyoshizawa"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub />
      </a>
      <a aria-label="E-mail" href="mailto:gustavoyoshizawa89@gmail.com">
        <FaEnvelope />
      </a>
      <a
        aria-label="WhatsApp"
        href="https://wa.me/5511983339019?text=Ol%C3%A1%20Gustavo%2C%20tudo%20bem%3F%0A%0AVim%20pelo%20seu%20portf%C3%B3lio%2C%20podemos%20conversar%3F"
      >
        <FaWhatsapp />
      </a>
    </div>
  );
};

export default Sidebar;
