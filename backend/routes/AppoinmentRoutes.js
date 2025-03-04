const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Appointment = require('../models/Appoinment'); // Ensure this path is correct
const nodemailer = require('nodemailer');
// Create a new appointment
router.post('/', async (req, res) => {
  const { Username, Email_Address, Phone_Number, Preferred_Appointment_Date, Preferred_Appointment_Time, counselingType, Gender, Message } = req.body;

  const newAppointment = new Appointment({
    Username,
    Email_Address,
    Phone_Number,
    Preferred_Appointment_Date,
    Preferred_Appointment_Time,
    counselingType,
    Gender,
    Message
  });

  try {
    const savedAppointment = await newAppointment.save();
    res.status(201).json(savedAppointment);
    sendApprovalEmail(Email_Address)
    
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Get all appointments
router.get('/', async (req, res) => {
  try {
    const appointments = await Appointment.find();
    res.status(200).json(appointments);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get a specific appointment by ID
router.get('/:id', async (req, res) => {
  try {
    const appointment = await Appointment.findById(req.params.id);
    if (!appointment) return res.status(404).json({ message: 'Appointment not found' });
    res.status(200).json(appointment);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Update an appointment by ID
router.put('/:id', async (req, res) => {
  const { Username, Email_Address, Phone_Number, Preferred_Appointment_Date, Preferred_Appointment_Time, counselingType, Gender, Message } = req.body;

  try {
    const updatedAppointment = await Appointment.findByIdAndUpdate(
      req.params.id,
      {
        Username,
        Email_Address,
        Phone_Number,
        Preferred_Appointment_Date,
        Preferred_Appointment_Time,
        counselingType,
        Gender,
        Message
      },
      { new: true }
    );

    if (!updatedAppointment) return res.status(404).json({ message: 'Appointment not found' });
    res.status(200).json(updatedAppointment);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Delete an appointment by ID
router.delete('/:id', async (req, res) => {
  try {
    const deletedAppointment = await Appointment.findByIdAndDelete(req.params.id);
    if (!deletedAppointment) return res.status(404).json({ message: 'Appointment not found' });
    res.status(200).json({ message: 'Appointment deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
// Function to send approval email
// Function to send approval email
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
      subject: 'Appointment saved',
      text: `Your appointment is saved. Your email is: ${userEmail}. You can now log in and access our services.`,
    });
    
    console.log('Approval email sent successfully');
  } catch (error) {
    console.error('Error sending approval email:', error);
    throw error;
  }
}




module.exports = router;
