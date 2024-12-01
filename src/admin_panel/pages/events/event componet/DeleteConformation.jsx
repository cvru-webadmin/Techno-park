import React from 'react'

 const DeleteModal = ({ projectName, onDelete,isOpen, onCancel }) => {
    return isOpen ?  (
      <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50 z-50">
        <div className="bg-white p-10 py-8 rounded-xl shadow-3xl w-96">
          <div className="flex justify-center mb-4">
            <div className="bg-red-500 text-white p-2 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8zm0-14a6 6 0 1 0 6 6 6 6 0 0 0-6-6z"
                />
              </svg>
            </div>
          </div>
          <h3 className="text-xl font-semibold text-center mb-4">Delete Project</h3>
          <p className="text-center text-gray-600 text-md">
            You’re going to delete the <span className="font-semibold">{projectName}</span> project. Are you sure?
          </p>
          <div className="mt-6 flex justify-between">
            <button
              onClick={onCancel}
              className="bg-gray-200 text-gray-800 border font-semibold py-2.5 px-7 rounded-3xl hover:bg-gray-300"
            >
              No, Keep It
            </button>
            <button
              onClick={onDelete}
              className="bg-red-500 text-white font-semibold py-2.5 px-7 rounded-3xl hover:bg-red-600"
            >
              Yes, Delete!
            </button>
          </div>
        </div>
      </div>
    ): null;
  };
  
  export default DeleteModal;