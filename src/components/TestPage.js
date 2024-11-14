// // export default TestPage;
// import React, { useState } from 'react';
// import '../styles/TestPage.css';
// import questions from './questionsData';
// import { Link } from 'react-router-dom';

// function TestPage() {
//     const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
//     const [userAnswers, setUserAnswers] = useState(Array(questions.length).fill(null));
//     const [score, setScore] = useState(0);
//     const [showResult, setShowResult] = useState(false);
//     const [errorMessage, setErrorMessage] = useState('');
//     const [selectedOption, setSelectedOption] = useState(null);
//     const [inputValue, setInputValue] = useState('');

//     React.useEffect(() => {
//         const savedAnswer = userAnswers[currentQuestionIndex];
//         if (questions[currentQuestionIndex].type === 'mcq') {
//             setSelectedOption(savedAnswer);
//         } else {
//             setInputValue(savedAnswer !== null ? savedAnswer.toString() : '');
//         }
//     }, [currentQuestionIndex, userAnswers]);

//     const handleAnswer = (answer, type) => {
//         setErrorMessage('');
//         const correctAnswer = questions[currentQuestionIndex].answer;

//         if (type === 'mcq') {
//             setSelectedOption(answer);
//             const newUserAnswers = [...userAnswers];
//             newUserAnswers[currentQuestionIndex] = answer;
//             setUserAnswers(newUserAnswers);

//             if (answer === correctAnswer) {
//                 setScore(prevScore => prevScore + 1);
//             }
//         } else if (type === 'integer') {
//             if (answer.trim() === '' || isNaN(answer) || !Number.isInteger(parseFloat(answer))) {
//                 setErrorMessage('Allowed answer is only Number.');
//                 setUserAnswers(prevAnswers => {
//                     const newAnswers = [...prevAnswers];
//                     newAnswers[currentQuestionIndex] = null; // Set as null for invalid input
//                     return newAnswers;
//                 });
//                 return;
//             }

//             const parsedAnswer = parseInt(answer, 10);
//             setInputValue(answer);
//             const newUserAnswers = [...userAnswers];
//             newUserAnswers[currentQuestionIndex] = parsedAnswer;
//             setUserAnswers(newUserAnswers);

//             if (parsedAnswer === correctAnswer) {
//                 setScore(prevScore => prevScore + 1);
//             }
//         }
//     };

//     const moveToNextQuestion = () => {
//         if (userAnswers[currentQuestionIndex] === null) {
//             setErrorMessage('Please answer the question before proceeding.');
//             return;
//         }

//         if (currentQuestionIndex < questions.length - 1) {
//             setCurrentQuestionIndex(prevIndex => prevIndex + 1);
//             setSelectedOption(null);
//             setInputValue('');
//         } else {
//             setShowResult(true);
//         }
//     };

//     const moveToPreviousQuestion = () => {
//         if (currentQuestionIndex > 0) {
//             setCurrentQuestionIndex(prevIndex => prevIndex - 1);
//         }
//     };

//     const handleRestart = () => {
//         setUserAnswers(Array(questions.length).fill(null));
//         setScore(0);
//         setCurrentQuestionIndex(0);
//         setShowResult(false);
//         setErrorMessage('');
//         setSelectedOption(null);
//         setInputValue('');
//     };

//     if (showResult) {
//         return (
//             <div className="results">
//                 <h1>Test Completed</h1>
//                 <p>Your score: {score} out of {questions.length}</p>
//                 <button onClick={handleRestart}>Restart Test</button>
//                 <Link to="/LearnPage">Back to Learn</Link>
//             </div>
//         );
//     }

//     if (!questions || !questions.length || currentQuestionIndex >= questions.length) {
//         return <div>Loading questions or end of questions reached...</div>;
//     }

//     const currentQuestion = questions[currentQuestionIndex];
//     return (
//         <div className="test-page">
//             <div className="question-card">
//                 <h1>Question {currentQuestionIndex + 1}</h1>
//                 <p>{currentQuestion.question}</p>
//                 {errorMessage && <div className="error-message">{errorMessage}</div>}
//                 {currentQuestion.type === 'mcq' ? (
//                     currentQuestion.options.map(option => (
//                         <button 
//                             key={option} 
//                             onClick={() => handleAnswer(option, 'mcq')} 
//                             className={`option-button ${selectedOption === option ? 'selected-option' : ''}`}
//                         >
//                             {option}
//                         </button>
//                     ))
//                 ) : (
//                     <input 
//                         type="text" 
//                         value={inputValue}
//                         onChange={(e) => handleAnswer(e.target.value, 'integer')}
//                         placeholder="Type your answer" 
//                         className="input-answer"
//                     />
//                 )}
//                 <div className="navigation-buttons">
//                     <button onClick={moveToPreviousQuestion} disabled={currentQuestionIndex === 0}>Previous</button>
//                     <button onClick={moveToNextQuestion} disabled={userAnswers[currentQuestionIndex] === null}>Next</button>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default TestPage;
import React, { useState } from 'react';
import '../styles/TestPage.css';
import questions from './questionsData';
import { Link } from 'react-router-dom';

