import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./FrontPage.css";
import event_img1 from "../FrontpageImage/event_img1.jpeg";
import event_img2 from "../FrontpageImage/event_img2.avif";
import event_img3 from "../FrontpageImage/event_img3.jpg";
import event_img4 from "../FrontpageImage/event_img4.jpg";
import finnishCelebration from "../FrontpageImage/finnishCelebration.jpg";
import finnishCulture from "../FrontpageImage/finnishCulture.jpg";
import localGathering from "../FrontpageImage/localGathering.jpg";

const slides = [
  {
    image: finnishCelebration,
    heading: "Gather and Celebrate",
    text: "Create lasting memories through lively gatherings close to home.",
  },
  {
    image: finnishCulture,
    heading: "Engage with Your Community",
    text: "Experience festivals that honor cherished traditions.",
  },
  {
    image: localGathering,
    heading: "Unite Through Events",
    text: "Bring people together with intention and joy.",
  },
];

const Frontpage = () => {
  const navigate = useNavigate();
  const [showChat, setShowChat] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    { from: "ai", text: "Hi! How can I help you today?" },
  ]);
  const [currentSlide, setCurrentSlide] = useState(0);

  const toggleChat = () => setShowChat((prev) => !prev);

  const getAIResponse = (userText) => {
    const text = userText.toLowerCase();
    if (text.includes("event"))
      return "We organize amazing Finnish community events!";
    if (text.includes("help"))
      return "Sure, I'm here to help! What do you need assistance with?";
    if (text.includes("contact"))
      return "You can reach us at helsinki@eventspark.fi.";
    return "Thanks for your message! We will get back to you soon.";
  };

  const handleSend = () => {
    if (!input.trim()) return;
    setMessages((prev) => [...prev, { from: "user", text: input }]);
    setInput("");
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { from: "ai", text: getAIResponse(input) },
      ]);
    }, 700);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="home">
      <main className="section">
        <section className="hero">
          <h1>Bringing Joy Through Local Events</h1>
          <p>
            Nordic Lights Gatherings empowers organizers across Finland with
            easy-to-use tools to create memorable community events.
          </p>
          <div className="button-group">
            <button className="btn-main" onClick={() => navigate("/Events")}>
              Explore Events
            </button>
            <button className="btn-learn" onClick={() => navigate("/about")}>
              Learn More <span className="arrow">➜</span>
            </button>
          </div>
        </section>

        <section className="banner">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`banner-slide ${
                index === currentSlide ? "active" : ""
              }`}
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="banner-overlay">
                <h3>{slide.heading}</h3>
                <p>{slide.text}</p>
              </div>
            </div>
          ))}
        </section>

        <section className="ready">
          <div className="ready-text">
            <h2>Excited to Start Planning?</h2>
            <p>
              Join the Nordic Lights community and begin shaping meaningful
              moments.
            </p>
            <p>
              Bring your ideas to life with the help of our easy-to-use event
              platform.
            </p>
            <button className="btn-main" onClick={() => navigate("/Events")}>
              Explore Events ➜
            </button>
          </div>
          <div className="ready-boxes">
            <img src={event_img1} alt="Event 1" className="box-img" />
            <img src={event_img2} alt="Event 2" className="box-img" />
            <img src={event_img3} alt="Event 3" className="box-img" />
            <img src={event_img4} alt="Event 4" className="box-img" />
          </div>
        </section>

        <section className="connect">
          <div className="connect-text">
            <h3>Stay Connected with Nordic Lights Gatherings</h3>
            <p>
              Let’s work together to build community spirit. Reach out for
              support and collaboration.
            </p>
            <button className="btn-alt" onClick={toggleChat}>
              Let's Talk
            </button>
          </div>
        </section>

        {showChat && (
          <div className={`chatbox ${showChat ? "visible" : ""}`}>
            <h4>Chat with us</h4>
            <div className="chat-messages">
              {messages.map((msg, idx) => (
                <div key={idx} className={`chat-message ${msg.from}`}>
                  <div className="message-bubble">{msg.text}</div>
                </div>
              ))}
            </div>
            <textarea
              placeholder="Type your message here..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault();
                  handleSend();
                }
              }}
            />
            <div className="chatbox-buttons">
              <button onClick={handleSend}>Send</button>
              <button onClick={toggleChat}>Close</button>
            </div>
          </div>
        )}

        <section className="offices">
          <h2>Reach out to our regional offices across Finland.</h2>
         <div className="office-grid">
  <div>
    <h4>Helsinki Office</h4>
    <p>📍 Keskuskatu 5, Helsinki, Finland</p>
    <p>✉️ helsinki@nordiclights.fi</p>
    <button
      className="map-button"
      onClick={() =>
        window.open(
          "https://www.google.com/maps/dir/?api=1&destination=Keskuskatu+5,+Helsinki,+Finland",
          "_blank"
        )
      }
    >
      Navigate on Google Maps ➜
    </button>
  </div>
  <div>
    <h4>Tampere Office</h4>
    <p>📍 Satakunnankatu 10, Tampere, Finland</p>
    <p>✉️ tampere@nordiclights.fi</p>
    <button
      className="map-button"
      onClick={() =>
        window.open(
          "https://www.google.com/maps/dir/?api=1&destination=Satakunnankatu+10,+Tampere,+Finland",
          "_blank"
        )
      }
    >
      Navigate on Google Maps ➜
    </button>
  </div>
  <div>
    <h4>Lapland Office</h4>
    <p>📍 Revontulentie 15, Rovaniemi, Finland</p>
    <p>✉️ lapland@nordiclights.fi</p>
    <button
      className="map-button"
      onClick={() =>
        window.open(
          "https://www.google.com/maps/dir/?api=1&destination=Revontulentie+15,+Rovaniemi,+Finland",
          "_blank"
        )
      }
    >
      Navigate on Google Maps ➜
    </button>
  </div>
  <div>
    <h4>Oulu Office</h4>
    <p>📍 Kauppurienkatu 12, Oulu, Finland</p>
    <p>✉️ oulu@nordiclights.fi</p>
    <button
      className="map-button"
      onClick={() =>
        window.open(
          "https://www.google.com/maps/dir/?api=1&destination=Kauppurienkatu+12,+Oulu,+Finland",
          "_blank"
        )
      }
    >
      Navigate on Google Maps ➜
    </button>
  </div>
</div>

        </section>
      </main>
    </div>
  );
};

export default Frontpage;
