const questions = [
    // Bubble Sort Questions (Multiple Choice)
    { id: 1, type: 'mcq', question: "What is the best case time complexity of Bubble Sort?", options: ["O(n)", "O(n^2)", "O(log n)", "O(n log n)"], answer: "O(n)" },
    { id: 2, type: 'mcq', question: "Which of the following describes the worst-case scenario for Bubble Sort?", options: ["The list is in ascending order", "The list is in descending order", "The list is already sorted", "The list contains identical elements"], answer: "The list is in descending order" },
    { id: 3, type: 'mcq', question: "What does Bubble Sort use to sort the elements?", options: ["Selection", "Insertion", "Exchanging", "Merging"], answer: "Exchanging" },
    { id: 4, type: 'mcq', question: "How many total passes does Bubble Sort make through a list of 5 items?", options: ["4", "5", "10", "25"], answer: "4" },
    { id: 5, type: 'mcq', question: "What is the space complexity of Bubble Sort?", options: ["O(1)", "O(n)", "O(log n)", "O(n^2)"], answer: "O(1)" },

    // Insertion Sort Questions (Multiple Choice)
    { id: 6, type: 'mcq', question: "Which case does Insertion Sort perform the best?", options: ["When elements are in random order", "When elements are in reverse order", "When elements are nearly sorted", "When every element is the same"], answer: "When elements are nearly sorted" },
    { id: 7, type: 'mcq', question: "What is the time complexity of Insertion Sort in the best case?", options: ["O(n)", "O(n^2)", "O(log n)", "O(n log n)"], answer: "O(n)" },
    { id: 8, type: 'mcq', question: "Which technique is used by Insertion Sort to create the sorted list?", options: ["Exchanging", "Selection", "Insertion", "Merging"], answer: "Insertion" },
    { id: 9, type: 'mcq', question: "What is the worst-case space complexity of Insertion Sort?", options: ["O(1)", "O(n)", "O(log n)", "O(n^2)"], answer: "O(1)" },
    { id: 10, type: 'mcq', question: "How many swaps would Insertion Sort make in the worst case for a list of 4 elements?", options: ["3", "6", "4", "10"], answer: "6" },

    // Selection Sort Questions (Multiple Choice)
    { id: 11, type: 'mcq', question: "What is the main advantage of Selection Sort over other sorting algorithms?", options: ["It is faster than Quick Sort", "It makes the minimum possible number of swaps", "It is easier to implement than Bubble Sort", "It uses less memory than Merge Sort"], answer: "It makes the minimum possible number of swaps" },
    { id: 12, type: 'mcq', question: "What is the best case time complexity of Selection Sort?", options: ["O(n)", "O(n^2)", "O(log n)", "O(n log n)"], answer: "O(n^2)" },
    { id: 13, type: 'mcq', question: "Which sorting algorithm is more efficient at sorting an already sorted list?", options: ["Bubble Sort with optimization", "Insertion Sort", "Selection Sort", "All of the above"], answer: "Bubble Sort with optimization" },
    { id: 14, type: 'mcq', question: "What is the space complexity of Selection Sort?", options: ["O(1)", "O(n)", "O(log n)", "O(n^2)"], answer: "O(1)" },
    { id: 15, type: 'mcq', question: "How many total comparisons does Selection Sort make for a list of 5 elements?", options: ["10", "25", "5", "20"], answer: "10" },

    // Integer Answer Questions
    { id: 16, type: 'integer', question: "How many passes does Bubble Sort make through a list of 10 items in the worst case?", answer: 9 },
    { id: 17, type: 'integer', question: "If every element in a list of 7 items is the same, how many swaps does Bubble Sort perform?", answer: 0 },
    { id: 18, type: 'integer', question: "How many comparisons does Insertion Sort make in the best case for a list of 4 elements?", answer: 3 },
    { id: 19, type: 'integer', question: "What is the minimum number of swaps Selection Sort will perform for a list of 8 items?", answer: 7 },
    { id: 20, type: 'integer', question: "What is the maximum number of swaps Insertion Sort might perform for a list of 3 items?", answer: 3 },
    { id: 21, type: 'integer', question: "Total number of comparisons in the worst case for Bubble Sort with 5 items?", answer: 10 },
    { id: 22, type: 'integer', question: "Total passes Insertion Sort requires for a list of 6 items in the worst case?", answer: 5 },
    { id: 23, type: 'integer', question: "Minimum number of comparisons Selection Sort needs for sorting 3 items?", answer: 3 },
    { id: 24, type: 'integer', question: "Maximum number of moves needed by Insertion Sort to sort an array of 4 items in reverse order?", answer: 6 },
];

export default questions;
