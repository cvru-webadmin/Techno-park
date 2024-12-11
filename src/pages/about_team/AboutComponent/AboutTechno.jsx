import React from "react"; 
import { NavLink } from "react-router-dom";
import "./About.css";
import TechAbout from "../../../assets/images/techAbout.jpeg";
import FrontImage from "../../../assets/images/Front.jpeg";
import ActivityImage from "../../../assets/images/Skitt.png" 
import dinMamaActivityImage from "../../../assets/images/DINMAMA_activete.jpg" 

const AboutSchool = () => {
  return (
    <section className="flex flex-col lg:flex-row items-center justify-between lg:gap-8 gap-3 px-6 lg:py-12 py-7 bg-white">
   {/* Left Side Section: Images */}
   <h2 className="about-title font-semibold text-center lg:hidden block -mt-4">
        About Our Department
      </h2>
   <div className="flex flex-col md:flex-row w-full lg:w-1/2 gap-6">
      {/* Single Large Image */}
      <div className="relative h-64 md:h-auto w-full md:w-[50%] rounded-lg overflow-hidden shadow-lg">
        <img
          src={FrontImage}
          alt="Department Entrance"
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute bottom-4 left-4 bg-white bg-opacity-80 px-3 py-1 rounded-lg shadow-md">
          <span className="text-sm font-semibold text-gray-800">Department Building</span>
        </div>
      </div>
    
      {/* Two Stacked Images */}
      <div className="flex flex-col gap-6 w-full md:w-[50%]">
        {/* First Image */}
        <div className="relative h-64 md:h-72 rounded-lg overflow-hidden shadow-lg">
          <img
            src={TechAbout}
            alt="Lab Activities"
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute bottom-4 left-4 bg-white bg-opacity-80 px-3 py-1 rounded-lg shadow-md">
            <span className="text-sm font-semibold text-gray-800">Modern Labs</span>
          </div>
        </div>
    
        {/* Second Row: Two Smaller Images */}
        
          {/* Highlight Card */}
          <div className="relative h-28 group flex-col text-white flex items-center justify-center rounded-lg shadow-2xl hover:shadow-xl transition-all duration-300"
          style={{
            height: '100px',
            width: '100%',
            background: 'linear-gradient(to right,  #3b82f6, #9333ea)',
          }}
          >
          <span className="text-center text-3xl font-bold duration-500 transition-all text-shadow-lg ">6+</span> 
          <p className="text-center text-xl font-bold duration-500 transition-all text-shadow-lg ">Years of Experience</p>
          </div> 
      </div>
    </div>
     {/* Right Side Section: About the Department */}
    <div className="w-full lg:w-[45%]">
      {/* Main Heading */}
      <h2 className="about-title lg:block hidden font-semibold -mt-4">
        About Our Department
      </h2>
    
      {/* Introduction Paragraph */}
      <p className="about-description mt-4 lg:mt-0">
        Techno Park School of Computer Science and Information Technology, affiliated with
        <strong className="text-indigo-600"> Dr. C.V. Raman University</strong> and ISO 9001:2015 certified,
        is a premier institution offering programs like BCA, PGDCA, DCA, B.Sc. (IT), M.Sc. (IT), and MCA.
        Our department is committed to delivering <strong>excellence in education</strong> through
        innovative teaching, cutting-edge infrastructure, and industry collaborations.
      </p>
    
      {/* Trust and Achievements Section */}
        <p className="about-description">
          Equipped with <strong>modern labs</strong>, a digital library, and a focus on
          <strong> outcome-based learning</strong>, our students are prepared for
          <strong className="text-indigo-600"> dynamic tech careers</strong>. We collaborate with
          top-tier companies like TCS, Infosys, and Wipro to provide internships, workshops, and live projects, ensuring
          outstanding <strong>placement opportunities</strong>.
        </p>
    
      {/* Call-to-Action */}
      <div className="w-full lg:w-1/2 flex mt-4 justify-center lg:justify-start">
          <NavLink to="/contact"
            className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-2 px-6 sm:py-3 sm:px-10 text-base sm:text-lg font-semibold rounded-md shadow-md hover:scale-105 transition-transform duration-300 ease-in-out"
           >
          Contact Us
          </NavLink>
          </div>
    </div>

    </section>
  );
};

export default AboutSchool;


// <div className="flex gap-6">
//           {/* First Small Image */}
//           <div className="relative h-28 md:h-36 w-1/2 rounded-lg overflow-hidden shadow-lg">
//             <img
//               src={ActivityImage}
//               alt="Student Activities"
//               className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
//             />
//             <div className="absolute bottom-4 left-4 bg-white bg-opacity-80 px-3 py-1 rounded-lg shadow-md">
//               <span className="text-sm font-semibold text-gray-800">Student Activities</span>
//             </div>
//           </div>
    
//           {/* Second Small Image */}
//           <div className="relative h-28 md:h-36 w-1/2 rounded-lg overflow-hidden shadow-lg">
//             <img
//               src={dinMamaActivityImage}
//               alt="Department Events"
//               className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
//             />
//             <div className="absolute bottom-4 left-4 bg-white bg-opacity-80 px-3 py-1 rounded-lg shadow-md">
//               <span className="text-sm font-semibold text-gray-800">Department Events</span>
//             </div>
//           </div>
//         </div>