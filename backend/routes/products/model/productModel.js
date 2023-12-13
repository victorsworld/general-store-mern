const mongoose = require('mongoose');
const { v4: uuid } = require('uuid');

const productSchema = new mongoose.Schema({
  _id: { type: String, default: uuid },
  name: { type: String, default: 'item' },
  price: { type: Number, default: 20.00 },
  img: { type: String, required: false },
  item: { type: String, required: true },
  stock: { type: Number, default: 0 },
  description: { type: String, required: false },
  lastModified: { type: Date, default: Date.now },
  
},
{
    timestamps:true
});

module.exports = mongoose.model('Product', productSchema);
