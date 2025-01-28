import "../styles/css/style.min.css";
import { useState, useEffect } from "react";

const SectionIndicators = () => {
  const [activeSection, setActiveSection] = useState(0); // Estado da seção ativa
  const sections = ["home", "about", "exp", "contact", "pokemon", "footer"]; // IDs das seções

  useEffect(() => {
    const handleScroll = () => {
      const sectionOffsets = sections.map((id) => {
        const element = document.getElementById(id);
        return element ? element.offsetTop : 0; // Obtém a posição de cada seção
      });

      const scrollPosition = window.scrollY + window.innerHeight / 20; // Posição de rolagem + ajuste central

      // Determina qual seção está visível
      const currentSection = sectionOffsets.findIndex(
        (offset, index) =>
          scrollPosition >= offset &&
          (index === sectionOffsets.length - 1 ||
            scrollPosition < sectionOffsets[index + 1])
      );

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll); // Limpa o listener
  }, [sections]);

  return (
    <div className="section-indicators">
      {sections.map((id, index) => (
        <a
          key={id}
          href={`#${id}`}
          className={index === activeSection ? "active" : ""} // Aplica a classe "active" na seção correspondente
        ></a>
      ))}
    </div>
  );
};

export default SectionIndicators;
