import React from 'react';
import { NavLink } from 'react-router-dom';
import Award from '../../../assets/acsilentes award.png';
import Award2023 from '../../../assets/Award2023(1).jpg'

const Achievements = () => {
  return (
    <>
      <div className="justify-center xl:flex hidden">
        <section className="bg-white rounded-xl w-[96%] py-10 px-6">
          <h2 className="text-3xl sm:text-4xl font-semibold text-blue-600 text-center">
            Achievements
          </h2>
            <div className="flex mt-7 flex-col md:flex-row bg-gray-100 rounded-lg shadow-md h-[600px] mx-auto">
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
                    src={Award2023} // replace with the preview image URL
                    alt="Next Achievement Preview"
                    className="w-full h-32 object-cover object-top rounded-sm"
                  />
                </div>
                    <h3 className="text-lg font-semibold">Department Excellence Award (2023)</h3>

                {/* Explore More Button */}
                <div className='flex justify-center'>
                <NavLink to="/achievements" onClick={()=>{("/achievements");useEffect(() => {window.scrollTo(0, 0);},[]);}} className="bg-gradient-to-r from-blue-500 to-purple-600 text-white mt-4 py-3 px-10 text-base font-semibold rounded-md shadow-md transform transition-all duration-300 ease-in-out hover:scale-105">
                  View Achievements
                </NavLink>
                </div>
              </div>

              {/* Right Side: Large Image */}
              <div className="md:w-full">
                <img
                  src={Award} // replace with the main image URL
                  alt="Campus or Achievement"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
        </section>
      </div>

      <div className="flex xl:hidden justify-center px-4 sm:px-8">
      <section className="bg-white rounded-xl w-full max-w-7xl py-10 px-6">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-blue-600 text-center">
          Achievements
        </h2>

        {/* Achievements Section */}
        <div className="flex flex-col md:flex-row bg-gray-100 rounded-lg shadow-md mt-7">
          {/* Left Side: Content */}
          <div className="md:hidden w-full">
            <img
              src={Award}
              alt="Campus or Achievement"
              className="w-full h-64 sm:h-80 md:h-full object-cover rounded-b-lg md:rounded-none md:rounded-r-lg"
            />
          </div>
          <div className="p-4 px-0 md:px-4 sm:p-6 md:w-1/2">
            <h2 className="text-lg sm:text-xl lg:text-2xl text-gray-900 font-semibold mb-4">
              Department Excellence Award (2024)
            </h2>
            <p className="text-gray-700 text-sm sm:text-base mb-3">
              The Best Department Award 2024 honors a department that has excelled in performance, innovation, and teamwork. This award highlights the department's significant contributions and commitment to advancing the institution’s mission, setting a benchmark of excellence for others to follow.
            </p>
            <div className="flex justify-center sm:justify-start w-full mb-4">
              <img
                src={Award2023}
                alt="Next Achievement Preview"
                className="w-full sm:w-64 h-32 object-cover rounded-sm"
              />
            </div>
            <h3 className="text-base sm:text-lg font-semibold">
              Department Excellence Award (2023)
            </h3>
            <div className="flex justify-center sm:justify-start">
              <NavLink to="/achievements" onClick={()=>{("/achievements");useEffect(() => {window.scrollTo(0, 0);},[]);}} className="bg-gradient-to-r from-blue-500 to-purple-600 text-white mt-4 py-2 px-6 sm:py-3 sm:px-10 text-sm sm:text-base font-semibold rounded-md shadow-md transform transition-all duration-300 ease-in-out hover:scale-105">
                View Achievements
              </NavLink>
            </div>
          </div>

          {/* Right Side: Large Image */}
          <div className="hidden md:block md:w-1/2">
            <img
              src={Award}
              alt="Campus or Achievement"
              className="w-full h-64 sm:h-80 md:h-full object-cover rounded-b-lg md:rounded-none md:rounded-r-lg"
            />
          </div>
        </div>
      </section>
    </div>
    </>
  );
};

export default Achievements;