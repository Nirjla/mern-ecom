const Category = require("../models/Category")

exports.createCategory = async (req, res) => {
      try {
            const category = new Category(req.body)
            await category.save();
            res.status(201).json(category)
      } catch (err) {
            res.status(400).json({ message: err.message })
      }
}

exports.getCategories = async (req, res) => {
      try {
            const categories = await Category.find();
            res.status(200).json(categories)
      } catch (error) {
            res.status(500).json({ message: error.message })
      }
}
