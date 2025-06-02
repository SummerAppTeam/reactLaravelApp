import events from "../../Components/Events/EventData";
import EventList from "./EventList";
import GetEventEmoji from "./eventEmoji";
import "./eventList.css"
import GetEventImage from "../../Components/Events/EventImages";
// import axios


const EventContainer = ({}) => {


/* const EventContainer = ({}) => {
  const [events, setEvents] = useState([]);
  const [error, setError] = useState(null);

  const fetchEvents = async () => {
    try {
      const response = await axios.get("/api/words");
      setEvents(response.data.events);
    } catch (error) {
      setError("Failed to fetch words");
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);*/


  return (
    <div>
      <div className="tickets">
        {events.map((event) => {
          const eventEmoji = GetEventEmoji(event.type);
          const eventImage = GetEventImage(event.type)
        
          return (
            <div key={event.id} className="message">
           
              <EventList
                {...event}
                darkMode={true} //add dark mode
                eventEmoji={eventEmoji}
                eventImage={eventImage}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default EventContainer;
