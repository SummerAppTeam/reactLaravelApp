import { useState } from "react";
import { NavLink } from "react-router";
import "./header.css";
import DarkModeToggle from "./DarkModeToggle"

//mobile and desktop menu

function Header(props) {
  const [menuOpen, setMenuOpen] = useState(!1);
  return (
    <header className="header">
    
      <NavLink to="/"> {/*'Logo takes back to frontpage*/}
         <h2>Events</h2>
        
         
      </NavLink>
       <DarkModeToggle />
      {!menuOpen && (
        <button
          id="menuToggle"
          onClick={() => setMenuOpen(!0)}
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
            onClick={() => setMenuOpen(!1)}
            aria-label="Close mobile menu"
          >
            <span className="material-icons" id="closeIcon">
              close
            </span>
          </button>
        )}
        <div className="mobileNav">
          <ul>
            <li>
              <NavLink to="/">Frontpage</NavLink>
            </li>
            <li>
              <NavLink to="/About">About us</NavLink>
            </li>
            <li>
              <NavLink to="/AddEvent">Add Event</NavLink>
            </li>
            <li>
              <NavLink to="/events">Events</NavLink>
            </li>
          </ul>
        </div>
      </nav>
      <nav className="desktopMenu">
        <ul>
          <li>
            <NavLink to="/">Frontpage</NavLink>
          </li>
          <li>
            <NavLink to="/About">About us</NavLink>
          </li>
          <li>
            <NavLink to="/AddEvent">Add Event</NavLink>
          </li>
          <li>
            <NavLink to="/events">Events</NavLink>
          </li>
        </ul>
      </nav>
      
    </header>
    
  );
}
export default Header;