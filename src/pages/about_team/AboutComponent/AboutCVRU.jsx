import React from "react";
import "./About.css";
import { NavLink } from "react-router-dom";
const AboutUniversity = () => {
  return (
      <div className="w-full bg-gray-50 rounded-lg p-8 flex justify-evenly">
        {/* Left Part */}
        <div className="w-[50%] mr-[2.5%]">
          <h2 className="about-title">
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
          <div className="w-full md:w-1/2 flex mt-4 justify-left md:justify-left">
          <NavLink to="https://cvrump.ac.in/" target="_blank" className="bg-gradient-to-r uppercase from-amber-300 to-amber-500 text-white py-3 px-10 text-base font-bold rounded-md shadow-md transform transition-all duration-300 ease-in-out hover:scale-105">
            Visit University Website
          </NavLink>
          </div>
        </div>

        {/* Right Part */}
        
        <div className="flex items-center w-[45%] justify-center">
          <img
            src="src/assets/cvru_campus.jpg" // Replace with your actual image path
            alt="University"
            className="w-full h-4/5 ml-[2.5%] object-cover rounded-2xl shadow-xl"
          />
        </div>
      </div>
  );
};

export default AboutUniversity;
