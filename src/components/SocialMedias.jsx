import Title from "./Title";
import { FaLinkedin, FaGithub, FaEnvelope, FaWhatsapp } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const SocialMedias = () => {
  const { t } = useTranslation();

  return (
    <div className="social-media">
      <Title
        text={t("contact.title")}
        level={2}
        className="social-media-title"
      ></Title>
      <ul>
        <li>
          <a href="https://www.linkedin.com/in/gustavo-yoshizawa-17915619b/">
            <FaLinkedin />
            <p>LinkedIn</p>
          </a>
        </li>
        <li>
          <a href="https://github.com/gustavoyoshizawa">
            <FaGithub />
            <p>GitHub</p>
          </a>
        </li>
        <li>
          <a href="mailto:gustavoyoshizawa89@gmail.com">
            <FaEnvelope />
            <p>E-mail</p>
          </a>
        </li>
        <li>
          <a href="https://w.app/jl1qin">
            <FaWhatsapp />
            <p>Whatsapp</p>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SocialMedias;
