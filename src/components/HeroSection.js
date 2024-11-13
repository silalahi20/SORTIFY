// src/components/HeroSection.js
import React from 'react';
import '../styles/HeroSection.css'; // Pastikan untuk mengimpor CSS untuk styling

const HeroSection = ({ onCTAClick }) => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-title">WELCOME TO, SORTIFY!</h1>
        <p className="hero-description">Your ultimate sorting learning platform, now at your fingertips!</p>
        <button className="cta-button" onClick={onCTAClick}>More About SORTIFY</button>
      </div>
    </section>
  );
};

export default HeroSection;
