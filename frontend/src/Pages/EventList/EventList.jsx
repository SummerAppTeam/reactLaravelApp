import React, { useState } from "react";
import "./eventList.css";

const EventList = ({
  name,
  date,
  location,
  type,
  description,
  price,
  eventEmoji,
  eventImage,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="eventTicket">
      <img src={eventImage} className="editImage" alt="Events" />

      <div className="weatherModalIcon">
        <p onClick={() => setIsModalOpen(!isModalOpen)}>☀️ Click me</p>

        {isModalOpen && (
          <div className="weatherModalWindow">
            <p>All events need to have different output</p>
          </div>
        )}
      </div>

      <p>{name}</p>
      <p>{date}</p>
      <p>{location}</p>
      <p>
        {type} {eventEmoji}
      </p>
      <p>{description}</p>
      <p>Price: ${price}</p>
    </div>
  );
};

export default EventList;
