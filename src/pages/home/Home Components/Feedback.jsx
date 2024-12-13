import React from 'react';
import { useNavigate } from 'react-router-dom';

const GoToFeedback = () => {
  const navigate = useNavigate();

  const handleFeedbackRedirect = () => {
    navigate('/feedback');
    window.scrollTo(0, 0); // Ensure this route matches your feedback form's location
  };

  return (
    <div className="w-full bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-500 py-8 px-4 sm:px-8 lg:px-16 text-white">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between">
        {/* Left Content */}
        <div className="mb-6 md:mb-0 text-center md:text-left">
          <h2 className="text-xl sm:text-2xl md:text-[1.7rem] font-semibold mb-2">
            Share Your Feedback on Techno Park
          </h2>
          <p className="text-xs sm:text-sm md:text-sm max-w-lg mx-auto md:mx-0 text-gray-100">
            We at the <span className="font-medium">School of Computer Science and Technology</span> value your input.
            Help us enhance the Techno Park experience by sharing your thoughts and suggestions.
          </p>
        </div>

        {/* Right Button */}
        <button
          onClick={handleFeedbackRedirect}
          className="
            bg-white text-blue-600 font-medium text-sm md:text-sm lg:text-base py-3 px-6 
            rounded-lg shadow-md hover:bg-gray-200 hover:shadow-lg
            transition-all duration-200 transform hover:scale-105
            focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2
          "
        >
          Give Feedback
        </button>
      </div>
    </div>
  );
};

export default GoToFeedback;