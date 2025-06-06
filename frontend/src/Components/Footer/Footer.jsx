import { NavLink } from "react-router"; 
import "./footer.css";

function Footer() {
  return (
    <footer>
      <nav>
        <ul>
          <li><NavLink to="/">Event Guide</NavLink></li>
          <li><NavLink to="/about">About Us</NavLink></li>
          <li><NavLink to="/privacy">Privacy</NavLink></li>
          <li><NavLink to="/contact">Contact Us</NavLink></li>
          <li><NavLink to="/policy">Service & Policy</NavLink></li>
        </ul>
      </nav>
    </footer>
  );
}

export default Footer;
