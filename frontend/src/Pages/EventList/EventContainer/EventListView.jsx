import { useState } from "react";
import { Link } from "react-router";
import EventList from "../Eventlist/EventList";
import GetEventEmoji from "../../../Components/Events/EventEmojisAndImages/EventEmoji";
import GetEventImage from "../../../Components/Events/EventEmojisAndImages/EventImages";

const EventListView = ({ events, onDelete }) => {
  const [type, setType] = useState(null);
  const [visibleCount, setVisibleCount] = useState(3);

  const filteredEvents = type
    ? events.filter((event) => event.type === type)
    : [];

  return (
    <>
      <section className="categorySection">
        <h2>Browse by Category</h2>
        <div className="categoryButtons">
        
          <button onClick={() => setType("Outdoor & Nature")}>
            🌿 Outdoor & Nature
          </button>
          <button onClick={() => setType("Food & Social")}>
            🥗 Food & Social
          </button>
          <button onClick={() => setType("Hobbies & DIY")}>
            🎨 Hobbies & DIY
          </button>
          <button onClick={() => setType("Learning & Networking")}>
            📝 Learning & Networking
          </button>
          <button onClick={() => setType("Health & Wellness")}>
            🌸 Health & Wellness
          </button>
          <button onClick={() => setType("Music & Entertainment")}>
            🎤 Music & Entertainment
          </button>
          <button onClick={() => setType("Markets & Swaps")}>
            🛍️ Markets & Swaps
          </button>
          <button onClick={() => setType("Family & Kids")}>
            🧸 Family & Kids
          </button>
          <button onClick={() => setType("Sports & Games")}>
            🏀 Sports & Games
          </button>
          <button onClick={() => setType("Parties & Celebration")}>
            🎉 Parties & Celebration
          </button>
        </div>
      </section>

      <div className="tickets">
        {filteredEvents.slice(0, visibleCount).map((event) => {
          const eventEmoji = GetEventEmoji(event.type);
          const eventImage = GetEventImage(event.type);

          return (
            <div key={event.id} className="message">
              <EventList
                {...event}
                darkMode={true}
                eventEmoji={eventEmoji}
                eventImage={eventImage}
                onDelete={onDelete}
              />
              <Link className="secondary" to={`/events/${event.id}`}>
                Read more!
              </Link>
            </div>
          );
        })}
      </div>

      <div className="showButtons">
        {visibleCount < filteredEvents.length && (
          <button onClick={() => setVisibleCount((v) => v + 6)}>
            Show More Events
          </button>
        )}
        {visibleCount > 3 && (
          <button onClick={() => setVisibleCount((v) => Math.max(3, v - 6))}>
            Show Less Events
          </button>
        )}
      </div>
    </>
  );
};

export default EventListView;