import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { CalendarIcon } from '@heroicons/react/solid';


const Dashboard = () => {
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

  return (
    <div className="container mx-auto p-4">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-semibold text-gray-800">Dashboard</h1>
        <div className="flex items-center space-x-2">
          <CalendarIcon className="w-6 h-6 text-gray-600" />
          <span className="text-gray-600">Appointment Calendar</span>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow-md rounded-lg">
          <thead>
            <tr>
              <th className="py-3 px-5 border-b border-gray-200 bg-gray-100 text-left text-sm leading-4 text-gray-600 uppercase tracking-wider">User</th>
              <th className="py-3 px-5 border-b border-gray-200 bg-gray-100 text-left text-sm leading-4 text-gray-600 uppercase tracking-wider">Email</th>
              <th className="py-3 px-5 border-b border-gray-200 bg-gray-100 text-left text-sm leading-4 text-gray-600 uppercase tracking-wider">Phone</th>
              <th className="py-3 px-5 border-b border-gray-200 bg-gray-100 text-left text-sm leading-4 text-gray-600 uppercase tracking-wider">Date</th>
              <th className="py-3 px-5 border-b border-gray-200 bg-gray-100 text-left text-sm leading-4 text-gray-600 uppercase tracking-wider">Time</th>
              <th className="py-3 px-5 border-b border-gray-200 bg-gray-100 text-left text-sm leading-4 text-gray-600 uppercase tracking-wider">Status</th>
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
                <td className="py-4 px-5 border-b border-gray-200">
                  {appointment.status === 'Approved' && (
                    <span className="bg-green-200 text-green-800 py-1 px-2 rounded">Approved</span>
                  )}
                  {appointment.status === 'Rejected' && (
                    <span className="bg-red-200 text-red-800 py-1 px-2 rounded">Rejected</span>
                  )}
                  {!appointment.status && (
                    <span className="bg-yellow-200 text-yellow-800 py-1 px-2 rounded">Pending</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;
