// src/App.js
import React from 'react';
import './styles/App.css';  // Path relatif untuk App.css
import Header from './components/Header'; // Import the Header component
import HeroSection from './components/HeroSection';
import FeaturesSection from './components/FeaturesSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="wrapper">
      <div className="content">
        <Header /> {/* Header berada di atas */}
        <HeroSection />
        <FeaturesSection />
        {/* Konten lainnya */}
      </div>
      <Footer /> {/* Footer berada di bawah */}
    </div>
  );
}

export default App;
