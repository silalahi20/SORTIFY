// const express = require('express');
// const User = require('../models/User');
// const jwt = require('jsonwebtoken');
// const bcrypt = require('bcryptjs');
// const authMiddleware = require('../middlewares/authMiddleware'); // Perbaikan impor
// const router = express.Router();

// // Rute register
// router.post('/register', async (req, res) => {
//   try {
//     const { fullName, email, password } = req.body;

//     // Hash password sebelum menyimpan ke database
//     const salt = await bcrypt.genSalt(10);
//     const hashedPassword = await bcrypt.hash(password, salt);

//     const user = new User({ fullName, email, password: hashedPassword });
//     await user.save();
//     res.status(201).json({ message: 'User registered successfully' });
//   } catch (error) {
//     if (error.code === 11000) {
//       res.status(400).json({ message: 'Email already exists. Please use a different email.' });
//     } else {
//       res.status(500).json({ message: error.message });
//     }
//   }
// });

// // Rute login
// router.post('/login', async (req, res) => {
//   try {
//     const { email, password } = req.body;
//     const user = await User.findOne({ email });

//     if (!user || !(await bcrypt.compare(password, user.password))) {
//       return res.status(401).json({ message: 'Invalid credentials' });
//     }

//     const token = jwt.sign(
//       { userId: user._id, email: user.email },
//       process.env.JWT_SECRET,
//       { expiresIn: '1h' }
//     );

//     res.json({ message: 'Logged in successfully', token });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

// // Rute untuk mendapatkan profil pengguna
// router.get('/profile', authMiddleware, async (req, res) => {
//   try {
//     const user = await User.findById(req.user.userId);
//     if (!user) {
//       return res.status(404).json({ message: 'User not found' });
//     }
//     res.json({ fullName: user.fullName, email: user.email });
//   } catch (error) {
//     res.status(500).json({ message: 'Server error' });
//   }
// });

// module.exports = router;
import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

// Helper function to safely parse JSON
function safeJSONParse(data) {
    try {
        return JSON.parse(data);
    } catch (e) {
        console.error("Failed to parse data as JSON:", data);
        return null;
    }
}

export const AuthProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userData, setUserData] = useState({
        image: 'path_to_default_image.jpg', 
        name: 'Default Name', 
        email: 'default@example.com'
    });

    // Effect to check token and user data from localStorage on mount and on storage change
    useEffect(() => {
        const syncLoginState = () => {
            const token = localStorage.getItem('token');
            const storedUserData = localStorage.getItem('userData');
            setIsLoggedIn(!!token);
            if (storedUserData) {
                setUserData(safeJSONParse(storedUserData));
            }
        };

        syncLoginState(); // Check on mount

        window.addEventListener('storage', syncLoginState); // Listen for changes in other tabs

        return () => {
            window.removeEventListener('storage', syncLoginState);
        };
    }, []);

    const login = async (credentials) => {
        try {
            const response = await fetch('http://localhost:5000/api/users/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(credentials)
            });
    
            if (!response.ok) {
                throw new Error(`Login failed: ${response.status}`);
            }
    
            const data = await response.json();
            if (data.token) {
                localStorage.setItem('token', data.token);
                localStorage.setItem('userData', JSON.stringify(data.user)); // Simpan data pengguna termasuk gambar profil
                setAuthState(data.token, data.user); // Update context state
            }
        } catch (error) {
            console.error('Login error:', error);
            throw error;
        }
    };
    

    // Helper function to update authentication state
    const setAuthState = (token, user) => {
        setIsLoggedIn(!!token);
        setUserData(user || {
            image: 'path_to_default_image.jpg',
            name: 'Default Name',
            email: 'default@example.com'
        });
    };

    const logout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('userData');
        setAuthState(null, null); // Reset authentication state
    };

    return (
        <AuthContext.Provider value={{ isLoggedIn, userData, login, logout, setAuthState }}>
            {children}
        </AuthContext.Provider>
    );
};
