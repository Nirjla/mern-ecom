const express = require('express');
const { signup, signin } = require('../controllers/user.controller');
const router = express.Router();

// Define your auth routes here
router.post('/signup', signup
);
router.post('/signin', signin)
module.exports = router;
