import { NavLink } from "react-router";
import "./footer.css";
import Newsletter from "./NewsLetter";

function Footer(props) {
  return (
    <footer>
      <nav>
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
            <NavLink to="/EventList">Events</NavLink>
          </li>
        </ul>
      </nav>
      <Newsletter />
      <h3>Copyright {props.className}</h3>
    </footer>
  );
}
export default Footer;
