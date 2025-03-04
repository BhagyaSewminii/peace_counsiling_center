import React from 'react';

// Importing blog post images
import stressImage from '../Assests/stressUNI.jpg';
import depressionImage from '../Assests/DepressionS.jpg';
import resilienceImage from '../Assests/Resilient-Tree.jpeg';

function Blog() {
  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold mb-8 text-center">Our Blog</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <img src={stressImage} alt="Stress" className="w-full h-48 object-cover object-center" />
          <div className="p-6">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">10 Tips for Managing Stress</h2>
            <p className="text-gray-700">
              Stress is a common problem for many people, but there are ways to manage it effectively. In this blog post, we'll explore 10 tips to help you reduce stress and improve your overall well-being.
            </p>
            <a href="Stress" className="text-blue-600 hover:underline mt-4 inline-block">Read More</a>
          </div>
        </div>

        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <img src={depressionImage} alt="Depression" className="w-full h-48 object-cover object-center" />
          <div className="p-6">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">Understanding Depression: Symptoms and Treatment</h2>
            <p className="text-gray-700">
              Depression is a serious mental health condition that affects millions of people worldwide. In this blog post, we'll discuss the symptoms of depression and explore various treatment options.
            </p>
            <a href="#" className="text-blue-600 hover:underline mt-4 inline-block">Read More</a>
          </div>
        </div>

        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <img src={resilienceImage} alt="Resilience" className="w-full h-48 object-cover object-center" />
          <div className="p-6">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">Building Resilience: How to Bounce Back from Adversity</h2>
            <p className="text-gray-700">
              Resilience is the ability to adapt and bounce back from life's challenges. In this blog post, we'll share practical tips and strategies to help you build resilience and thrive in the face of adversity.
            </p>
            <a href="#" className="text-blue-600 hover:underline mt-4 inline-block">Read More</a>
          </div>
        </div>

        {/* Add more blog posts as needed */}
      </div>
    </div>
  );
}

export default Blog;
