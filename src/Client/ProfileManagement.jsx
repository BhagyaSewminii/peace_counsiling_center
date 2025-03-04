import React, { useState } from 'react';

const ProfileManagement = () => {
  const [profileData, setProfileData] = useState({
    Username: '',
    Email: '',
    Phone: '',
    Address: '',
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setProfileData((prevData) => ({ ...prevData, [id]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit profile data to the server
    console.log('Profile data submitted:', profileData);
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
      <h2 className="text-2xl font-bold mb-6">Profile Management</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="Username" className="block text-sm font-medium text-gray-700">Username</label>
          <input type="text" id="Username" value={profileData.Username} onChange={handleChange} className="mt-1 p-2 w-full border rounded-md" required />
        </div>
        <div className="mb-4">
          <label htmlFor="Email" className="block text-sm font-medium text-gray-700">Email</label>
          <input type="email" id="Email" value={profileData.Email} onChange={handleChange} className="mt-1 p-2 w-full border rounded-md" required />
        </div>
        <div className="mb-4">
          <label htmlFor="Phone" className="block text-sm font-medium text-gray-700">Phone</label>
          <input type="tel" id="Phone" value={profileData.Phone} onChange={handleChange} className="mt-1 p-2 w-full border rounded-md" required />
        </div>
        <div className="mb-4">
          <label htmlFor="Address" className="block text-sm font-medium text-gray-700">Address</label>
          <input type="text" id="Address" value={profileData.Address} onChange={handleChange} className="mt-1 p-2 w-full border rounded-md" required />
        </div>
        <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-md font-medium hover:bg-blue-600">Update Profile</button>
      </form>
    </div>
  );
};

export default ProfileManagement;
