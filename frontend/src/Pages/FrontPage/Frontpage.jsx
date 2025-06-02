import React, { useState } from "react";
import { useNavigate } from "react-router-dom";  
import "./FrontPage.css";

const Frontpage = () => {
  const navigate = useNavigate();  
  const [showChat, setShowChat] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    { from: "ai", text: "Hi! How can I help you today?" },
  ]);

  const toggleChat = () => {
    setShowChat((prev) => !prev);
  };

  // Simple AI responder (demo)
  const getAIResponse = (userText) => {
    const text = userText.toLowerCase();
    if (text.includes("event")) {
      return "We organize amazing Finnish community events!";
    }
    if (text.includes("help")) {
      return "Sure, I’m here to help! What do you need assistance with?";
    }
    if (text.includes("contact")) {
      return "You can reach us at helsinki@eventspark.fi.";
    }
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
            <button
              className="btn-main"
              onClick={() => navigate("/events")} 
            >
              Explore Event
            </button>
          </section>

          <section className="banner">
            <div className="banner-content">
              <h3>Discover Local Gathering</h3>
              <p>
                Find events that celebrate Finnish traditions and community
                spirit.
              </p>
            </div>
          </section>

          <section className="ready">
            <div className="ready-text">
              <h2>Ready to Spark Your Event?</h2>
              <p>
                Join the Event Spark community and start creating unforgettable
                experiences.
              </p>
              <p>
                Explore the possibilities and bring your vision to life with our
                intuitive platform.
              </p>
              <button
                className="btn-main"
                onClick={() => navigate("/events")}  
              >
                Explore Event ➜
              </button>
            </div>
            <div className="ready-boxes">
              <div className="box light"></div>
              <div className="box light"></div>
              <div className="box light"></div>
              <div className="box light"></div>
            </div>
          </section>

          <section className="connect">
            <div className="connect-text">
              <h3>Stay Connected with Event Spark</h3>
              <p>
                Let’s create meaningful community experiences together. Contact
                us for support and inquiries.
              </p>
              <button className="btn-alt" onClick={toggleChat}>
                Let’s Talk
              </button>
            </div>
          </section>

          {/* Chatbox */}
          {showChat && (
            <div className="chatbox">
              <h4>Chat with us</h4>
              <div
                className="chat-messages"
                style={{
                  maxHeight: "200px",
                  overflowY: "auto",
                  marginBottom: "10px",
                }}
              >
                {messages.map((msg, idx) => (
                  <div
                    key={idx}
                    style={{
                      textAlign: msg.from === "user" ? "right" : "left",
                      marginBottom: "8px",
                    }}
                  >
                    <span
                      style={{
                        display: "inline-block",
                        backgroundColor:
                          msg.from === "user" ? "#007acc" : "#e1e1e1",
                        color: msg.from === "user" ? "#fff" : "#000",
                        padding: "6px 10px",
                        borderRadius: "15px",
                        maxWidth: "80%",
                        wordWrap: "break-word",
                      }}
                    >
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
              </div>
              <div>
                <h4>Tampere Office</h4>
                <p>📍 Hämeenkatu 2, Tampere, Finland</p>
                <p>✉️ tampere@eventspark.fi</p>
              </div>
              <div>
                <h4>Lapland Office</h4>
                <p>📍 Lappi 71, Lapland, Finland</p>
                <p>✉️ lapland@eventspark.fi</p>
              </div>
              <div>
                <h4>Oulu Office</h4>
                <p>📍 Pykärätie 7, Oulu, Finland</p>
                <p>✉️ oulu@eventspark.fi</p>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Frontpage;
