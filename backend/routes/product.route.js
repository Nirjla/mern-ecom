const express = require('express')
const { adminMiddleware } = require('../middlewares/admin.middleware')
const { verifyToken } = require('../middlewares/verifyToken.middleware')
const { createProduct } = require('../controllers/product.controller')
const { upload } = require('../config')
const router = express.Router()

router.post('/', verifyToken, upload.single('image'), createProduct)

module.exports = router