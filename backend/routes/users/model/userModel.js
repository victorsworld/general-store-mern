const mongoose = require('mongoose');
const { v4: uuid } = require('uuid');

const userSchema = mongoose.Schema(
  {
    _id: {
      type: String,
      default: uuid,
    },
    role: {
      type: String,
      enum: ['user', 'admin'],
      default: 'user',
    },
    email: {
      type: String,
      required: true,
      lowercase: true,
      trim: true,
      unique: true,
    },
    passwordHash: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('User', userSchema);
