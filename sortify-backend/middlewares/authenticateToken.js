const jwt = require('jsonwebtoken');

function authenticateToken(req, res, next) {
  // Dapatkan token dari header
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1]; // Biasanya token dikirim sebagai "Bearer [token]"

  if (token == null) {
    return res.sendStatus(401); // Jika tidak ada token, kirim status 401 Unauthorized
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) {
      return res.sendStatus(403); // Jika token tidak valid, kirim status 403 Forbidden
    }

    req.user = user;
    next(); // Lanjutkan ke rute berikutnya
  });
}

module.exports = authenticateToken;
