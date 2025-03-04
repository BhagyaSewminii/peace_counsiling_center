import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../../Admin/Sidebar';
import Header from '../../Admin/Header';

function AdminLayout() {
  return (
    <div className="flex h-screen">
      <Sidebar />
      
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="flex-1 p-4 bg-gray-100">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default AdminLayout;
