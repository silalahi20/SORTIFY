import React, { forwardRef } from 'react';
import '../styles/FeaturesSection.css';

const FeaturesSection = forwardRef((props, ref) => {
  const features = [
    {
      title: "Bubble Sort",
      description: "Bubble Sort is the simplest sorting algorithm that works by repeatedly swapping the adjacent elements if they are in the wrong order. This algorithm is not suitable for large data sets as its average and worst-case time complexity are quite high.",
      img: 'bubble-sort.svg' // Jalur relatif dari posisi file JS ke file gambar
    },
    {
      title: "Selection Sort",
      description: "Selection Sort is a comparison-based sorting algorithm. It sorts an array by repeatedly selecting the smallest (or largest) element from the unsorted portion and swapping it with the first unsorted element. This process continues until the entire array is sorted.",
      img: "selection-sort.svg" // Jalur relatif yang benar
    },
    {
      title: "Insertion Sort",
      description: "Insertion sort is a simple sorting algorithm that works by iteratively inserting each element of an unsorted list into its correct position in a sorted portion of the list. It is like sorting playing cards in your hands!",
      img: "insertion-sort.svg" // Jalur relatif yang benar
    }
  ];

  return (
    <section ref={ref} className="features">
      <div className="features-header">
        <h1 className="features-title">Discover SORTIFY Sorting Algorithms!</h1>
        <p className="features-description">Sortify is an interactive learning platform for learning basic sorting algorithms. Get ready and excited to learn with Sortify!</p>
      </div>
      <div className="features-content">
        {features.map(feature => (
          <div key={feature.title} className="feature-item">
            <h2>{feature.title}</h2>
            <img src={feature.img} alt={`${feature.title} Diagram`} style={{ width: '200px', height: '200px' }}/>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
});

export default FeaturesSection;
