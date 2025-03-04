const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

const appointmentRoutes = require('./routes/AppoinmentRoutes'); // Ensure the path is correct
const SignUpRoutes = require('./routes/SignUpRoutes');
const LoginRoutes = require('./routes/LoginRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use('/api/appointments', appointmentRoutes);
app.use('/api/SignUp',SignUpRoutes);
//app.use('/api/Login',LoginRoutes);

// Database connection
mongoose.connect(process.env.MONGODB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('MongoDB connected...'))
  .catch(err => console.error(err));

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  
});
