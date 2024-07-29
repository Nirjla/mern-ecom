const express = require('express');
const router = express.Router();

const authRoutes = require('./auth.route');
// const signupRoutes = require('./sigenup.route'); // Separate route file for signup

// Use authRoutes for '/api/auth' endpoint
router.use('/auth', authRoutes);
// Use signupRoutes for '/api/signup' endpoint
// router.use('/signup', signupRoutes);

module.exports = router;
