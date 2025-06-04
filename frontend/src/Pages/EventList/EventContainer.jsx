import { useState, useEffect } from "react";
import { Link } from "react-router";
import EventList from "./EventList";
import GetEventEmoji from "./eventEmoji";
import GetEventImage from "../../Components/Events/EventImages";
import "./eventList.css";
import { DotLoader } from "react-spinners";
import EventCalendar from "./EventCalendar/EventCalendar";
import useAxios from "../../hooks/useAxios";
import "./EventDetails.css";

const EventContainer = () => {
  const [events, setEvents] = useState([]);
  const [error, setError] = useState(null);
  const [type, setType] = useState(null);
  const [loading, setLoading] = useState(false);
  const [visibleCount, setVisibleCount] = useState(3);
  const [showCalendar, setShowCalendar] = useState(false);

  const { get } = useAxios();

 

  const showMore = () => {
    setVisibleCount((prev) => prev + 6);
  };

  const fetchEvents = async () => {
    setLoading(true);
    try {
      const response = await get("api/events");
      setEvents(response.data || []);
    } catch (error) {
      setError("Failed to fetch events");
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchEvents();
  }, []);

      // if (loading) return <DotLoader />; check if needed
   //  if (error) return <p>{error}</p>;


const filteredEvents = type ? events.filter(event => event.type === type) : events;
  const eventsDisplay = type ? filteredEvents : events;

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
                Whether you're seeking vibrant music festivals, thrilling
                sports matches, or cultural showcases — we bring them all
                together for you.
              </p>
            </section>

            {!showCalendar && (
              <section className="categorySection">
                <h2>Browse by Category</h2>
                <div className="categoryButtons">
                  <button onClick={() => setType()}>All</button>
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
            )}

            {showCalendar ? (
              <EventCalendar events={filteredEvents} />
            ) : (
              <>
                <div className="tickets">
                  {filteredEvents.slice(0, visibleCount).map((event) => {
                    const eventEmoji = GetEventEmoji(event.type);
                    const eventImage = GetEventImage(event.type);

                    return (
                      <div key={event.id} className="message">
                        <EventList
                          {...event}
                          darkMode={false}
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
                  {visibleCount < filteredEvents.length && (
                  <button onClick={() => setVisibleCount(v => v + 6)}>
                      Show More Events
                    </button>
                  )}
                  {visibleCount > 3 && (
                     <button onClick={() => setVisibleCount(v => v + 6)}>
                      Show Less Events
                    </button>
                  )}
                </div>
              </>
            )}

            <section className="highlightSection">
              <h2>Experience the Culture of Finland</h2>
              <p>
                Attend events hosted in iconic Finnish locations — from the snowy
                streets of Rovaniemi to the lively festivals in Helsinki. Each
                event showcases the country’s diverse cultural scene.
              </p>
              <img
                src="https://images.pexels.com/photos/1703323/pexels-photo-1703323.jpeg"
                alt="Finland cultural event"
                className="highlightImage"
              />
            </section>

            <section>
              <h2>HighLights from past events</h2>
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

            <section className="eventListSection">
              <h2>Discover All Upcoming Events</h2>
              <p>Explore events that are live, upcoming, or recently added:</p>
              <div>{error}</div>
              <div>
                <label htmlFor="search">Search</label>
                <input type="text" id="search" name="search" />
              </div>

              <div className="tickets">
                {eventsDisplay.slice(0, visibleCount).map((event) => {
                  const eventEmoji = GetEventEmoji(event.type);
                  const eventImage = GetEventImage(event.type);

                  return (
                    <div key={event.id} className="message">
                      <EventList
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

              {visibleCount < eventsDisplay.length && (
                <button onClick={showMore}>Show More Events</button>
              )}
            </section>

            <section className="ticketSection">
              <h2>Discover the Benefits</h2>
              <p>Find local events!</p>
              <p>Connect with others</p>
              <p>Enjoy beautiful Finland and relax</p>
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