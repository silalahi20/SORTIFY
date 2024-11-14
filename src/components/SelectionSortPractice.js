// export default SelectionSortPractice;
import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/SelectionSortPractice.css';

const SelectionSortPractice = () => {
  const navigate =useNavigate();
  const [numbers, setNumbers] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isStarted, setIsStarted] = useState(false);
  const [minIndex, setMinIndex] = useState(0);
  const [sortedIndices, setSortedIndices] = useState([]);
  const [statusText, setStatusText] = useState('');
  const [draggedElementIndex, setDraggedElementIndex] = useState(null);
  const initialNumbersRef = useRef([]);

  const generateNumbers = () => {
    const count = parseInt(document.getElementById('numCount').value);
    const pool = Array.from({ length: 100 }, (_, index) => index);

    for (let i = 0; i < count; i++) {
      const j = Math.floor(Math.random() * (pool.length - i)) + i;
      [pool[i], pool[j]] = [pool[j], pool[i]];
    }

    const newNumbers = pool.slice(0, count);
    setNumbers(newNumbers);
    initialNumbersRef.current = [...newNumbers];
    setSortedIndices([]);
    setStatusText('');
    setIsStarted(false);
  };

  const startSorting = () => {
    setCurrentIndex(0);
    setMinIndex(0);
    setIsStarted(true);
    setStatusText('Sorting dimulai...');
  };

  const findMinElement = () => {
    if (currentIndex === numbers.length - 1) {
      setStatusText(`Bilangan terakhir ${numbers[currentIndex]} sudah benar. Silakan klik Next untuk selesai!`);
      setSortedIndices(prev => [...prev, currentIndex]);
      return;
    }

    let newMinIndex = currentIndex;
    let minElementValue = numbers[currentIndex];

    for (let i = currentIndex + 1; i < numbers.length; i++) {
      if (numbers[i] < minElementValue) {
        newMinIndex = i;
        minElementValue = numbers[i];
      }
    }

    setMinIndex(newMinIndex);

    if (newMinIndex === currentIndex) {
      setStatusText(`Bilangan ${numbers[currentIndex]} adalah bilangan terkecil. Silakan klik Next!`);
      setSortedIndices(prev => [...prev, currentIndex]);
    } else {
      setStatusText(`Bilangan ${numbers[newMinIndex]} adalah bilangan terkecil saat ini. Silakan lakukan drag and drop untuk menukarnya.`);
    }
  };

  const dragStart = (index) => {
    if (index === currentIndex || index === minIndex) {
      setDraggedElementIndex(index);
    }
  };

  const allowDrop = (event) => {
    event.preventDefault();
  };

  const drop = (index) => {
    if (draggedElementIndex !== null && (index === currentIndex || index === minIndex)) {
      swapNumbers(draggedElementIndex, index);
    }
  };

  const swapNumbers = (index1, index2) => {
    const newNumbers = [...numbers];
    [newNumbers[index1], newNumbers[index2]] = [newNumbers[index2], newNumbers[index1]];
    setNumbers(newNumbers);
    setSortedIndices(prev => [...prev, currentIndex]);
    
    const nextIndex = currentIndex + 1;
    if (nextIndex < numbers.length) {
      setCurrentIndex(nextIndex);
    } else {
      setIsStarted(false);
      setStatusText('Selection Sort Complete!');
    }
  };

  const nextStep = () => {
    setSortedIndices(prev => [...prev, currentIndex]);
    const nextIndex = currentIndex + 1;
    
    if (nextIndex < numbers.length) {
      setCurrentIndex(nextIndex);
    } else {
      setIsStarted(false);
      setStatusText('Selection Sort Complete!');
    }
  };

  const resetNumbers = () => {
    setNumbers([...initialNumbersRef.current]);
    setSortedIndices([]);
    setIsStarted(false);
    setStatusText('');
  };

  React.useEffect(() => {
    if (isStarted) {
      findMinElement();
    }
  }, [currentIndex, isStarted]);

  return (
    <div className="selection-sort-container">
        {/* Back button with SVG icon */}
      <div className="back-button" onClick={() => navigate('/practice')}>
        <img src="/backbutton1.svg" alt="Back" />
      </div>
      <div>
        <label htmlFor="numCount">Masukkan Jumlah Angka (maks 10): </label>
        <input
          type="number"
          id="numCount"
          min="1"
          max="10"
          className="number-input"
        />
        <button onClick={generateNumbers}>Generate Angka</button>
      </div>

      <div
        id="number-container"
        className={`number-container ${!isStarted ? 'sorted-complete' : ''}`}
      >
        {numbers.map((num, index) => (
          <div
            key={index}
            className={`number ${
              sortedIndices.includes(index)
                ? 'sorted-element'
                : index === currentIndex
                ? 'current-element'
                : index === minIndex
                ? 'min-element'
                : ''
            }`}
            draggable={isStarted && (index === currentIndex || index === minIndex)}
            onDragStart={() => dragStart(index)}
            onDrop={() => drop(index)}
            onDragOver={allowDrop}
          >
            {num}
          </div>
        ))}
      </div>

      <div className="controls">
        <button onClick={startSorting} disabled={isStarted || numbers.length === 0}>
          Start
        </button>
        <button
          onClick={nextStep}
          disabled={
            !isStarted || currentIndex === numbers.length || minIndex !== currentIndex
          }
        >
          Next
        </button>
        <button onClick={resetNumbers} disabled={numbers.length === 0}>
          Reset
        </button>
      </div>

      <div id="status-text">{statusText}</div>
    </div>
  );
};

export default SelectionSortPractice;