// import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope, FaWhatsapp } from "react-icons/fa";
import "../styles/css/style.min.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
        <FaLinkedin />
      </a>
      <a href="https://github.com" target="_blank" rel="noopener noreferrer">
        <FaGithub />
      </a>
      <a href="mailto:gustavo@example.com">
        <FaEnvelope />
      </a>
      <a href="https://wa.me/1234567890">
        <FaWhatsapp />
      </a>
    </div>
  );
};

export default Sidebar;
