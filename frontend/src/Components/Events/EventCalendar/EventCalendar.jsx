import { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import "./eventCalendar.css";

// render calendar view
export function EventCalendar({ events }) {
  const [modal, setModal] = useState(null); // state for modal

  
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
      <FullCalendar
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
        weekends={true}
        events={calendarEvents}
        eventContent={renderEventContent}
        height="auto"
        eventClick={({ event }) => {
          setModal({
            titlw: event.name,
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
        <div className="modal">
          <h3>{modal.title}</h3>
          <p>Description: {modal.description}</p>
          <p>{modal.date}</p>
          <p>Type: {modal.type}</p>
          <p>Details: {modal.long_description}</p>
          <p>Price: {modal.price}</p>
          <p>Location: {modal.location}</p>
          <button onClick={() => setModal(null)}>Close</button>
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

// // EventCalendar.js

// import FullCalendar from "@fullcalendar/react";
// import dayGridPlugin from "@fullcalendar/daygrid";
// import "./eventCalendar.css";

// export function EventCalendar({events}) {
//   return (
//     <div>
//       <FullCalendar
//         plugins={[dayGridPlugin]}
//         initialView='dayGridMonth'
//         weekends={false}
//         events={events}
//         eventContent={renderEventContent}
//       />
//     </div>
//   )
// }

// function renderEventContent(eventInfo) {
//   return (
//     <>
//       <b>{eventInfo.timeText}</b>
//       <i>{eventInfo.event.title}</i>
//     </>
//   )}

// export default EventCalendar;
