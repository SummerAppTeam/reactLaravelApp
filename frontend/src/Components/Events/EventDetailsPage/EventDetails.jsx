import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";
import { DotLoader } from "react-spinners";
import useAxios from "../../../hooks/useAxios";
import EventDetailsContent from "./EventDetailsContent";
import "./eventDetails.css";

const EventDetails = () => {
  const { id } = useParams();
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const { get } = useAxios();

  useEffect(() => {
    setLoading(true);
    get(`api/events/${id}`)
      .then((res) => {
        setEvent(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching event:", err);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <DotLoader size={60} />;
  if (!event) return <p>Event not found</p>; //do i need these

  return (
    <>
      <EventDetailsContent event={event} navigate={navigate} />
    </>
  );
};

export default EventDetails;
