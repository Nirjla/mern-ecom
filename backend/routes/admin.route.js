const express = require('express')
const { signin, signup } = require('../controllers/admin.controller')
const { adminMiddleware } = require('../middlewares/admin.middleware')
const router = express.Router()

router.post('/signin',signin)
router.post('/signup', signup)

module.exports = router