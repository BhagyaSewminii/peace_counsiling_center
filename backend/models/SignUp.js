const mongoose = require('mongoose');

const SignUpSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true, // Ensures uniqueness of email addresses
    trim: true
  },
  password: {
    type: String,
    required: true,
    trim: true
  },
  
  phoneNumber: {
    type: Number,
    required: true,
    trim: true
  },
  dateOfBirth: {
    type: Date,
    required: true
  },
  gender: {
    type: String,
    required: true,
    //enum: ['Male', 'Female', 'Non-binary', 'Prefer not to say']
  },
  address: {
    type: String,
    required: true
  },
  city:{
    type: String,
    required: true
  },
  reasonForCounseling:{
    type: String,
    required: true
  }
});

module.exports = mongoose.model('SignUp', SignUpSchema);
