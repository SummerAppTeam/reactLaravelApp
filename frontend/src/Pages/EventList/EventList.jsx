import { useState } from "react";
import "./eventList.css";

const EventList = ({
  name,
  date,
  location,
  type,
  description,
  price,
  image,
  eventEmoji,
  eventImage,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLocationModalOpen, setIsLocationModalOpen] = useState(false);

  return (
    <div className="eventTicket">
      <img
        src={eventImage}
        className="editImage"
        alt="Image that checks event type"
      />{" "}
      {/*Only with React*/}
      <img
        src={
          image ||
          "https://images.pexels.com/photos/2311602/pexels-photo-2311602.jpeg?auto=compress&cs=tinysrgb& w=1260&h=750&dpr=2"
        }
        alt="Individual event image from database"
        className="eventImage" /*Image url in backend database. || marks default*/
      />
      <div>
        <div className="weatherModalIcon">
          <p onClick={() => setIsModalOpen(!isModalOpen)}>☀️ 🌧️</p>

          {isModalOpen && (
            <div className="weatherModalWindow">
              <p>All events need to have different weather</p>
              <button onClick={() => setIsModalOpen(false)}>
                {" "}
                <span className="material-icons" id="closeIcon">
                  close
                </span>
              </button>
            </div>
          )}
        </div>
      </div>
      <p>{name}</p>
      <p>{date}</p>
      <div className="locationModalIcon">
        <p onClick={() => setIsLocationModalOpen(!isLocationModalOpen)}>
          {location} 🧭
        </p>
        {isLocationModalOpen && (
          <div className="locationModalWindow">
            <p>All events need different map!</p>
            <button onClick={() => setIsLocationModalOpen(false)}>
              {" "}
              <span className="material-icons" id="closeIcon">
                close
              </span>
            </button>
          </div>
        )}
      </div>
      <p>{description}</p>
      <p>
        {type} {eventEmoji}
      </p>
      <p>Price: €{price} </p>
    </div>
  );
};

export default EventList;
