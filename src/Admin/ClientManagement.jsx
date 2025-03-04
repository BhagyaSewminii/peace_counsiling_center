import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ClientManagement = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Fetch sign-up details when the component mounts
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/SignUp');
      setUsers(response.data);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-semibold mb-8">Client Management</h1>
      {users.length > 0 ? (
        <table className="min-w-full">
          <thead>
            <tr className="bg-gray-200">
              <th className="text-left py-3 px-4">Full Name</th>
              <th className="text-left py-3 px-4">Email Address</th>
              <th className="text-left py-3 px-4">Phone Number</th>
              <th className="text-left py-3 px-4">Date of Birth</th>
              <th className="text-left py-3 px-4">Gender</th>
              <th className="text-left py-3 px-4">Address</th>
              <th className="text-left py-3 px-4">City</th>
              <th className="text-left py-3 px-4">Reason for Counseling</th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => (
              <tr key={user._id} className="border-b border-gray-200">
                <td className="py-3 px-4">{user.fullName}</td>
                <td className="py-3 px-4">{user.email}</td>
                <td className="py-3 px-4">{user.phoneNumber}</td>
                <td className="py-3 px-4">{user.dateOfBirth}</td>
                <td className="py-3 px-4">{user.gender}</td>
                <td className="py-3 px-4">{user.address}</td>
                <td className="py-3 px-4">{user.city}</td>
                <td className="py-3 px-4">{user.reasonForCounseling}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p className="text-gray-500">No sign-up details available.</p>
      )}
    </div>
  );
};

export default ClientManagement;
