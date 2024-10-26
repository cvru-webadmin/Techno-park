import React from 'react';

const ExploreCampus = () => {
  return (
    <div className="bg-gray-900 text-white py-10 mt-4 px-4">
      <h2 className="text-3xl font-bold text-center mb-6 underline">Explore Campus</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
        <div className="bg-gray-800 p-4 rounded-lg flex flex-col items-center">
          <div className="w-full h-40 bg-gray-700 rounded-md mb-4 flex items-center justify-center">
            {/* Placeholder for Image */}
            <img src="https://via.placeholder.com/150" alt="Campus 1" className="w-full h-full object-cover rounded-md" />
          </div>
          <p className="text-center">Description</p>
        </div>
        
        <div className="bg-gray-800 p-4 rounded-lg flex flex-col items-center">
          <div className="w-full h-40 bg-gray-700 rounded-md mb-4 flex items-center justify-center">
            {/* Placeholder for Image */}
            <img src="https://via.placeholder.com/150" alt="Campus 2" className="w-full h-full object-cover rounded-md" />
          </div>
          <p className="text-center">Description</p>
        </div>
        
        <div className="bg-gray-800 p-4 rounded-lg flex flex-col items-center">
          <div className="w-full h-40 bg-gray-700 rounded-md mb-4 flex items-center justify-center">
            {/* Placeholder for Image */}
            <img src="https://via.placeholder.com/150" alt="Campus 3" className="w-full h-full object-cover rounded-md" />
          </div>
          <p className="text-center">Description</p>
        </div>
      </div>
      
      <div className="flex justify-center mt-8">
        <button className="bg-white text-gray-800 font-semibold px-6 py-2 rounded-full hover:bg-gray-300 transition duration-300">
          Explore More
        </button>
      </div>
    </div>
  );
};

export default ExploreCampus;
