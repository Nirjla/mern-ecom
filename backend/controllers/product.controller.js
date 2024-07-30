const Product = require("../models/Product");

exports.createProduct = async (req, res) => {
      try {
            const { name, price, description, category, subcategory } = req.body;
            console.log(req.file)
            const image = req.file ? req.file.path : null;
            const newProduct = new Product({
                  name, price, description, category, subcategory, image
            })
            await newProduct.save()
            res.status(201).send({
                  message: "Product created successfully"
            })
      } catch (err) {
            res.status(500).json({
                  message: 'Error creating product' + err.message
            })
      }
}


exports.getProducts = async (req, res) => {
      try {
            const products = await Product.find()
            res.status(200).json(products)
      } catch (err) {
            res.status(500).json({ message: "Error fetching the product" + err.message })
      }
}

exports.getProductById = async (req, res) => {
      try {
            const { id } = req.params
            console.log("Id" + id)
            const product = await Product.findById(id)
            if (!product) {
                  return res.status(404).json({ message: "Product Not Found" })
            }
            return res.status(200).json(product)
      } catch (err) {
            res.status(500).json({ message: "Error fetching product" + err.message })
      }
}

exports.updateProduct = async (req, res) => {
      try {
            // Find and update the product by ID
            const { name } = req.body
            console.log(name)
            const updatedProduct = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
            // Check if product was found and updated
            if (!updatedProduct) {
                  return res.status(404).json({ message: 'Product not found' });
            }

            // Respond with the updated product
            res.status(200).json(updatedProduct);
      } catch (err) {
            // Respond with an error message
            res.status(500).json({ message: `Error updating product: ${err.message}` });
      }
};

exports.deleteProduct = async (req, res) => {
      try {
            await Product.findByIdAndDelete(req.params.id)
            return res.status(200).json({ message: "Product Deleted Successfully" })
      } catch (err) {
            res.status(500).json({ message: "Error deleting product" + err.message })
      }
}