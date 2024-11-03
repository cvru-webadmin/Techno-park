// src/components/HeroSection.js
import React from 'react';
import './Home.css';
import CvruLogo from '../../../assets/CVRUK-removebg-preview (1).png';
import CvrukLogo from '../../../assets/LOGO_CVRUMP.png';

const HeroSection = () => {
  return (
    <div className="relative h-screen overflow-hidden text-white">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0 opacity-90"
        style={{ backgroundImage: "url('src/assets/cvru_campus.jpg')" }}
      ></div>

      {/* Content with Lightened Overlay */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center text-center bg-gradient-to-b from-black/40 via-black/20 to-transparent px-4 sm:px-6 lg:px-20">
        
        {/* University Logo Section */}
        <div className="mb-8 mt-12 sm:mt-16 lg:mt-20">
          <img
            src={CvruLogo}
            alt="University Logo"
            className="w-20 h-20 md:w-28 md:h-28 lg:w-32 rounded-md object-scale-down mx-auto mb-4"
          />
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-wide uppercase leading-tight lg:leading-snug">
            School of Computer Science & Technology
          </h1>
          
          {/* Highlight Techno Park */}
          <p className="text-xl md:text-2xl lg:text-3xl font-semibold text-yellow-300 mt-2 tracking-wide lg:tracking-wider">
            Techno Park
          </p>
        </div>

        {/* Tagline */}
        <h2 className="text-lg md:text-2xl lg:text-3xl font-bold mb-4 px-4 lg:px-16 leading-tight lg:leading-snug opacity-90">
          "We Make Tech Commandos"
        </h2>
        
        {/* Description */}
        <p className="max-w-3xl text-xs md:text-sm lg:text-base font-light leading-relaxed mb-8 px-4 lg:px-20 opacity-90">
          The Indian IT Industry has grown at an average annual rate of 30% over the past decade. The development of technology is changing the way we live, even though the basic scientific and engineering principles on which IT is based have not changed. These principles form the core of our skill-based programmes, equipping graduates with insights, imagination, and the ability to develop future-forward information systems.
        </p>
      </div>
    </div>
  );
};

export default HeroSection;
