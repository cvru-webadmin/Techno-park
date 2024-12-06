import React from "react";
import illustration from "./Picsart_24-12-01_22-17-06-802[1].png";

const LeaveConfirmationModal = ({ Open, Close, Confirm }) => {
  if (!Open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
      <div className="bg-white rounded-lg shadow-lg max-w-xl overflow-hidden">
        {/* Top Section with Illustration */}
        <div className="bg-indigo-400 rounded-t-lg px-4 py-4 rounded-b-[50%] relative -left-[6rem] w-[160%] flex justify-center">
          <img
            src={illustration} // Replace with the actual illustration URL
            alt="Leave illustration"
            className="h-40 object-center"
          />
        </div>
        {/* Text Section */}
        <div className="text-center px-10 pt-5">
          <h2 className="text-md font-semibold text-gray-800 mb-2">
            Are you sure you want to leave?
          </h2>
        </div>
        {/* Button Section */}
        <div className="flex justify-around px-6 py-4">
          <button
            onClick={Close}
            className="px-7 py-2.5 text-sm font-medium text-white bg-indigo-500 rounded-2xl hover:bg-indigo-600 transition"
          >
            No, Keep It
          </button>
          <button
            onClick={Confirm}
            className="px-7 py-2.5 text-sm font-medium text-gray-800 bg-white border border-gray-300 rounded-2xl hover:bg-gray-100 transition"
          >
            Yes, leave
          </button>
        </div>
      </div>
    </div>
  );
};

export default LeaveConfirmationModal;
