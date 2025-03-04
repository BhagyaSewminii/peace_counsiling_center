import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faUserCircle, faSearch } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  return (
    <header className="bg-blue-800 text-white p-4 flex justify-between items-center">
      <div className="flex items-center">
        <FontAwesomeIcon icon={faUserCircle} className="text-2xl mr-3" />
        <h1 className="text-xl font-semibold">Admin Panel</h1>
      </div>
      <div className="relative flex-1 mx-4 max-w-md">
        <input
          type="text"
          placeholder="Search..."
          className="w-full p-2 pl-10 rounded bg-blue-700 placeholder-white text-white focus:outline-none"
        />
        <FontAwesomeIcon icon={faSearch} className="absolute top-1/2 left-3 transform -translate-y-1/2 text-white" />
      </div>
      <div className="flex items-center space-x-4">
        <button className="relative">
          <FontAwesomeIcon icon={faBell} className="text-2xl" />
          <span className="absolute top-0 right-0 inline-block w-2 h-2 bg-red-600 rounded-full"></span>
        </button>
        <button className="flex items-center">
          <FontAwesomeIcon icon={faUserCircle} className="text-2xl mr-2" />
          <span>Profile</span>
        </button>
      </div>
    </header>
  );
};

export default Header;
