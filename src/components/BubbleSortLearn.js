import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/BubbleSortLearn.css'; // Pastikan file CSS ini sesuai
import bubble1 from '../img/bubble1.png'; // Pastikan path gambar sesuai
import bubble2 from '../img/bubble2.png'; // Pastikan path gambar sesuai
import bubble3 from '../img/bubble3.png'; // Pastikan path gambar sesuai

const BubbleSortLearn = () => {
    const navigate = useNavigate(); // Menggunakan useNavigate untuk navigasi

    const handleBackClick = () => {
        navigate('/learn');
    };

    return (
        <div className="bubble-sort-learn">
            <div className="header">
                <img 
                    src={`${process.env.PUBLIC_URL}/backbutton1.svg`} 
                    alt="Back" 
                    className="back-button" 
                    onClick={handleBackClick} 
                />
            </div>
            <h1 className="title">Bubble Sort Algorithm</h1>
            <div className="content">
                <p>
                    <strong>Bubble Sort</strong> is the simplest sorting algorithm that works by repeatedly swapping 
                    the adjacent elements if they are in the wrong order. This algorithm is not suitable for large data sets as its 
                    average and worst-case time complexity are quite high.
                </p>
                <ul>
                    <li>We sort the array using multiple passes. After the first pass, the maximum element goes to end (its correct position). Same way, after second pass, the second largest element goes to second last position and so on.</li>
                    <li>In every pass, we process only those elements that have already not moved to correct position. After k passes, the largest k elements must have been moved to the last k positions.</li>
                    <li>In a pass, we consider remaining elements and compare all adjacent and swap if larger element is before a smaller element. If we keep doing this, we get the largest (among the remaining elements) at its correct position.</li>
                </ul>

                <h2>How does Bubble Sort Work?</h2>
                <div className="image-container">
                    <img src={bubble1} alt="Bubble Sort Step 1" className="bubble-image" />
                    <img src={bubble2} alt="Bubble Sort Step 2" className="bubble-image" />
                    <img src={bubble3} alt="Bubble Sort Step 3" className="bubble-image" />
                </div>

                <h2>Complexity Analysis of Bubble Sort:</h2>
                <p><strong>Time Complexity:</strong> O(n<sup>2</sup>)<br />
                <strong>Auxiliary Space:</strong> O(1)</p>

                <h3>Advantages of Bubble Sort:</h3>
                <ul>
                    <li>Bubble sort is easy to understand and implement.</li>
                    <li>It does not require any additional memory space.</li>
                    <li>It is a stable sorting algorithm, meaning that elements with the same key value maintain their relative order in the sorted output.</li>
                </ul>

                <h3>Disadvantages of Bubble Sort:</h3>
                <ul>
                    <li>Bubble sort has a time complexity of O(n<sup>2</sup>) which makes it very slow for large data sets.</li>
                    <li>Bubble sort is a comparison-based sorting algorithm, which means that it requires a comparison operator to determine the relative order of elements in the input data set. It can limit the efficiency of the algorithm in certain cases.</li>
                </ul>
            </div>
        </div>
    );
};

export default BubbleSortLearn;