function TestPage() {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [userAnswers, setUserAnswers] = useState(Array(questions.length).fill(null));
    const [score, setScore] = useState(0);
    const [showResult, setShowResult] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [selectedOption, setSelectedOption] = useState(null);
    const [inputValue, setInputValue] = useState('');
    const [testStarted, setTestStarted] = useState(false); // New state to track if the test has started

    React.useEffect(() => {
        if (testStarted) {
            const savedAnswer = userAnswers[currentQuestionIndex];
            if (questions[currentQuestionIndex].type === 'mcq') {
                setSelectedOption(savedAnswer);
            } else {
                setInputValue(savedAnswer !== null ? savedAnswer.toString() : '');
            }
        }
    }, [currentQuestionIndex, userAnswers, testStarted]);

    const handleAnswer = (answer, type) => {
        setErrorMessage('');
        const correctAnswer = questions[currentQuestionIndex].answer;

        if (type === 'mcq') {
            setSelectedOption(answer);
            const newUserAnswers = [...userAnswers];
            newUserAnswers[currentQuestionIndex] = answer;
            setUserAnswers(newUserAnswers);

            if (answer === correctAnswer) {
                setScore(prevScore => prevScore + 1);
            }
        } else if (type === 'integer') {
            if (answer.trim() === '' || isNaN(answer) || !Number.isInteger(parseFloat(answer))) {
                setErrorMessage('Allowed answer is only Number.');
                setUserAnswers(prevAnswers => {
                    const newAnswers = [...prevAnswers];
                    newAnswers[currentQuestionIndex] = null;
                    return newAnswers;
                });
                return;
            }

            const parsedAnswer = parseInt(answer, 10);
            setInputValue(answer);
            const newUserAnswers = [...userAnswers];
            newUserAnswers[currentQuestionIndex] = parsedAnswer;
            setUserAnswers(newUserAnswers);

            if (parsedAnswer === correctAnswer) {
                setScore(prevScore => prevScore + 1);
            }
        }
    };

    const moveToNextQuestion = () => {
        if (userAnswers[currentQuestionIndex] === null) {
            setErrorMessage('Please answer the question before proceeding.');
            return;
        }

        if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex(prevIndex => prevIndex + 1);
            setSelectedOption(null);
            setInputValue('');
        } else {
            setShowResult(true);
        }
    };

    const moveToPreviousQuestion = () => {
        if (currentQuestionIndex > 0) {
            setCurrentQuestionIndex(prevIndex => prevIndex - 1);
        }
    };

    const handleRestart = () => {
        setUserAnswers(Array(questions.length).fill(null));
        setScore(0);
        setCurrentQuestionIndex(0);
        setShowResult(false);
        setErrorMessage('');
        setSelectedOption(null);
        setInputValue('');
        setTestStarted(false); // Reset test state
    };

    const startTest = () => {
        setTestStarted(true);
    };

    if (!testStarted) {
        return (
            <div className="test-welcome">
                <h1>Test Your Knowledge</h1>
                <p>Test your skill in basic sorting algorithms with several questions. Do Your Best!</p>
                <button onClick={startTest}>Start Test</button>
            </div>
        );
    }

    if (showResult) {
        return (
            <div className="results">
                <h1>Test Completed</h1>
                <p>Your score: {score} out of {questions.length}</p>
                <button onClick={handleRestart}>Restart Test</button>
                <Link to="/LearnPage">Back to Learn</Link>
            </div>
        );
    }

    if (!questions || !questions.length || currentQuestionIndex >= questions.length) {
        return <div>Loading questions or end of questions reached...</div>;
    }

    const currentQuestion = questions[currentQuestionIndex];
    return (
        <div className="test-page">
            <div className="question-card">
                <h1>Question {currentQuestionIndex + 1}</h1>
                <p>{currentQuestion.question}</p>
                {errorMessage && <div className="error-message">{errorMessage}</div>}
                {currentQuestion.type === 'mcq' ? (
                    currentQuestion.options.map(option => (
                        <button 
                            key={option} 
                            onClick={() => handleAnswer(option, 'mcq')} 
                            className={`option-button ${selectedOption === option ? 'selected-option' : ''}`}
                        >
                            {option}
                        </button>
                    ))
                ) : (
                    <input 
                        type="text" 
                        value={inputValue}
                        onChange={(e) => handleAnswer(e.target.value, 'integer')}
                        placeholder="Type your answer" 
                        className="input-answer"
                    />
                )}
                <div className="navigation-buttons">
                    <button onClick={moveToPreviousQuestion} disabled={currentQuestionIndex === 0}>Previous</button>
                    <button onClick={moveToNextQuestion} disabled={userAnswers[currentQuestionIndex] === null}>Next</button>
                </div>
            </div>
        </div>
    );
}

export default TestPage;
