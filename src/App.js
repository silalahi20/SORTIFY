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
import TestPage from './components/TestPage';
import BubbleSortLearn from './components/BubbleSortLearn'
import SelectionSortLearn from './components/SelectionSortLearn'
import InsertionSortLearn from './components/InsertionSortLearn'
import AboutUs from './components/AboutUs'
import Login from './components/Login';
import Register from './components/Register';

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
          <Route path="/test" element={<TestPage />} />
          <Route path="/learn/bubble-sort" element={<BubbleSortLearn />} />
          <Route path="/learn/selection-sort" element={<SelectionSortLearn />} />
          <Route path="/learn/insertion-sort" element={<InsertionSortLearn />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
