// components/Hero.js
import React from 'react';
import './Hero.css'; // Styling for Hero section

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Flood Extent Mapping Using Computer Vision and Satellite Imagery</h1>
        <p>
          Flood Tracking System that assess water levels and plan evacuation accordingly.
        </p>
        <button className="cta-btn">Get Started</button>
      </div>
      <div className="hero-image">
        <img src="/flood animation.jpg" alt="Monitoring System" />
      </div>
    </section>
  );
};

export default Hero;
