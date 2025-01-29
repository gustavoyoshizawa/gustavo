import { useTranslation } from "react-i18next";
import Title from "./Title";
import Subtitle from "./subtitle";
import Text from "./text";
import Cards from "./cards";
import technologies from "../data/technologies.js";
import "../styles/css/style.min.css";

const AboutSection = () => {
  const { t } = useTranslation();

  return (
    <section id="about" className="about-section">
      <div className="container about-container">
        <div className="about-title">
          <Title text={t("about.title")} level={1}></Title>
        </div>
        <Subtitle
          className="about-subtitle"
          text={t("about.description.0")}
        ></Subtitle>
        <div className="about-info">
          <div className="testado">
            <div className="col-7">
              <div className="about-text">
                <Title text={t("about.titles.0")} level={2}></Title>
                <Text highlight={true}>
                  {t("about.introduction.0")}{" "}
                  <strong>{t("about.introduction.1")}</strong>
                  {t("about.introduction.2")}
                </Text>
                <Text highlight={false}>{t("about.introduction.3")}</Text>
                <Text highlight={true}>
                  {t("about.introduction.4")}{" "}
                  <strong>{t("about.introduction.5")}</strong>
                  {t("about.introduction.6")}
                  <strong>{t("about.introduction.7")}</strong>
                </Text>
              </div>
            </div>
            <div className="col-5">
              <div className="about-tech">
                <Title text={t("about.titles.1")} level={2}></Title>

                <Cards items={technologies}></Cards>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
