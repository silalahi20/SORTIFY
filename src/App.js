import React, { useRef } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './styles/App.css';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import FeaturesSection from './components/FeaturesSection';
import Footer from './components/Footer';
import LearnPage from './components/LearnPage';
import PracticePage from './components/PracticePage';
import BubbleSortPracticePage from './components/BubbleSortPractice'; 
import InsertionSortPracticePage from './components/InsertionSortPractice'
import SelectionSortPracticePage from './components/SelectionSortPractice'

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
          <Route path="/practice/bubble-sort" element={<BubbleSortPracticePage />} />
          <Route path="/practice/insertion-sort" element={<InsertionSortPracticePage />} />
          <Route path="/practice/selection-sort" element={<SelectionSortPracticePage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
