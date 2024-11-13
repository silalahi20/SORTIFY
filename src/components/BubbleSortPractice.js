import React, { useState } from 'react';
import '../styles/BubbleSortPractice.css';

const BubbleSortPractice = () => {
  // State variables
  const [numCount, setNumCount] = useState(1);
  const [numbers, setNumbers] = useState([]);
  const [initialNumbers, setInitialNumbers] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isStarted, setIsStarted] = useState(false);
  const [swapped, setSwapped] = useState(false);
  const [swapRequired, setSwapRequired] = useState(false);
  const [statusText, setStatusText] = useState('');

  // Handle input validation
  const validateInput = (event) => {
    const value = parseInt(event.target.value, 10);
    setNumCount(value);
  };

  // Generate numbers function
  const generateNumbers = () => {
    const pool = Array.from({ length: 100 }, (_, index) => index);
    for (let i = 0; i < numCount; i++) {
      const j = Math.floor(Math.random() * (pool.length - i)) + i;
      [pool[i], pool[j]] = [pool[j], pool[i]];
    }
    const newNumbers = pool.slice(0, numCount);
    setNumbers(newNumbers);
    setInitialNumbers([...newNumbers]);
    setStatusText('');
    setIsStarted(false);
    setCurrentIndex(0);
  };
 // Display numbers as JSX elements
 const displayNumbers = () => {
    return numbers.map((num, index) => (
      <div
        key={index}
        className={`number ${
          (index === currentIndex || index === currentIndex + 1) ? 'highlight' : ''
        } ${isSorted() ? 'sorted-element' : ''}`}
        draggable={isStarted && (index === currentIndex || index === currentIndex + 1)}
        onDragStart={(e) => drag(e, index)}
        onDrop={(e) => drop(e, index)}
        onDragOver={(e) => allowDrop(e)}
      >
        {num}
      </div>
    ));
  };
  // Start sorting
  const startSorting = () => {
    setIsStarted(true);
    setCurrentIndex(0);
    setSwapped(false);
    setStatusText('Sorting dimulai...');
    highlightCurrentPair();
  };

  // Highlight the current pair being compared
  const highlightCurrentPair = () => {
    if (!isStarted || currentIndex >= numbers.length - 1) return;
    if (currentIndex < numbers.length - 1) {
      const requiresSwap = numbers[currentIndex] > numbers[currentIndex + 1];
      setSwapRequired(requiresSwap);
    }
  };

  // Move to the next step in sorting
  const nextStep = () => {
    if (!isStarted) return;

    if (swapRequired) {
      setStatusText('Wrong move, Check again!');
      return;
    }

    if (isSorted()) {
      setIsStarted(false);
      setStatusText('Bubble Sort Complete!');
      return;
    }

    if (currentIndex < numbers.length - 2) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
      highlightCurrentPair();
    } else {
      if (swapped) {
        setCurrentIndex(0);
        setSwapped(false);
        highlightCurrentPair();
      } else {
        setIsStarted(false);
        setStatusText('Bubble Sort Complete!');
      }
    }
  };
 // Drag and Drop Handlers
 const allowDrop = (event) => event.preventDefault();

 const drag = (event, index) => {
   event.dataTransfer.setData('text/plain', index);
 };

 const drop = (event, targetIndex) => {
   event.preventDefault();
   const draggedIndex = parseInt(event.dataTransfer.getData('text/plain'));

   if (
     (draggedIndex === currentIndex && targetIndex === currentIndex + 1) ||
     (draggedIndex === currentIndex + 1 && targetIndex === currentIndex)
   ) {
     if (numbers[currentIndex] > numbers[currentIndex + 1]) {
       swapNumbers(draggedIndex, targetIndex);
       setSwapped(true);
       setSwapRequired(false);
       setStatusText('Correct! Klik Next.');
     } else {
       setStatusText('Posisi sudah benar, silakan klik Next.');
     }
   } else {
     setStatusText('Hanya bisa menukar kotak yang sedang ditinjau!');
   }
 };

  // Check if the array is fully sorted
  const isSorted = () => {
    for (let i = 0; i < numbers.length - 1; i++) {
      if (numbers[i] > numbers[i + 1]) {
        return false;
      }
    }
    return true;
  };
    // Swap numbers in the array
    const swapNumbers = (index1, index2) => {
        setNumbers((prevNumbers) => {
        const newNumbers = [...prevNumbers];
        [newNumbers[index1], newNumbers[index2]] = [newNumbers[index2], newNumbers[index1]];
        return newNumbers;
        });
    };

  // Reset numbers to the initial state
  const resetNumbers = () => {
    setNumbers([...initialNumbers]);
    setIsStarted(false);
    setCurrentIndex(0);
    setStatusText('');
  };
  

  // Render
  return (
    <div className="bubble-sort-practice">
      <nav>
        <button onClick={() => window.history.back()}>Back</button>
      </nav>

      <main>
        <h1>Bubble Sort Practice</h1>
        <label htmlFor="numCount">Masukkan Jumlah Angka (max 10):</label>
        <input
          type="number"
          id="numCount"
          min="1"
          max="10"
          value={numCount}
          onChange={validateInput}
        />
        <button onClick={generateNumbers} disabled={numCount < 1 || numCount > 10}>
          Generate Angka
        </button>

        <div id="number-container" className="number-container">
          {numbers.map((num, index) => (
            <div
              key={index}
              className={`number ${
                index === currentIndex || index === currentIndex + 1 ? 'highlight' : ''
              } ${isSorted() ? 'sorted-element' : ''}`}
            >
              {num}
            </div>
          ))}
        </div>

        <div className="controls">
          <button onClick={startSorting}>Start</button>
          <button onClick={nextStep} disabled={!isStarted}>Next</button>
          <button onClick={resetNumbers}>Reset</button>
        </div>

        <p id="status-text">{statusText}</p>
      </main>
    </div>
  );
};

export default BubbleSortPractice;
