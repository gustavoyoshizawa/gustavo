import Title from "./Title";
import "../styles/css/style.min.css";
import Jobs from "./Jobs.jsx";
import CardProjects from "./CardProjects";
import { useTranslation } from "react-i18next";
import Subtitle from "./Subtitle";

const ExpProj = () => {
  const { t } = useTranslation();

  return (
    <section id="exp" className=" ExpProjSection">
      <div className="container">
        <div className="exp-intro">
          <p className="section-eyebrow">{t("experienceProjects.eyebrow")}</p>
          <Title text={t("experienceProjects.title")} level={1}></Title>
          <Subtitle text={t("experienceProjects.description")}></Subtitle>
        </div>
        <div className="ExpProjItems">
          <div className="experience-panel">
            <div className="panel-heading">
              <p className="section-number">01</p>
              <Title
                text={t("experience.title")}
                level={2}
                className="panel-title"
              ></Title>
            </div>
            <Jobs items={t("experience.roles")}></Jobs>
          </div>
          <div className="projects-panel">
            <div className="panel-heading">
              <p className="section-number">02</p>
              <Title
                text={t("projects.title")}
                level={2}
                className="panel-title"
              ></Title>
            </div>
            <CardProjects items={t("projects.jobs")}></CardProjects>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExpProj;
