import "./eventDetails.css";

const EventDetailsContent = ({ event, navigate }) => {
  return (
    <div className="eventDetailContainer">
       <button onClick={() => navigate(-1)} className="goBackButton">Go Back</button>
      <div className="sectionOne">
      <div className="eventContainer">
         <div className="eventInfo">
     

     
     <div className="eventHeader">
      
    <img
          src={
            event.image ||
            "https://images.pexels.com/photos/2311602/pexels-photo-2311602.jpeg?auto=compress&cs=tinysrgb&h=750&dpr=2"
          }
          alt={event.name}
          className="eventImage"
        />
     
      <div className="longDescription">
     
                  <h2 className="eventName">{event.name} {event.eventEmoji || "🎉"}
</h2>
        <h3>About the Event</h3>
    
        <p>{event.description}</p>
  
        <p>Date: {event.date}</p>
        <p>
          <strong>Location:</strong> {event.location}
        </p>
        <p>
          <strong>Price:</strong> €{event.price}
        </p>
        <p>{event.long_description}</p>
       </div></div></div></div></div>

     

      <div className="eventExtra">
    
        <div className="eventContent"> <h4>What to Expect at Our Events</h4>
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
          <li>Events in multiple categories</li>
          <li>👨‍👩‍👧‍👦 Family friendly events</li>
          <li>📅 Memorable experiences and lasting connections</li>
        </ul>
      </div>     <img src="https://images.pexels.com/photos/1263986/pexels-photo-1263986.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Vibes" className="happyCustomers"></img></div>

      <div className="eventReviews">
        <h4>Join our happy customers!</h4>
        <ul>
          
          <li>
            <img src="https://images.pexels.com/photos/1263986/pexels-photo-1263986.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Vibes" classname="happyCustomers"></img>
            "An unforgettable experience with amazing vibes and fantastic
            entertainment!" 
          </li>
          <li>
            <img src="https://images.pexels.com/photos/1263986/pexels-photo-1263986.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Vibes" classname="happyCustomers"></img>
            "The perfect blend of great music, tasty food and friendly people."
          </li>
          <li>
                <img src="https://images.pexels.com/photos/1263986/pexels-photo-1263986.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Vibes" classname="happyCustomers"></img>
            "Every event leaves me wanting more — truly a community
            celebration."
          </li>
          <li>
              <img src="https://images.pexels.com/photos/1263986/pexels-photo-1263986.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Vibes" classname="happyCustomers"></img>
            "Fun for all ages with something exciting around every corner!"
          </li>
     
        </ul>
      </div>
            <div className="eventSafetyFaqContainer">


      <div className="eventSafety">
        <h3>Health & Safety</h3>
      
          <p>
         Your safety is our top priority. We diligently ensure that every event adheres to strict health and safety protocols, including thorough venue maintenance and regular safety inspections. <br></br><br></br>Clear emergency procedures are established and communicated to all attendees and staff to guarantee a quick and efficient response if needed. Our facilities are fully accessible to accommodate all guests, including those with mobility challenges or special needs. <br></br> <br></br>Additionally, we collaborate closely with local health authorities to stay updated on any new guidelines, making sure every aspect of your experience is comfortable, secure, and enjoyable from start to finish. Your well-being is at the heart of everything we do.
          </p>
     
      </div>

      <div className="eventFAQ">
        <h3>Frequently Asked Questions</h3>

        <p>
          <strong>Q: Can I buy tickets through the app?</strong>
          <br />
          A: Not at the moment. Ticket purchases are done on the event’s own
          website or platform.
        </p>

        <p>
          <strong>Q: Are pets allowed?</strong>
          <br />
          A: It depends on the event. Always check with the organizer
          beforehand. Only service animals are allowed for safety reasons.
        </p>

        <p>
          <strong>Q: Can I bring my own food and drinks?</strong>
          <br />
          A: Some events allow it, but be sure to confirm with the event
          organizers first.
        </p>

        <p>
          <strong>Q: Are events wheelchair accessible?</strong>
          <br />
          A: Many venues are wheelchair accessible, but it’s best to confirm
          with the organizer before attending.
        </p>

    
      </div>
    </div></div>
  );
};

export default EventDetailsContent;