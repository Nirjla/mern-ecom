const express = require('express');
const router = express.Router();

const userRoutes = require('./user.route');
const adminRoutes = require('./admin.route');
const productRoutes = require('./product.route')
const { adminMiddleware } = require('../middlewares/admin.middleware');
const { verifyToken } = require('../middlewares/verifyToken.middleware');
// const signupRoutes = require('./sigenup.route'); // Separate route file for signup

// Use authRoutes for '/api/auth' endpoint
router.use('/auth', userRoutes);
// Use signupRoutes for '/api/signup' endpoint
// router.use('/signup', signupRoutes);
router.use('/admin', adminRoutes)
router.use('/products', productRoutes)
module.exports = router;
