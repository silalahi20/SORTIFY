// src/App.js
import React, { useRef } from 'react'; // Import useRef untuk refs
import './styles/App.css'; 
import Header from './components/Header'; 
import HeroSection from './components/HeroSection';
import FeaturesSection from './components/FeaturesSection';
import Footer from './components/Footer';

function App() {
  const featuresRef = useRef(null); // Membuat ref untuk Features Section

  const scrollToFeatures = () => {
    featuresRef.current.scrollIntoView({ behavior: 'smooth' }); // Fungsi untuk autoscroll ke Features Section
  };

  return (
    <div className="wrapper">
      <Header /> {/* Header at the top */}
      <HeroSection onCTAClick={scrollToFeatures} /> {/* Passing the scroll function as a prop */}
      <FeaturesSection ref={featuresRef} /> {/* Attaching ref to Features Section */}
      <Footer />
    </div>
  );
}

export default App;
