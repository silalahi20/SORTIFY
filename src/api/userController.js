const multer = require('multer');
const path = require('path');
const User = require('../../sortify-backend/models/User');

// Setup multer storage untuk menyimpan file
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/profile_pictures');
    },
    filename: (req, file, cb) => {
        cb(null, `${req.user.id}_${Date.now()}${path.extname(file.originalname)}`);
    }
});

const upload = multer({ storage }).single('profilePicture');

// Mengambil data profil pengguna
const getUserProfile = async (req, res) => {
    try {
        const user = await User.findById(req.user.userId);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.json({
            fullName: user.fullName,
            email: user.email,
            profilePic: user.profilePic || null,
            learnProgress: user.progress.learn,
            practiceProgress: user.progress.practice,
            testScores: user.progress.test.score
        });
    } catch (error) {
        res.status(500).json({ message: 'Error fetching user data' });
    }
};

// Meng-upload foto profil
// const uploadProfilePicture = (req, res) => {
//     upload(req, res, async (err) => {
//         if (err) {
//             return res.status(400).json({ message: 'Error uploading file' });
//         }
//         try {
//             const user = await User.findById(req.user.userId);
//             user.profilePic = `/uploads/profile_pictures/${req.file.filename}`;
//             await user.save();
//             res.status(200).json({ profilePicture: user.profilePic });
//         } catch (err) {
//             res.status(500).json({ message: 'Error updating profile picture' });
//         }
//     });
// };
const uploadProfilePicture = (req, res) => {
    upload(req, res, async (err) => {
        if (err) {
            return res.status(400).json({ message: 'Error uploading file' });
        }
        try {
            const user = await User.findById(req.user.userId); // Gunakan ID pengguna dari token
            if (!user) {
                return res.status(404).json({ message: 'User not found' });
            }
            
            // Simpan path gambar di database
            user.profilePic = `/uploads/profile_pictures/${req.file.filename}`; 
            await user.save();
            
            res.status(200).json({ profilePicture: user.profilePic }); // Kirim URL gambar ke frontend
        } catch (err) {
            res.status(500).json({ message: 'Error updating profile picture' });
        }
    });
};


// Mengupdate progress belajar dan latihan
const updateProgress = async (req, res) => {
    const { learnProgress, practiceProgress } = req.body;
    try {
        const user = await User.findById(req.user.userId);
        user.progress.learn = learnProgress;
        user.progress.practice = practiceProgress;
        await user.save();
        res.status(200).json({ learnProgress, practiceProgress });
    } catch (err) {
        res.status(500).json({ message: 'Error updating progress' });
    }
};

// Menyimpan hasil kuis
const submitQuiz = async (req, res) => {
    const { correctAnswers, totalQuestions } = req.body;
    const score = (correctAnswers / totalQuestions) * 100;
    
    try {
        const user = await User.findById(req.user.userId);
        user.progress.test.score = score;
        user.progress.test.attempts += 1;
        await user.save();
        res.status(200).json({ score });
    } catch (err) {
        res.status(500).json({ message: 'Error submitting quiz' });
    }
};

module.exports = { getUserProfile, uploadProfilePicture, updateProgress, submitQuiz };
