import React from 'react';
import '../styles/HeroSection.css';

const FeaturesSection = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>SORTIFY</h1>
        <p>Your ultimate sorting solution, now at your fingertips!</p>
        <img src="/img/logo.png" alt="Sortify Logo" className="hero-logo" />
        <button className="cta-button">Get Started</button>
      </div>
    </section>
  );
};

export default FeaturesSection;
