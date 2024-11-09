import React from 'react';
import CvruLogo from '../../../assets/LOGO_CVRUMP.png';
import './Home.css';

function HomePage() {
  return (
    <div className="overflow-hidden">
      {/* Fixed Background Image Section with Parallax Effect */}
      <div
        className="relative h-screen bg-cover bg-center bg-fixed"
        style={{ backgroundImage: "url('src/assets/cvru_campus.jpg')" }}
      ></div>

      {/* Content Section with Transparent Background */}
      <div className="bg-gray-800 bg-opacity-90 text-white py-20 px-6 sm:px-10 md:px-16 lg:px-28 text-center backdrop-blur-md">
        
        {/* First Row: Logo and Department Name */}
        <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between mb-10 lg:mb-16">
          {/* University Logo */}
          <div className="mb-6 lg:mb-0 lg:mr-12 ">
            <img
              src={CvruLogo}
              alt="University Logo"
              className="w-60 bg-white md:w-[70%] lg:w-11/12 p-3 rounded-lg shadow-xl object-scale-down mx-auto lg:mx-0 border border-gray-300"
            />
          </div>


          {/* Department Name and Sub-name */}
          <div className="text-center lg:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-wide uppercase text-blue-500">
              Techno Park
            </h1>
            <p className="text-md sm:text-lg md:text-xl lg:text-2xl font-medium text-gray-300 mt-2 lg:mt-4">
              School of Computer Science & Technology
            </p>
          </div>
        </div>

        {/* Second Row: University, Department, and Placement Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-12 text-left">
          {/* University Section */}
          <div className="bg-gray-700 p-6 sm:p-8 md:p-10 rounded-lg shadow-lg hover:shadow-2xl transition duration-300 ease-in-out">
            <h3 className="text-lg md:text-xl font-semibold mb-4 text-blue-400">About the University</h3>
            <p className="text-sm md:text-base font-light leading-relaxed text-gray-200">
              C.V. Raman University is renowned for its commitment to excellence in education, research, and innovation. Our university provides state-of-the-art facilities and a highly qualified faculty, preparing students to be future leaders.
            </p>
          </div>

          {/* Department Section */}
          <div className="bg-gray-700 p-6 sm:p-8 md:p-10 rounded-lg shadow-lg hover:shadow-2xl transition duration-300 ease-in-out">
            <h3 className="text-lg md:text-xl font-semibold mb-4 text-blue-400">About the Department</h3>
            <p className="text-sm md:text-base font-light leading-relaxed text-gray-200">
              The School of Computer Science & Technology focuses on equipping students with advanced skills in technology and software development, ensuring they are ready to meet the demands of a dynamic IT industry.
            </p>
          </div>

          {/* Tech Placements Section */}
          <div className="bg-gray-700 p-6 sm:p-8 md:p-10 rounded-lg shadow-lg hover:shadow-2xl transition duration-300 ease-in-out">
            <h3 className="text-lg md:text-xl font-semibold mb-4 text-blue-400">Tech Placements & Future</h3>
            <p className="text-sm md:text-base font-light leading-relaxed text-gray-200">
              Our graduates achieve high placement rates in top technology companies. We partner with industry leaders to offer hands-on experience and career opportunities in tech.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
