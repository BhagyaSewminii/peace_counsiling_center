import React, { useState, useEffect } from 'react';

// Import images
import image1 from '../Assests/miss2.jpeg';
import image2 from '../Assests/miss3.jpeg';
import image3 from '../Assests/miss4.jpeg';
import image4 from '../Assests/miss5.jpeg';
import image5 from '../Assests/miss6.jpeg';
import image6 from '../Assests/miss7.jpeg';
import image7 from '../Assests/miss8.jpeg';
import image8 from '../Assests/miss9.jpeg';
import image9 from '../Assests/miss10.jpeg';
import image10 from '../Assests/miss11.jpeg';

const About = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [image2, image3, image4, image5, image6, image7, image8, image9, image10];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change the interval time here (in milliseconds)

    return () => clearInterval(interval);
  }, [images]); // Include images in the dependency array

  return (
    <div className="container mx-auto py-12 px-4">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-green-300 to-blue-400 flex flex-col md:flex-row items-center justify-center mb-12">
        <div className="md:w-1/2 mr-6">
          <h1 className="text-4xl font-bold mb-4 font-mono text-center">Finding Your Path to Wellness</h1>
          <p className="text-gray-700 text-center font-mono leading-loose">
            We provide professional counseling services to help you navigate life's challenges and improve your overall well-being.
          </p>
        </div>
        <div className="md:w-1/2">
          <img src={image1} alt="Counseling Center" className="rounded-lg shadow-md" />
        </div>
      </div>

      {/* Our Story Section */}
      <div className="mb-12">
        <h2 className="text-3xl text-center font-bold mb-4">Our Story</h2>
        <p className="text-gray-700 font-Segoe Script text-center leading-loose">
          At PEACE, we're passionate about guiding individuals and families toward healing and growth. Founded by Githika Kumari, our center has become a trusted sanctuary for those seeking support through life's challenges. With a dedicated team of compassionate therapists, we're committed to empowering each client on their journey to wellness. Welcome to PEACE, where your story finds understanding and transformation.
        </p>
      </div>

      {/* Image Gallery Section */}
      <div className="flex justify-center mb-12">
        <div className="">
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Gallery Image ${index + 1}`}
              className={`rounded-lg shadow-md ${index === currentImageIndex ? '' : 'hidden'}`}
            />
          ))}
        </div>
      </div>

      {/* Team Section */}
      <div>
        <h2 className="text-3xl text-center font-bold mb-4">Our Team</h2>
        <p className="text-gray-700 text-center leading-loose">
          Meet our dedicated team of professional counselors who are here to support you on your journey towards mental wellness.
        </p>
        {/* Replace this with actual team member information */}
      </div>
    </div>
  );
};

export default About;
