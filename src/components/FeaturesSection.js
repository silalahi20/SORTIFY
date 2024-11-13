// src/components/FeaturesSection.js
import React, { forwardRef } from 'react';
import '../styles/FeaturesSection.css';

const FeaturesSection = forwardRef((props, ref) => {
  return (
    <section ref={ref} className="features">
      <div className="features-content">
        <h1 className="features-title">SORTIFY</h1>
        <p className="features-description">Discover more about your ultimate sorting solution!</p>
        <img src="/img/logo.png" alt="Sortify Logo" className="features-logo" />
      </div>
    </section>
  );
});

export default FeaturesSection;

