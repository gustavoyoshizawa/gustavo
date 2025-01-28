import Title from "./title";
import { FaLinkedin, FaGithub, FaEnvelope, FaWhatsapp } from "react-icons/fa";

const SocialMedias = () => {
  return (
    <div className="social-media">
      <Title text="Contato" level={2} className="social-media-title"></Title>
      <ul>
        <li>
          <a href="">
            <FaLinkedin />
            <p>LinkedIn</p>
          </a>
        </li>
        <li>
          <a href="">
            <FaGithub />
            <p>GitHub</p>
          </a>
        </li>
        <li>
          <a href="">
            <FaEnvelope />
            <p>E-mail</p>
          </a>
        </li>
        <li>
          <a href="">
            <FaWhatsapp />
            <p>Whatsapp</p>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SocialMedias;
