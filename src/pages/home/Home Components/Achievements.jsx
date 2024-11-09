import React from 'react';
import Campus from '../../../assets/cvru_campus.jpg';

const Achievements = () => {
  return (
    <>
      <div className="flex justify-center">
        <section className="bg-white rounded-xl w-[96%] py-10 px-6">
          <h2 className="text-3xl sm:text-4xl font-semibold text-blue-600 text-center">
            Achievements
          </h2>
            <div className="flex mt-4 flex-col md:flex-row bg-gray-100 rounded-lg shadow-md h-[600px] mx-auto">
              {/* Left Side: Content */}
              <div className="p-4 px-6 md:w-96">
                {/* Main Heading */}
                <h2 className="text-2xl text-gray-900 font-semibold mb-4">Department Excellence Award (2024)</h2>

                {/* Description */}
                <p className="text-gray-700 text-sm mb-3">
                The Best Department Award 2024 honors a department that has excelled in performance, innovation, and teamwork. This award highlights the department's significant contributions and commitment to advancing the institution’s mission, setting a benchmark of excellence for others to follow.</p>
                {/* Small Image with Preview */}
                <div className="flex justify-center w-full mb-3">
                  <img
                    src={Campus} // replace with the preview image URL
                    alt="Next Achievement Preview"
                    className="w-full h-32 object-cover rounded-sm"
                  />
                </div>
                    <h3 className="text-lg font-semibold">Department Excellence Award (2023)</h3>

                {/* Explore More Button */}
                <div className='flex justify-center'>
                <button className="bg-gradient-to-r mt-4 from-blue-500 to-purple-600 text-white py-3 px-10 text-base font-semibold rounded-md shadow-md transform transition-all duration-300 ease-in-out hover:scale-105">
                  View Achievements
                </button>
                </div>
              </div>

              {/* Right Side: Large Image */}
              <div className="md:w-full">
                <img
                  src={Campus} // replace with the main image URL
                  alt="Campus or Achievement"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
        </section>
      </div>
    </>
  );
};

export default Achievements;