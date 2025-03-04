import React, { useState } from 'react';
import { jsPDF } from 'jspdf';
import 'jspdf-autotable';

const Recommendations = () => {
  const [formData, setFormData] = useState({
    counselorName: 'Counselor Name',
    centerName: 'Peace Counseling Center',
    address: 'Pahalagama,Gampaha,Sri Lanka',
    phone: '077 144 2279',
    email: 'peacecounseling67@gmail.com',
    date: 'June 4, 2024',
    therapistName: '[Therapist Name]',
    recommendationText: `I am writing to highly recommend [Therapist Name] for their outstanding work 
    in the field of mental health. [Therapist Name] has been an invaluable 
    asset to our team, consistently demonstrating compassion, expertise, and 
    professionalism in their interactions with clients.

    During their time at our center, [Therapist Name] has shown exceptional 
    skill in developing treatment plans and providing therapeutic support. 
    Their ability to connect with clients and provide tailored care has made 
    a significant positive impact.

    I am confident that [Therapist Name] will continue to excel in their career 
    and make meaningful contributions to any organization they join. It is 
    with great enthusiasm that I recommend them for any opportunities that 
    may come their way.`,
  });

  const [isEditing, setIsEditing] = useState(false);
  const [editedData, setEditedData] = useState(formData);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedData({ ...editedData, [name]: value });
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleCancel = () => {
    setEditedData(formData);
    setIsEditing(false);
  };

  const handleSave = () => {
    setFormData(editedData);
    setIsEditing(false);
  };

  const handlePrint = () => {
    const doc = new jsPDF();

    doc.setFontSize(12);
    doc.text(editedData.counselorName, 20, 30);
    doc.text(editedData.centerName, 20, 40);
    doc.text(editedData.address, 20, 50);
    doc.text(editedData.cityStateZip, 20, 60);
    doc.text(`Phone: ${editedData.phone}`, 20, 70);
    doc.text(`Email: ${editedData.email}`, 20, 80);

    doc.text(`Date: ${editedData.date}`, 140, 30);

    doc.text('To Whom It May Concern,', 20, 100);
    doc.text(editedData.recommendationText, 20, 110, { maxWidth: 170 });

    doc.text('Sincerely,', 20, 170);
    doc.text(editedData.counselorName, 20, 180);
    doc.text('Title', 20, 190);
    doc.text(editedData.centerName, 20, 200);

    doc.save('Recommendation_Letter.pdf');
  };

  return (
    <div className="container mx-auto p-4">
      <div className="bg-white p-8 rounded-lg shadow-lg">
        {isEditing ? (
          <>
            <h1 className="text-2xl font-bold mb-4">Edit Recommendation Letter</h1>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Counselor Name</label>
              <input
                type="text"
                name="counselorName"
                value={editedData.counselorName}
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Counseling Center</label>
              <input
                type="text"
                name="centerName"
                value={editedData.centerName}
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Address</label>
              <input
                type="text"
                name="address"
                value={editedData.address}
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">City, State, ZIP</label>
              <input
                type="text"
                name="cityStateZip"
                value={editedData.cityStateZip}
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Phone</label>
              <input
                type="text"
                name="phone"
                value={editedData.phone}
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Email</label>
              <input
                type="text"
                name="email"
                value={editedData.email}
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Date</label>
              <input
                type="text"
                name="date"
                value={editedData.date}
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Recommendation Text</label>
              <textarea
                name="recommendationText"
                value={editedData.recommendationText}
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
                rows="10"
              />
            </div>
            <button onClick={handleSave} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Save</button>
            <button onClick={handleCancel} className="mt-4 ml-4 px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600">Cancel</button>
          </>
        ) : (
          <>
            <h1 className="text-2xl font-bold mb-4">Recommendation Letter</h1>
            <p className="mb-2">{formData.counselorName}</p>
            <p className="mb-2">{formData.centerName}</p>
            <p className="mb-2">{formData.address}</p>
            <p className="mb-2">{formData.cityStateZip}</p>
            <p className="mb-2">Phone: {formData.phone}</p>
            <p className="mb-8">Email: {formData.email}</p>

            <p className="mb-8">Date: {formData.date}</p>

            <p className="mb-4">To Whom It May Concern,</p>
            <p className="mb-4 whitespace-pre-line">{formData.recommendationText}</p>

            <p className="mb-4">Sincerely,</p>
            <p className="mb-2">{formData.counselorName}</p>
            <p className="mb-2">Title</p>
            <p className="mb-2">{formData.centerName}</p>

            <button onClick={handleEdit} className="mt-4 px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600">Edit</button>
            <button onClick={handlePrint} className="mt-4 ml-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Download PDF</button>
          </>
        )}
      </div>
    </div>
  );
};

export default Recommendations;
