import { NavLink } from "react-router"; 
import "./footer.css";
import Newsletter from "./NewsLetter";

function Footer() {
  return (
    <footer>
      <nav>
        <ul>

          <li>
            <NavLink to="/">Home</NavLink>
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
          Contact us anytime at<br></br>
          support@nordiclights.fi <br></br>
          Or call us at <br />
          +044 577 7XX ☎️ <br />
          We're always happy to help!
        </p>
      </section>
      <h3>Copyright {props.className}</h3>

    </footer>
  );
}

export default Footer;
