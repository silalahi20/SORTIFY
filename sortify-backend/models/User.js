// const mongoose = require('mongoose');
// const bcrypt = require('bcryptjs');

// // Skema pengguna
// const userSchema = new mongoose.Schema({
//   fullName: {
//     type: String,
//     required: true,
//     trim: true
//   },
//   email: {
//     type: String,
//     required: true,
//     unique: true,
//     trim: true
//   },
//   password: {
//     type: String,
//     required: true
//   },
//   progress: {
//     practice: { type: Number, default: 0 },
//     learn: { type: Number, default: 0 },
//     test: {
//       score: { type: Number, default: 0 },
//       attempts: { type: Number, default: 0 }
//     }
//   }
// });

// // Middleware untuk enkripsi password sebelum menyimpan
// userSchema.pre('save', async function(next) {
//   if (!this.isModified('password')) return next();
//   this.password = await bcrypt.hash(this.password, 12);
//   next();
// });

// // Metode untuk membandingkan password
// userSchema.methods.comparePassword = function(candidatePassword) {
//   return bcrypt.compare(candidatePassword, this.password);
// };

// const User = mongoose.model('User', userSchema);

// module.exports = User;
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

// Skema pengguna
const userSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  password: {
    type: String,
    required: true
  },
  profilePic: {
    type: String,
    default: '/uploads/profile_pictures/default.jpg'
  },
  progress: {
    practice: { type: Number, default: 0 },
    learn: { type: Number, default: 0 },
    test: {
      score: { type: Number, default: 0 },
      attempts: { type: Number, default: 0 }
    }
  }
});

// Middleware untuk enkripsi password sebelum menyimpan
userSchema.pre('save', async function(next) {
  if (!this.isModified('password')) return next();
  this.password = await bcrypt.hash(this.password, 12);
  next();
});

// Metode untuk membandingkan password
userSchema.methods.comparePassword = function(candidatePassword) {
  return bcrypt.compare(candidatePassword, this.password);
};

const User = mongoose.model('User', userSchema);

module.exports = User;
