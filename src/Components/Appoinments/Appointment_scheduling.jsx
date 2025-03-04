import React, { useState } from 'react';
import axios from 'axios';
import Logo from '../../Assests/logo.png';
import Background from '../../Assests/AI.jpeg';

const AppointmentScheduling = () => {
  const [username, setUsername] = useState('');
  const [emailAddress, setEmailAddress] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [preferredAppointmentDate, setPreferredAppointmentDate] = useState('');
  const [preferredAppointmentTime, setPreferredAppointmentTime] = useState('');
  const [counselingType, setCounselingType] = useState('');
  const [gender, setGender] = useState('');
  const [message, setMessage] = useState('');
 // const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      Username: username,
      Email_Address: emailAddress,
      Phone_Number: phoneNumber,
      Preferred_Appointment_Date: preferredAppointmentDate,
      Preferred_Appointment_Time: preferredAppointmentTime,
      counselingType,
      Gender: gender,
      Message: message,
    };

    console.log('Form Data:', formData);  // Log the form data

    try {
      const response = await axios.post('http://localhost:5000/api/appointments', formData);
      if (response.status === 201) {
        alert('Appointment scheduled successfully!');
        // Reset form fields
        setUsername('');
        setEmailAddress('');
        setPhoneNumber('');
        setPreferredAppointmentDate('');
        setPreferredAppointmentTime('');
        setCounselingType('');
        setGender('');
        setMessage('');
      }
    } catch (error) {
      console.error('Error scheduling appointment:', error);
      if (error.response) {
        // Server responded with a status other than 2xx
        console.error('Response data:', error.response.data);
        console.error('Response status:', error.response.status);
        console.error('Response headers:', error.response.headers);
      } else if (error.request) {
        // Request was made but no response was received
        console.error('Request data:', error.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        console.error('Error message:', error.message);
      }
      alert('Failed to schedule appointment. Please try again.');
    }
    
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: `url(${Background})` }}>
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full ">
        <div className="text-center mb-6">
          <img src={Logo} alt="Counseling Center Logo" className="w-24 mx-auto mb-4" />
          <h2 className="text-2xl font-bold">Schedule an Appointment</h2>
          <p className="text-gray-600">Start your journey to wellness today.</p>
        </div>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username</label>
            <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} className="mt-1 p-2 w-full border rounded-md" placeholder="John Doe" required />
          </div>
          <div>
            <label htmlFor="emailAddress" className="block text-sm font-medium text-gray-700">Email Address</label>
            <input type="email" id="emailAddress" value={emailAddress} onChange={(e) => setEmailAddress(e.target.value)} className="mt-1 p-2 w-full border rounded-md" placeholder="you@example.com" required />
          </div>


          <div>
            <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700">Phone Number</label>
            <input type="tel" id="phoneNumber" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} className="mt-1 p-2 w-full border rounded-md" placeholder="(123) 456-7890" required />
          </div>
          <div>
            <label htmlFor="preferredAppointmentDate" className="block text-sm font-medium text-gray-700">Preferred Appointment Date</label>
            <input type="date" id="preferredAppointmentDate" value={preferredAppointmentDate} onChange={(e) => setPreferredAppointmentDate(e.target.value)} className="mt-1 p-2 w-full border rounded-md" required />
          </div>
          <div>
            <label htmlFor="preferredAppointmentTime" className="block text-sm font-medium text-gray-700">Preferred Appointment Time</label>
            <input type="time" id="preferredAppointmentTime" value={preferredAppointmentTime} onChange={(e) => setPreferredAppointmentTime(e.target.value)} className="mt-1 p-2 w-full border rounded-md" required />
          </div>
          <div>
            <label htmlFor="counselingType" className="block text-sm font-medium text-gray-700">Type of Counseling</label>
            <select id="counselingType" value={counselingType} onChange={(e) => setCounselingType(e.target.value)} className="mt-1 p-2 w-full border rounded-md" required>
              <option value="">Select a type</option>
              <option value="individual">Individual Counseling</option>
              <option value="family">Family Counseling</option>
              <option value="couples">Couples Counseling</option>
              <option value="group">Group Therapy</option>
              <option value="child">Child Counseling</option>
              <option value="teen">Teen Counseling</option>
            </select>
          </div>
          <div>
            <label htmlFor="gender" className="block text-sm font-medium text-gray-700">Gender</label>
            <select id="gender" value={gender} onChange={(e) => setGender(e.target.value)} className="mt-1 p-2 w-full border rounded-md" required>
              <option value="">Select your gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="nonBinary">Non-binary</option>
              <option value="preferNotToSay">Prefer not to say</option>
            </select>
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
            <textarea id="message" value={message} onChange={(e) => setMessage(e.target.value)} rows="4" className="mt-1 p-2 w-full border rounded-md" placeholder="Tell us about yourself and why you're seeking counseling." />
          </div>
          <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-md font-medium hover:bg-blue-600 transition duration-300">Schedule Appointment</button>
        </form>
      </div>
    </div>
  );
};

export default AppointmentScheduling;
