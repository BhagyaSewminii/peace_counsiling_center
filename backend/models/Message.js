const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true
  },
  sender: {
    type: String,
    required: true
  },
  recipient: {
    type: String,
    required: true
  },
  timestamp: {
    type: Date,
    required: true
  }
});

module.exports = mongoose.model('Message', messageSchema);