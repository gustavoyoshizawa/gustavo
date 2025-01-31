import { FaSun, FaMoon } from "react-icons/fa";
import { useState, useEffect } from "react";

const ThemeSwitcher = () => {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "light";
  });

  useEffect(() => {
    document.documentElement.className = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => {
      const newTheme = prevTheme === "light" ? "dark" : "light";
      return newTheme;
    });
  };

  return (
    <div className="switchTheme">
      <input
        type="checkbox"
        className="checkbox"
        id="checkbox"
        onChange={toggleTheme}
        checked={theme === "dark"}
      />
      <label htmlFor="checkbox" className="label">
        <FaSun className="fa-sun" />
        <FaMoon className="fa-moon" />
        <div className="ball"></div>
      </label>
    </div>
  );
};

export default ThemeSwitcher;
