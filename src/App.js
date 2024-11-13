// // src/App.js
// import React, { useRef } from 'react'; // Import useRef untuk refs
// import './styles/App.css'; 
// import Header from './components/Header'; 
// import HeroSection from './components/HeroSection';
// import FeaturesSection from './components/FeaturesSection';
// import Footer from './components/Footer';

// function App() {
//   const featuresRef = useRef(null); // Membuat ref untuk Features Section

//   const scrollToFeatures = () => {
//     featuresRef.current.scrollIntoView({ behavior: 'smooth' }); // Fungsi untuk autoscroll ke Features Section
//   };

//   return (
//     <div className="wrapper">
//       <Header /> {/* Header at the top */}
//       <HeroSection onCTAClick={scrollToFeatures} /> {/* Passing the scroll function as a prop */}
//       <FeaturesSection ref={featuresRef} /> {/* Attaching ref to Features Section */}
//       <Footer />
//     </div>
//   );
// }

// export default App;
import React, { useRef } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // Import BrowserRouter, Routes, and Route
import './styles/App.css';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import FeaturesSection from './components/FeaturesSection';
import Footer from './components/Footer';
import LearnPage from './components/LearnPage'; // Ensure you have a LearnPage component

function App() {
  const featuresRef = useRef(null); // Ref for Features Section

  const scrollToFeatures = () => {
    featuresRef.current?.scrollIntoView({ behavior: 'smooth' }); // Scroll to Features Section
  };

  return (
    <BrowserRouter>
      <div className="wrapper">
        <Header />
        <Routes>
          <Route path="/" element={
            <>
              <HeroSection onCTAClick={scrollToFeatures} />
              <div ref={featuresRef}>
                <FeaturesSection />
              </div>
              <Footer />
            </>
          } />
          <Route path="/learn" element={<LearnPage />} />
          {/* Add more routes for other navigation items if needed */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
