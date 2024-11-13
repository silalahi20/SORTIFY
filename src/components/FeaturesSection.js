// export default FeaturesSection;
import React, { forwardRef } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate untuk navigasi
import '../styles/FeaturesSection.css';

const FeaturesSection = forwardRef((props, ref) => {
  const navigate = useNavigate(); // Hook navigasi

  const features = [
    {
      title: "Learn",
      description: "Learn about basic sorting algorithms. Equipped with material and visuals that help you to understand sorting algorithms better!",
      img: 'learn.svg',
      link: '/learn' // Tentukan link yang sesuai
    },
    {
      title: "Practice",
      description: "Interactive training media that allows you to practice sorting algorithm skills with cool visualization. There's no such thing as not being able to do it if you practice with SORTIFY!",
      img: "practice.svg",
      link: '/practice' // Tentukan link yang sesuai
    },
    {
      title: "Test",
      description: "Test your understanding of basic sorting algorithms with exercises that are comprehensive, interesting, and can be done by all groups of people. Work hard and study hard!",
      img: "test.svg",
      link: '/test' // Tentukan link yang sesuai
    }
  ];

  return (
    <section ref={ref} className="features">
      <div className="features-header">
        <h1 className="features-title">Discover SORTIFY Sorting Algorithms!</h1>
        <p className="features-description">SORTIFY is an interactive learning platform for learning basic sorting algorithms. Get ready and excited to learn with SORTIFY!</p>
      </div>
      <div className="features-content">
        {features.map((feature, index) => (
          <div key={index} className="feature-item">
            <h2>{feature.title}</h2>
            <img src={feature.img} alt={`${feature.title} Diagram`} style={{ width: '200px', height: '200px' }}/>
            <p>{feature.description}</p>
            <button onClick={() => navigate(feature.link)} className="explore-button">Explore</button>
          </div>
        ))}
      </div>
    </section>
  );
});

export default FeaturesSection;
