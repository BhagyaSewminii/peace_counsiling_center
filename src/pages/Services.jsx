import React from 'react';

// Import your background images
import individualCounselingImage from '../Assests/Individual.jpg';
import familyCounselingImage from '../Assests/family.jpg';
import couplesCounselingImage from '../Assests/couple.jpg';
import groupTherapyImage from '../Assests/group.jpg';
import childCounselingImage from '../Assests/child.jpg';
import teenCounselingImage from '../Assests/teen.jpg';

function Services() {
  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-6">Our Services</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="relative bg-white shadow-lg rounded-lg overflow-hidden" style={{ backgroundImage: `url(${individualCounselingImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
          <div className="absolute inset-0 bg-gray-900 bg-opacity-50"></div>
          <div className="relative p-10 text-white">
            <h2 className="text-xl text-center font-bold mb-4">Individual Counseling</h2>
            <p className="text-gray-200 mb-4">
            Personalized support addressing individual concerns or challenges.
            Fee: LKR 3,000 - 5,000 per session.
            </p>
            <a href="/Appointment_scheduling" className="block w-full text-center bg-blue-500 py-2 rounded-md font-medium hover:bg-blue-600 transition duration-300">Schedule Appointment</a>
          </div>
        </div>

        <div className="relative bg-white shadow-lg rounded-lg overflow-hidden" style={{ backgroundImage: `url(${familyCounselingImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
          <div className="absolute inset-0 bg-gray-900 bg-opacity-50"></div>
          <div className="relative p-10 text-white">
            <h2 className="text-xl text-center font-bold mb-4">Family Counseling</h2>
            <p className="text-gray-200 mb-4">
            Therapy aimed at resolving conflicts and improving communication within families. Fee: LKR 4,000 - 6,000 per session.
            </p>
            <a href="/Appointment_scheduling" className="block w-full text-center bg-blue-500 py-2 rounded-md font-medium hover:bg-blue-600 transition duration-300">Schedule Appointment</a>
          </div>
        </div>

        <div className="relative bg-white shadow-lg rounded-lg overflow-hidden" style={{ backgroundImage: `url(${couplesCounselingImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
          <div className="absolute inset-0 bg-gray-900 bg-opacity-50"></div>
          <div className="relative p-10 text-white">
            <h2 className="text-xl text-center font-bold mb-4">Couples Counseling</h2>
            <p className="text-gray-200 mb-4">
            Guidance for couples to enhance their relationship and resolve conflicts. Fee: LKR 4,000 - 6,000 per session.
            </p>
            <a href="/Appointment_scheduling" className="block w-full text-center bg-blue-500 py-2 rounded-md font-medium hover:bg-blue-600 transition duration-300">Schedule Appointment</a>
          </div>
        </div>

        <div className="relative bg-white shadow-lg rounded-lg overflow-hidden" style={{ backgroundImage: `url(${groupTherapyImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
          <div className="absolute inset-0 bg-gray-900 bg-opacity-50"></div>
          <div className="relative p-10 text-white">
            <h2 className="text-xl text-center font-bold mb-4">Group Therapy</h2>
            <p className="text-gray-200 mb-4">
            Supportive environment for individuals to share and learn from others facing similar issues. Fee: LKR 2,000 - 4,000 per session.
            </p>
            <a href="Appointment_scheduling" className="block w-full text-center bg-blue-500 py-2 rounded-md font-medium hover:bg-blue-600 transition duration-300">Schedule Appointment</a>
          </div>
        </div>

        <div className="relative bg-white shadow-lg rounded-lg overflow-hidden" style={{ backgroundImage: `url(${childCounselingImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
          <div className="absolute inset-0 bg-gray-900 bg-opacity-50"></div>
          <div className="relative p-10 text-white">
            <h2 className="text-xl text-center font-bold mb-4">Child Counseling</h2>
            <p className="text-gray-200 mb-4">
            Tailored therapy for children to address emotional and behavioral challenges. Fee: LKR 3,000 - 5,000 per session.
            </p>
            <a href="/Appointment_scheduling" className="block w-full text-center bg-blue-500 py-2 rounded-md font-medium hover:bg-blue-600 transition duration-300">Schedule Appointment</a>
          </div>
        </div>

        <div className="relative bg-white shadow-lg rounded-lg overflow-hidden" style={{ backgroundImage: `url(${teenCounselingImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
          <div className="absolute inset-0 bg-gray-900 bg-opacity-50"></div>
          <div className="relative p-10 text-white">
            <h2 className="text-xl text-center font-bold mb-4">Teen Counseling</h2>
            <p className="text-gray-200 mb-4">
            Supportive counseling for adolescents dealing with various issues. Fee: LKR 3,000 - 5,000 per session.
            </p>
            <a href="/Appointment_scheduling" className="block w-full text-center bg-blue-500 py-2 rounded-md font-medium hover:bg-blue-600 transition duration-300">Schedule Appointment</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
