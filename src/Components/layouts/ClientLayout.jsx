import React from 'react';
import ClientHeader from '../../Client/ClientHeader';
import DashboardSidebar from '../../Client/DashboardSiderBar'; // Assuming you have a Sidebar component for the client

function ClientLayout() {
  return (
    <div className="flex h-screen">
      <DashboardSidebar /> {/* Render the sidebar component for the client */}
      
      <div className="flex-1 flex flex-col">
        <ClientHeader /> {/* Render the header component */}
        <main className="flex-1 p-4 bg-gray-100">
          {/* Content for the client goes here */}
        </main>
      </div>
    </div>
  );
}

export default ClientLayout;
