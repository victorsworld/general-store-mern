const Product = require('../model/productModel');

module.exports = {

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

 
};
