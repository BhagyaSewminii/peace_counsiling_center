import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTachometerAlt, faCalendarAlt, faEnvelope, faUsers, faClipboard, faSignOutAlt, faPlus } from '@fortawesome/free-solid-svg-icons';

const Sidebar = () => {
  return (
    <div className="flex flex-col w-70 h-screen bg-blue-800 text-white">
      <header className="p-4 text-lg font-semibold bg-blue-900 flex items-center">
        <FontAwesomeIcon icon={faTachometerAlt} className="mr-3" />
        Githika's Dashboard
      </header>
      <button className="bg-blue-600 p-2 rounded my-2 mx-4 flex items-center justify-center">
        <FontAwesomeIcon icon={faPlus} className="mr-2" />
        New Report
      </button>
      <nav className="mt-10 flex-grow">
        <Link to="Dashboard" className="block py-2.5 px-4 hover:bg-blue-700 flex items-center">
          <FontAwesomeIcon icon={faTachometerAlt} className="mr-3" />
          Dashboard
        </Link>
        <Link to="ManageAppoinments" className="block py-2.5 px-4 hover:bg-blue-700 flex items-center">
          <FontAwesomeIcon icon={faCalendarAlt} className="mr-3" />
          Manage Appointments
        </Link>
        <Link to="SecureMessages" className="block py-2.5 px-4 hover:bg-blue-700 flex items-center">
          <FontAwesomeIcon icon={faEnvelope} className="mr-3" />
          Secure Messages
        </Link>
        <Link to="ClientManagement" className="block py-2.5 px-4 hover:bg-blue-700 flex items-center">
          <FontAwesomeIcon icon={faUsers} className="mr-3" />
          Client Management
        </Link>
        <Link to="Recommendations" className="block py-2.5 px-4 hover:bg-blue-700 flex items-center">
          <FontAwesomeIcon icon={faClipboard} className="mr-3" />
          Recommendations
        </Link>
      </nav>
      <div className="mt-auto p-4">
        <button className="bg-blue-600 p-2 rounded w-full flex items-center justify-center">
          <FontAwesomeIcon icon={faSignOutAlt} className="mr-2" />
          Log Out
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
