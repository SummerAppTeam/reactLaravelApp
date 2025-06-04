import { useState } from "react";
import "./eventList.css";
import useAxios from "../../hooks/useAxios";
import { DotLoader } from "react-spinners";

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
  onDelete,
}) => {
  const { put, del } = useAxios();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [loading, setLoading] = useState(false);
  const [editedEvent, setEditedEvent] = useState({
    name,
    date,
    location,
    type,
    description,
    long_description,
    price,
    image,
  });

  const handleInputChange = (e) => {
    setEditedEvent({ ...editedEvent, [e.target.name]: e.target.value });
  };

  const handleUpdate = async () => {
    try {
      await put(`api/events/${id}`, editedEvent);
      setIsEditing(false);
      alert("Event updated successfully!");
    } catch (error) {
      console.error("Failed to update event:", error);
      alert("Failed to update event.");
    }
  };

  const handleDelete = async () => {
    if (window.confirm("Are you sure you want to delete this event?")) {
      setLoading(true);
      try {
        await del(`api/events/${id}`);
        alert("Event deleted.");
        onDelete?.();
      } catch (error) {
        console.error("Delete failed:", error);
        alert("Could not delete event.");
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <>
      {loading ? (

          <DotLoader size={60}  />
        
      ) : (
        <div className="eventTicket">
          <img src={eventImage} className="editImage" alt="Event type icon" />
          <img
            src={
              image ||
              "https://images.pexels.com/photos/2311602/pexels-photo-2311602.jpeg"
            }
            alt="Individual event"
            className="eventImage"
          />

          {/* Weather Modal */}
          <div className="weatherModalIcon">
            <p onClick={() => setIsModalOpen(!isModalOpen)}>☀️ 🌧️</p>
            {isModalOpen && (
              <div className="weatherModalWindow">
                <p>All events need good weather! ☀️ 🌧️ ☁️</p>
              </div>
            )}
          </div>

          {/* Location Link */}
          <p>
            <strong>Location:</strong>{" "}
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

          <p className="eventEmoji">{eventEmoji}</p>

          {!isEditing ? (
            <>
              <p>Name: {name}</p>
              <p>Date: {date}</p>
              <p>Type: {type}</p>
              <p>Description: {description}</p>
               <p>Long Description: {long_description}</p>
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
                type="text"
                name="long_description"
                value={editedEvent.long_description}
                onChange={handleInputChange}
              />
              <input
                type="number"
                name="price"
                value={editedEvent.price}
                onChange={handleInputChange}
              />
              <input
                type="text"
                name="image"
                value={editedEvent.image}
                onChange={handleInputChange}
              />
              <button onClick={handleUpdate}>Save</button>
              <button onClick={() => setIsEditing(false)}>Cancel</button>
            </>
          )}
        </div>
      )}
    </>
  );
};

export default EventList;
