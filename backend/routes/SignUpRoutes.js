// routes/signup.js
const express = require('express');
const router = express.Router();
const User = require('../models/SignUp');
const nodemailer = require('nodemailer');

// Route to handle user signup
router.post('/', async (req, res) => {
  try {
    const {
      fullName,
      email,
      password,
      phoneNumber,
      dateOfBirth,
      gender,
      address,
      city,
      reasonForCounseling
    } = req.body;

    // Validate form data
    if (
      !fullName ||
      !email ||
      !password||
      !phoneNumber ||
      !dateOfBirth ||
      !gender ||
      !address ||
      city.trim() === '' || // Check for empty string
      reasonForCounseling.trim() === '' // Check for empty string
    ) {
      return res.status(400).json({ error: 'All fields are required' });
    }
    
    // Check if the email is already registered
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: 'Email is already registered' });
    }

    // Create new user instance
    const newUser = new User({
      fullName,
      email,
      password,
      phoneNumber,
      dateOfBirth,
      gender,
      address,
      city,
      reasonForCounseling
    });

    // Save user to database
    await newUser.save();

    res.status(201).json({ message: 'User registered successfully' });
    sendApprovalEmail(email)
  } catch (error) {
    console.error('Error registering user:', error);
    res.status(500).json({ error: 'An error occurred while registering the user' });
  }
});

// Route to get all users
router.get('/', async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({ error: 'An error occurred while fetching users' });
  }
});
async function sendApprovalEmail(userEmail) {
  try {
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: 'peacecounseling67@gmail.com',
        pass: 'fddw owcp ayki qahh',
      },
    });

    await transporter.sendMail({
      from: 'peacecounseling67@gmail.com',
      to: userEmail,
      subject: 'Register is Sucessfully',
      text: `Your Registration is Sucessfully.Welcome to Peace Counseling Center. Your email is: ${userEmail}. You can now log in and access our services.`,
    });
    
    console.log('Approval email sent successfully');
  } catch (error) {
    console.error('Error sending approval email:', error);
    throw error;
  }
}



module.exports = router;
