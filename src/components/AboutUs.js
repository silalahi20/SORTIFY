// import React from 'react';
// import '../styles/AboutUs.css'; // Pastikan CSS ini ada di folder styles
// import logo from '../img/logo.svg'; // Logo dari folder src/img

// const AboutUs = () => {
//     return (
//         <div className="about-us-container">
//             <div className="logo-container">
//                 <img src={logo} alt="SORTIFY Logo" className="logo" />
//             </div>
//             <div className="content">
//                 <h1>About SORTIFY</h1>
//                 <p>
//                     <strong>SORTIFY</strong> is an interactive learning platform dedicated to helping individuals
//                     learn and master the fundamentals of sorting algorithms. Whether you are a beginner or someone
//                     looking to strengthen your understanding of basic algorithms, SORTIFY provides an easy-to-use,
//                     hands-on experience that is both educational and engaging.
//                 </p>
//                 <p>
//                     At SORTIFY, we believe that learning sorting algorithms should be simple, clear, and accessible to
//                     everyone. Sorting is a fundamental concept in computer science and understanding how various sorting
//                     algorithms work is crucial for building a solid foundation in programming. Our platform offers a 
//                     range of materials, including interactive tutorials, examples, and quizzes on popular sorting 
//                     algorithms such as Bubble Sort, Insertion Sort, and Selection Sort.
//                 </p>
//                 <p>
//                     Our platform allows you to:
//                 </p>
//                 <ul>
//                     <li>Explore different sorting algorithms through interactive simulations.</li>
//                     <li>Test your knowledge with a variety of quizzes and assessments.</li>
//                     <li>Understand how different algorithms perform with detailed performance analysis.</li>
//                     <li>Learn at your own pace with clear explanations and visual aids.</li>
//                 </ul>
//                 <p>
//                     SORTIFY was created with the goal of making learning sorting algorithms a fun and engaging experience
//                     for everyone. Our interactive platform is designed to provide an in-depth understanding of sorting 
//                     algorithms, allowing users to visualize how each algorithm works step by step.
//                 </p>
//                 <p>
//                     Whether you are preparing for coding interviews, working on computer science assignments, or simply
//                     exploring algorithms out of curiosity, SORTIFY is the perfect platform to help you improve your
//                     understanding of sorting algorithms.
//                 </p>
//                 <h2>Why Choose SORTIFY?</h2>
//                 <ul>
//                     <li>Easy-to-follow tutorials with hands-on demonstrations.</li>
//                     <li>Interactive tests and quizzes to help reinforce your learning.</li>
//                     <li>Detailed performance analysis and visualizations to show the behavior of algorithms in different scenarios.</li>
//                     <li>Free access to all learning resources with no hidden fees.</li>
//                 </ul>
//                 <p>
//                     Join thousands of learners who are improving their understanding of algorithms with SORTIFY! Whether
//                     you are new to programming or a seasoned developer, SORTIFY will guide you every step of the way in 
//                     mastering sorting algorithms.
//                 </p>
//             </div>
//         </div>
//     );
// };

// export default AboutUs;
import React from 'react';
import '../styles/AboutUs.css'; // Pastikan file CSS ini ada di folder styles
import logo from '../img/logo.svg'; // Logo dari folder src/img

const AboutUs = () => {
    return (
        <div className="sortify-about-us">
            <div className="sortify-about-us__logo-container">
                <img src={logo} alt="SORTIFY Logo" className="sortify-about-us__logo" />
            </div>
            <div className="sortify-about-us__content">
                <h1>About SORTIFY</h1>
                <p>
                    <strong>SORTIFY</strong> is an interactive learning platform dedicated to helping individuals
                    learn and master the fundamentals of sorting algorithms. Whether you are a beginner or someone
                    looking to strengthen your understanding of basic algorithms, SORTIFY provides an easy-to-use,
                    hands-on experience that is both educational and engaging.
                </p>
                <p>
                    At SORTIFY, we believe that learning sorting algorithms should be simple, clear, and accessible to
                    everyone. Sorting is a fundamental concept in computer science and understanding how various sorting
                    algorithms work is crucial for building a solid foundation in programming. Our platform offers a 
                    range of materials, including interactive tutorials, examples, and quizzes on popular sorting 
                    algorithms such as Bubble Sort, Insertion Sort, and Selection Sort.
                </p>
                <p>
                    Our platform allows you to:
                </p>
                <ul>
                    <li>Explore different sorting algorithms through interactive simulations.</li>
                    <li>Test your knowledge with a variety of quizzes and assessments.</li>
                    <li>Understand how different algorithms perform with detailed performance analysis.</li>
                    <li>Learn at your own pace with clear explanations and visual aids.</li>
                </ul>
                <p>
                    SORTIFY was created with the goal of making learning sorting algorithms a fun and engaging experience
                    for everyone. Our interactive platform is designed to provide an in-depth understanding of sorting 
                    algorithms, allowing users to visualize how each algorithm works step by step.
                </p>
                <p>
                    Whether you are preparing for coding interviews, working on computer science assignments, or simply
                    exploring algorithms out of curiosity, SORTIFY is the perfect platform to help you improve your
                    understanding of sorting algorithms.
                </p>
                <h2>Why Choose SORTIFY?</h2>
                <ul>
                    <li>Easy-to-follow tutorials with hands-on demonstrations.</li>
                    <li>Interactive tests and quizzes to help reinforce your learning.</li>
                    <li>Detailed performance analysis and visualizations to show the behavior of algorithms in different scenarios.</li>
                    <li>Free access to all learning resources with no hidden fees.</li>
                </ul>
                <p>
                    Join thousands of learners who are improving their understanding of algorithms with SORTIFY! Whether
                    you are new to programming or a seasoned developer, SORTIFY will guide you every step of the way in 
                    mastering sorting algorithms.
                </p>
            </div>
        </div>
    );
};

export default AboutUs;
