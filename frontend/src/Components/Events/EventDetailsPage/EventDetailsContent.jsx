import "./eventDetails.css";

const EventDetailsContent = ({ event, navigate }) => {
  return (
    <div className="eventDetailContainer">
      <button onClick={() => navigate(-1)}>Go Back</button>

      <div className="eventHeader">
        <img
          src={
            event.image ||
            "https://images.pexels.com/photos/2311602/pexels-photo-2311602.jpeg?auto=compress&cs=tinysrgb&h=750&dpr=2"
          }
          alt={event.name}
          className="eventImage"
        />
        <h2 className="eventName">{event.name}</h2>
        <p className="eventEmoji">{event.eventEmoji || "🎉"}</p>
      </div>

      <div className="eventInfo">
        <p>{event.description}</p>
        <p>Date: {event.date}</p>
        <p>
          <strong>Location:</strong> {event.location}
        </p>
        <p>
          <strong>Price:</strong> €{event.price}
        </p>
      </div>

      <div className="eventDescription">
        <h3>About the Event</h3>
        <p>{event.long_description}</p>
      </div>

      <div className="eventExtra">
        <h4>What to Expect at Our Events</h4>
        <p>
          Our event selection is carefully hand-picked to offer diverse,
          engaging experiences that everyone can enjoy. We prioritize
          accessibility and quality to ensure memorable moments for all
          attendees.
        </p>
        <ul>
          <li>🎶 Engaging live music and performances</li>
          <li>🍽️ Delicious food and refreshing drinks</li>
          <li>🎉 Exciting activities for everyone</li>
          <li>🤝 Friendly atmosphere and great company</li>
          <li>📅 Memorable experiences and lasting connections</li>
        </ul>
      </div>

      <button onClick={() => navigate(-1)}>Go Back</button>

      <div className="eventReviews">
        <h4>Join our happy customers!</h4>
        <ul>
          <li>
            "An unforgettable experience with amazing vibes and fantastic
            entertainment!"
          </li>
          <li>
            "The perfect blend of great music, tasty food, and friendly people."
          </li>
          <li>
            "Every event leaves me wanting more — truly a community
            celebration."
          </li>
          <li>
            "Fun for all ages with something exciting around every corner!"
          </li>
          <li>
            "A vibrant atmosphere that makes every moment special and
            memorable."
          </li>
        </ul>
      </div>
      <div className="eventCovidSafety">
        <h3>Health & Safety</h3>
        <p>
          Your safety is our priority. We adhere to all local health guidelines,
          including sanitization stations and recommended social distancing.
          Masks are encouraged but optional depending on current regulations.
        </p>
      </div>

      <div className="eventFAQ">
        <h3>Frequently Asked Questions</h3>
        <p>
          Q: Can I bring my own food and drinks?
          <br />
          A:Outside food and drinks are not allowed, but we have a great
          selection available on-site.
        </p>
        <p>
          Q:Are pets allowed?
          <br />
          A:Only service animals are permitted for safety reasons.
        </p>
      </div>
    </div>
  );
};

export default EventDetailsContent;
