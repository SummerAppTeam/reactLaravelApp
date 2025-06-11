import { useState, useEffect } from "react";
import { Link } from "react-router";
import EventListView from "./EventListView";
import { DotLoader } from "react-spinners";
import EventCalendar from "../../../Components/Events/EventCalendar/EventCalendar";
import useAxios from "../../../hooks/useAxios";
import EventList from "../EventList/EventList";
import GetEventEmoji from "../../../Components/Events/EventEmojisAndImages/EventEmoji";
import GetEventImage from "../../../Components/Events/EventEmojisAndImages/EventImages";
import "./eventContainer.css";

const EventContainer = () => {
  const [events, setEvents] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [showCalendar, setShowCalendar] = useState(false);
  const [visibleCount, setVisibleCount] = useState(3);
  const [searchValue, setSearchValue] = useState("");

  const currentDate = new Date().toISOString().split("T", 1)[0];

  const { get } = useAxios();

  const searchHandle = (event) => {
    setSearchValue(event.target.value);
  };

  const filteredEvents = events.filter((event) => {
    const search = searchValue.toLowerCase();
    const matchesSearch =
      event.name.toLowerCase().startsWith(search) ||
      event.location.toLowerCase().startsWith(search);

    return matchesSearch;
  });

  const lowToHigh = () => {
    const sortedEvents = [...events].sort((a, b) => a.price - b.price);
    setEvents(sortedEvents);
  };

  const highToLow = () => {
    const sortedEvents = [...events].sort((a, b) => b.price - a.price);
    setEvents(sortedEvents);
  };

  const sortAtoZ = () => {
    const sortedEvents = [...events].sort((a, b) =>
      a.name.localeCompare(b.name)
    );
    setEvents(sortedEvents);
  };

  const sortZtoA = () => {
    const sortedEvents = [...events].sort((a, b) =>
      b.name.localeCompare(a.name)
    );
    setEvents(sortedEvents);
  };

  const fetchEvents = () => {
    setLoading(true);

    get("api/events")
      .then((response) => {
        setEvents(response.data || []);
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to fetch events");
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  if (loading) return <DotLoader />;

  const renderEventList = () => (
    <>
      <div className="tickets">
        {filteredEvents.slice(0, visibleCount).map((event) => {
          const eventEmoji = GetEventEmoji(event.type);
          const eventImage = GetEventImage(event.type);

          return (
            <div key={event.id} className="message">
              <EventList
                min={currentDate}
                {...event}
                darkMode={true}
                eventEmoji={eventEmoji}
                eventImage={eventImage}
                onDelete={fetchEvents}
              />
              <Link className="secondary" to={`/events/${event.id}`}>
                Read more!
              </Link>
            </div>
          );
        })}
      </div>

      <div className="showButtons">
        {visibleCount < events.length && (
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

  return (
    <div className="pageWrapper">
      <div className="eventContainer">
        <div className="viewToggle">
          <button className="viewButton" onClick={() => setShowCalendar((prev) => !prev)}>
            {showCalendar ? "Show List View" : "Show Calendar View"}
          </button>
        </div>

        {loading ? (
          <DotLoader size={60} />
        ) : (
          <>
            <section className="introSection">
              <h1>Find Your Favorite Events</h1>
              <p>
                Explore events in iconic places across Finland, from the snowy
                magic of Rovaniemi in the north to the lively streets of
                Helsinki in the south, where each local gathering, tradition or
                seasonal celebration reflects the rich and diverse cultural
                spirit of the country.
              </p>
            </section>

            {error}

            {showCalendar ? (
              <EventCalendar events={filteredEvents} />
            ) : (
              <EventListView events={filteredEvents} onDelete={fetchEvents} />
            )}

            <section className="highlightSection">
              <h2>Experience Finnish Culture</h2>
              <p>
                <p>
                  Discover unique celebrations and traditions across Finland,
                  from vibrant city festivals to tranquil nature events. Whether
                  you’re near or far, there’s always a chance to connect with
                  local culture and make new memories.
                </p>
              </p>
              <img
                src="https://images.pexels.com/photos/1703323/pexels-photo-1703323.jpeg"
                alt="Finland cultural event"
                className="highlightImage"
              />
            </section>

            <section className="highlightSection">
              <h2>Events for Every Season</h2>
              <p>
                Celebrate summer under the midnight sun or enjoy winter sports
                in Lapland. We keep you updated with the best seasonal events
                all year round.
              </p>
              <img
                src="https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg"
                alt="Seasonal events in Finland"
                className="highlightImage"
              />
            </section>

            <section className="ticketSection">
              <h2>Why Use EventFinder?</h2>
              <p>Discover local events you’ll love</p>
              <p>Meet new people with shared interests</p>
              <p>Enjoy the beauty and charm of Finland</p>
              <p>Support local communities and creators</p>
              <p>Stay updated with fresh events year-round</p>

              <h2>Browse All Events</h2>
              <p>
                Find your next favorite experience and make unforgettable
                memories wherever you go.
              </p>
              <div>
                <label htmlFor="search">Search</label>
                <input
                  type="text"
                  id="search"
                  name="search"
                  placeholder="Search by Name or City"
                  value={searchValue}
                  onChange={searchHandle}
                />
              </div>
              <select
                onChange={(e) => {
                  const value = e.target.value;
                  value === "low" && lowToHigh();
                  value === "high" && highToLow();
                  value === "az" && sortAtoZ();
                  value === "za" && sortZtoA();
                }}
              >
                <option value="">Sort Events</option>
                <option value="low">Price: Low to High</option>
                <option value="high">Price: High to Low</option>
                <option value="az">Name: A–Z</option>
                <option value="za">Name: Z–A</option>
              </select>

              {renderEventList()}
              {error}

              <button className="allTicketsButton">🎟️ View All Tickets</button>
            </section>

            <section className="faqSection">
              <h2>Frequently Asked Questions</h2>
              <div className="faqItem">
                <h4>How do I book a ticket?</h4>
                <p>
                  Click on an event, and you'll be redirected to a detailed page
                  where you can purchase your ticket.
                </p>
              </div>
              <div className="faqItem">
                <h4>Are events updated daily?</h4>
                <p>
                  Yes! Our listings are synced with the latest event info from
                  our database.
                </p>
              </div>
              <div className="faqItem">
                <h4>How can I submit my own event?</h4>
                <p>
                  You can submit your event through our online form and once
                  approved, it will appear on the site.
                </p>
              </div>
              <div className="faqItem">
                <h4>Can I filter events by city?</h4>
                <p>
                  Currently no, but we’re working on adding advanced filters
                  including city and date! Our page calendar will help you find
                  events that fit your schedule.
                </p>
              </div>
              <div className="faqItem">
                <h4>Are there any free events listed?</h4>
                <p>
                  Yes, many local free events are included. Browse events to
                  find options that fit your budget and interests.
                </p>
              </div>
            </section>
          </>
        )}
      </div>
    </div>
  );
};

export default EventContainer;
