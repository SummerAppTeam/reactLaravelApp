import useWeather from "../../../hooks/useWeather";
import useGeocode from "../../../hooks/useGeoCode";
import { ClipLoader } from "react-spinners";
import { useState, useEffect } from "react";
import useAxios from "../../../hooks/useAxios";
import { DotLoader } from "react-spinners";
import EditEvent from "../EditEvent/EditEventForm";
import "./eventList.css";
import "../EventContainer/eventContainer.css";

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
  const [isEditing, setIsEditing] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [temperature, setTemperature] = useState(null);
  const [error, setError] = useState(null);

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

  const {
    coordinates,
    loading: geoLoading,
    error: geoError,
  } = useGeocode(location);

  const { lat, lon } = coordinates || {};

  const {
    weather,
    forecast,
    loading: weatherLoading,
    error: weatherError,
  } = useWeather(lat, lon);

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
  };

  const fetchTemperature = async () => {
    const apiKey = "918ec3224453b160de6d1c2eaa5b0266";
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(
          location
        )}&units=metric&appid=${apiKey}`
      );
      const data = await response.json();
      if (data.main && data.main.temp) {
        setTemperature(data.main.temp);
        setError(null);
      } else {
        setError("Temperature not available");
        setTemperature(null);
      }
    } catch (err) {
      console.error("Failed to fetch weather:", err);
      setError("Failed to load weather");
    }
  };

  const toggleModal = () => {
    const nextState = !isModalOpen;
    setIsModalOpen(nextState);
    if (nextState) fetchTemperature();
  };

  return (
    <>
      {loading ? (
        <DotLoader size={60} />
      ) : (
        <div className="eventTicket">
          <img src={eventImage} className="editImage" alt="Event type icon" />
          <img src={image} alt="Individual event" className="individualImage" />

          <p className="eventEmoji">{eventEmoji}</p>


          <div>
            <div className="weatherModalIcon">
              <p onClick={() => setIsModalOpen(!isModalOpen)}>☀️ 🌧️</p>
              {isModalOpen && (
                <div className="weatherModalWindow">
                  {geoLoading ? (
                    <ClipLoader size={35} color="#333" />
                  ) : geoError ? (
                    <p>Unable to find coordinates for this location.</p>
                  ) : weatherLoading ? (
                    <ClipLoader size={35} color="#007bff" />
                  ) : weatherError ? (
                    <p>Error fetching weather data.</p>
                  ) : weather ? (
                    <>
                      <p>
                        <strong>Current Weather</strong> ☀️
                      </p>
                      <p>{weather.weather[0].description}</p>
                      <p>Temperature: {Math.round(weather.main.temp)} °C</p>
                      <p>
                        Feels Like: {Math.round(weather.main.feels_like)} °C
                      </p>
                      <p>Wind: {weather.wind.speed} m/s</p>

                      {forecast ? (
                        <div className="forecast">
                          <p>
                            <strong>5-Day Forecast</strong>
                          </p>
                          <div className="forecastGrid">
                            {forecast.list
                              .filter((_, index) => index % 8 === 0)
                              .map((day, index) => (
                                <div className="forecastCard" key={index}>
                                  <p>
                                    {new Date(day.dt_txt).toLocaleDateString()}
                                  </p>
                                  <img
                                    src={`https://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`}
                                    alt={day.weather[0].description}
                                    className="forecastIcon"
                                  />
                                  <p>{day.weather[0].description}</p>
                                  <p>{Math.round(day.main.temp)}°C</p>
                                </div>
                              ))}
                          </div>
                        </div>
                      ) : (
                        <p>No forecast data available.</p>
                      )}
                    </>
                  ) : (
                    <p>No weather data available.</p>
                  )}

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