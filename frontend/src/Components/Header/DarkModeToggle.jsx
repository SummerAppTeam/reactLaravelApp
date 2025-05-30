import { DarkModeSwitch } from "react-toggle-dark-mode";
import { useState } from "react";
import axios from "axios";
import "./header.css";
import "../../App.css";

function DarkModeToggle() {
  const [isDarkMode, setDarkMode] = useState(false);

  const toggleDarkMode = async (checked) => {
    setDarkMode(checked);

    if (checked) {
      document.body.classList.add("darkMode");
    } else {
      document.body.classList.remove("darkMode");
    }

    try {
      await axios.post("/api/");
    } catch (error) {
      console.error("Failed to save mode preference");
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
