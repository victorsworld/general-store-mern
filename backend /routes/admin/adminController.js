const Product = require('../products/model/productModel');

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
