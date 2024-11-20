import React from 'react'

export default function Welocome_model({isOpen,isClose,isTime}) {
  return (
    isOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-800 bg-opacity-30">
          <div className="bg-white rounded-lg shadow-lg p-6 py-4 relative">
            {/* Modal Header */}
            <div className="flex justify-end">
              <button onClick={isClose} className="text-gray-400 hover:text-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Modal Body with Image */}
            <div className="flex flex-col items-center mb-4">
              <span className="text-3xl font-semibold text-amber-400 mb-2">Good {isTime}</span>
              <h2 className="text-2xl font-semibold text-blue-700 mb-2">Welcome Back, Admin..👋</h2>
              <p className="text-gray-600 text-base capitalize">
              The code is ready for you to debug the challenges.
              </p>
            </div>

            <div class="h-1 absolute rounded-xl left-0 bottom-0 w-full  bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500"></div>
          </div>
        </div>
      )
  )
}
