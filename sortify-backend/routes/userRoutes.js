// const express = require('express');
// const User = require('../models/User');
// const jwt = require('jsonwebtoken');
// const bcrypt = require('bcryptjs');
// const multer = require('multer');
// const authMiddleware = require('../middlewares/authMiddleware');
// const router = express.Router();

// // Setup Multer for file uploads
// const storage = multer.diskStorage({
//     destination: function(req, file, cb) {
//         cb(null, 'uploads/');  // Make sure this path exists and is writable
//     },
//     filename: function(req, file, cb) {
//         cb(null, new Date().toISOString().replace(/:/g, '-') + file.originalname);
//     }
// });

// const fileFilter = (req, file, cb) => {
//     if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
//         cb(null, true);
//     } else {
//         cb(null, false);
//     }
// };

// const upload = multer({ storage: storage, fileFilter: fileFilter });

// // Rute register
// router.post('/register', async (req, res) => {
//   try {
//     const { fullName, email, password } = req.body;

//     // Hash password
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
//     console.log(req.body);  // Log to see what is received
//     try {
//       const { email, password } = req.body;
//       if (!email || !password) {
//         return res.status(400).json({ message: 'Email and password are required' });
//       }
//       const user = await User.findOne({ email });
  
//       if (!user || !(await bcrypt.compare(password, user.password))) {
//         return res.status(401).json({ message: 'Invalid credentials' });
//       }
  
//       const token = jwt.sign(
//         { userId: user._id, email: user.email },
//         process.env.JWT_SECRET,
//         { expiresIn: '1h' }
//       );
  
//       res.json({ message: 'Logged in successfully', token });
//     } catch (error) {
//       console.error(error);
//       res.status(500).json({ message: error.message });
//     }
//   });

// // Rute untuk mendapatkan profil pengguna
// router.get('/profile', authMiddleware, async (req, res) => {
//   try {
//     const user = await User.findById(req.user.userId);
//     if (!user) {
//       return res.status(404).json({ message: 'User not found' });
//     }
//     // Include profile picture if available
//     res.json({ fullName: user.fullName, email: user.email, profilePic: user.profilePic || null });
//   } catch (error) {
//     res.status(500).json({ message: 'Server error' });
//   }
// });

// // Rute untuk upload gambar profil
// router.post('/upload-profile-pic', authMiddleware, upload.single('profilePic'), async (req, res) => {
//     try {
//         const user = await User.findById(req.user.userId);
//         user.profilePic = req.file.path;  // Save or update the path to the profile picture
//         await user.save();
//         res.status(200).json({ message: 'Profile picture updated successfully' });
//     } catch (error) {
//         res.status(500).json({ message: error.message });
//     }
// });

// module.exports = router;
const express = require('express');
const User = require('../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const multer = require('multer');
const authMiddleware = require('../middlewares/authMiddleware');
const userController = require('../../src/api/userController');  // Menambahkan controller

const router = express.Router();

// Setup Multer for file uploads
const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, 'uploads/');  // Make sure this path exists and is writable
    },
    filename: function(req, file, cb) {
        cb(null, new Date().toISOString().replace(/:/g, '-') + file.originalname);
    }
});

const fileFilter = (req, file, cb) => {
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
        cb(null, true);
    } else {
        cb(null, false);
    }
};

const upload = multer({ storage: storage, fileFilter: fileFilter });

// Rute register
router.post('/register', async (req, res) => {
  try {
    const { fullName, email, password } = req.body;

    // Hash password
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
// router.post('/login', async (req, res) => {
//     try {
//       const { email, password } = req.body;
//       if (!email || !password) {
//         return res.status(400).json({ message: 'Email and password are required' });
//       }
//       const user = await User.findOne({ email });
  
//       if (!user || !(await bcrypt.compare(password, user.password))) {
//         return res.status(401).json({ message: 'Invalid credentials' });
//       }
  
//       const token = jwt.sign(
//         { userId: user._id, email: user.email },
//         process.env.JWT_SECRET,
//         { expiresIn: '1h' }
//       );
  
//       res.json({ message: 'Logged in successfully', token });
//     } catch (error) {
//       console.error(error);
//       res.status(500).json({ message: error.message });
//     }
// });
// Di userController.js

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

        res.json({
            message: 'Logged in successfully',
            token,
            user: {
                fullName: user.fullName,
                email: user.email,
                profilePic: user.profilePic, // Sertakan URL gambar profil
            },
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});



// Rute untuk mendapatkan profil pengguna
router.get('/profile', authMiddleware, userController.getUserProfile);

// Rute untuk upload gambar profil
router.post('/upload-profile-pic', authMiddleware, upload.single('profilePic'), userController.uploadProfilePicture);

// Rute untuk mengupdate progress
router.post('/updateProgress', authMiddleware, userController.updateProgress);

// Rute untuk submit hasil kuis
router.post('/submitQuiz', authMiddleware, userController.submitQuiz);

module.exports = router;
