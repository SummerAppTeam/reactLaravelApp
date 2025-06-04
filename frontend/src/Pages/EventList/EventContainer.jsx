
  import { useState, useEffect } from "react";
  import axios from "axios";
  import EventList from "./EventList";
  import GetEventEmoji from "./eventEmoji";
  import GetEventImage from "../../Components/Events/EventImages";
  import DotLoader from "react-spinners/DotLoader";
  import "./eventList.css";
  import EventCalendar from "../EventList/EventCalendar/EventCalendar";

  const EventContainer = () => {
    const [events, setEvents] = useState([]);
    const [error, setError] = useState(null);
    const [type, setType] = useState(null);
    const [loading, setLoading] = useState(true);
    const [visibleCount, setVisibleCount] = useState(3);
    const [showCalendar, setShowCalendar] = useState(false);

  
    const fetchEvents = () => {
      setLoading(true);
      axios
        .get("http://127.0.0.1:8000/api/events")
        .then(response => {
          setEvents(response.data || []);
          setLoading(false);
        })
        .catch(() => {
          setError("Failed to fetch events");
          setLoading(false);
        });
    };

   
    useEffect(() => {
      fetchEvents();
    }, []);

    if (loading) return <DotLoader />;
    if (error) return <p>{error}</p>;

    
    const filteredEvents = type ? events.filter(event => event.type === type) : events;

    return (
      <div className="pageWrapper">
        <div className="eventContainer">
         
          <div className="viewToggle">
            <button onClick={() => setShowCalendar(prev => !prev)}>
              {showCalendar ? "Show List View" : "Show Calendar View"}
            </button>
          </div>
    
         
          {!showCalendar && (
            <section className="categorySection">
              <h2>Browse by Category</h2>
              <div className="categoryButtons">
                <button onClick={() => setType(null)}>All</button>
                <button onClick={() => setType("Festival")}>🎉 Festival</button>
                <button onClick={() => setType("Concert")}>🎵 Concert</button>
                <button onClick={() => setType("Sport")}>⚽ Sport</button>
                <button onClick={() => setType("Performance")}>🎭 Performance</button>
                <button onClick={() => setType("Exhibition")}>🖼️ Exhibition</button>
                <button onClick={() => setType("Comedy")}>🎤 Comedy</button>
              </div>
            </section>
          )}
    
         
          {showCalendar ? (
            <EventCalendar events={filteredEvents} />
          ) : (
            <div className="tickets">
              {filteredEvents.slice(0, visibleCount).map(event => {
                const eventEmoji = GetEventEmoji(event.type);
                const eventImage = GetEventImage(event.type);
    
                return (
                  <div key={event.id} className="message">
        <EventList
          {...event}
          eventEmoji={eventEmoji}
          eventImage={eventImage}
          onDelete={fetchEvents}
        
        />
      </div>
                );
              })}
            </div>
          )}
        </div>
    
        {/* Show More / Show Less buttons outside .tickets, at bottom */}
        {!showCalendar && (
          <div className="showButtons">
            {visibleCount < filteredEvents.length && (
              <button onClick={() => setVisibleCount(v => v + 6)}>Show More Events</button>
            )}
            {visibleCount > 3 && (
              <button onClick={() => setVisibleCount(v => Math.max(3, v - 6))}>Show Less Events</button>
            )}
          </div>
        )}
      </div>
    );
    
  };

  export default EventContainer;
