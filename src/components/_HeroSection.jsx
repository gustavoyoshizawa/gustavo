import { useTranslation } from "react-i18next";
import profileImage from "../assets/profile.png";
import "../styles/css/style.min.css";

const HeroSection = () => {
  const { t } = useTranslation();

  return (
    <section id="home" className="hero-section">
      <div className="hero-text">
        <div className="hero-content container">
          <h2>
            {t("header.title.0")}{" "}
            <span className="dot">{t("header.title.1")}</span>
          </h2>

          <div className="hero-sub-text">
            <h4>{t("header.description.0")}</h4>
          </div>
          <div className="hero-sub-text-two">
            <p>{t("header.description.1")}</p>
            <p>{t("header.description.2")}</p>
          </div>
        </div>
      </div>
      <div className="img-container">
        <img src={profileImage} alt="Perfil do Gustavo" />
      </div>
    </section>
  );
};

export default HeroSection;
