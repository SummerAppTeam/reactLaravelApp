import { useState, useEffect } from "react";
import useAxios from "../../../hooks/useAxios";
import { DotLoader } from "react-spinners";
import EditEvent from "../EditEvent/EditEventForm";
import "./eventList.css";

const EventList = ({
  id,
  name,
  date,
  location,
  type,
  description,
  long_description,
  price,
  image,
  eventEmoji,
  eventImage,
  onDelete, // callback to refresh parent list after changes
  allEvents,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [editedEvent, setEditedEvent] = useState({
    name,
    date,
    location,
    type,
    description,
    long_description,
    price,
  });

  const { put, del } = useAxios();
  const [isFavorite, setIsFavorite] = useState(false);
  const currentDate = new Date().toISOString().split("T", 1)[0];

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem("favorites") || "{}");
    setIsFavorite(Boolean(favorites[id]));
  }, [id]);

  const toggleFavorite = () => {
    const newFav = !isFavorite;
    setIsFavorite(newFav);

    const favorites = JSON.parse(localStorage.getItem("favorites") || "{}");
    if (newFav) {
      favorites[id] = true;
    } else {
      delete favorites[id];
    }
    localStorage.setItem("favorites", JSON.stringify(favorites));
  };

  const handleInputChange = (e) => {
    setEditedEvent({ ...editedEvent, [e.target.name]: e.target.value });
  };

  /*const normalizeDate = (dateStr) => {
    if (!dateStr) return null;
    return new Date(dateStr).toISOString().split("T")[0];
  };

 
  /*const checkDateConflict = () => {
    const newDate = normalizeDate(editedEvent.date);
    return allEvents.some(
      (evt) => evt.id !== id && normalizeDate(evt.date) === newDate
    );
  };*/

  const handleUpdate = () => {
    setLoading(true);
    put(`api/events/${id}`, editedEvent)
      .then(() => {
        setIsEditing(false);
        onDelete();
      })
      .catch((error) => {
        console.error("Failed to update event:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete this event?")) {
      del(`api/events/${id}`)
        .then(() => {
          onDelete();
        })
        .catch((error) => {
          console.error("Failed to delete event:", error);
        });
    }
  }; //add loading?

  return (
    <>
      {loading ? (
        <DotLoader size={60} />
      ) : (
        <div className="eventTicket">
          <img src={eventImage} className="editImage" alt="Event type icon" />
          <img
            src={
              image ||
              "https://images.pexels.com/photos/2311602/pexels-photo-2311602.jpeg?auto=compress&cs=tinysrgb&h=750&dpr=2"
            }
            alt="Individual event"
            className="eventImage"
          />

          <p className="eventEmoji">{eventEmoji}</p>

          <div>
            <div className="weatherModalIcon">
              <p onClick={() => setIsModalOpen(!isModalOpen)}>☀️ 🌧️</p>
              {isModalOpen && (
                <div className="weatherModalWindow">
                  <p>All events need to have different weather</p>
                  <button onClick={() => setIsModalOpen(false)}>
                    <span className="material-icons">close</span>
                  </button>
                </div>
              )}
            </div>
          </div>

          <button
            onClick={toggleFavorite}
            aria-label={
              isFavorite ? "Remove from favorites" : "Add to favorites"
            }
            className={`favorite-btn ${isFavorite ? "favorited" : ""}`}
            title={isFavorite ? "Unfavorite" : "Favorite"}
          >
            {isFavorite ? "❤️" : "🤍"}
          </button>
          {!isEditing ? (
            <>
              <p>Name: {name}</p>
              <p>Date: {date}</p>
              <p>
                Location:{" "}
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                    location
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    textDecoration: "none",
                    color: "#007bff",
                    display: "inline-flex",
                    alignItems: "center",
                  }}
                >
                  📍 {location}
                </a>
              </p>
              <p>Type: {type}</p>
              <p>Description: {description}</p>
              <p>Price: €{price}</p>
              <button onClick={() => setIsEditing(true)}>Edit</button>
              <button onClick={handleDelete}>Delete</button>
            </>
          ) : (
            <EditEvent
              editedEvent={editedEvent}
              onHandleInputChange={handleInputChange}
              onSave={handleUpdate}
              onCancel={() => setIsEditing(false)}
              currentDate={currentDate}
            />
          )}
        </div>
      )}
    </>
  );
};

export default EventList;
