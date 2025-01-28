import { FaSun, FaMoon } from "react-icons/fa"; // Ícones corretos do react-icons
import { useState, useEffect } from "react";

const ThemeSwitcher = () => {
  const [theme, setTheme] = useState(() => {
    // Recupera o tema salvo no localStorage ou usa 'light' como padrão
    return localStorage.getItem("theme") || "light";
  });

  useEffect(() => {
    // Aplica a classe do tema no <html>
    document.documentElement.className = theme;

    // Salva o tema no localStorage
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    // Alterna entre os temas 'light' e 'dark'
    setTheme((prevTheme) => {
      const newTheme = prevTheme === "light" ? "dark" : "light";
      return newTheme;
    });
  };

  return (
    <div className="switchTheme">
      {/* Checkbox para alternar entre os temas */}
      <input
        type="checkbox"
        className="checkbox"
        id="checkbox"
        onChange={toggleTheme} // Alterna o tema ao clicar
        checked={theme === "dark"} // Marca o checkbox se o tema for 'dark'
      />
      <label htmlFor="checkbox" className="label">
        {/* Ícones dinâmicos */}
        <FaSun className="fa-sun" />
        <FaMoon className="fa-moon" />
        <div className="ball"></div>
      </label>
    </div>
  );
};

export default ThemeSwitcher;
