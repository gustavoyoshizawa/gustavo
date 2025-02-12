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
          <a href="https://wa.me/5511983339019?text=Ol%C3%A1%20Gustavo%2C%20tudo%20bem%3F%0A%0AVim%20pelo%20seu%20portf%C3%B3lio%2C%20podemos%20conversar%3F">
            <FaWhatsapp />
            <p>Whatsapp</p>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SocialMedias;
