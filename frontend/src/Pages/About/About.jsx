import React from "react";
import "./About.css";
import grid1 from "../AboutImages/teams.png";
import grid2 from "../AboutImages/grid2.jpg";
import grid3 from "../AboutImages/toa-heftiba-NmlnHu1bJwQ-unsplash.png";
import tools from "../AboutImages/tool-image.jpg";
import ContactSection from "./ContactSection";
const About = () => {
  return (
    <div className="about-container">
      {/* Hero section*/}

      <section className="hero-section">
        <div className="hero-overlay">
          <h1>Welcome to Event Planner</h1>
          <p>
            Discover how we're revolutionizig events experience for organizers
            and attendees alike.
          </p>
        </div>
      </section>

      {/* Mission Section*/}

      <section className="mission-grid">
        <div className="mission-image"></div>

        <div className="mission-section">
          <h2>Empowering Events</h2>
          <h3>Our Mission: Sparking Community Events</h3>
          <p>
            Event Spark is dedicated to empowering Finnish community event
            organizers by providing innovative tools and resources to create
            unforgettable experiences.
          </p>

          <div className="mission-points">
            <h4>Effortless Event Management</h4>
            <p>
              Simplify your event planning process with our user-friendly
              platform, designed to handle everything from scheduling to
              promotion.
            </p>

            <h4>Engaging Community Features</h4>
            <p>
              Foster a strong sense of community with interactive features that
              allow attendees to connect, share, and collaborate.
            </p>

            <h4>Data-Driven Insights</h4>
            <p>
              Gain valuable insights into event performance with comprehensive
              analytics, helping you optimize future events for maximum impact.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section">
        <div className="team-content">
          <h2>Meet the Team</h2>
          <p>
            The passionate individuals driving Event Spark's mission to
            transform community events in Finland.
          </p>
        </div>

        <div className="team-grid">
          <div className="team-card">
            <div className="team-image">
              <img src={grid1} alt="grid1" />
            </div>
            <div className="team-text">
              <h3>Aino Niemi</h3>
              <p>Co-founder, CEO</p>
            </div>
          </div>

          <div className="team-card">
            <div className="team-image">
              <img src={grid2} alt="grid2" />
            </div>
            <div className="team-text">
              <h3>Lauri Mäkinen</h3>
              <p>Lead Developer</p>
            </div>
          </div>

          <div className="team-card">
            <div className="team-image">
              <img src={grid3} alt="grid" />
            </div>
            <div className="team-text">
              <h3>Sofia Virtanen</h3>
              <p>Community Manager</p>
            </div>
          </div>
        </div>
      </section>

      <section className="tools-section">
        <div className="tools-wrapper">
          {/* Left: Text Box */}
          <div className="tools-box">
            <h1>Technologies & Tools Used</h1>
            <ul>
              <li>
                <strong>Frontend:</strong> React, Tailwind CSS
              </li>
              <li>
                <strong>Backend:</strong> Laravel, PHP
              </li>
              <li>
                <strong>Routing:</strong> React Router, Laravel Routes
              </li>
              <li>
                <strong>API Integration:</strong> Axios, Laravel Sanctum
              </li>
              <li>
                <strong>State Management:</strong> useState, useEffect
              </li>
              <li>
                <strong>Deployment:</strong> Vercel (Frontend), Render (Backend)
              </li>
            </ul>
          </div>

          {/* Right: Image Box */}
          <div className="tools-image">
            <img src={tools} alt="Tools Preview" />
          </div>
        </div>
        <div>
          <ContactSection />
        </div>
      </section>
    </div>
  );
};

export default About;
