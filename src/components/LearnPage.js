import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/LearnPage.css'; // Make sure the CSS path is correct

const LearnPage = () => {
  const navigate = useNavigate();

  const handleLearnMore = (algorithm) => {
    navigate(`/learn/${algorithm.toLowerCase().replace(' ', '-')}`); // Asumsi routing dinamis berdasarkan nama algoritma
  };

  const algorithms = [
    {
      name: "Bubble Sort",
      description: "Bubble Sort is the simplest sorting algorithm that works by repeatedly swapping the adjacent elements if they are in the wrong order. This algorithm is not suitable for large data sets as its average and worst-case time complexity are quite high.",
      complexity: "Average Time Complexity: O(n^2)",
      img: "bubble-sort.svg"
    },
    {
      name: "Selection Sort",
      description: "Selection Sort is a comparison-based sorting algorithm. It sorts an array by repeatedly selecting the smallest (or largest) element from the unsorted portion and swapping it with the first unsorted element. This process continues until the entire array is sorted.",
      complexity: "Average Time Complexity: O(n^2)",
      img: "selection-sort.svg"
    },
    {
      name: "Insertion Sort",
      description: "Insertion Sort is a comparison sorting-based algorithm. It sorts an array by iteratively taking each element from the unsorted portion and placing it in its appropriate position. This process continues by moving the boundary between the sorted and unsorted parts one element at a time.",
      complexity: "Average Time Complexity: O(n^2)",
      img: "insertion-sort.svg"
    }
  ];

  return (
    <div className="learn-page">
      <button className="back-button" onClick={() => navigate('/')}>
        <img src="backbutton1.svg" alt="Back" />
      </button>
      <div className="learn-header">
        <h1 classname="learn-title">Learn Sorting Algorithms</h1>
        <p classname="learn-description">Learn the basics of sorting algorithms and their complexities.</p>
      </div>
      <div className="algorithms-container">
        {algorithms.map((algo, index) => (
          <div key={index} className="algorithm-section">
            <h2>{algo.name}</h2>
            <img src={algo.img} alt={`${algo.name} Diagram`} style={{ width: '200px', height: '200px' }} /> 
            <p>{algo.description}</p>
            <p><strong>{algo.complexity}</strong></p>
            <button className="learn-more-button" onClick={() => handleLearnMore(algo.name)}>Learn More</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LearnPage;
