// import React, { useRef } from 'react';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import './styles/App.css';
// import { AuthProvider } from './context/AuthContext'; // Import AuthProvider dari context Anda
// import Header from './components/Header';
// import HeroSection from './components/HeroSection';
// import FeaturesSection from './components/FeaturesSection';
// import Footer from './components/Footer';
// import LearnPage from './components/LearnPage';
// import PracticePage from './components/PracticePage';
// import BubbleSortPracticePage from './components/BubbleSortPractice';
// import InsertionSortPracticePage from './components/InsertionSortPractice';
// import SelectionSortPracticePage from './components/SelectionSortPractice';
// import TestPage from './components/TestPage';
// import BubbleSortLearn from './components/BubbleSortLearn';
// import SelectionSortLearn from './components/SelectionSortLearn';
// import InsertionSortLearn from './components/InsertionSortLearn';
// import AboutUs from './components/AboutUs';
// import Login from './components/Login';
// import Register from './components/Register';
// import Profile from './components/Profile'; // Import Profile

// function App() {
//   const featuresRef = useRef(null);

//   return (
//     <AuthProvider> {/* Bungkus aplikasi di dalam AuthProvider */}
//       <BrowserRouter>
//         <div className="wrapper">
//           <Header /> {/* Header kini akan merespons perubahan state login */}
//           <Routes>
//             <Route path="/" element={
//               <>
//                 <HeroSection onCTAClick={() => featuresRef.current?.scrollIntoView({ behavior: 'smooth' })} />
//                 <div ref={featuresRef}><FeaturesSection /></div>
//                 <Footer />
//               </>
//             } />
//             <Route path="/learn" element={<LearnPage />} />
//             <Route path="/practice" element={<PracticePage />} />
//             <Route path="/practice/bubble-sort" element={<BubbleSortPracticePage />} />
//             <Route path="/practice/insertion-sort" element={<InsertionSortPracticePage />} />
//             <Route path="/practice/selection-sort" element={<SelectionSortPracticePage />} />
//             <Route path="/test" element={<TestPage />} />
//             <Route path="/learn/bubble-sort" element={<BubbleSortLearn />} />
//             <Route path="/learn/selection-sort" element={<SelectionSortLearn />} />
//             <Route path="/learn/insertion-sort" element={<InsertionSortLearn />} />
//             <Route path="/about-us" element={<AboutUs />} />
//             <Route path="/login" element={<Login />} />
//             <Route path="/register" element={<Register />} />
//             <Route path="/profile" element={<Profile />} /> {/* Tambahkan rute untuk Profile */}
//           </Routes>
//         </div>
//       </BrowserRouter>
//     </AuthProvider>
//   );
// }

// export default App;
import React, { useRef } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './styles/App.css';
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import FeaturesSection from './components/FeaturesSection';
import Footer from './components/Footer';
import LearnPage from './components/LearnPage';
import PracticePage from './components/PracticePage';
import BubbleSortPracticePage from './components/BubbleSortPractice';
import InsertionSortPracticePage from './components/InsertionSortPractice';
import SelectionSortPracticePage from './components/SelectionSortPractice';
import TestPage from './components/TestPage';
import BubbleSortLearn from './components/BubbleSortLearn';
import SelectionSortLearn from './components/SelectionSortLearn';
import InsertionSortLearn from './components/InsertionSortLearn';
import AboutUs from './components/AboutUs';
import Login from './components/Login';
import Register from './components/Register';
import Profile from './components/Profile';

function App() {
  const featuresRef = useRef(null);

  return (
    <AuthProvider>
      <BrowserRouter>
        <div className="wrapper">
          <Header />
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={
              <>
                <HeroSection onCTAClick={() => featuresRef.current?.scrollIntoView({ behavior: 'smooth' })} />
                <div ref={featuresRef}><FeaturesSection /></div>
                <Footer />
              </>
            } />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />

            {/* Protected Routes */}
            <Route path="/learn" element={
              <ProtectedRoute>
                <LearnPage />
              </ProtectedRoute>
            } />
            <Route path="/learn/bubble-sort" element={
              <ProtectedRoute>
                <BubbleSortLearn />
              </ProtectedRoute>
            } />
            <Route path="/learn/selection-sort" element={
              <ProtectedRoute>
                <SelectionSortLearn />
              </ProtectedRoute>
            } />
            <Route path="/learn/insertion-sort" element={
              <ProtectedRoute>
                <InsertionSortLearn />
              </ProtectedRoute>
            } />

            <Route path="/practice" element={
              <ProtectedRoute>
                <PracticePage />
              </ProtectedRoute>
            } />
            <Route path="/practice/bubble-sort" element={
              <ProtectedRoute>
                <BubbleSortPracticePage />
              </ProtectedRoute>
            } />
            <Route path="/practice/insertion-sort" element={
              <ProtectedRoute>
                <InsertionSortPracticePage />
              </ProtectedRoute>
            } />
            <Route path="/practice/selection-sort" element={
              <ProtectedRoute>
                <SelectionSortPracticePage />
              </ProtectedRoute>
            } />

            <Route path="/test" element={
              <ProtectedRoute>
                <TestPage />
              </ProtectedRoute>
            } />
            <Route path="/profile" element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            } />
          </Routes>
        </div>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;