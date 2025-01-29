// import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope, FaWhatsapp } from "react-icons/fa";
import "../styles/css/style.min.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <a
        href="https://www.linkedin.com/in/gustavo-yoshizawa-17915619b/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedin />
      </a>
      <a
        href="https://github.com/gustavoyoshizawa"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub />
      </a>
      <a href="mailto:gustavoyoshizawa89@gmail.com">
        <FaEnvelope />
      </a>
      <a href="https://w.app/jl1qin">
        <FaWhatsapp />
      </a>
    </div>
  );
};

export default Sidebar;
