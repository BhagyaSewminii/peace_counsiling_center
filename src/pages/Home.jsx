import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you're using React Router for navigation
import backgroundVideo from '../Assests/home.mp4'; // Adjust the path accordingly

function Home() {
  return (
    <div className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden">
      <video 
        autoPlay 
        loop 
        muted 
        className="absolute w-full h-full object-cover z-0"
        style={{ opacity: 0, transition: 'opacity 2s ease-in-out' }}
        onLoadedData={(e) => { e.currentTarget.style.opacity = 1; }}
      >
        <source src={backgroundVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="relative z-10 text-center p-4">
        <h1 className="text-4xl font-bold text-white mb-8">Welcome to Our Counseling Center</h1>
        <p className="text-lg text-white mb-8 max-w-lg">
          We provide professional counseling services to help you navigate life's challenges and improve your overall well-being.
        </p>
        <div className="flex justify-center gap-6">
          <Link to="/services" className="bg-white text-blue-500 hover:bg-blue-500 hover:text-white px-6 py-3 rounded-lg transition duration-300 ease-in-out">
            Explore Our Services
          </Link>
          <Link to="/about" className="bg-white text-blue-500 hover:bg-blue-500 hover:text-white px-6 py-3 rounded-lg transition duration-300 ease-in-out">
            Learn About Us
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
