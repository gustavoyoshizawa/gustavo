import { useEffect } from "react";
import Header from "./components/Header";
import HeroSection from "./components/_HeroSection";
import Sidebar from "./components/Sidebar";
import SectionIndicators from "./components/SectionIndicators";
import AboutSection from "./components/_AboutSection";
import ExpProj from "./components/_ExpProj";
import ContactSection from "./components/_ContactSection";
import Footer from "./components/_Footer";

function App() {
  useEffect(() => {
    const targets = document.querySelectorAll(
      ".about-title, .about-subtitle, .about-text, .about-tech, .exp-intro, .experience-panel, .projects-panel, .ContactTitle, .contact-intro, .contact-links, .footer-panel"
    );
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    document.documentElement.classList.add("reveal-ready");

    targets.forEach((target, index) => {
      target.classList.add("reveal");
      target.style.setProperty("--reveal-delay", `${(index % 3) * 80}ms`);
    });

    if (prefersReducedMotion) {
      targets.forEach((target) => target.classList.add("is-visible"));
      return () => document.documentElement.classList.remove("reveal-ready");
    }

    const revealVisibleTargets = () => {
      targets.forEach((target) => {
        const bounds = target.getBoundingClientRect();
        const isVisible =
          bounds.top < window.innerHeight * 0.88 && bounds.bottom > 0;

        if (isVisible) {
          target.classList.add("is-visible");
        }
      });
    };

    revealVisibleTargets();
    window.addEventListener("scroll", revealVisibleTargets, { passive: true });
    window.addEventListener("resize", revealVisibleTargets);

    return () => {
      window.removeEventListener("scroll", revealVisibleTargets);
      window.removeEventListener("resize", revealVisibleTargets);
      document.documentElement.classList.remove("reveal-ready");
    };
  }, []);

  return (
    <div className="app">
      <Header />
      <Sidebar />
      <HeroSection />
      <SectionIndicators />
      <AboutSection />
      <ExpProj />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;
