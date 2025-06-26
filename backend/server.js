// backend/server.js
// This is the main entry point for the backend server.
// It sets up the Express server, connects to MongoDB, and mounts the API routes.
// It also includes a simple health check endpoint.

// Make sure to install the required packages: express, cors, mongoose, dotenv
// You can run this server with `node server.js` after setting up your environment 
// variables in a .env file (e.g., MONGO_URI for MongoDB connection string).
// Ensure you have a .env file with the necessary environment variables.
//    Example .env file:
//      MONGO_URI=mongodb://localhost:27017/mydatabase
//      PORT=5000
//      JWT_SECRET = your_jwt_secret_key


require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

// Import routes
const authRouter = require('./api/auth');

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log('✅ MongoDB connected'))
  .catch(err => console.error('❌ MongoDB error:', err));

const app = express();

// Global middleware
app.use(cors());
app.use(express.json());

// Mount routers under their feature paths
app.use('/api/auth', authRouter);

// (Optional) health check
app.get('/ping', (_req, res) => res.send('pong'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));



// Simple schemas
// const User = mongoose.model('User', new mongoose.Schema({
//   login: String,
//   password: String,
//   firstName: String,
//   lastName: String
// }));

// const Card = mongoose.model('Card', new mongoose.Schema({
//   card: String,
//   userId: Number
// }));

// app.post('/api/login', async (req, res) => {
//   const { login, password } = req.body;
//   const user = await User.findOne({ login, password });

// if (user) {
//   res.json({ id: user._id, firstName: user.firstName, lastName:
//   user.lastName });
// } 
// else {
//   res.json({ id: -1 });
// }
// });

// app.post('/api/addcard', async (req, res) => {
// const { userId, card } = req.body;

// try {
//   await Card.create({ userId, card });
//   res.json({ error: '' });
// } 
// catch (err) {
//   res.json({ error: err.message });
// }
// });

// app.post('/api/searchcards', async (req, res) => {
//   const { userId, search } = req.body;
//   const cards = await Card.find({ userId, card: { $regex: search, $options:
//   'i' } });
//   res.json({ results: cards.map(c => c.card), error: '' });
// });


// import 'dotenv/config'
// import mongoose from 'mongoose';
// import express from 'express';
// import cors from 'cors';

// const app = express();

// // Middleware
// app.use(cors());
// app.use(express.json());

// // MongoDB connection
// const mongoUri = process.env.MONGODB_URI;
// mongoose.connect(mongoUri)
//   .then(() => console.log('🗄️  MongoDB connected'))
//   .catch(err => console.error(err));

// // Example endpoint
// app.get('/api/health', (req, res) => {
//   res.json({ status: 'OK' });
// });

// // Start server
//  // start Node + Express server on port 5000
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));


