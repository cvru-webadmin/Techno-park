import React from 'react';

const MessageReply = ({ onOpen ,onClose ,MessageDetails }) => {
    if(!onOpen) return null;
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center px-4 z-30">
      <div className="max-w-lg w-full bg-white rounded-lg shadow-lg p-6">
        <div className="text-center mb-4">
            <div className='flex justify-center'>
            <img src="src/pages/contact us/componet/thank-you-card.avif" className='h-40' alt="" />
            </div>
          <h2 className="text-xl font-semibold text-gray-800">Thank You for Reaching Out!</h2>
          <p className="text-gray-600 text-sm mt-2">We have received your inquiry and will get back to you as soon as possible.</p>
        </div>

        <div className="bg-gray-100 p-4 rounded-md">
          <p className="text-gray-700 font-medium">Message Details:</p>
          <div className="mt-2">
            <p className="text-sm text-gray-600 capitalize pb-1"><strong className='pr-2'>Name</strong> {MessageDetails.firstName+" "+MessageDetails.lastName}</p>
            <p className="text-sm text-gray-600 capitalize pb-1"><strong className='pr-2'>Subject</strong> {MessageDetails.subject}</p>
            <p className="text-sm text-gray-600 capitalize pb-1"><strong className='pr-2'>Message</strong> {MessageDetails.message}</p>
          </div>
        </div>

        <div className="mt-6 text-center">
          <p className="text-gray-600 text-sm">Our team will respond shortly. In the meantime, feel free to explore our website for more information.</p>
          <div className="mt-4">
            <button onClick={onClose} className="bg-blue-800 text-white py-2 px-16 rounded-md hover:bg-blue-600 focus:outline-none">
              Visit Website
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessageReply;
