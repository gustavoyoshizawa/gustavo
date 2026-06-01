import { useTranslation } from "react-i18next";
import profileImage from "/assets/img/profile.png";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";

import "../styles/css/style.min.css";

const HeroSection = () => {
  const { t } = useTranslation();
  const section = useRef(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const context = gsap.context(() => {
      if (prefersReducedMotion) {
        gsap.set(".hero-text, .img-container", { autoAlpha: 1, y: 0 });
        return;
      }

      gsap
        .timeline({ defaults: { ease: "power3.out" } })
        .fromTo(
          ".hero-text",
          { autoAlpha: 0, y: 28 },
          { autoAlpha: 1, y: 0, duration: 0.9 }
        )
        .fromTo(
          ".hero-content > *",
          { autoAlpha: 0, y: 18 },
          { autoAlpha: 1, y: 0, duration: 0.65, stagger: 0.1 },
          "-=0.55"
        )
        .fromTo(
          ".img-container",
          { autoAlpha: 0, scale: 0.96 },
          { autoAlpha: 1, scale: 1, duration: 0.9 },
          "-=0.85"
        );
    }, section);

    return () => {
      context.revert();
    };
  }, []);

  return (
    <section ref={section} id="home" className="hero-section">
      <div className="hero-grid container">
        <div className="hero-text">
          <div className="hero-content">
            <p className="hero-eyebrow">Gustavo Yoshizawa</p>
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
          <div className="profile-frame">
            <img src={profileImage} alt="Foto Gustavo" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
