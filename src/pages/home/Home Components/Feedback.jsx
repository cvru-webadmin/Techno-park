import React from 'react';
import { useNavigate } from 'react-router-dom';

const GoToFeedback = () => {
  const navigate = useNavigate();

  const handleFeedbackRedirect = () => {
    navigate('/feedback'); // Ensure this route matches your feedback form's location
  };

  return (
    <div className="w-full bg-gradient-to-r from-blue-600 to-teal-500 py-8 px-4 sm:px-8 lg:px-16 text-white">
      <div className=" mx-auto flex flex-col md:flex-row items-center justify-between">
        {/* Left Content */}
        <div className="mb-6 md:mb-0 text-center md:text-left">
          <h2 className="text-2xl md:text-3xl font-semibold mb-2">
            Share Your Feedback on Techno Park
          </h2>
          <p className="text-sm md:text-base max-w-4xl text-left text-gray-100">
            We at the <span className="font-medium">School of Computer Science and Technology</span> value your input.
            Help us enhance the Techno Park experience by sharing your thoughts and suggestions.
          </p>
        </div>

        {/* Right Button */}
        <button
         onClick={handleFeedbackRedirect}
         className="
           bg-blue-600 text-white font-medium text-sm md:text-base py-3 px-6 
           rounded-lg shadow-md hover:bg-blue-700 hover:shadow-lg
           transition-all duration-200 transform hover:scale-105
           focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2
         "
       >
         Go to Feedback Form
       </button>
       
      

      </div>
    </div>
  );
};

export default GoToFeedback;
