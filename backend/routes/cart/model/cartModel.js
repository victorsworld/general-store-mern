const mongoose = require('mongoose');
const { v4: uuid } = require('uuid');

const cartSchema = new mongoose.Schema({
  _id: {
    type: String,
    default: uuid,
  },
  owner: { type: String, ref: 'user', required: true },
  orderItems: [
    {
      name: { type: String, required: true },
      stock: { type: Number, required: true },
      image: { type: String, required: true },
      price: { type: Number, required: true },
      product: {
        type: String,
        required: true,
        ref: 'Product',
      },
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});


module.exports = mongoose.model('Cart', cartSchema);