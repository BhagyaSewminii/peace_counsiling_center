import React from 'react';
import '@fortawesome/fontawesome-free/css/all.css';

function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-300 py-8">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4">
        <div className="mb-4 md:mb-0">
          <h3 className="text-xl font-semibold mb-2">Contact Us</h3>
          <p className="text-sm"> Pahalagama,Gampaha,Sri Lanka</p>
          <p className="text-sm">Phone: 077 144 2279</p>
          <p className="text-sm">Email: peacecounseling67@gmail.com</p>
          <div className="mt-4 flex gap-4">
            {/* Social Media Links */}
            <a href="https://www.facebook.com/profile.php?id=61560383556655&mibextid=ZbWKwL" className="text-gray-300 hover:text-blue-400">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#" className="text-gray-300 hover:text-blue-400">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="text-gray-300 hover:text-blue-400">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="" className="text-gray-300 hover:text-blue-400">
              <i className="fab fa-whatsapp"></i>
            </a>
          </div>
        </div>
        <div className="flex items-center">
          <ul className="flex gap-4 mr-8">
            {/* Page Shortcut Links */}
            <li>
              <a href="Home" className="text-gray-300 hover:text-blue-400">Home</a>
            </li>
            <li>
              <a href="About" className="text-gray-300 hover:text-blue-400">About</a>
            </li>
            <li>
              <a href="Services" className="text-gray-300 hover:text-blue-400">Services</a>
            </li>
            <li>
              <a href="Blog" className="text-gray-300 hover:text-blue-400">Blog</a>
            </li>
            <li>
              <a href="Faqs" className="text-gray-300 hover:text-blue-400">Faqs</a>
            </li>
           
            <li>
              <a href="Contact" className="text-gray-300 hover:text-blue-400">Contact</a>
            </li>
          </ul>
          <div>
            <p>&copy; 2024 Peace Counseling Center</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
