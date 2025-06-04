import { useState, useEffect } from "react";
import axios from "axios";
import EventList from "./EventList";
import GetEventEmoji from "./eventEmoji";
import GetEventImage from "../../Components/Events/EventImages";
import "./eventList.css";


 const EventContainer = ({}) => {
  const [events, setEvents] = useState([]);
  const [error, setError] = useState(null);

  const fetchEvents = async () => {
    try {
      const response = await axios.get("http://127.0.0.1:8000/api/events"); //check your own url. It's php url + /events. Add something to database too se if it works. 
      setEvents(response.data || []);
    } catch (error) {
      setError("Failed to fetch events");
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []); // Makes sure that the function only runs once  


  return (
    <div>
    <div>{error}</div>
      <div className="tickets">
        {events.map((event) => {
          const eventEmoji = GetEventEmoji(event.type);
          const eventImage = GetEventImage(event.type)
        
          return (
            <div key={event.id} className="message">
           
              <EventList
                {...event}
                darkMode={true} //add dark mode
                eventEmoji={eventEmoji}
                eventImage={eventImage}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default EventContainer;