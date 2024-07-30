const express = require('express')
const { adminMiddleware } = require('../middlewares/admin.middleware')
const { verifyToken } = require('../middlewares/verifyToken.middleware')
const { createProduct, getProducts, getProductById, updateProduct, deleteProduct } = require('../controllers/product.controller')
const { upload } = require('../config')
const router = express.Router()

router.get('/', getProducts)
router.get('/:id', getProductById)
router.post('/', verifyToken, upload.single('image'), createProduct)
router.patch('/:id', verifyToken, upload.single('image'), updateProduct)
router.delete('/:id', verifyToken, deleteProduct)
module.exports = router