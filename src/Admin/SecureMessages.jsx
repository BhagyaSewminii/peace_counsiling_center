import React, { useState } from 'react';

const SecureMessages = () => {
  const [feedback, setFeedback] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to submit feedback
    console.log('Feedback submitted:', feedback);
    // Reset the feedback state after submission
    setFeedback('');
  };

  return (
    <div>
      <h1 className="text-2xl font-semibold mb-4">Secure Messages</h1>
      <p>Here you can manage secure messages.</p>
      <form onSubmit={handleSubmit} className="mt-4">
        <label htmlFor="feedback" className="block text-sm font-medium text-gray-700">Your Feedback</label>
        <textarea
          id="feedback"
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
          rows="4"
          className="mt-1 p-2 w-full border rounded-md"
          placeholder="Enter your feedback here..."
          required
        ></textarea>
        <button type="submit" className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-md font-medium hover:bg-blue-600 transition duration-300">Submit Feedback</button>
      </form>
    </div>
  );
};

export default SecureMessages;
