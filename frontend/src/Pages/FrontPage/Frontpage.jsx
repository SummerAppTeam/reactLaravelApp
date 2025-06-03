import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";  
import "./FrontPage.css";
import event_img1 from "../FrontpageImage/event_img1.jpeg";
import event_img2 from "../FrontpageImage/event_img2.avif";
import event_img3 from "../FrontpageImage/event_img3.jpg";
import event_img4 from "../FrontpageImage/event_img4.jpg";
import finnishCelebration from "../FrontpageImage/finnishCelebration.jpg";
import finnishCulture from "../FrontpageImage/finnishCulture.jpg";
import localGathering from "../FrontpageImage/localGathering.jpg"

const slides = [
  {
    image: finnishCelebration ,
    heading: "Celebrate Together",
    text:"Make meaningful connections at our local events.",
  },
  {
    image:finnishCulture,
    heading: "Connect with Your Community",
    text: "Join festivals that bring traditions to life." ,
  },
  {
    image: localGathering,
    heading: "Inspire Through Gatherings",
    text: "Bring people together with purpose and joy.",
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
    if (text.includes("event")) return "We organize amazing Finnish community events!";
    if (text.includes("help")) return "Sure, I’m here to help! What do you need assistance with?";
    if (text.includes("contact")) return "You can reach us at helsinki@eventspark.fi.";
    return "Thanks for your message! We will get back to you soon.";
  };

  const handleSend = () => {
    if (!input.trim()) return;
    setMessages((prev) => [...prev, { from: "user", text: input }]);
    setInput("");
    setTimeout(() => {
      setMessages((prev) => [...prev, { from: "ai", text: getAIResponse(input) }]);
    }, 700);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); 
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <main className="section">
        <div className="home">
        <section className="hero">
  <h1>Sparking Joy Through Community Events</h1>
  <p>
    Event Spark connects organizers with the resources they need to
    create memorable Finnish Community Experience
  </p>

  <div className="button-group">
    <button className="btn-main" onClick={() => navigate("/events")}>
      Explore Event
    </button>

    <button className="btn-learn" onClick={() => navigate("/about")}>
      Learn More <span className="arrow">➜</span>
    </button>
  </div>
</section>


          <section className="banner">
            <div className="banner-slide">
              <img src={slides[currentSlide].image} alt="Slide" className="banner-image" />
              <div className="banner-overlay">
                <h3>{slides[currentSlide].heading}</h3>
                <p>{slides[currentSlide].text}</p>
              </div>
            </div>
          </section>

          <section className="ready">
            <div className="ready-text">
              <h2>Ready to Spark Your Event?</h2>
              <p>Join the Event Spark community and start creating unforgettable experiences.</p>
              <p>Explore the possibilities and bring your vision to life with our intuitive platform.</p>
              <button className="btn-main" onClick={() => navigate("/events")}>
                Explore Event ➜
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
              <h3>Stay Connected with Event Spark</h3>
              <p>Let’s create meaningful community experiences together. Contact us for support and inquiries.</p>
              <button className="btn-alt" onClick={toggleChat}>Let’s Talk</button>
            </div>
          </section>

          {showChat && (
            <div className="chatbox">
              <h4>Chat with us</h4>
              <div className="chat-messages" style={{ maxHeight: "200px", overflowY: "auto", marginBottom: "10px" }}>
                {messages.map((msg, idx) => (
                  <div key={idx} style={{ textAlign: msg.from === "user" ? "right" : "left", marginBottom: "8px" }}>
                    <span style={{
                      display: "inline-block",
                      backgroundColor: msg.from === "user" ? "#007acc" : "#e1e1e1",
                      color: msg.from === "user" ? "#fff" : "#000",
                      padding: "6px 10px",
                      borderRadius: "15px",
                      maxWidth: "80%",
                      wordWrap: "break-word",
                    }}>
                      {msg.text}
                    </span>
                  </div>
                ))}
              </div>
              <textarea
                placeholder="Type your message here..."
                rows={3}
                cols={30}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && !e.shiftKey) {
                    e.preventDefault();
                    handleSend();
                  }
                }}
              />
              <br />
              <button onClick={handleSend}>Send</button>
              <button onClick={toggleChat}>Close</button>
            </div>
          )}

<section className="offices">
  <h2>Connect with our team anywhere in Finland.</h2>
  <div className="office-grid">
    <div>
      <h4>Helsinki Office</h4>
      <p>📍 Erottajankatu 7, Helsinki, Finland</p>
      <p>✉️ helsinki@eventspark.fi</p>
      <button
        className="map-button"
        onClick={() =>
          window.open("https://www.google.com/maps/dir/?api=1&destination=Erottajankatu+7,+Helsinki,+Finland", "_blank")
        }
      >
        Navigate on Google Maps ➜
      </button>
    </div>
    <div>
      <h4>Tampere Office</h4>
      <p>📍 Hämeenkatu 2, Tampere, Finland</p>
      <p>✉️ tampere@eventspark.fi</p>
      <button
        className="map-button"
        onClick={() =>
          window.open("https://www.google.com/maps/dir/?api=1&destination=Hämeenkatu+2,+Tampere,+Finland", "_blank")
        }
      >
        Navigate on Google Maps ➜
      </button>
    </div>
    <div>
      <h4>Lapland Office</h4>
      <p>📍 Lappi 71, Lapland, Finland</p>
      <p>✉️ lapland@eventspark.fi</p>
      <button
        className="map-button"
        onClick={() =>
          window.open("https://www.google.com/maps/dir/?api=1&destination=Lappi+71,+Lapland,+Finland", "_blank")
        }
      >
        Navigate on Google Maps ➜
      </button>
    </div>
    <div>
      <h4>Oulu Office</h4>
      <p>📍 Pykärätie 7, Oulu, Finland</p>
      <p>✉️ oulu@eventspark.fi</p>
      <button
        className="map-button"
        onClick={() =>
          window.open("https://www.google.com/maps/dir/?api=1&destination=Pykärätie+7,+Oulu,+Finland", "_blank")
        }
      >
        Navigate on Google Maps ➜
      </button>
    </div>
  </div>
</section>

        </div>
      </main>
    </div>
  );
};

export default Frontpage;
