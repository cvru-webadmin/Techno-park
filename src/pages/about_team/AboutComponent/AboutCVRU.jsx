import React from "react";
import "./About.css";
import { NavLink } from "react-router-dom";
import Campus from "../../../assets/cvru_campus.jpg"

const AboutUniversity = () => {
  return (
      <div className="w-full bg-gray-50 rounded-lg p-8 flex flex-col lg:flex-row lg:justify-evenly">
        <h2 className="about-title font-semibold text-center lg:hidden block">
            About Our University
          </h2>
         <div className="flex items-center lg:hidden lg:w-[45%] lg:mt-0 mt-1 w-full justify-center">
          <img
            src={Campus} // Replace with your actual image path
            alt="University"
            className="w-full lg:h-4/5 h-80 lg:ml-[2.5%] object-cover rounded-2xl shadow-xl"
          />
        </div>
        {/* Left Part */}
        <div className="lg:w-[50%] lg:mt-0 mt-4 w-full mr-[2.5%]">
          <h2 className="about-title font-semibold lg:block hidden">
            About Our University
          </h2>
          <p className="about-description">
              Dr. C.V. Raman University (Khandwa), the fifth under the AISECT Group of Universities, is located in Madhya Pradesh's Nimar region. 
              The university offers exceptional infrastructure, skilled faculty, and industry-focused education, blending academic knowledge with 
              practical skills. Through its AISECT-NSDC partnership, it provides NSDC-certified courses, enhancing employability, while its online 
              placement platform, <strong>Rojgar Mantra</strong>, connects students to top employers.
            </p>
            <p className="about-description">
              CVRU Khandwa focuses on holistic development, offering modern facilities, comprehensive programs, and opportunities for students 
              to excel academically and professionally. The university is committed to empowering the region's youth with quality education and 
              skill development.
            </p>
          <div className="w-full lg:w-1/2 flex mt-4 justify-center lg:justify-start">
          <NavLink to="https://cvrump.ac.in/" target="_blank" className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 px-10 text-lg font-semibold rounded-md shadow-md hover:scale-105">
            Visit University Website
          </NavLink>
          </div>
        </div>

        {/* Right Part */}
        <div className="lg:flex items-center hidden lg:w-[45%] lg:mt-0 mt-5 w-full justify-center">
          <img
            src={Campus} // Replace with your actual image path
            alt="University"
            className="w-full lg:h-4/5 h-[100%] ml-[2.5%] object-cover rounded-2xl shadow-xl"
          />
        </div>
      </div>
  );
};

export default AboutUniversity;
