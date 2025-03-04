import React, { useState } from 'react';
import Logo from '../../Assests/logo.png';
import Background from '../../Assests/AI.jpeg';

const SignUp = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    phoneNumber: '',
    dateOfBirth: '',
    gender: '',
    address: '',
    city: '',
    reasonForCounseling: '',
  });
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null); // Reset error state before submission

    // Basic validation
    for (const key in formData) {
      if (!formData[key]) {
        setError(`Please fill out the ${key} field.`);
        return;
      }
    }

    try {
      const response = await fetch('http://localhost:5000/api/SignUp', { 
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        console.log('Form submitted successfully!');
        // Clear the form data after submission
        setFormData({
          fullName: '',
          email: '',
          password: '',
          phoneNumber: '',
          dateOfBirth: '',
          gender: '',
          address: '',
          city: '',
          reasonForCounseling: ''
        });
      } else {
        const data = await response.json();
        setError(`Form submission failed: ${data.error || 'An error occurred while registering the user'}`);
      }
    } catch (error) {
      setError(`Error submitting form: ${error.message}`);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: `url(${Background})` }}>
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <div className="text-center mb-6">
          <img src={Logo} alt="Counseling Center Logo" className="w-24 mx-auto mb-4" />
          <h2 className="text-3xl font-bold">Register for Counseling</h2>
          <p className="text-gray-600">Start your journey to wellness today.</p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-6">
          {error && <div className="text-red-500 text-center">{error}</div>}
          <div>
            <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">Full Name</label>
            <input type="text" id="fullName" name="fullName" value={formData.fullName} onChange={handleChange} className="mt-1 p-3 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="John Doe" required />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="mt-1 p-3 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="you@example.com" required />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} className="mt-1 p-3 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter your password" required  />
          </div>
          <div>
            <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700">Phone Number</label>
            <input type="text" id="phoneNumber" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} className="mt-1 p-3 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="(123) 456-7890" required />
          </div>
          <div>
            <label htmlFor="dateOfBirth" className="block text-sm font-medium text-gray-700">Date of Birth</label>
            <input type="date" id="dateOfBirth" name="dateOfBirth" value={formData.dateOfBirth} onChange={handleChange} className="mt-1 p-3 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required />
          </div>
          <div>
            <label htmlFor="gender" className="block text-sm font-medium text-gray-700">Gender</label>
            <select id="gender" name="gender" value={formData.gender} onChange={handleChange} className="mt-1 p-3 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required>
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Non-binary">Non-binary</option>
              <option value="Prefer not to say">Prefer not to say</option>
            </select>
          </div>
          <div>
            <label htmlFor="address" className="block text-sm font-medium text-gray-700">Address</label>
            <input type="text" id="address" name="address" value={formData.address} onChange={handleChange} className="mt-1 p-3 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required />
          </div>
          <div>
            <label htmlFor="city" className="block text-sm font-medium text-gray-700">City</label>
            <input type="text" id="city" name="city" value={formData.city} onChange={handleChange} className="mt-1 p-3 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required />
          </div>
          <div>
            <label htmlFor="reasonForCounseling" className="block text-sm font-medium text-gray-700">Reason for Counseling</label>
            <textarea id="reasonForCounseling" name="reasonForCounseling" value={formData.reasonForCounseling} onChange={handleChange} rows="4" className="mt-1 p-3 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Tell us about yourself and why you're seeking counseling." required></textarea>
          </div>
          <div>
            <p className="text-gray-700">By registering, you agree to our Terms of Service and Privacy Policy.</p>
          </div>
          <div>
            <button type="submit" className="w-full bg-blue-500 text-white py-3 rounded-md font-medium hover:bg-blue-600 transition duration-300">Sign Up</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
