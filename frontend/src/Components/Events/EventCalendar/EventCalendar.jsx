import { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import "./eventCalendar.css";

export function EventCalendar({ events }) {
  const [modal, setModal] = useState(null);
 

  const calendarEvents = events.map((event) => ({
    title: event.name,
    date: event.date,
    extendedProps: {
      description: event.description,
      type: event.type,
      long_description: event.long_description,
      price: event.price,
      location: event.location,
    },
  }));

  return (
    <div className="calendarWrapper">
      
      <h2>Browse Events by Date</h2>
      <FullCalendar
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
        weekends={true}
        events={calendarEvents}
        eventContent={renderEventContent}
        height="auto"
        eventClick={({ event }) => {
          setModal({
            title: event.title,
            date: event.startStr,
            description: event.extendedProps.description,
            type: event.extendedProps.type,
            long_description: event.extendedProps.long_description,
            price: event.extendedProps.price,
            location: event.extendedProps.location,
          });
        }}
      />

      

      {modal && (
        <div className="modalOverlay">
          <div className="modal">
            <h3>{modal.title}</h3>
            <p>Description: {modal.description}</p>
            <p>Date: {modal.date}</p>
            <p>Type: {modal.type}</p>
            <p>Details: {modal.long_description}</p>
            <p>Price: €{modal.price}</p>
            <p>Location: {modal.location}</p>

            <button onClick={() => setModal(null)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

function renderEventContent(eventInfo) {
  return (
    <>
      <b>{eventInfo.timeText}</b> <i>{eventInfo.event.title}</i>
    </>
  );
}

export default EventCalendar;
