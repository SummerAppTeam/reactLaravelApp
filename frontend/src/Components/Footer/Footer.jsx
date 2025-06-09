import { NavLink } from "react-router-dom";
import "./footer.css";
import Newsletter from "./NewsLetter";

function Footer(props) {
  return (
    <footer className={props.className}>
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
            <NavLink to="/events">Events</NavLink>
          </li>
        </ul>
      </nav>

      <Newsletter />

      <section className="contact">
        <p>
          Reach us anytime at<br />
          contact@events.com <br />
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
