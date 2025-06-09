import { DarkModeSwitch } from "react-toggle-dark-mode";
import { useState, useEffect } from "react";
import axios from "axios";
import "./header.css";
import "../../App.css";

function DarkModeToggle() {
  const [isDarkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setDarkMode(true);
      document.body.classList.add("darkMode");
    }
  }, []);

  const toggleDarkMode = async (checked) => {
    setDarkMode(checked);

    const theme = checked ? "dark" : "light";
    localStorage.setItem("theme", theme);

    if (checked) {
      document.body.classList.add("darkMode");
    } else {
      document.body.classList.remove("darkMode");
    }

    try {
      await axios.post("/api/theme", { theme });
    } catch (error) {
      console.error("Failed to save mode preference", error);
    }
  };

  return (
    <DarkModeSwitch
      checked={isDarkMode}
      onChange={toggleDarkMode}
      size={30}
      sunColor="yellow"
      moonColor="black"
    />
  );
}

export default DarkModeToggle;

