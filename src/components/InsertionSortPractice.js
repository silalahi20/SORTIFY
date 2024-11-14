import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/InsertionSortPractice.css';


const InsertionSortPractice = () => {
    const navigate =useNavigate();
    const [numbers, setNumbers] = useState([]);
    const [initialNumbers, setInitialNumbers] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(1);
    const [isStarted, setIsStarted] = useState(false);
    const [compareIndex, setCompareIndex] = useState(0);
    const [statusText, setStatusText] = useState('');
    const [draggedElementIndex, setDraggedElementIndex] = useState(null);
    const nextButtonRef = useRef(null);

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
    if (nextButtonRef.current) {
      nextButtonRef.current.disabled = true;
    }
  };

  const displayNumbers = () => {
    return numbers.map((num, index) => (
      <div
        key={index}
        className={`number ${
          index === currentIndex ? 'current-element' : ''
        } ${
          index === compareIndex && isStarted ? 'compared-element' : ''
        } ${
          isStarted && index < currentIndex && index !== compareIndex ? 'sorted-element' : ''
        }`}
        draggable={index === currentIndex || index === compareIndex}
        id={`num-${index}`}
        onDragStart={() => dragStart(index)}
        onDrop={() => drop(index)}
        onDragOver={(e) => allowDrop(e)}
      >
        {num}
      </div>
    ));
  };

  const startSorting = () => {
    setCurrentIndex(1);
    setIsStarted(true);
    setStatusText(`Bilangan ${numbers[0]} sudah pada posisinya. Silakan klik Next!`);
    highlightCurrentElement();
  };

  const highlightCurrentElement = () => {
    if (!isStarted) return;
    setStatusText(`Tinjau elemen: ${numbers[currentIndex]}.`);
    setCompareIndex(currentIndex - 1);
    highlightComparedElement(currentIndex - 1);
  };

  const highlightComparedElement = (index) => {
    setCompareIndex(index);

    if (numbers[currentIndex] < numbers[index]) {
      setStatusText(
        `Bilangan ${numbers[currentIndex]} lebih kecil daripada ${numbers[index]}. Silakan tukar posisi ${numbers[currentIndex]} dengan ${numbers[index]}!`
      );
      if (nextButtonRef.current) {
        nextButtonRef.current.disabled = true;
      }
    } else {
      let hasLargerElementToLeft = false;
      for (let i = index - 1; i >= 0; i--) {
        if (numbers[i] > numbers[currentIndex]) {
          hasLargerElementToLeft = true;
          break;
        }
      }

      if (hasLargerElementToLeft) {
        setCompareIndex(index - 1);
        highlightComparedElement(index - 1);
      } else {
        setStatusText(`Bilangan ${numbers[currentIndex]} sudah pada posisinya. Silakan klik Next!`);
        if (nextButtonRef.current) {
          nextButtonRef.current.disabled = false;
        }
      }
    }
  };

  const resetHighlight = () => {
    setStatusText('');
  };

  const dragStart = (index) => {
    if (index === currentIndex || index === compareIndex) {
      setDraggedElementIndex(index);
    } else {
      setDraggedElementIndex(null);
    }
  };

  const allowDrop = (event) => {
    event.preventDefault();
  };

  const drop = (index) => {
    if (draggedElementIndex !== null && (index === currentIndex || index === compareIndex)) {
      swapNumbers(draggedElementIndex, index);
    }
  };

  const swapNumbers = (index1, index2) => {
    const newNumbers = [...numbers];
    [newNumbers[index1], newNumbers[index2]] = [newNumbers[index2], newNumbers[index1]];
    setNumbers(newNumbers);
    
    const newCurrentIndex = Math.min(index1, index2);
    setCurrentIndex(newCurrentIndex);
    
    if (compareIndex > 0) {
      setCompareIndex(compareIndex - 1);
      highlightComparedElement(compareIndex - 1);
    } else {
      let hasLargerElementToLeft = false;
      for (let i = newCurrentIndex - 1; i >= 0; i--) {
        if (newNumbers[i] > newNumbers[newCurrentIndex]) {
          setCompareIndex(i);
          hasLargerElementToLeft = true;
          break;
        }
      }

      if (!hasLargerElementToLeft) {
        const nextIndex = Math.max(index1, index2) + 1;
        if (nextIndex < newNumbers.length) {
          setCurrentIndex(nextIndex);
          highlightCurrentElement();
        } else {
          completeSorting();
        }
      }
    }
  };

  const nextStep = () => {
    if (currentIndex < numbers.length) {
      let hasLargerElementToLeft = false;
      for (let i = currentIndex - 1; i >= 0; i--) {
        if (numbers[i] > numbers[currentIndex]) {
          setCompareIndex(i);
          hasLargerElementToLeft = true;
          break;
        }
      }

      if (hasLargerElementToLeft) {
        highlightComparedElement(compareIndex);
      } else {
        if (currentIndex + 1 < numbers.length) {
          setCurrentIndex(currentIndex + 1);
          highlightCurrentElement();
        } else {
          completeSorting();
        }
      }
    }
  };

  const completeSorting = () => {
    setIsStarted(false);
    setStatusText('Insertion Sort Complete!');
    if (nextButtonRef.current) {
      nextButtonRef.current.disabled = true;
    }
  };

  const resetNumbers = () => {
    setNumbers([...initialNumbers]);
    setIsStarted(false);
    setStatusText('');
    resetHighlight();
  };

  return (
    <div className="insertion-sort-container">
      {/* Back button with SVG icon */}
      <div className="back-button" onClick={() => navigate('/practice')}>
        <img src="/backbutton1.svg" alt="Back" />
      </div>
      <div className="input-section">
        <label htmlFor="numCount">Masukkan Jumlah Angka (max 10):</label>
        <input
          type="number"
          id="numCount"
          min="1"
          max="10"
          defaultValue="5"
        />
        <button onClick={generateNumbers}>Generate Angka</button>
      </div>

      <div id="number-container" className={`number-container ${!isStarted ? '' : 'active'}`}>
        {displayNumbers()}
      </div>

      <div id="status-text">{statusText}</div>

      <div className="controls">
        <button onClick={startSorting} disabled={isStarted || numbers.length === 0}>
          Start
        </button>
        <button
          ref={nextButtonRef}
          onClick={nextStep}
          disabled={!isStarted}
        >
          Next
        </button>
        <button onClick={resetNumbers} disabled={!isStarted && numbers.length === 0}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default InsertionSortPractice;