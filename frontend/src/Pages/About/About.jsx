import React from "react";
import "./About.css";
import grid1 from "../AboutImages/teams.png";
import grid2 from "../AboutImages/grid2.jpg";


import grid3 from "../AboutImages/grid3.png";
import grid4 from "../AboutImages/grid4.jpg";





import tools from "../AboutImages/tool-image.jpg";
import ContactSection from "./ContactSection";
const About = () => {
  return (
    <div className="about-container">
      <section className="hero-section">
        <div className="hero-overlay">
          <h1>Welcome to Nordic Lights Gatherings</h1>
          <p>
            {" "}
            We make event planning easier and more enjoyable for organizers and
            attendees alike.
          </p>
        </div>
      </section>


      <section className="mission-grid">
        <div className="mission-image"></div>

        <div className="mission-section">
          <h2>Empowering Gatherings</h2>
          <h3>Our Mission: Uniting Communities</h3>
          <p>
            Nordic Lights Gatherings supports Finnish event creators with modern
            tools and meaningful resources to craft lasting impactful
            experiences.
          </p>

          <div className="mission-points">
            <h4>Seamless Event Planning</h4>
            <p>
              Take the stress out of planning with our intuitive platform—built
              to handle everything from logistics to outreach with ease.
            </p>

            <h4>Engaging Community Features</h4>
            <p>
              Strengthen connections with built-in features that make it easy
              for attendees to engage, share and stay connected.
            </p>

            <h4>Clear Event Feedback</h4>
            <p>
              Get useful info about your events to help you plan better and make
              each gathering more enjoyable.
            </p>
          </div>
        </div>
      </section>

      <section className="team-section">
        <div className="team-content">
          <h2>Meet the Team</h2>
          <p>
            Meet the dedicated team behind Nordic Lights Gatherings, committed
            to bringing people together across Finland through powerful
            community events.
          </p>
        </div>

        <div className="team-grid">
          <div className="team-card">
            <div className="team-image">
              <img src={grid1} alt="grid1" />
            </div>
            <div className="team-text">
              <h3>Huttunen Beniitta</h3>
              <p>Developer</p>
            </div>
          </div>

          <div className="team-card">
            <div className="team-image">
              <img src={grid4} alt="grid4" />
            </div>
            <div className="team-text">
              <h3>Sonia Akter</h3>
              <p>Developer</p>
            </div>
          </div>

          <div className="team-card">
            <div className="team-image">
              <img src={grid3} alt="grid" /> 
            </div>
            <div className="team-text">
              <h3>Ugorji Chibuzor</h3>
              <p>Developer</p>
            </div>
          </div>
          <div className="team-card">
            <div className="team-image">
              <img src={grid2} alt="grid" />
            </div>
            <div className="team-text">
              <h3>Shihab Mahfuz</h3>
              <p>Developer</p>
            </div>
          </div>
        </div>
      </section>

      <section className="tools-section">
        <div className="tools-wrapper">
          <div className="tools-box">
            <h1>Technologies & Tools Used</h1>
            <ul>
              <li>
                <strong>Frontend:</strong> React, CSS
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
