import { useState, useEffect } from "react";
import { Link } from "react-router";
import EventListView from "./EvenListView";
import { DotLoader } from "react-spinners";
import EventCalendar from "../../../Components/Events/EventCalendar/EventCalendar";
import useAxios from "../../../hooks/useAxios";
import EventList from "../Eventlist/EventList";
import GetEventEmoji from "../../../Components/Events/EventEmojisAndImages/EventEmoji";
import GetEventImage from "../../../Components/Events/EventEmojisAndImages/EventImages";

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

  //if (loading) return <DotLoader />;
  // if (error) return <p>{error}</p>;

  const renderEventList = () => (
    <>
      <div className="tickets">
        {events.slice(0, visibleCount).map((event) => {
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
          <button onClick={() => setShowCalendar((prev) => !prev)}>
            {showCalendar ? "Show List View" : "Show Calendar View"}
          </button>
        </div>

        {loading ? (
          <DotLoader size={60} />
        ) : (
          <>
            <section className="introSection">
              <h1>Welcome to EventFinder Finland 🇫🇮</h1>
              <p>
                Your go-to platform for discovering top events across Finland.
                Whether you're seeking vibrant music festivals, thrilling sports
                matches, or cultural showcases — we bring them all together for
                you.
              </p>
            </section>

            {error}

            <div>
              <label htmlFor="search">Search</label>
              <input
                type="text"
                id="search"
                name="search"
                value={searchValue}
                onChange={searchHandle}
              />
            </div>

            {showCalendar ? (
              <EventCalendar events={filteredEvents} />
            ) : (
              <EventListView events={filteredEvents} onDelete={fetchEvents} />
            )}

            <section className="highlightSection">
              <h2>Experience the Culture of Finland</h2>
              <p>
                Attend events hosted in iconic Finnish locations — from the
                snowy streets of Rovaniemi to the lively festivals in Helsinki.
                Each event showcases the country’s diverse cultural scene.
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
                Whether it's summer music festivals under the midnight sun or
                winter sports in Lapland, our event listings keep you connected
                with seasonal favorites across Finland.
              </p>
              <img
                src="https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg"
                alt="Seasonal events in Finland"
                className="highlightImage"
              />
            </section>

            <section className="ticketSection">
              <h2>Discover the Benefits</h2>
              <p>Find local events!</p>
              <p>Connect with others</p>
              <p>Enjoy beautiful Finland and relax</p>
              {renderEventList()}
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
                <h4>Can I filter events by city?</h4>
                <p>
                  Currently no, but we’re working on adding advanced filters
                  including city and date!
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
