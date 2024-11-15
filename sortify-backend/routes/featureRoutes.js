// routes/learnRoutes.js
const express = require('express');
const learnRouter = express.Router();

router.get('/', (req, res) => {
    res.json({ message: 'Learn content available', userId: req.user.id });
});

module.exports = learnRouter;

// routes/practiceRoutes.js
const express = require('express');
const practiceRouter = express.Router();

router.get('/', (req, res) => {
    res.json({ message: 'Practice content available', userId: req.user.id });
});

module.exports = practiceRouter;

// routes/testRoutes.js
const express = require('express');
const testRouter = express.Router();

testRouter.get('/', (req, res) => {
    res.json({ message: 'Test content available', userId: req.user.id });
});

module.exports = testRouter;

// routes/authRoutes.js
const express = require('express');
const authRouter = express.Router();
const jwt = require('jsonwebtoken');
const User = require('../models/User');

authRouter.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });

        if (!user || !await user.comparePassword(password)) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        const token = jwt.sign(
            { id: user._id, email: user.email },
            process.env.JWT_SECRET,
            { expiresIn: '24h' }
        );

        res.json({
            token,
            user: {
                id: user._id,
                name: user.name,
                email: user.email,
                image: user.image
            }
        });
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
});

module.exports = router;