import "../styles/css/style.min.css";
import { useState, useEffect } from "react";
import { Link } from "react-scroll";

const sections = ["home", "about", "exp", "contact", "services", "footer"];

const SectionIndicators = () => {
  const [activeSection, setActiveSection] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const sectionOffsets = sections.map((id) => {
        const element = document.getElementById(id);
        return element ? element.offsetTop : 0;
      });

      const scrollPosition = window.scrollY + window.innerHeight / 20;

      const currentSection = sectionOffsets.findIndex(
        (offset, index) =>
          scrollPosition >= offset &&
          (index === sectionOffsets.length - 1 ||
            scrollPosition < sectionOffsets[index + 1])
      );

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="section-indicators">
      {sections.map((id, index) => (
        <Link
          to={id}
          smooth={true}
          duration={500}
          key={id}
          href={`#${id}`}
          aria-label={`Ir para ${id}`}
          className={index === activeSection ? "active" : ""}
        ></Link>
      ))}
    </div>
  );
};

export default SectionIndicators;
