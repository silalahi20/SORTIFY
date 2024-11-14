// import React, { useState, useEffect } from 'react';
// import '../styles/BubbleSortPractice.css';

// const BubbleSortPractice = () => {
//   const [numbers, setNumbers] = useState([]);
//   const [initialNumbers, setInitialNumbers] = useState([]);
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [isStarted, setIsStarted] = useState(false);
//   const [swapped, setSwapped] = useState(false);
//   const [swapRequired, setSwapRequired] = useState(false);
//   const [statusText, setStatusText] = useState('');

//   const generateNumbers = () => {
//     const count = parseInt(document.getElementById('numCount').value);
//     const pool = Array.from({ length: 100 }, (_, index) => index);
    
//     for (let i = 0; i < count; i++) {
//       const j = Math.floor(Math.random() * (pool.length - i)) + i;
//       [pool[i], pool[j]] = [pool[j], pool[i]];
//     }
    
//     const newNumbers = pool.slice(0, count);
//     setNumbers(newNumbers);
//     setInitialNumbers([...newNumbers]);
//     resetHighlight();
//   };

//   const displayNumbers = () => {
//     return numbers.map((num, index) => {
//       const isHighlighted = isStarted && (index === currentIndex || index === currentIndex + 1);
//       const isSorted = !isStarted && statusText === 'Bubble Sort Complete!';
      
//       return (
//         <div
//           key={index}
//           className={`number ${isHighlighted ? 'highlighted' : ''} ${isSorted ? 'sorted' : ''}`}
//           draggable={isHighlighted}
//           onDragStart={(e) => drag(e, index)}
//           onDrop={(e) => drop(e, index)}
//           onDragOver={allowDrop}
//           id={`num-${index}`}
//         >
//           {num}
//         </div>
//       );
//     });
//   };

//   const startSorting = () => {
//     setCurrentIndex(0);
//     setSwapped(false);
//     setIsStarted(true);
//     setStatusText('Sorting dimulai...');
//   };

//   const resetHighlight = () => {
//     setStatusText('');
//   };

//   const allowDrop = (event) => {
//     event.preventDefault();
//   };

//   const drag = (event, index) => {
//     if (isStarted && (index === currentIndex || index === currentIndex + 1)) {
//       event.dataTransfer.setData('text', index.toString());
//     } else {
//       event.preventDefault();
//     }
//   };

//   const drop = (event, targetIndex) => {
//     event.preventDefault();
//     const draggedIndex = parseInt(event.dataTransfer.getData('text'));

//     if (
//       (draggedIndex === currentIndex && targetIndex === currentIndex + 1) ||
//       (draggedIndex === currentIndex + 1 && targetIndex === currentIndex)
//     ) {
//       if (numbers[currentIndex] > numbers[currentIndex + 1]) {
//         const newNumbers = [...numbers];
//         [newNumbers[draggedIndex], newNumbers[targetIndex]] = 
//         [newNumbers[targetIndex], newNumbers[draggedIndex]];
//         setNumbers(newNumbers);
//         setSwapped(true);
//         setSwapRequired(false);
//         setStatusText('Correct! Klik Next.');
//       } else {
//         setStatusText('Posisi sudah benar, silakan klik Next.');
//       }
//     } else {
//       setStatusText('Hanya bisa menukar kotak yang sedang ditinjau!');
//     }
//   };

//   const isSorted = () => {
//     for (let i = 0; i < numbers.length - 1; i++) {
//       if (numbers[i] > numbers[i + 1]) {
//         return false;
//       }
//     }
//     return true;
//   };

//   const nextStep = () => {
//     if (!isStarted) return;

//     if (swapRequired) {
//       setStatusText('Wrong move, teliti lagi bos!');
//       return;
//     }

//     if (isSorted()) {
//       setIsStarted(false);
//       setStatusText('Bubble Sort Complete!');
//       return;
//     }

//     if (currentIndex < numbers.length - 2) {
//       setCurrentIndex(currentIndex + 1);
//     } else {
//       if (swapped) {
//         setCurrentIndex(0);
//         setSwapped(false);
//       } else {
//         setIsStarted(false);
//         setStatusText('Bubble Sort Complete!');
//       }
//     }
//   };

//   const resetNumbers = () => {
//     setNumbers([...initialNumbers]);
//     setIsStarted(false);
//     setStatusText('');
//     setCurrentIndex(0);
//     setSwapped(false);
//     setSwapRequired(false);
//   };

