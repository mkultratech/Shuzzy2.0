// backend/models/User.js
// This file defines the User model for MongoDB using Mongoose.
// It includes fields for email, name, and a hashed password.
// The model is used for user authentication and registration in the application.
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  name:  { type: String, required: true },
  hash:  { type: String, required: true }
}, {
  timestamps: true   // adds createdAt / updatedAt
});

module.exports = mongoose.model('User', userSchema);
