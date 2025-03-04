// routes/login.js
const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('../models/SignUp'); // Import the user model, assuming SignUp.js is your user model file

// Route to handle user login
router.post('/Login', async (req, res) => {
  try {
    const { email, password } = req.body;
console.log(req.body)
    // Validate form data
    if (!email || !password) {
      return res.status(400).json({ error: 'Email and password are required' });
    }

    // Check if the user exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ error: ' email not found' });
    }

    // Compare the provided password with the stored hashed password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ error: 'Invalid  password' });
    }

    // Create and sign a JWT token
    const token = jwt.sign({ userId: user._id }, 'YOUR_JWT_SECRET', { expiresIn: '1h' });

    res.status(200).json({ message: 'Login successful', token });
  } catch (error) {
    console.error('Error logging in user:', error);
    res.status(500).json({ error: 'An error occurred while logging in the user' });
  }
});

module.exports = router;
