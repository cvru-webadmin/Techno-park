import React from 'react'

 const DeleteModal = ({ projectName, onDelete,isOpen, onCancel }) => {
    return isOpen ?  (
      <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50 z-50">
        <div className="bg-white p-10 py-8 rounded-xl shadow-3xl w-96">
          <div className="flex justify-center mb-4">
            <div className="bg-red-100 text-white p-2 rounded-full">
            <svg className="h-8 w-8 text-red-500" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"><path fill="currentColor" d="M4.47 21h15.06c1.54 0 2.5-1.67 1.73-3L13.73 4.99c-.77-1.33-2.69-1.33-3.46 0L2.74 18c-.77 1.33.19 3 1.73 3M12 14c-.55 0-1-.45-1-1v-2c0-.55.45-1 1-1s1 .45 1 1v2c0 .55-.45 1-1 1m1 4h-2v-2h2z"></path></svg>
            </div>
          </div>
          <h3 className="text-xl font-semibold text-center mb-4 text-gray-700 tracking-wide">Delete Event</h3>
          <p className="text-center text-gray-600 text-md">
            You’re going to delete the <span>{`"${projectName}"`}</span> event. Are you sure?
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