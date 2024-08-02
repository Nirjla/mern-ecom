const mongoose = require('mongoose')

const Product = new mongoose.Schema({
      name: { type: String, required: true },
      price: { type: Number, required: true },
      description: { type: String, required: true },
      categoryId: {
            type: mongoose.Schema.Types.ObjectId, ref: 'Category', required: true
      },
      subcategoryID: {
            type: mongoose.Schema.Types.ObjectId, ref: 'Subcategory', required: true
      },
      image: {
            type: String, required: true
      }

}, { timestamps: true })

module.exports = mongoose.model('Product', Product)