const express = require("express");
const { createCategory, getCategories } = require("../controllers/category.controller");
const { verifyToken } = require("../middlewares/verifyToken.middleware");
const router = express.Router();

router.post("/", verifyToken, createCategory)
router.get('/', verifyToken, getCategories)

module.exports = router