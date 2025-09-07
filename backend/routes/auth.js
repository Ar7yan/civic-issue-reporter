const express = require('express');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const memoryStorage = require('../utils/memoryStorage');
const router = express.Router();

// Check if MongoDB is connected
const isMongoConnected = () => {
  return User.db.readyState === 1;
};

// Register
router.post('/register', async (req, res) => {
  try {
    const { name, email, password, role } = req.body;

    if (isMongoConnected()) {
      // Check if user exists
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        return res.status(400).json({ message: 'User already exists' });
      }

      // Create user
      const user = new User({ name, email, password, role });
      await user.save();

      // Generate token
      const token = jwt.sign(
        { id: user._id, role: user.role },
        process.env.JWT_SECRET,
        { expiresIn: process.env.JWT_EXPIRE }
      );

      res.status(201).json({
        token,
        user: {
          id: user._id,
          name: user.name,
          email: user.email,
          role: user.role
        }
      });
    } else {
      // Memory storage implementation
      const existingUser = await memoryStorage.findUserByEmail(email);
      if (existingUser) {
        return res.status(400).json({ message: 'User already exists' });
      }

      const user = await memoryStorage.createUser({ name, email, password, role });
      
      // Generate token
      const token = jwt.sign(
        { id: user._id, role: user.role },
        process.env.JWT_SECRET,
        { expiresIn: process.env.JWT_EXPIRE }
      );

      res.status(201).json({
        token,
        user: {
          id: user._id,
          name: user.name,
          email: user.email,
          role: user.role
        }
      });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Login
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    // Simple demo authentication
    if (email === 'demo@example.com' && password === 'password') {
      const token = jwt.sign(
        { id: 'demo-user-id', role: 'citizen' },
        process.env.JWT_SECRET,
        { expiresIn: process.env.JWT_EXPIRE }
      );

      return res.json({
        token,
        user: {
          id: 'demo-user-id',
          name: 'Demo User',
          email: 'demo@example.com',
          role: 'citizen'
        }
      });
    }

    res.status(400).json({ message: 'Invalid credentials. Try demo@example.com / password' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get current user
router.get('/me', async (req, res) => {
  try {
    // Demo user response
    res.json({
      user: {
        id: 'demo-user-id',
        name: 'Demo User',
        email: 'demo@example.com',
        role: 'citizen'
      }
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;