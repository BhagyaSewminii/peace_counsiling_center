import React from 'react';

function ClientHeader() {
  return (
    <header className="bg-blue-900 shadow-lg">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <h1 className="text-xl font-bold text-white">Client Dashboard</h1>
          </div>
          <div className="flex items-center">
            {/* Add any additional header elements or actions here */}
            <button className="bg-white text-blue-900 px-4 py-2 rounded-md hover:bg-blue-800 hover:text-white">Logout</button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default ClientHeader;
