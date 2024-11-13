// src/components/PracticePage.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/PracticePage.css'; // Pastikan untuk menyesuaikan jalur jika perlu

const PracticePage = () => {
  const navigate = useNavigate();

  const handleGoPractice = (algorithm) => {
    navigate(`/practice/${algorithm.toLowerCase().replace(' ', '-')}`); // Asumsi navigasi dinamis
  };

  const algorithms = [
    {
      name: "Bubble Sort",
      description: "Practice Bubble Sort with interactive exercises that help you understand the algorithm by doing.",
      complexity: "Average Time Complexity: O(n^2)",
      img: "bubble-sort.svg"
    },
    {
      name: "Selection Sort",
      description: "Enhance your skills with Selection Sort through step-by-step practice sessions.",
      complexity: "Average Time Complexity: O(n^2)",
      img: "selection-sort.svg"
    },
    {
      name: "Insertion Sort",
      description: "Get hands-on practice with Insertion Sort to improve your understanding and speed.",
      complexity: "Average Time Complexity: O(n^2)",
      img: "insertion-sort.svg"
    }
  ];

  return (
    <div className="practice-page">
      <button className="back-button" onClick={() => navigate('/')}>
        <img src="backbutton1.svg" alt="Back" />
      </button>
      <div className="practice-header">
        <h1 className="practice-title">Practice Sorting Algorithms</h1>
        <p className="practice-description">Get hands-on experience with sorting algorithms through interactive practice sessions.</p>
      </div>
      <div className="algorithms-container">
        {algorithms.map((algo, index) => (
          <div key={index} className="algorithm-section">
            <h2>{algo.name}</h2>
            <img src={algo.img} alt={`${algo.name} Diagram`} style={{ width: '200px', height: '200px' }} />
            <p>{algo.description}</p>
            <p><strong>{algo.complexity}</strong></p>
            <button className="go-practice-button" onClick={() => handleGoPractice(algo.name)}>Go Practice</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PracticePage;
