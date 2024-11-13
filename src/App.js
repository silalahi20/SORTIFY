import React, { useRef } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // Import BrowserRouter, Routes, and Route
import './styles/App.css';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import FeaturesSection from './components/FeaturesSection';
import Footer from './components/Footer';
import LearnPage from './components/LearnPage'; 
import PracticePage from './components/PracticePage'; // Import PracticePage

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
          <Route path="/practice" element={<PracticePage />} /> {/* Route for PracticePage */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
