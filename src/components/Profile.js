import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { fetchUserProfile } from '../api/api'; // Import fungsi API
import { Camera, LogOut } from 'lucide-react';
import '../styles/Profile.css';

const Profile = () => {
  const { userData, logout, token } = useAuth(); // Pastikan `token` tersedia di AuthContext
  const [image, setImage] = useState('');
  const [userProfile, setUserProfile] = useState(null); // State untuk data profil dari backend
  const [learnProgress, setLearnProgress] = useState({
    section1: 0,
    section2: 0,
    section3: 0,
  });
  const [practiceProgress, setPracticeProgress] = useState({
    section1: 0,
    section2: 0,
    section3: 0,
  });
  const [testScore, setTestScore] = useState({
    correct: 0,
    total: 24,
  });
  const navigate = useNavigate();

  useEffect(() => {
    const getUserProfile = async () => {
      try {
        const profile = await fetchUserProfile(token); // Menggunakan token dari AuthContext
        setUserProfile(profile); // Menyimpan data profil ke state
        setImage(profile.image || ''); // Set gambar jika tersedia
      } catch (error) {
        console.error('Failed to fetch user profile:', error);
      }
    };

    if (token) {
      getUserProfile();
    }
  }, [token]);

  useEffect(() => {
    // Simulating fetching progress data (replace with real fetching logic)
    setLearnProgress({
      section1: 90,
      section2: 75,
      section3: 60,
    });
    setPracticeProgress({
      section1: 85,
      section2: 70,
      section3: 55,
    });
    setTestScore({
      correct: 20,
      total: 24,
    });
  }, []);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
        // Optionally update image on the server here
      };
      reader.readAsDataURL(file);
    }
  };

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const calculateOverallProgress = (progressObj) => {
    return Object.values(progressObj).reduce((acc, curr) => acc + curr, 0) / 3;
  };

  const calculateTestPercentage = () => {
    return ((testScore.correct / testScore.total) * 100).toFixed(1);
  };

  return (
    <div className="profile-page min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-indigo-900 text-white p-4">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="text-green-400 font-bold text-2xl">SORTIFY</div>
          </div>
          <nav className="flex space-x-6">
            <a href="#" className="hover:text-green-400">Learn</a>
            <a href="#" className="hover:text-green-400">Practice</a>
            <a href="#" className="hover:text-green-400">Test</a>
            <a href="#" className="hover:text-green-400">About Us</a>
            <a href="#" className="hover:text-green-400">Profile</a>
          </nav>
        </div>
      </header>

      <div className="profile-container">
        <h1>Profil Anda</h1>
        
        <div className="profile-info">
          <div className="image-container">
            <div className="relative">
              <div className="w-32 h-32 rounded-full overflow-hidden bg-gray-200 mb-4">
                {image ? (
                  <img 
                    src={image} 
                    alt="Profile" 
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <Camera className="w-12 h-12 text-gray-400" />
                  </div>
                )}
              </div>
              <label className="absolute bottom-0 right-0 bg-green-500 p-2 rounded-full cursor-pointer hover:bg-green-600 transition-colors">
                <Camera className="w-5 h-5 text-white" />
                <input 
                  type="file" 
                  className="hidden" 
                  accept="image/*"
                  onChange={handleImageChange}
                />
              </label>
            </div>
            <div className="text-center mt-4">
              <h2 className="text-xl font-semibold text-gray-800">
                {userProfile ? userProfile.fullName : 'Josia Silalahi'}
              </h2>
              <p className="text-gray-600">
                {userProfile ? userProfile.email : 'josiasilalahi2004@gmail.com'}
              </p>
            </div>
          </div>
        </div>

        {/* Progress Learn */}
        <div className="progress-container">
          <h2>Progress Learn</h2>
          {Object.entries(learnProgress).map(([key, value], index) => (
            <div key={key} className="mb-6">
              <div className="progress-bar-label">
                <span>Section {index + 1}</span>
                <span>{value}%</span>
              </div>
              <div className="progress-bar">
                <div
                  className="progress-fill learn"
                  style={{ width: `${value}%` }}
                ></div>
              </div>
            </div>
          ))}
          <div className="overall-progress">
            <strong>
              Overall Progress: {calculateOverallProgress(learnProgress).toFixed(1)}%
            </strong>
          </div>

          {/* Progress Practice */}
          <h2>Progress Practice</h2>
          {Object.entries(practiceProgress).map(([key, value], index) => (
            <div key={key} className="mb-6">
              <div className="progress-bar-label">
                <span>Section {index + 1}</span>
                <span>{value}%</span>
              </div>
              <div className="progress-bar">
                <div
                  className="progress-fill practice"
                  style={{ width: `${value}%` }}
                ></div>
              </div>
            </div>
          ))}
          <div className="overall-progress">
            <strong>
              Overall Progress: {calculateOverallProgress(practiceProgress).toFixed(1)}%
            </strong>
          </div>

          {/* Test Scores */}
          <h2>Test Scores</h2>
          <div className="progress-bar-label">
            <span>Correct Answers</span>
            <span>{testScore.correct}/{testScore.total}</span>
          </div>
          <div className="progress-bar">
            <div
              className="progress-fill test"
              style={{ width: `${calculateTestPercentage()}%` }}
            ></div>
          </div>
          <div className="test-score-percentage">
            <strong>{calculateTestPercentage()}%</strong>
          </div>
        </div>

        <button
          onClick={handleLogout}
          className="flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg transition-colors"
        >
          <LogOut className="w-5 h-5" />
          Logout
        </button>
      </div>
    </div>
  );
};

export default Profile;
