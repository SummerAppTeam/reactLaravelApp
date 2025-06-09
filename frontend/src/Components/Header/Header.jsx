import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./header.css";
import DarkModeToggle from "./DarkModeToggle"

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <NavLink to="/" className="logo">
        <h2>Events</h2>
      </NavLink>
      {!menuOpen && (
        <button
          id="menuToggle"
          onClick={() => setMenuOpen(true)}
          aria-label="Toggle mobile menu"
        >
          <span className="material-icons">menu</span>
        </button>
      )}

      <nav
        id="mobileMenu"
        className={menuOpen ? "mobileMenu open" : "mobileMenu"}
        aria-label="Mobile menu"
      >
        {menuOpen && (
          <button
            id="closeMenu"
            onClick={() => setMenuOpen(false)}
            aria-label="Close mobile menu"
          >
            <span className="material-icons" id="closeIcon">close</span>
          </button>
        )}
        <div className="mobileNav">
          <ul>
            <li><NavLink to="/">Frontpage</NavLink></li>
            <li><NavLink to="/About">About Us</NavLink></li>
            <li><NavLink to="/AddEvent">Add Event</NavLink></li>
            <li><NavLink to="/EventList">Events</NavLink></li>
          </ul>
        </div>
      </nav>

      <nav className="desktopMenu">
        <ul>
          <li><NavLink to="/">Frontpage</NavLink></li>
          <li><NavLink to="/About">About Us</NavLink></li>
          <li><NavLink to="/AddEvent">Add Event</NavLink></li>
          <li><NavLink to="/EventList">Events</NavLink></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;

