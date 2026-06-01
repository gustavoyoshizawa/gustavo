import { useState } from "react";
import { useTranslation } from "react-i18next";
import {
  FaArrowLeft,
  FaArrowRight,
  FaChartLine,
  FaCode,
  FaDatabase,
  FaExternalLinkAlt,
} from "react-icons/fa";
import Title from "./Title";
import Text from "./Text";

const visualIcons = {
  dashboard: FaChartLine,
  pipeline: FaDatabase,
};

const CardProjects = () => {
  const { t } = useTranslation();
  const [activeTrack, setActiveTrack] = useState("data");
  const [currentIndex, setCurrentIndex] = useState(0);
  const projects = t(`projects.groups.${activeTrack}`, { returnObjects: true });

  const handleTrackChange = (track) => {
    setActiveTrack(track);
    setCurrentIndex(0);
  };

  const handleNext = () => {
    if (currentIndex < projects.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const hasPrevious = currentIndex > 0;
  const hasNext = currentIndex < projects.length - 1;
  const activeProject = projects[currentIndex];

  const renderProjectVisual = (project) => {
    if (project.src) {
      return <img src={project.src} alt={project.name} />;
    }

    const VisualIcon = visualIcons[project.visual] || FaCode;

    return (
      <div className="project-visual">
        <VisualIcon aria-hidden="true" />
        <span>{project.type}</span>
      </div>
    );
  };

  return (
    <div className="projects-container">
      <div
        aria-label={t("projects.tracks.aria")}
        className="track-toggle project-track-toggle"
        role="group"
      >
        {["data", "frontend"].map((track) => (
          <button
            aria-pressed={activeTrack === track}
            className={activeTrack === track ? "active" : ""}
            key={track}
            onClick={() => handleTrackChange(track)}
            type="button"
          >
            {t(`projects.tracks.${track}`)}
          </button>
        ))}
      </div>
      <div className="project-carousel-toolbar">
        <p className="project-counter">
          <strong>{String(currentIndex + 1).padStart(2, "0")}</strong>
          <span>/ {String(projects.length).padStart(2, "0")}</span>
        </p>
        <div className="carousel-controls">
          <button
            aria-label={t("projects.previous")}
            className="carousel-btn"
            disabled={!hasPrevious}
            onClick={handlePrevious}
            type="button"
          >
            <FaArrowLeft />
          </button>
          <button
            aria-label={t("projects.next")}
            className="carousel-btn"
            disabled={!hasNext}
            onClick={handleNext}
            type="button"
          >
            <FaArrowRight />
          </button>
        </div>
      </div>

      <div className="carousel-viewport">
        <ul
          className="carousel-track"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {projects.map((project) => (
            <li
              aria-hidden={project.name !== activeProject.name}
              className="carousel-slide"
              key={`${activeTrack}-${project.name}`}
            >
              <article className="carousel-item">
                {project.link ? (
                  <a
                    className="project-image"
                    href={project.link}
                    tabIndex={project.name === activeProject.name ? 0 : -1}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {renderProjectVisual(project)}
                  </a>
                ) : (
                  <div className="project-image">
                    {renderProjectVisual(project)}
                  </div>
                )}
                <div className="carousel-text">
                  <Title
                    className="titleProject"
                    level={2}
                    text={project.name}
                  ></Title>
                  <Text>{project.description}</Text>
                  <ul className="tecnologiasArray">
                    {project.technologies.map((technology) => (
                      <li key={technology}>{technology}</li>
                    ))}
                  </ul>
                  {project.link && (
                    <a
                      className="project-link"
                      href={project.link}
                      tabIndex={project.name === activeProject.name ? 0 : -1}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {t("projects.open")}
                      <FaExternalLinkAlt />
                    </a>
                  )}
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>

      <div className="project-progress">
        <span
          style={{ width: `${((currentIndex + 1) / projects.length) * 100}%` }}
        ></span>
      </div>
    </div>
  );
};

export default CardProjects;
