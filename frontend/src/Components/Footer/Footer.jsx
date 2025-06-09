import { NavLink } from "react-router-dom";
import "./footer.css";
import Newsletter from "./NewsLetter";

function Footer(props) {
  return (
    <footer className={props.className}>
      <nav>
        <ul>
          <li><NavLink to="/">Event Guide</NavLink></li>
          <li><NavLink to="/about">About Us</NavLink></li>
          <li><NavLink to="/privacy">Privacy</NavLink></li>
          <li><NavLink to="/contact">Contact Us</NavLink></li>
          <li><NavLink to="/policy">Service & Policy</NavLink></li>
        </ul>
        <ul>
          <li><NavLink to="/">Frontpage</NavLink></li>
          <li><NavLink to="/About">About Us</NavLink></li>
          <li><NavLink to="/AddEvent">Add Event</NavLink></li>
          <li><NavLink to="/EventList">Events</NavLink></li>
        </ul>
      </nav>
      <Newsletter />
      <h3>© {new Date().getFullYear()} Summer App Team</h3>
    </footer>
  );
}

export default Footer;

