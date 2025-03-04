import React, { useState } from 'react';
import GoogleMap from '../Components/Map/GoogleMap'; // Corrected the path to the GoogleMap component
import GetInTouchImage from '../Assests/ai (1).jpg'; // Import the suitable image for "Get in Touch"
import '@fortawesome/fontawesome-free/css/all.css';

const Contact = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (input.trim() === '') return;
  
    // Add user message to chat
    setMessages([...messages, { type: 'user', text: input }]);
    setInput('');
  
    // Simulate a bot response
    setTimeout(() => {
      setMessages((prevMessages) => [
        ...prevMessages,
        { type: 'bot', text: "I'm here to support you. How can I assist you today?" }
      ]);
    }, 1000);
  };

  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-6">Contact Us</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ">
        <div className="relative bg-white shadow-lg rounded-lg overflow-hidden">
          <img src={GetInTouchImage} alt="Get in Touch" className="w-full h-auto blur" />
          <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white p-6">
            <h2 className=" leading-loose text-xl font-semibold mb-4 font-serif">Get in Touch</h2>
            <p className=" leading-loose text-white-800 font-serif mb-4 font-semibold">Have questions or want to schedule an appointment? Contact us today!</p>
            <p className=" leading-loose text-white-700 font-serif">Pahalagama, Gampaha, Sri Lanka</p>
            <p className="leading-loose text-white-700 font-serif">Phone: 077 144 2279</p>
            <p className="leading-loose text-white-700 font-serif">Email: peacecounseling67@gmail.com</p>
            <div className="flex mt-4">
              <a href="https://www.facebook.com/profile.php?id=61560383556655&mibextid=ZbWKwL" className="text-white-700 hover:text-blue-400 mr-4">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="#" className="text-white-700 hover:text-blue-400 mr-4">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-white-700 hover:text-blue-400 mr-4">
                <i className="fab fa-instagram"></i>
              </a>
                <a href="" className="text-gray-300 hover:text-blue-400">
              <i className="fab fa-whatsapp"></i>
            </a>
            </div>
          </div>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Chat with Us</h2>
          <div className="chat-window flex flex-col h-80 border rounded-lg p-4 overflow-y-auto">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex mb-4 ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`rounded-lg p-4 ${
                    message.type === 'user' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'
                  }`}
                >
                  {message.text}
                </div>
              </div>
            ))}
          </div>
          <form onSubmit={handleSendMessage} className="mt-4 flex">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-400"
              placeholder="Type your message..."
            />
            <button
              type="submit"
              className="bg-blue-500 text-white px-6 py-2 rounded-lg ml-2 hover:bg-blue-600 transition duration-300 ease-in-out"
            >
              Send
            </button>
          </form>
        </div>
      </div>

      {/* Google Map Section */}
      <div className="mt-12 bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-4">Visit Us</h2>
        <GoogleMap />
      </div>
    </div>
  );
};

export default Contact;
