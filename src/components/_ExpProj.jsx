import Title from "./Title";
import "../styles/css/style.min.css";
import Jobs from "./jobs.jsx";
import CardProjects from "./CardProjects";
import { useTranslation } from "react-i18next";

const ExpProj = () => {
  const { t } = useTranslation();

  return (
    <section id="exp" className=" ExpProjSection">
      <div className="container">
        <div className="ExpProjItems">
          <div className="col-6 experience">
            <div className="ExpTitle">
              <Title text={t("experience.title")} level={1}></Title>
            </div>
            <Jobs items={t("experience.roles")}></Jobs>
          </div>
          <div className="col-6 projects">
            <div className="ProjTitle">
              <Title text={t("projects.title")} level={1}></Title>
            </div>
            <CardProjects items={t("projects.jobs")}></CardProjects>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExpProj;
