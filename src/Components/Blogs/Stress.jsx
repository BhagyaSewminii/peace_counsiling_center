// TipsForManagingStress.jsx
import React from 'react';
import DeepBreathing from '../../Assests/DeepBreathing.jpg';
import Exercise from '../../Assests/ex.jpg';
import Meditation from '../../Assests/medi.jpg';
import HealthyDiet from '../../Assests/diet.jpg';
import TimeManagement from '../../Assests/time.jpg';
import Sleep from '../../Assests/sleep.jpg';


const Stress = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">1Tips for Managing Stress</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-2">1. Practice Deep Breathing</h2>
          <img src={DeepBreathing} alt="Deep Breathing" className="w-full mb-4 rounded-lg" />
          <p>Take slow, deep breaths to calm your nervous system.</p>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-2">2. Get Regular Exercise</h2>
          <img src={Exercise} alt="Exercise" className="w-full mb-4 rounded-lg" />
          <p>Physical activity helps reduce stress hormones and boosts endorphins.</p>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-2">3. Practice Mindfulness Meditation</h2>
          <img src={Meditation} alt="Meditation" className="w-full mb-4 rounded-lg" />
          <p>Focus on the present moment to reduce stress and anxiety.</p>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-2">4. Maintain a Healthy Diet</h2>
          <img src={HealthyDiet}alt="Healthy Diet" className="w-full mb-4 rounded-lg" />
          <p>Eat a balanced diet rich in fruits, vegetables, and whole grains to support your mental and physical well-being.</p>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-2">5. Practice Time Management</h2>
          <img src={TimeManagement} alt="Time Management" className="w-full mb-4 rounded-lg" />
          <p>Set realistic goals and prioritize tasks to reduce feelings of overwhelm and stress.</p>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-2">6. Get Adequate Sleep</h2>
          <img src={Sleep} alt="Sleep" className="w-full mb-4 rounded-lg" />
          <p>Prioritize sleep and establish a regular sleep schedule to support your overall well-being.</p>
        </div>
        {/* Add more tips here */}
        {/* Example:
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-2">7. Connect with Others</h2>
          <img src="/images/connect.jpg" alt="Connect with Others" className="w-full mb-4 rounded-lg" />
          <p>Stay connected with friends and family to provide and receive support during stressful times.</p>
        </div>
        */}
      </div>
    </div>
  );
};

export default Stress;
