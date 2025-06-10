import React, { useState } from "react";
import "./ContactSection.css";
import backgroundVideo from "../AboutImages/background-video.mp4";

const ContactSection = () => {
  const [stage, setStage] = useState(0); // 0: initial, 1: email, 2: phone, 3: confirm
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [messageSent, setMessageSent] = useState(false);

  const handleNext = () => {
    if (stage === 0) {
      setStage(1);
    } else if (stage === 1) {
      setStage(2);
    } else if (stage === 2) {
      setStage(3);
    } else if (stage === 3) {
      setStage(4);
    }
  };

  const handleSend = () => {
    fetch("http://192.168.1.105:8000/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        phone,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status === "success") {
          setMessageSent(true);
        } else {
          alert(data.message || "Error sending message.");
        }
      })
      .catch((err) => {
        console.error("Error:", err);
        alert("Something went wrong. Try again.");
      });
  };

  return (
    <section className="contact-section">
      <div className="contact-container">
        {/* Left content: header + text + form card */}
        <div className="left-content">
          <h2>Connect with Nordic Lights Gatherings</h2>
         <p> We’re here to support your community events. Contact us to find out how our platform can help you succeed.</p>

          <div className="video-card">
            <video
              className="background-video"
              src={backgroundVideo}
              autoPlay
              loop
              muted
              playsInline
            ></video>

            <div className="form-container">
              {messageSent ? (
                <div className="confirmation-message">
                  <h3>Thank you! We'll get back to you soon.</h3>
                </div>
              ) : (
                <>
                  <p className="intro-text">
                    Planning a Finnish event? 🎉 Share your details below to get
                    started!
                  </p>
                  {stage === 0 && (
                    <button className="letstalk-btn" onClick={handleNext}>
                      Let's Talk
                    </button>
                  )}

                  {stage === 1 && (
                    <div className="input-group">
                      <h3>Enter Your Name</h3>
                      <input
                        type="text"
                        placeholder="Your Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                      <button onClick={handleNext}>Next</button>
                    </div>
                  )}

                  {stage === 2 && (
                    <div className="input-group">
                      <h3>Enter Your Email</h3>
                      <input
                        type="email"
                        placeholder="Your Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                      <button onClick={handleNext}>Next</button>
                    </div>
                  )}

                  {stage === 3 && (
                    <div className="input-group">
                      <h3>Enter Your Phone Number</h3>
                      <input
                        type="tel"
                        placeholder="Your Phone Number"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                      />
                      <button onClick={handleNext}>Next</button>
                    </div>
                  )}

                  {stage === 4 && (
                    <div className="send-section">
                      <button onClick={handleSend}>Send</button>
                    </div>
                  )}
                </>
              )}
            </div>
          </div>
        </div>


        {/* Right content: contact info */}
        <div className="right-content">
          <div className="contact-info-block">
            <h3>Event Support</h3>
  <p>Keskuskatu 5, Helsinki, Finland</p>
            <p>support@nordiclights.fi</p>
          </div>

          <div className="contact-info-block">
            <h3>Partnerships</h3>
  <p>Satakunnankatu 10, Tampere, Finland

</p>
            <p>partners@nordiclights.fi</p>
          </div>

          <div className="contact-info-block">
            <h3>Media Inquiries</h3>
  <p>Revontulentie 15, Rovaniemi, Finland

</p>
            <p>media@nordiclights.fi</p>
          </div>

          <div className="contact-info-block">
            <h3>General Inquiry</h3>
             <p>Keskuskatu 5, Helsinki, Finland</p>
            <p>info@nordiclights.fi</p>
          </div>

          <div className="contact-info-block">
            <h3>Our Headquarters</h3>
            <p>
            Drop by our Helsinki headquarters at Keskuskatu 5 or get in touch with our local teams across Finland.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
