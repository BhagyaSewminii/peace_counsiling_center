import React, { useState } from 'react';

const SecureMessaging = () => {
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit message to the server
    console.log('Message sent:', message);
    setMessage('');
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
      <h2 className="text-2xl font-bold mb-6">Secure Messaging</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
          <textarea id="message" value={message} onChange={handleChange} rows="4" className="mt-1 p-2 w-full border rounded-md" required />
        </div>
        <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-md font-medium hover:bg-blue-600">Send Message</button>
      </form>
    </div>
  );
};

export default SecureMessaging;
