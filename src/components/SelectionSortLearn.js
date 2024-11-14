import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/SelectionSortLearn.css';
import selection1 from '../img/selection1.png';
import selection2 from '../img/selection2.png';
import selection3 from '../img/selection3.png';
import selection4 from '../img/selection4.png';
import selection5 from '../img/selection5.png';
import selection6 from '../img/selection6.png';

const SelectionSortLearn = () => {
    const navigate = useNavigate(); // Menggunakan useNavigate untuk navigasi

    const handleBackClick = () => {
        navigate('/learn');
    };

    return (
        <div className="selection-sort-learn">
            <div className="header">
                <img 
                    src={`${process.env.PUBLIC_URL}/backbutton1.svg`} 
                    alt="Back" 
                    className="back-button" 
                    onClick={handleBackClick} 
                />
            </div>
            <h1 className="title">Selection Sort Algorithm</h1>
            <div className="content">
                <p>
                    <strong>Selection Sort</strong> is a comparison-based sorting algorithm. It sorts an array by repeatedly selecting the smallest (or largest) element from the unsorted portion and swapping it with the first unsorted element. This process continues until the entire array is sorted.
                </p>
                <ul>
                    <li>First, we find the smallest element and swap it with the first element. This way we get the smallest element at its correct position.</li>
                    <li>Then we find the smallest among remaining elements (or second smallest) and move it to its correct position by swapping.</li>
                    <li>We keep doing this until we get all elements moved to their correct position.</li>
                </ul>

                <h2>How does Selection Sort work?</h2>
                <div className="image-container">
                    <img src={selection1} alt="Selection Sort Step 1" className="selection-image" />
                    <img src={selection2} alt="Selection Sort Step 2" className="selection-image" />
                    <img src={selection3} alt="Selection Sort Step 3" className="selection-image" />
                    <img src={selection4} alt="Selection Sort Step 4" className="selection-image" />
                    <img src={selection5} alt="Selection Sort Step 5" className="selection-image" />
                    <img src={selection6} alt="Selection Sort Step 6" className="selection-image" />
                </div>

                <h2>Complexity Analysis of Selection Sort:</h2>
                <p><strong>Time Complexity:</strong> O(n<sup>2</sup>)</p>
                <p>As there are two nested loops:</p>
                <ul>
                    <li>One loop to select an element of the array one by one = O(n)</li>
                    <li>Another loop to compare that element with every other array element = O(n)</li>
                    <li>Therefore overall complexity = O(n) * O(n) = O(n<sup>2</sup>)</li>
                </ul>
                <p><strong>Auxiliary Space:</strong> O(1) as the only extra memory used is for temporary variables.</p>

                <h3>Advantages of Selection Sort:</h3>
                <ul>
                    <li>Easy to understand and implement, making it ideal for teaching basic sorting concepts.</li>
                    <li>Requires only a constant O(1) extra memory space.</li>
                    <li>It requires fewer swaps (or memory writes) compared to many other standard algorithms.</li>
                </ul>

                <h3>Disadvantages of Selection Sort:</h3>
                <ul>
                    <li>Selection sort has a time complexity of O(n<sup>2</sup>) which makes it slower compared to algorithms like Quick Sort or Merge Sort.</li>
                    <li>Does not maintain the relative order of equal elements (it is not stable).</li>
                </ul>

                <h3>Applications of Selection Sort:</h3>
                <ul>
                    <li>Perfect for teaching fundamental sorting mechanisms and algorithm design.</li>
                    <li>Suitable for small lists where the overhead of more complex algorithms isn’t justified.</li>
                    <li>Ideal for systems with limited memory due to its in-place sorting capability.</li>
                    <li>Used in simple embedded systems where resource availability is limited and simplicity is important.</li>
                </ul>
            </div>
        </div>
    );
};

export default SelectionSortLearn;
