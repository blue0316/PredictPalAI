import React from "react";
import "./ThemeToggle.css";
import { useThemeProvider } from "@contexts/themeContext";

const ThemeToggle = ({ label = true, size = "md" }) => {
  const { theme, toggleTheme, direction } = useThemeProvider();

  const handleThemeChange = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", newTheme);
    toggleTheme();
  };

  return (
    <label
      htmlFor="theme"
      className={`theme ${direction === "rtl" ? "theme--rtl" : ""}`}
    >
      {label && <span>Light</span>}
      <span className="theme__toggle-wrap">
        <input
          id="theme"
          className="theme__toggle"
          type="checkbox"
          role="switch"
          name="theme"
          value={theme === "dark" ? "dark" : "light"}
          checked={theme === "dark"}
          onChange={handleThemeChange}
        />
        <span className="theme__fill"></span>
        <span className="theme__icon">
          <span className="theme__icon-part"></span>
          <span className="theme__icon-part"></span>
          <span className="theme__icon-part"></span>
          <span className="theme__icon-part"></span>
          <span className="theme__icon-part"></span>
          <span className="theme__icon-part"></span>
          <span className="theme__icon-part"></span>
          <span className="theme__icon-part"></span>
          <span className="theme__icon-part"></span>
        </span>
      </span>
      {label && <span>Dark</span>}
    </label>
  );
};

export default ThemeToggle;
