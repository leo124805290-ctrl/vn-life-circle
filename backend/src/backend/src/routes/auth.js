const express = require('express');
const router = express.Router();

// Email 登入
router.post('/login-email', (req, res) => {
  const { email, password } = req.body;
  if (email && password) {
    return res.json({ success: true, token: 'fake-jwt-token', method: 'email' });
  }
  res.status(400).json({ success: false });
});

// Zalo 登入模擬
router.get('/login-zalo', (req, res) => {
  return res.json({ success: true, token: 'fake-zalo-token', method: 'zalo' });
});

module.exports = router;
