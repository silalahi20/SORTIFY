// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// require('dotenv').config();

// const app = express();

// // Middleware
// app.use(cors());
// app.use(express.json()); // Pastikan ini sebelum rute untuk mem-parsing JSON

// // Koneksi ke MongoDB
// mongoose.connect(process.env.MONGO_URI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// })
// .then(() => console.log('MongoDB Connected'))
// .catch(err => console.error('MongoDB connection error:', err));

// // Rute sederhana untuk tes
// app.get('/', (req, res) => {
//   res.send('Welcome to the Sortify Backend!');
// });

// // Routes setup after the middleware
// const userRoutes = require('./routes/userRoutes');
// app.use('/api/users', userRoutes);

// // Mendefinisikan port dari variabel lingkungan atau default
// const PORT = process.env.PORT || 5000;

// // Menjalankan server
// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Koneksi ke MongoDB
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('MongoDB Connected'))
.catch(err => console.error('MongoDB connection error:', err));

// Import routes
const userRoutes = require('./routes/userRoutes');
// const learnRoutes = require('./routes/learnRoutes');
// const practiceRoutes = require('./routes/practiceRoutes');
// const testRoutes = require('./routes/testRoutes');

// Public routes
app.use('/api/users', userRoutes);

// Protected routes
const authMiddleware = require('./middlewares/authMiddleware');
// app.use('/api/learn', authMiddleware, learnRoutes);
// app.use('/api/practice', authMiddleware, practiceRoutes);
// app.use('/api/test', authMiddleware, testRoutes);

// Basic route for testing
app.get('/', (req, res) => {
    res.send('Welcome to the Sortify Backend!');
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});