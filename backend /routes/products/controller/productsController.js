const Product = require('../model/productModel');
const User = require('../../users/model/userModel');
const userController = require('../../users/controller/userController');

module.exports = {
  createProduct: async (req, res) => {
    try {
      const { name, img, item, price, stock, description } = req.body;
      const createdItem = {
        name,
        img,
        item,
        price,
        stock,
        description,
      };
      const newItem = await new Product(createdItem);
      const saveItem = await newItem.save();
      res.status(200).json({ success: true, data: saveItem });
    } catch (error) {
      res.status(500).json({ sucess: false, message: error.message });
    }
  },

  oneProduct: async (req, res) => {
    try {
      const { id } = req.params;
      const foundProduct = await Product.findOne({ _id: id });
      if (!foundProduct) {
        res.status(401).json({ success: false, message: 'Product not found' });
      }
      res.status(200).json({ success: true, data: foundProduct });
    } catch (error) {
      console.log(error);
      res.status(500).json({ success: false, message: error.message });
    }
  },

  allProduct: async (req, res) => {
    try {
      const allProduct = await Product.find({});
      res.status(200).json({
        success: true,
        message: 'All current product displayed.',
        data: allProduct,
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({ success: false, message: error.message });
    }
  },

  editProduct: async (req, res) => {
    try {
      const { id } = req.params;
      req.body.lastModified = Date.now();
      if (req.body.completed) {
        req.body.completedDate = Date.now();
      }
      const updateProduct = await Product.findOneAndUpdate(
        { _id: id },
        req.body
      );
      res.status(200).json({ success: true, data: updateProduct });
    } catch (error) {
      console.log(error);
      res.status(500).json({ success: false, message: 'error', error: error });
    }
  },

  deleteProduct: async (req, res) => {
    try {
      const { id } = req.params;
      const deleteProduct = await Product.findOneAndDelete({ _id: id });
      res.status(200).json({ success: true, data: deleteProduct });
    } catch (error) {
      console.log(error);
      res.status(500).json({ success: false, message: 'error', error: error });
    }
  },
};
