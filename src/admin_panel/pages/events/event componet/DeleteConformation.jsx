import React from "react";
import illustration from "./Picsart_24-12-03_14-00-47-142.png"; // Replace with your actual image for deletion.

const DeleteConfirmationModal = ({ Open, Close, Confirm , projectName}) => {
  if (!Open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div className="bg-white rounded-lg shadow-lg max-w-md w-full overflow-hidden">
        {/* Top Section with Illustration */}
        <div className="bg-red-400 rounded-t-lg px-4 py-8 flex justify-center relative">
          <img
            src={illustration}
            alt="Delete illustration"
            className="h-40 object-center"
            onError={(e) => {
              e.target.src = ""; // Fallback logic if illustration fails to load
            }}
          />
        </div>

        {/* Text Section */}
        <div className="text-center px-10 pt-5">
          <h2
            id="modal-title"
            className="text-lg font-semibold text-gray-800 mb-2"
          >
            You’re going to delete the <span>{`"${projectName}"`}</span> event. Are you sure?
          </h2>
          <p className="text-sm text-gray-600">
            This action cannot be reversible.
          </p>
        </div>

        {/* Button Section */}
        <div className="flex justify-around px-6 py-4">
          <button
            onClick={Close}
            className="px-10 py-2.5 tracking-wide text-sm font-medium text-gray-800 border bg-gray-100 rounded-2xl hover:bg-gray-200 transition focus:outline-none focus:ring-2 focus:ring-gray-400"
            aria-label="Cancel delete action"
          >
            No, Keep It
          </button>
          <button
            onClick={Confirm}
            className="px-10 py-2.5 tracking-wide text-sm font-medium text-white bg-red-500 rounded-2xl hover:bg-red-600 transition focus:outline-none focus:ring-2 focus:ring-red-400"
            aria-label="Confirm delete action"
          >
            Yes, Delete!
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteConfirmationModal;
