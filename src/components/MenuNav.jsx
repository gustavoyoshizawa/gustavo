import { FaLinkedin, FaGithub, FaEnvelope, FaWhatsapp } from "react-icons/fa";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import ThemeSwitcher from "./ThemeSwitcher";
import BrazilFlag from "/assets/img/brazil.png";
import USAFlag from "/assets/img/united-states.png";

const MenuNav = () => {
  const [active, setActive] = useState(false);
  const { i18n } = useTranslation();
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
              <a href="">Meu currículo</a>
            </li>
            <li className="btn-lang">
              <button onClick={() => handleChangeLanguage("pt")}>
                <img src={BrazilFlag} alt="" />
              </button>
              <button>
                <img
                  onClick={() => handleChangeLanguage("en")}
                  src={USAFlag}
                  alt=""
                />
              </button>
            </li>
            <li className="theme-switch">
              <ThemeSwitcher />
            </li>
            <li>
              <ul>
                <li>
                  <FaLinkedin />
                </li>
                <li>
                  <FaGithub />
                </li>
                <li>
                  <FaEnvelope />
                </li>
                <li>
                  <FaWhatsapp />
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
