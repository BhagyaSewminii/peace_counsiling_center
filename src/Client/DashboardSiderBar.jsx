import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faCalendarAlt, faEnvelope, faTachometerAlt } from '@fortawesome/free-solid-svg-icons'; // Import desired icons

const DashboardSidebar = () => {
  return (
    <div className="flex flex-col w-64 bg-white shadow-md">
      <header className="p-4 border-b">
        <h2 className="text-lg font-bold text-gray-800">Dashboard</h2>
      </header>
      <nav className="p-4">
        <Link to="profileManagement" className="flex items-center py-2 px-4 text-gray-800 hover:bg-gray-100 rounded">
          <FontAwesomeIcon icon={faUser} className="mr-3" />
          Profile
        </Link>
        <Link to="appointments" className="flex items-center py-2 px-4 text-gray-800 hover:bg-gray-100 rounded">
          <FontAwesomeIcon icon={faCalendarAlt} className="mr-3" />
          Appointments
        </Link>
        <Link to="secureMessaging" className="flex items-center py-2 px-4 text-gray-800 hover:bg-gray-100 rounded">
          <FontAwesomeIcon icon={faEnvelope} className="mr-3" />
          Messages
        </Link>
        <Link to="DashboardClient" className="block py-2.5 px-4 hover:bg-blue-700 flex items-center">
          <FontAwesomeIcon icon={faTachometerAlt} className="mr-3" />
          DashboardClient
        </Link>
      </nav>
    </div>
  );
};

export default DashboardSidebar;
