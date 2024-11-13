import React, { useRef } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './styles/App.css';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import FeaturesSection from './components/FeaturesSection';
import Footer from './components/Footer';
import LearnPage from './components/LearnPage';
import PracticePage from './components/PracticePage';
import BubbleSortPracticePage from './components/BubbleSortPractice'; // Verify this file exists and is correctly named

function App() {
  const featuresRef = useRef(null);

  return (
    <BrowserRouter>
      <div className="wrapper">
        <Header />
        <Routes>
          <Route path="/" element={
            <>
              <HeroSection onCTAClick={() => featuresRef.current?.scrollIntoView({ behavior: 'smooth' })} />
              <div ref={featuresRef}><FeaturesSection /></div>
              <Footer />
            </>
          } />
          <Route path="/learn" element={<LearnPage />} />
          <Route path="/practice" element={<PracticePage />} />
          <Route path="/practice/bubble-sort" element={<BubbleSortPracticePage />} /> {/* Ensure this route is correctly set up */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
