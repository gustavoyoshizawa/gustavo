import { useState, useEffect } from "react";
import Title from "./Title";
import Text from "./Text";
import { FaCaretUp, FaCaretDown } from "react-icons/fa";

import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";

const CardProjects = () => {
  const { t } = useTranslation();
  const projects = t("projects.jobs", { returnObjects: true });

  // const visibleCount = 3;
  const [visibleCount, setVisibleCount] = useState(3);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const updateVisibleCount = () => {
      if (window.innerWidth <= 600) {
        setVisibleCount(1);
      } else if (window.innerWidth <= 900) {
        setVisibleCount(2);
      } else {
        setVisibleCount(3);
      }
    };

    updateVisibleCount();
    window.addEventListener("resize", updateVisibleCount);
    return () => window.removeEventListener("resize", updateVisibleCount);
  }, []);

  const handleNext = () => {
    if (currentIndex + visibleCount < projects.length) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className="projects-container">
      <button className="carousel-btn" onClick={handlePrev}>
        <FaCaretUp />
      </button>

      <ul className="carousel-items">
        {projects
          .slice(currentIndex, currentIndex + visibleCount)
          .map((role, index) => (
            <li key={index} className="carousel-item">
              <a href={role.link} target="_blank" rel="noopener noreferrer">
                <img src={role.src} alt={role.name} />
              </a>
              <div className="carousel-text">
                <Title
                  text={role.name}
                  level={2}
                  className="titleProject"
                ></Title>
                <Text>{role.description}</Text>
                <ul className="tecnologiasArray">
                  {role.technologies.map((tecnologia) => (
                    <li key={tecnologia}>{tecnologia}</li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
      </ul>

      <button className="carousel-btn" onClick={handleNext}>
        <FaCaretDown />
      </button>
    </div>
  );
};

CardProjects.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      descricao: PropTypes.string,
    })
  ).isRequired,
  visibleCount: PropTypes.number,
};

export default CardProjects;
