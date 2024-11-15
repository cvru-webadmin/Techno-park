import React, { useState } from 'react';
import {getDatabase,ref,set} from 'firebase/database'
import { app } from '../../../Firebase';

const FeedbackForm = () => {

  //firebase database import -----
  const db=getDatabase(app);

  //end database

  const [formData, setFormData] = useState({ name: '', feedback: '', feedbackBy: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    set(ref(db,"feedback/fedback2"),{
      Name:formData.name,
      feedback:formData.feedback,
      feedbackBy:formData.feedbackBy
    })
    // Here, you could send `formData` to your server or API if needed
    setIsSubmitted(true); // Show thank you message
    setFormData({ name: '', feedback: '', feedbackBy: '' }); // Reset form fields
  };

  const handleClosePopup = () => {
    setIsSubmitted(false);
  };

  return (
    <div className="max-w-lg my-10 mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-center">We Appreciate Your Feedback</h2>
      
      <form onSubmit={handleSubmit} className="space-y-4 h-[60dvh] flex flex-col justify-evenly">
        {/* Name Field */}
        <div>
          <label className="block text-gray-700">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full mt-1 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your name"
          />
        </div>

        {/* Feedback Field */}
        <div>
          <label className="block text-gray-700">Feedback</label>
          <textarea
            name="feedback"
            value={formData.feedback}
            onChange={handleChange}
            required
            className="w-full mt-1 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Share your thoughts..."
          />
        </div>

        {/* Feedback By Field */}
        <div>
          <label className="block text-gray-700">Feedback By</label>
          <input
            type="text"
            name="feedbackBy"
            value={formData.feedbackBy}
            onChange={handleChange}
            required
            className="w-full mt-1 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Your role or position (e.g., Student, Teacher)"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition duration-200"
        >
          Submit Feedback
        </button>
      </form>

      {/* Thank You Popup */}
      {isSubmitted && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center max-w-xs">
            <h3 className="text-xl font-bold text-blue-600 mb-2">Thank You!</h3>
            <p className="text-gray-700 mb-4">We appreciate your feedback and will use it to improve our service.</p>
            <button
              onClick={handleClosePopup}
              className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-200"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default FeedbackForm;
