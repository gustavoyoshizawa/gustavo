import { FaChartLine, FaDatabase, FaRobot } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import Title from "./Title";

const icons = [FaDatabase, FaChartLine, FaRobot];

const ServicesSection = () => {
  const { t } = useTranslation();
  const services = t("services.items", { returnObjects: true });

  return (
    <section id="services" className="servicesSection">
      <div className="container">
        <div className="services-title">
          <p className="section-eyebrow">{t("services.eyebrow")}</p>
          <Title text={t("services.title")} />
        </div>
        <p className="services-intro">{t("services.description")}</p>
        <div className="services-grid">
          {services.map((service, index) => {
            const Icon = icons[index];

            return (
              <article key={service.title} className="service-card">
                <div className="service-icon">
                  <Icon />
                </div>
                <p className="service-number">0{index + 1}</p>
                <h2>{service.title}</h2>
                <p>{service.description}</p>
              </article>
            );
          })}
        </div>
        <a className="services-cta" href="#contact">
          {t("services.cta")}
        </a>
      </div>
    </section>
  );
};

export default ServicesSection;
