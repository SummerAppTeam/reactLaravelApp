import "./eventList.css";
import axios from "axios";
import { useState, useEffect } from "react";

const EventList = ({
  id,
  name,
  date,
  location,
  type,
  description,
  price,
  image,
  eventEmoji,
  eventImage,
  onDelete,
  allEvents,  
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedEvent, setEditedEvent] = useState({
    name,
    date,
    location,
    type,
    description,
    price,
  });

const EventList = () => {
  return (
    <div>
      <main>
        <div className="eventTicket"> </div>
      </main>
    </div>
  );
};



  const [isFavorite, setIsFavorite] = useState(false);


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

  
  const normalizeDate = (dateStr) => {
    if (!dateStr) return null;
    return new Date(dateStr).toISOString().split("T")[0];
  };

 
  const checkDateConflict = () => {
    const newDate = normalizeDate(editedEvent.date);
    return allEvents.some(
      (evt) => evt.id !== id && normalizeDate(evt.date) === newDate
    );
  };

  const handleUpdate = () => {
    if (checkDateConflict()) {
      setDateConflict(true);
      return; 
    }

    setDateConflict(false);

    axios
      .put(`http://127.0.0.1:8000/api/events/${id}`, editedEvent)
      .then(() => {
        setIsEditing(false);
        onDelete(); 
      })
      .catch((error) => {
        console.error("Failed to update event:", error);
      });
  };

  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete this event?")) {
      axios
        .delete(`http://127.0.0.1:8000/api/events/${id}`)
        .then(() => {
          onDelete(); 
        })
        .catch((error) => {
          console.error("Failed to delete event:", error);
        });
    }
  };

  return (
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

   
      <button
        onClick={toggleFavorite}
        aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
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
        <>
          <input
            type="text"
            name="name"
            value={editedEvent.name}
            onChange={handleInputChange}
          />
          <input
            type="date"
            name="date"
            value={editedEvent.date}
            onChange={handleInputChange}
          />
          
          <input
            type="text"
            name="location"
            value={editedEvent.location}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="type"
            value={editedEvent.type}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="description"
            value={editedEvent.description}
            onChange={handleInputChange}
          />
          <input
            type="number"
            name="price"
            value={editedEvent.price}
            onChange={handleInputChange}
          />
          <button onClick={handleUpdate}>Save</button>
          <button onClick={() => setIsEditing(false)}>Cancel</button>
        </>
      )}
    </div>
  );
};

export default EventList;
