
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import "./eventCalendar.css";

export function EventCalendar({ events }) {
  const calendarEvents = events.map(event => ({
    title: event.name,
    date: event.date,
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
      />
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
