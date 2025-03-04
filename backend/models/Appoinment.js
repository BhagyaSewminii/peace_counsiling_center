const mongoose = require('mongoose');

const AppoinmentSchema = new mongoose.Schema({
  Username: {
    type: String,
    required: true,
    trim: true
  },
  Email_Address: {
    type: String,
    required: true,
    trim: true
  },
  Phone_Number: {
    type: String,
    required: true,
    trim: true
  },
  Preferred_Appointment_Date: {
    type: Date,
    required: true
  },
  Preferred_Appointment_Time: {
    type: String,
    required: true
  },
  counselingType: {
    type: String,
    required: true,
   // enum: ['Individual Counseling', 'Family Counseling', 'Couples Counseling', 'Group Therapy', 'Child Counseling', 'Teen Counseling']
  },
  Gender: {
    type: String,
    required: true,
    //enum: ['Male', 'Female', 'nonBinary', 'preferNotToSay']
  },
  Message: {
    type: String,
    
  }
  
},
{collection:'appoinment'}
);

module.exports = mongoose.model('AppoinmentSchema ',AppoinmentSchema );

