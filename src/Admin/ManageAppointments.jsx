import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ManageAppointments = () => {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    // Fetch appointments when the component mounts
    fetchAppointments();
  }, []);

  const fetchAppointments = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/appointments');
      setAppointments(response.data);
    } catch (error) {
      console.error('Error fetching appointments:', error);
    }
  };

  const updateAppointmentStatus = async (id, status) => {
    try {
      await axios.put(`http://localhost:5000/api/appointments/${id}`, { status });
      fetchAppointments(); // Refresh appointments list
    } catch (error) {
      console.error(`Error updating appointment status to ${status}:`, error);
    }
  };

  const handleApprove = (id) => {
    updateAppointmentStatus(id, 'Approved');
  };

  const handleReject = (id) => {
    updateAppointmentStatus(id, 'Rejected');
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-semibold mb-6 text-gray-800">Manage Appointments</h1>
      {appointments.length > 0 ? (
        <table className="min-w-full bg-white shadow-md rounded-lg">
          <thead>
            <tr>
              <th className="py-3 px-5 border-b-2 border-gray-200 bg-gray-100 text-left text-sm leading-4 text-gray-600 uppercase tracking-wider">Username</th>
              <th className="py-3 px-5 border-b-2 border-gray-200 bg-gray-100 text-left text-sm leading-4 text-gray-600 uppercase tracking-wider">Email</th>
              <th className="py-3 px-5 border-b-2 border-gray-200 bg-gray-100 text-left text-sm leading-4 text-gray-600 uppercase tracking-wider">Phone</th>
              <th className="py-3 px-5 border-b-2 border-gray-200 bg-gray-100 text-left text-sm leading-4 text-gray-600 uppercase tracking-wider">Date</th>
              <th className="py-3 px-5 border-b-2 border-gray-200 bg-gray-100 text-left text-sm leading-4 text-gray-600 uppercase tracking-wider">Time</th>
              <th className="py-3 px-5 border-b-2 border-gray-200 bg-gray-100 text-left text-sm leading-4 text-gray-600 uppercase tracking-wider">Type</th>
              <th className="py-3 px-5 border-b-2 border-gray-200 bg-gray-100 text-left text-sm leading-4 text-gray-600 uppercase tracking-wider">Gender</th>
              <th className="py-3 px-5 border-b-2 border-gray-200 bg-gray-100 text-left text-sm leading-4 text-gray-600 uppercase tracking-wider">Message</th>
              <th className="py-3 px-5 border-b-2 border-gray-200 bg-gray-100 text-left text-sm leading-4 text-gray-600 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody>
            {appointments.map(appointment => (
              <tr key={appointment._id} className="hover:bg-gray-100">
                <td className="py-4 px-5 border-b border-gray-200">{appointment.Username}</td>
                <td className="py-4 px-5 border-b border-gray-200">{appointment.Email_Address}</td>
                <td className="py-4 px-5 border-b border-gray-200">{appointment.Phone_Number}</td>
                <td className="py-4 px-5 border-b border-gray-200">{appointment.Preferred_Appointment_Date}</td>
                <td className="py-4 px-5 border-b border-gray-200">{appointment.Preferred_Appointment_Time}</td>
                <td className="py-4 px-5 border-b border-gray-200">{appointment.counselingType}</td>
                <td className="py-4 px-5 border-b border-gray-200">{appointment.Gender}</td>
                <td className="py-4 px-5 border-b border-gray-200">{appointment.Message}</td>
                <td className="py-4 px-5 border-b border-gray-200">
                  <button
                    onClick={() => handleApprove(appointment._id)}
                    className="bg-green-500 text-white px-3 py-1 rounded mr-2 hover:bg-green-600 transition duration-200"
                  >
                    Approve
                  </button>
                  <button
                    onClick={() => handleReject(appointment._id)}
                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition duration-200"
                  >
                    Reject
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p className="text-gray-700">No appointments available.</p>
      )}
    </div>
  );
};

export default ManageAppointments;
