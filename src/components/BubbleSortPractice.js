import React, { useState, useEffect } from 'react';
import '../styles/BubbleSortPractice.css';

const BubbleSortPractice = () => {
  const [numbers, setNumbers] = useState([]);
  const [initialNumbers, setInitialNumbers] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isStarted, setIsStarted] = useState(false);
  const [swapped, setSwapped] = useState(false);
  const [swapRequired, setSwapRequired] = useState(false);
  const [statusText, setStatusText] = useState('');

  const generateNumbers = () => {
    const count = parseInt(document.getElementById('numCount').value);
    const pool = Array.from({ length: 100 }, (_, index) => index);
    
    for (let i = 0; i < count; i++) {
      const j = Math.floor(Math.random() * (pool.length - i)) + i;
      [pool[i], pool[j]] = [pool[j], pool[i]];
    }
    
    const newNumbers = pool.slice(0, count);
    setNumbers(newNumbers);
    setInitialNumbers([...newNumbers]);
    resetHighlight();
  };

  const displayNumbers = () => {
    return numbers.map((num, index) => {
      const isHighlighted = isStarted && (index === currentIndex || index === currentIndex + 1);
      const isSorted = !isStarted && statusText === 'Bubble Sort Complete!';
      
      return (
        <div
          key={index}
          className={`number ${isHighlighted ? 'highlighted' : ''} ${isSorted ? 'sorted' : ''}`}
          draggable={isHighlighted}
          onDragStart={(e) => drag(e, index)}
          onDrop={(e) => drop(e, index)}
          onDragOver={allowDrop}
          id={`num-${index}`}
        >
          {num}
        </div>
      );
    });
  };

  const startSorting = () => {
    setCurrentIndex(0);
    setSwapped(false);
    setIsStarted(true);
    setStatusText('Sorting dimulai...');
  };

  const resetHighlight = () => {
    setStatusText('');
  };

  const allowDrop = (event) => {
    event.preventDefault();
  };

  const drag = (event, index) => {
    if (isStarted && (index === currentIndex || index === currentIndex + 1)) {
      event.dataTransfer.setData('text', index.toString());
    } else {
      event.preventDefault();
    }
  };

  const drop = (event, targetIndex) => {
    event.preventDefault();
    const draggedIndex = parseInt(event.dataTransfer.getData('text'));

    if (
      (draggedIndex === currentIndex && targetIndex === currentIndex + 1) ||
      (draggedIndex === currentIndex + 1 && targetIndex === currentIndex)
    ) {
      if (numbers[currentIndex] > numbers[currentIndex + 1]) {
        const newNumbers = [...numbers];
        [newNumbers[draggedIndex], newNumbers[targetIndex]] = 
        [newNumbers[targetIndex], newNumbers[draggedIndex]];
        setNumbers(newNumbers);
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

  const isSorted = () => {
    for (let i = 0; i < numbers.length - 1; i++) {
      if (numbers[i] > numbers[i + 1]) {
        return false;
      }
    }
    return true;
  };

  const nextStep = () => {
    if (!isStarted) return;

    if (swapRequired) {
      setStatusText('Wrong move, teliti lagi bos!');
      return;
    }

    if (isSorted()) {
      setIsStarted(false);
      setStatusText('Bubble Sort Complete!');
      return;
    }

    if (currentIndex < numbers.length - 2) {
      setCurrentIndex(currentIndex + 1);
    } else {
      if (swapped) {
        setCurrentIndex(0);
        setSwapped(false);
      } else {
        setIsStarted(false);
        setStatusText('Bubble Sort Complete!');
      }
    }
  };

  const resetNumbers = () => {
    setNumbers([...initialNumbers]);
    setIsStarted(false);
    setStatusText('');
    setCurrentIndex(0);
    setSwapped(false);
    setSwapRequired(false);
  };

  useEffect(() => {
    if (isStarted && currentIndex < numbers.length - 1) {
      setSwapRequired(numbers[currentIndex] > numbers[currentIndex + 1]);
    }
  }, [numbers, currentIndex, isStarted]);

  return (
    <div className="bubble-sort-container">
      <div className="input-container">
        <input
          type="number"
          id="numCount"
          max="10"
          placeholder="Masukkan Jumlah Angka (max 10)"
        />
        <button onClick={generateNumbers}>Generate Angka</button>
      </div>

      <div className="number-container">
        {displayNumbers()}
      </div>

      <div className="status-text">
        {statusText}
      </div>

      <div className="controls">
        <button onClick={startSorting} disabled={isStarted}>
          Start
        </button>
        <button onClick={nextStep} disabled={!isStarted}>
          Next
        </button>
        <button onClick={resetNumbers}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default BubbleSortPractice;