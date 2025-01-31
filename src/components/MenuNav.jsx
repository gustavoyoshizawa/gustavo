import { FaLinkedin, FaGithub, FaEnvelope, FaWhatsapp } from "react-icons/fa";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import ThemeSwitcher from "./ThemeSwitcher";
import BrazilFlag from "/assets/img/brazil.png";
import USAFlag from "/assets/img/united-states.png";

const MenuNav = () => {
  const [active, setActive] = useState(false);
  const { i18n, t } = useTranslation();
  const ToggleMode = () => {
    setActive(!active);
  };

  const handleChangeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <div className="MenuContainer">
      <div className={active ? "icon iconActive" : "icon"} onClick={ToggleMode}>
        <div className="hamburguer hamburguerIcon"></div>
      </div>
      <div className={active ? "menu menuOpen" : "menu menuClose"}>
        <nav className="list">
          <ul className="listItems">
            <li>
              <a href="/assets/Gustavo.pdf" target="_blank">
                {t("header.cv")}
              </a>
            </li>
            <li className="btn-lang">
              <button onClick={() => handleChangeLanguage("pt")}>
                <img src={BrazilFlag} alt="Brazil Flag" />
              </button>
              <button>
                <img
                  onClick={() => handleChangeLanguage("en")}
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
                    href="https://www.linkedin.com/in/gustavo-yoshizawa-17915619b/"
                    target="_blank"
                  >
                    <FaLinkedin />
                  </a>
                </li>
                <li>
                  <a href="https://github.com/gustavoyoshizawa" target="_blank">
                    {" "}
                    <FaGithub />
                  </a>
                </li>
                <li>
                  <a href="mailto:gustavoyoshizawa89@gmail.com" target="_blank">
                    <FaEnvelope />
                  </a>
                </li>
                <li>
                  <a href="https://w.app/jl1qin" target="_blank">
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
