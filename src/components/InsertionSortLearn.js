import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/InsertionSortLearn.css'; // Pastikan file CSS ini sesuai
import insertion1 from '../img/insertion1.png'; // Pastikan path gambar sesuai

const InsertionSortLearn = () => {
    const navigate = useNavigate(); // Menggunakan useNavigate untuk navigasi

    const handleBackClick = () => {
        navigate('/learn');
    };

    return (
        <div className="insertion-sort-learn">
            <div className="header">
                <img 
                    src={`${process.env.PUBLIC_URL}/backbutton1.svg`} 
                    alt="Back" 
                    className="back-button" 
                    onClick={handleBackClick} 
                />
            </div>
            <h1 className="title">Insertion Sort Algorithm</h1>
            <div className="content">
                <p>
                    <strong>Insertion Sort</strong> is a simple sorting algorithm that works by iteratively inserting each element of an unsorted list into its correct position in a sorted portion of the list. It is like sorting playing cards in your hands. You split the cards into two groups: the sorted cards and the unsorted cards. Then, you pick a card from the unsorted group and put it in the right place in the sorted group.
                </p>
                <ul>
                    <li>We start with the second element of the array as the first element in the array is assumed to be sorted.</li>
                    <li>Compare the second element with the first element and check if the second element is smaller then swap them.</li>
                    <li>Move to the third element and compare it with the first two elements and put it at its correct position.</li>
                    <li>Repeat until the entire array is sorted.</li>
                </ul>

                <h2>How does Insertion Sort work?</h2>
                <div className="image-container">
                    <img src={insertion1} alt="Insertion Sort Step 1" className="insertion-image" />
                </div>

                <h2>Complexity Analysis of Insertion Sort:</h2>
                <p><strong>Time Complexity:</strong></p>
                <ul>
                    <li><strong>Best case:</strong> O(n), if the list is already sorted, where n is the number of elements in the list.</li>
                    <li><strong>Average case:</strong> O(n<sup>2</sup>), if the list is randomly ordered.</li>
                    <li><strong>Worst case:</strong> O(n<sup>2</sup>), if the list is in reverse order.</li>
                </ul>
                <p><strong>Space Complexity:</strong></p>
                <ul>
                    <li><strong>Auxiliary Space:</strong> O(1), Insertion sort requires O(1) additional space, making it a space-efficient sorting algorithm.</li>
                </ul>

                <h3>Advantages of Insertion Sort:</h3>
                <ul>
                    <li>Simple and easy to implement.</li>
                    <li>Stable sorting algorithm.</li>
                    <li>Efficient for small lists and nearly sorted lists.</li>
                    <li>Space-efficient as it is an in-place algorithm.</li>
                    <li>Adoptive, the number of inversions is directly proportional to number of swaps. For example, no swapping happens for a sorted array and it takes O(n) time only.</li>
                </ul>

                <h3>Disadvantages of Insertion Sort:</h3>
                <ul>
                    <li>Inefficient for large lists.</li>
                    <li>Not as efficient as other sorting algorithms (e.g., merge sort, quick sort) for most cases.</li>
                </ul>

                <h3>Applications of Insertion Sort:</h3>
                <ul>
                    <li>The list is small or nearly sorted.</li>
                    <li>Can be used as a subroutine in <strong>Bucket Sort</strong>.</li>
                    <li>Used in Hybrid Sorting algorithms like Quick Sort and Merge Sort when the subarray size becomes small.</li>
                    <li>It is commonly used in applications where simplicity and stability are important.</li>
                </ul>
            </div>
        </div>
    );
};

export default InsertionSortLearn;
