const express = require('express');
const router = express.Router();

const userRoutes = require('./user.route');
const adminRoutes = require('./admin.route')
// const signupRoutes = require('./sigenup.route'); // Separate route file for signup

// Use authRoutes for '/api/auth' endpoint
router.use('/auth', userRoutes);
// Use signupRoutes for '/api/signup' endpoint
// router.use('/signup', signupRoutes);
router.use('/admin', adminRoutes)
module.exports = router;
