import React from 'react';
import Logo from '../../Assests/logo.png'; // Adjusted import path with correct casing

function Header() {
  return (
    <div className="bg-green-500 text-white py-4  shadow-md">
      <div className="container mx-auto flex justify-between items-center px-0">
        <div className="flex items-center">
          <img src={Logo} alt="Logo" className="h-10 mr-2 rounded-lg" /> {/* Add your logo here */}
          <div className="text-2xl font-bold">Peace</div>
        </div>
        <nav className="flex items-center space-x-4">
          <a href="/Home" className="hover:text-yellow-300">Home</a>
          <a href="/About" className="hover:text-yellow-300">About</a>
          <a href="/Services" className="hover:text-yellow-300">Services</a>
          <a href="/Blog" className="hover:text-yellow-300">Blog</a>
          <a href="/Faqs" className="hover:text-yellow-300">Faqs</a>
          <a href="/Contact" className="hover:text-yellow-300">Contact</a>
          <a href="/Login" className="bg-white text-green-500 px-4 py-2 rounded-lg hover:bg-gray-300">Login</a>
          <a href="/SignUp" className="bg-white text-green-500 px-4 py-2 rounded-lg hover:bg-gray-200">Create Account</a>
        </nav>
      </div>
    </div>
  );
}

export default Header;
