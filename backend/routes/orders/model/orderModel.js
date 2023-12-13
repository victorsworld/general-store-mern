const mongoose = require('mongoose');
const { v4: uuid } = require('uuid');

const orderSchema = new mongoose.Schema(
  {
    owner: {
      type: String,
      required: true,
      ref: 'User',
    },
    firstname: {
      type: String,
      required: true,
    },
    lastname: {
      type: String,
      required: true,
    },
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
    billingaddress: {
      address: { type: String, required: false},
      city: { type: String, required: false },
      postalCode: { type: String, required: false},
      country: { type: String, required: false },
    },
    shippingAddress: {
      address: { type: String, required: false },
      city: { type: String, required: false },
      postalCode: { type: String, required: false },
      country: { type: String, required: false },
    },
    paymentMethod: {
      type: String,
      required: false,
    },
    paymentResult: {
      id: { type: String },
      status: { type: String },
      update_time: { type: String },
      email_address: { type: String },
    },
    itemsPrice: {
      type: Number,
      required: false,
      default: 0.0,
    },
    taxPrice: {
      type: Number,
      required: false,
      default: 0.0,
    },
    shippingPrice: {
      type: Number,
      required: false,
      default: 0.0,
    },
    totalPrice: {
      type: Number,
      required: true,
      default: 0.0,
    },
    isPaid: {
      type: Boolean,
      required: false,
      default: false,
    },
    paidAt: {
      type: Date,
    },
    isDelivered: {
      type: Boolean,
      required: false,
      default: false,
    },
    deliveredAt: {
      type: Date,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Order', orderSchema);
