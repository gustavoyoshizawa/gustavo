import { useTranslation } from "react-i18next";
import {
  FaArrowRight,
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";
import Title from "./Title";

const ContactSection = () => {
  const { t } = useTranslation();

  return (
    <section id="contact" className="contactSection">
      <div className="container">
        <div className="contact-intro">
          <p className="section-eyebrow">{t("contact.eyebrow")}</p>
          <div className="ContactTitle">
            <Title text={t("contact.title")} />
          </div>
          <p className="contact-description">{t("contact.description")}</p>
        </div>
        <div className="contact-console">
          <div className="contact-console-bar">
            <div className="console-dots" aria-hidden="true">
              <span></span>
              <span></span>
              <span></span>
            </div>
            <p>contact.config</p>
          </div>
          <div className="contact-console-grid">
            <div className="contact-primary">
              <p className="contact-code">01 / {t("contact.direct")}</p>
              <h2>{t("contact.directTitle")}</h2>
              <p>{t("contact.directDescription")}</p>
              <a
                className="contact-main-link"
                href="mailto:gustavoyoshizawa89@gmail.com"
              >
                <FaEnvelope />
                <div>
                  <span>{t("contact.email")}</span>
                  <strong>gustavoyoshizawa89@gmail.com</strong>
                </div>
                <FaArrowRight />
              </a>
              <div className="availability">
                <span></span>
                {t("contact.availability")}
              </div>
            </div>
            <div className="contact-links">
              <p className="contact-code">02 / {t("contact.channels")}</p>
              <a
                className="contact-card"
                href="https://wa.me/5511983339019?text=Ol%C3%A1%20Gustavo%2C%20tudo%20bem%3F%0A%0AVim%20pelo%20seu%20portf%C3%B3lio%2C%20podemos%20conversar%3F"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsapp />
                <div>
                  <span>WhatsApp</span>
                  <strong>+55 11 98333-9019</strong>
                </div>
                <FaArrowRight className="contact-arrow" />
              </a>
              <div className="contact-social-grid">
                <a
                  className="contact-social"
                  href="https://www.linkedin.com/in/gustavo-yoshizawa/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin />
                  LinkedIn
                </a>
                <a
                  className="contact-social"
                  href="https://github.com/gustavoyoshizawa"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub />
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
