import { FaLinkedin, FaGithub, FaEnvelope, FaWhatsapp } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import ThemeSwitcher from "./ThemeSwitcher";
import BrazilFlag from "/assets/img/brazil.png";
import USAFlag from "/assets/img/united-states.png";

const MenuNav = () => {
  const [active, setActive] = useState(false);
  const menuContainer = useRef(null);
  const { i18n, t } = useTranslation();
  const toggleMenu = () => {
    setActive((isActive) => !isActive);
  };

  const handleChangeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  useEffect(() => {
    const handlePointerDown = (event) => {
      if (
        active &&
        menuContainer.current &&
        !menuContainer.current.contains(event.target)
      ) {
        setActive(false);
      }
    };

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setActive(false);
      }
    };

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [active]);

  return (
    <div ref={menuContainer} className="MenuContainer">
      <button
        aria-controls="menu-panel"
        aria-expanded={active}
        aria-label={active ? "Fechar menu" : "Abrir menu"}
        className={active ? "icon iconActive" : "icon"}
        onClick={toggleMenu}
        type="button"
      >
        <div className="hamburguer hamburguerIcon"></div>
      </button>
      <div
        aria-hidden={!active}
        className={active ? "menu menuOpen" : "menu menuClose"}
        id="menu-panel"
      >
        <nav className="list">
          <ul className="listItems">
            <li>
              <a
                href="/assets/Gustavo.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                {t("header.cv")}
              </a>
            </li>
            <li className="btn-lang">
              <button
                aria-label="Alterar idioma para português"
                onClick={() => handleChangeLanguage("pt")}
              >
                <img src={BrazilFlag} alt="Brazil Flag" />
              </button>
              <button
                aria-label="Change language to English"
                onClick={() => handleChangeLanguage("en")}
              >
                <img
                  src={USAFlag}
                  alt="USA Flag"
                />
              </button>
            </li>
            <li className="theme-switch">
              <ThemeSwitcher />
            </li>
            <li>
              <ul>
                <li>
                  <a
                    href="https://www.linkedin.com/in/gustavo-yoshizawa/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaLinkedin />
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/gustavoyoshizawa"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {" "}
                    <FaGithub />
                  </a>
                </li>
                <li>
                  <a href="mailto:gustavoyoshizawa89@gmail.com">
                    <FaEnvelope />
                  </a>
                </li>
                <li>
                  <a
                    href="https://wa.me/5511983339019?text=Ol%C3%A1%20Gustavo%2C%20tudo%20bem%3F%0A%0AVim%20pelo%20seu%20portf%C3%B3lio%2C%20podemos%20conversar%3F"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {" "}
                    <FaWhatsapp />
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default MenuNav;
