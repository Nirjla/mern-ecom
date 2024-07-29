const express = require('express');
const router = express.Router();

// Define your auth routes here
router.post('/signup', (req, res) => {
  res.send('Auth route');
});

module.exports = router;
