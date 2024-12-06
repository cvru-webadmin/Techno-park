import React from 'react';
import LogoutIllustration from "./Logout illustration.png"

const LogoutConfirmationModal = ({ isOpen, onClose, onConfirm }) => {
  if (!isOpen) return null; // Don't render the modal if it's not open

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center z-50 transition-opacity duration-300 ease-in-out">
      <div className="bg-white rounded-lg p-6 sm:w-1/3 shadow-xl transform transition-all duration-300 ease-in-out scale-95 hover:scale-100">
        <img src={LogoutIllustration} alt="logoutIllustration" />
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-4">Comeback Soon!</h2>
        <p className='text-gray-600 text-center mb-4 text-sm xl:text-base '>Are you sure you want to log out?</p>
        <div className="flex justify-center gap-8 space-x-6 text-sm xl:text-base">
          <button
            onClick={onClose}
            className="bg-gray-100 text-gray-800 py-2.5 px-5 border rounded-2xl hover:bg-gray-200 transition-all duration-200"
          >
            No, keep login
          </button>
          <button
            onClick={() => {
              onConfirm(); // Call the onConfirm function when confirmed
              onClose(); // Close the modal after confirmation
            }}
            className="bg-red-600 text-white py-2.5 px-5 rounded-2xl hover:bg-red-700 transition-all duration-200 flex items-center space-x-2"
          >
            {/* Logout SVG Icon */}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-5 h-5 text-white">
              <rect width="24" height="24" fill="none" />
              <path fill="currentColor" d="M11.25 19a.75.75 0 0 1 .75-.75h6a.25.25 0 0 0 .25-.25V6a.25.25 0 0 0-.25-.25h-6a.75.75 0 0 1 0-1.5h6c.966 0 1.75.784 1.75 1.75v12A1.75 1.75 0 0 1 18 19.75h-6a.75.75 0 0 1-.75-.75" />
              <path fill="currentColor" d="M15.612 13.115a1 1 0 0 1-1 1H9.756q-.035.533-.086 1.066l-.03.305a.718.718 0 0 1-1.025.578a16.8 16.8 0 0 1-4.885-3.539l-.03-.031a.72.72 0 0 1 0-.998l.03-.031a16.8 16.8 0 0 1 4.885-3.539a.718.718 0 0 1 1.025.578l.03.305q.051.532.086 1.066h4.856a1 1 0 0 1 1 1z" />
            </svg>
            <span>Yes, Log Out</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default LogoutConfirmationModal;
