import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import DotLoader from "react-spinners/DotLoader";

const EventDetails = () => {
  const { id } = useParams();
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    console.log("Fetching event for id:", id);  
    axios
      .get(`http://127.0.0.1:8000/api/events/${id}`)
      .then(res => {
        console.log("Event fetched:", res.data);  
        setEvent(res.data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Error fetching event:", err);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <DotLoader />;
  if (!event) return <p>Event not found</p>;

  return (
    <div className="eventDetail">
      <h2>{event.name}</h2>
      <p>Date: {event.date}</p>
      <p>Location: {event.location}</p>
      <p>Price: €{event.price}</p>
      <p>Description: {event.long_description}</p>
      <p>{event.description}</p>
      <button onClick={() => navigate(-1)}>Go Back</button>
    </div>
  );
};

export default EventDetails;