//   useEffect(() => {
//     if (isStarted && currentIndex < numbers.length - 1) {
//       setSwapRequired(numbers[currentIndex] > numbers[currentIndex + 1]);
//     }
//   }, [numbers, currentIndex, isStarted]);

//   return (
//     <div className="bubble-sort-container">
//       <div className="input-container">
//         <input
//           type="number"
//           id="numCount"
//           max="10"
//           placeholder="Masukkan Jumlah Angka (max 10)"
//         />
//         <button onClick={generateNumbers}>Generate Angka</button>
//       </div>

//       <div className="number-container">
//         {displayNumbers()}
//       </div>

//       <div className="status-text">
//         {statusText}
//       </div>

//       <div className="controls">
//         <button onClick={startSorting} disabled={isStarted}>
//           Start
//         </button>
//         <button onClick={nextStep} disabled={!isStarted}>
//           Next
//         </button>
//         <button onClick={resetNumbers}>
//           Reset
//         </button>
//       </div>
//     </div>
//   );
// };

// export default BubbleSortPractice;
import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/BubbleSortPractice.css';

const BubbleSortPractice = () => {
  const navigate = useNavigate();
  const [numbers, setNumbers] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isStarted, setIsStarted] = useState(false);
  const [swapped, setSwapped] = useState(false);
  const [statusText, setStatusText] = useState('');
  const [draggedElementIndex, setDraggedElementIndex] = useState(null);
  const [sortedIndices, setSortedIndices] = useState([]);
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
    setSwapped(false);
    setIsStarted(true);
    setStatusText('Sorting dimulai...');
  };

  const dragStart = (index) => {
    if (index === currentIndex || index === currentIndex + 1) {
      setDraggedElementIndex(index);
    }
  };

  const allowDrop = (event) => {
    event.preventDefault();
  };

  const drop = (index) => {
    if (draggedElementIndex !== null && 
       (index === currentIndex || index === currentIndex + 1) &&
       (draggedElementIndex === currentIndex || draggedElementIndex === currentIndex + 1)) {
      if (numbers[currentIndex] > numbers[currentIndex + 1]) {
        swapNumbers(draggedElementIndex, index);
        setStatusText('Correct! Klik Next.');
      } else {
        setStatusText('Posisi sudah benar, silakan klik Next.');
      }
    }
  };

  const swapNumbers = (index1, index2) => {
    const newNumbers = [...numbers];
    [newNumbers[index1], newNumbers[index2]] = [newNumbers[index2], newNumbers[index1]];
    setNumbers(newNumbers);
    setSwapped(true);
  };

  const nextStep = () => {
    if (currentIndex < numbers.length - 2) {
      setCurrentIndex(currentIndex + 1);
    } else {
      if (swapped) {
        setCurrentIndex(0);
        setSwapped(false);
      } else {
        setIsStarted(false);
        setStatusText('Bubble Sort Complete!');
        setSortedIndices([...Array(numbers.length).keys()]);
      }
    }
  };

  const resetNumbers = () => {
    setNumbers([...initialNumbersRef.current]);
    setSortedIndices([]);
    setIsStarted(false);
    setStatusText('');
    setCurrentIndex(0);
    setSwapped(false);
  };

  React.useEffect(() => {
    if (isStarted) {
      const shouldSwap = numbers[currentIndex] > numbers[currentIndex + 1];
      setStatusText(shouldSwap 
        ? `${numbers[currentIndex]} lebih besar dari ${numbers[currentIndex + 1]}. Silakan tukar posisinya!`
        : 'Posisi sudah benar, silakan klik Next.');
    }
  }, [currentIndex, numbers, isStarted]);

  return (
    <div className="selection-sort-container">
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

      <div className={`number-container ${!isStarted ? 'sorted-complete' : ''}`}>
        {numbers.map((num, index) => (
          <div
            key={index}
            className={`number ${
              sortedIndices.includes(index)
                ? 'sorted-element'
                : (index === currentIndex || index === currentIndex + 1) && isStarted
                ? 'current-element'
                : ''
            }`}
            draggable={isStarted && (index === currentIndex || index === currentIndex + 1)}
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
        <button onClick={nextStep} disabled={!isStarted}>
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

export default BubbleSortPractice;