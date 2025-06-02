import React, { useState } from "react";
import "./eventList.css";

const EventList = ({ id, name, date, location, type, eventEmoji, eventImage }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="eventTicket">
      <img src={eventImage} className="editImage" alt="Event" />
      
     
      <div className="weatherModalIcon">
        <p
          onClick={() => setIsModalOpen(!isModalOpen)}
        >
          ☀️ Click me 
        </p>

        {isModalOpen && (
          <div className="weatherModalWindow">
            <p>This event is outdoors and sun-filled!</p>
          </div>
        )}
      </div>

      <p>Id: {id}</p>
      <p>Name: {name}</p>
      <p>Date: {date}</p>
      <p>Location: {location}</p>
      <p>Type: {type} {eventEmoji}</p>
    </div>
  );
};

export default EventList;
