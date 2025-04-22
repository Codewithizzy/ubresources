import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="ub-about">
      <section className="about-hero">
        <h1>About UB Resources</h1>
      </section>
      
      <section className="about-content">
        <div className="about-section">
          <h2>Our Story</h2>
          <p>
            UB Resources was founded in 2023 with the mission to provide
            high-quality resources to professionals and businesses worldwide.
            We believe in quality, reliability, and excellent customer service.
          </p>
        </div>
        
        <div className="about-section">
          <h2>Our Mission</h2>
          <p>
            To empower individuals and businesses by providing them with the
            resources they need to succeed in their respective fields.
          </p>
        </div>
        
        <div className="about-section">
          <h2>Our Team</h2>
          <p>
            We are a team of dedicated professionals committed to delivering
            the best products and services to our customers.
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;