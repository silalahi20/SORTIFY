import React from 'react';
import '../styles/HeroSection.css'; // Pastikan untuk mengimpor CSS untuk styling

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-title">WELCOME TO, SORTIFY!</h1>
        <p className="hero-description">Your ultimate sorting solution, now at your fingertips!</p>
        <button className="cta-button">Get Started</button>
      </div>
    </section>
  );
};

export default HeroSection;