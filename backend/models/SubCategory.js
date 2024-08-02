const mongoose = require('mongoose')

const Subcategory = new mongoose.Schema({
      name: { type: String, required: true },
      categoryId: { type: mongoose.Schema.Types.ObjectId, ref: 'Category', required: true }
})

module.exports = mongoose.model('Subcategory', Subcategory)