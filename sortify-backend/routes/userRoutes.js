const express = require('express');
const User = require('../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const authMiddleware = require('../middlewares/authMiddleware'); // Perbaikan impor
const router = express.Router();

// Rute register
router.post('/register', async (req, res) => {
  try {
    const { fullName, email, password } = req.body;

    // Hash password sebelum menyimpan ke database
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = new User({ fullName, email, password: hashedPassword });
    await user.save();
    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    if (error.code === 11000) {
      res.status(400).json({ message: 'Email already exists. Please use a different email.' });
    } else {
      res.status(500).json({ message: error.message });
    }
  }
});

// Rute login
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const token = jwt.sign(
      { userId: user._id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: '1h' }
    );

    res.json({ message: 'Logged in successfully', token });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Rute untuk mendapatkan profil pengguna
router.get('/profile', authMiddleware, async (req, res) => {
  try {
    const user = await User.findById(req.user.userId);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json({ fullName: user.fullName, email: user.email });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
