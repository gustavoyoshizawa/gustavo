import { useTranslation } from "react-i18next";
import profileImage from "/assets/img/profile.png";
import { useRef, useEffect } from "react";
import { gsap, Power3 } from "gsap";

import "../styles/css/style.min.css";

const HeroSection = () => {
  const { t } = useTranslation();
  let animation = useRef(null);

  useEffect(() => {
    gsap.to(animation.current, {
      opacity: 1,
      y: -10,
      duration: 0.8,
      ease: Power3.easeOut,
    });
  }, []);

  return (
    <section id="home" className="hero-section">
      <div ref={animation} className="hero-text">
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
        <img src={profileImage} alt="Foto Gustavo" />
      </div>
    </section>
  );
};

export default HeroSection;
