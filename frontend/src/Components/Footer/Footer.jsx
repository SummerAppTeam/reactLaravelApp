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
<section className="contact">
  <h4>We’d Love to Hear From You!</h4>
  <p>
    Have questions or just want to say hi? <br />
    Feel free to reach out anytime at <br />
    contact@events.com 📧
  </p>
  <p>
    Or give us a call at <br />
    +044 567 890 ☎️ <br />
    We’re always happy to help!
  </p>
</section>
      <Newsletter />
      <h3>Copyright {props.className}</h3>
    </footer>
  );
}
export default Footer;
