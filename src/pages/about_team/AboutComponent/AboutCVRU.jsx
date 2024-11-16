import React from "react";

const AboutUniversity = () => {
  return (
      <div className="w-full h-[400px] bg-white rounded-lg p-8 flex justify-evenly">
        {/* Left Part */}
        <div className="w-[50%] mr-[2.5%]">
          <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-2">
            About Our University
          </h2>
          <p className="text-gray-600 leading-relaxed text-justify">
            Dr. C.V. Raman University (Khandwa), the fifth under the AISECT Group of Universities, is located in Madhya Pradesh's Nimar region. The university offers exceptional infrastructure, skilled faculty, and industry-focused education, blending academic knowledge with practical skills. Through its AISECT-NSDC partnership, it provides NSDC-certified courses, enhancing employability, while its online placement platform, Rojgar Mantra, connects students to top employers. CVRU Khandwa focuses on holistic development, offering modern facilities, comprehensive programs, and opportunities for students to excel academically and professionally, empowering the region's youth with quality education and skill development.
          </p>
          <div className="w-full md:w-1/2 flex mt-4 justify-left md:justify-left">
          <button className="bg-gradient-to-r from-amber-300 to-amber-500 text-white py-3 px-10 text-base font-semibold rounded-md shadow-md transform transition-all duration-300 ease-in-out hover:scale-105">
            Explore More
          </button>
          </div>
        </div>

        {/* Right Part */}
        <div className="flex items-center w-[45%] justify-center">
          <img
            src="src/assets/cvru_campus.jpg" // Replace with your actual image path
            alt="University"
            className="w-full h-[335px] mt-1 ml-[2.5%] rounded-2xl shadow-xl"
          />
        </div>
      </div>
  );
};

export default AboutUniversity;
