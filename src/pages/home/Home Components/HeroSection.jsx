import React from 'react';
import './Home.css';

const HeroSection = () => {
  return (
    <div className="relative h-screen overflow-hidden">
      {/* Background Image */}
      <div
        className="parallax-bg absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: "url('src/assets/cvru_campus.jpg')" }}
      ></div>

      {/* Content Container */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center text-center text-white px-6 md:px-10 lg:px-20 bg-gradient-to-b from-black/60 via-black/40 to-transparent">
        
        {/* University Logo/Emblem Section */}
        <div className="mb-4">
          <img
            src="/path/to/university-logo.png" // Replace with the actual path of the university logo
            alt="University Logo"
            className="w-20 h-20 md:w-28 md:h-28 lg:w-32 lg:h-32 mx-auto mb-3"
          />
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-wide uppercase leading-tight">
            School of Computer Science & Technology
          </h1>
          <p className="text-base md:text-lg lg:text-xl font-medium text-gray-300 mt-1 tracking-wide">
            Techno Park
          </p>
        </div>

        {/* Tagline and Introduction */}
        <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-4 mt-2 px-4 lg:px-20 leading-snug">
          "We Make Tech Commandos"
        </h2>
        
        <p className="max-w-3xl text-sm md:text-base font-light leading-relaxed mb-8 px-4 lg:px-20">
          The Indian IT Industry has grown at an average annual rate of 30% over the past decade.
          The development of technology is changing the way we live, even though the basic scientific
          and engineering principles on which IT is based have not changed. These principles form the core
          of our skill-based programmes, equipping graduates with insights, imagination, and the ability to
          develop future-forward information systems.
        </p>

        {/* Additional Section for University Highlights */}
        <div className="bg-gray-900 bg-opacity-80 p-5 rounded-lg max-w-xl shadow-lg text-left mt-4 md:mt-6 mb-32">
          <h4 className="text-lg md:text-xl font-semibold mb-2 border-b-2 border-blue-400 pb-1">
            Why Choose Us?
          </h4>
          <ul className="text-sm md:text-base font-light leading-relaxed list-disc pl-6 space-y-1 mt-2">
            <li>Cutting-edge courses and state-of-the-art facilities</li>
            <li>Experienced faculty committed to excellence in education</li>
            <li>Focus on holistic student development and innovation</li>
            <li>Strong industry connections for real-world experience</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
