import React, { useRef } from "react";
import CvruLogo from "../../../assets/LOGO_CVRUMP.png";
import "./Home.css";
import About from "./About";
import HeroImage from "../../../assets/cvru_campus.jpg"

function HomePage() {
  const myRef = useRef(null);
  const scrollToRef = () => {
    if (myRef.current) {
      myRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="overflow-hidden z-10 relative">
      {/* Fixed Background Image Section with Parallax Effect */}
      <div className="relative h-screen bg-cover bg-center flex justify-center items-center bg-fixed parallax-bg ">
        {/* Overlay Content */}
        <div className="text-center leading-8 text-white flex flex-col items-center gap-6 max-w-4xl px-5">
          <h1
            className="capitalize text-3xl md:text-6xl font-extrabold tracking-wide"
            style={{ textShadow: "3px 3px 5px rgba(0, 0, 0, 0.6)" }}
          >
            Techno Park
          </h1>
          <h2 className="uppercase typing text-[var(--Gold)] text-lg hidden md:block md:text-md xl:text-xl font-semibold bg-black/30 px-5 py-2 tracking-wider">
            School of Computer Science and Information Technology
          </h2>
          <h2 className="uppercase text-[var(--Gold)] text-xs leading-relaxed block md:hidden md:text-xl font-semibold bg-black/30 px-5 py-2 tracking-wider">
            School of Computer Science and Information Technology
          </h2>
          <button
            onClick={scrollToRef}
            title="Scroll for more information"
            className="capitalize border md:flex items-center gap-2 text-sm hidden md:text-base lg:text-lg border-gray-300/30 bg-gray-800/30 text-gray-200 px-4 md:px-6 py-2 rounded-md hover:text-[var(--Gold)] hover:bg-[#212121]/50 hover:scale-105 transition-transform duration-300 ease-in-out shadow-md hover:shadow-lg"
          >
            Explore More
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 md:h-5 lg:h-6 animate-bounce"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <rect width="24" height="24" fill="none" />
              <g fill="none" fillRule="evenodd">
                <path d="M24 0v24H0V0z" />
                <path
                  fill="currentColor"
                  d="M13.06 16.06a1.5 1.5 0 0 1-2.12 0l-5.658-5.656a1.5 1.5 0 1 1 2.122-2.121L12 12.879l4.596-4.596a1.5 1.5 0 0 1 2.122 2.12l-5.657 5.658Z"
                />
              </g>
            </svg>
          </button>
        </div>
      </div>

      {/* Content Section with Transparent Background */}
      <div ref={myRef} className="h-14 bg-[#012970]"></div>
      <About />
    </div>
  );
}

// <div  id='secondSection' className="bg-gray-800 text-white py-20 px-6 sm:px-10 md:px-16 lg:px-28 text-center backdrop-blur-md">

//   {/* First Row: Logo and Department Name */}
//   <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between mb-10 lg:mb-16">
//     {/* University Logo */}
//     <div  className="mb-6 lg:mb-0 lg:mr-12 ">
//       <img
//         src={CvruLogo}
//         alt="University Logo"
//         className="w-60 bg-white md:w-[70%] lg:w-11/12 p-3 rounded-lg shadow-xl object-scale-down mx-auto lg:mx-0 border border-gray-300"
//       />
//     </div>

//     {/* Department Name and Sub-name */}
//     <div className="text-center lg:text-left">
//       <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-extrabold tracking-wide uppercase text-blue-500">
//         Techno Park
//       </h1>
//       <p className="text-md sm:text-lg md:text-xl lg:text-2xl font-medium text-gray-300 mt-2 lg:mt-4">
//         School of Computer Science & Technology
//       </p>
//     </div>
//   </div>

//   {/* Second Row: University, Department, and Placement Information */}
//   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-12 text-left">
//     {/* University Section */}
//     <div className="bg-gray-700 p-6 sm:p-8 md:p-10 rounded-lg shadow-lg hover:shadow-2xl transition duration-300 ease-in-out">
//       <h3 className="text-lg md:text-xl font-semibold mb-4 text-blue-400">About the University</h3>
//       <p className="text-sm md:text-base font-light leading-relaxed text-gray-200">
//         C.V. Raman University is renowned for its commitment to excellence in education, research, and innovation. Our university provides state-of-the-art facilities and a highly qualified faculty, preparing students to be future leaders.
//       </p>
//     </div>

//     {/* Department Section */}
//     <div className="bg-gray-700 p-6 sm:p-8 md:p-10 rounded-lg shadow-lg hover:shadow-2xl transition duration-300 ease-in-out">
//       <h3 className="text-lg md:text-xl font-semibold mb-4 text-blue-400">About the Department</h3>
//       <p className="text-sm md:text-base font-light leading-relaxed text-gray-200">
//         The School of Computer Science & Technology focuses on equipping students with advanced skills in technology and software development, ensuring they are ready to meet the demands of a dynamic IT industry.
//       </p>
//     </div>

//     {/* Tech Placements Section */}
//     <div className="bg-gray-700 p-6 sm:p-8 md:p-10 rounded-lg shadow-lg hover:shadow-2xl transition duration-300 ease-in-out">
//       <h3 className="text-lg md:text-xl font-semibold mb-4 text-blue-400">Tech Placements & Future</h3>
//       <p className="text-sm md:text-base font-light leading-relaxed text-gray-200">
//         Our graduates achieve high placement rates in top technology companies. We partner with industry leaders to offer hands-on experience and career opportunities in tech.
//       </p>
//     </div>
//   </div>
// </div>
export default HomePage;
