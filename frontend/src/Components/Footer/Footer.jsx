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
            <NavLink to="/Events">Events</NavLink>
          </li>
        </ul>
      </nav>

      <Newsletter />

      <section className="contact">
        <p>
          Reach us anytime at<br></br>
          contact@events.com <br></br>
          Or call us at <br />
          +044 567 890 ☎️ <br />
          We're always happy to help!
        </p>
      </section>
      <h3>Copyright {props.className}</h3>
    </footer>
  );
}
export default Footer;
