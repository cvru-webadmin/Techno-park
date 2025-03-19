import React from "react";
import { FaEye, FaBullseye, FaHistory } from "react-icons/fa"; // Import icons
import KhushiIoT from "../../../assets/images/KhushiIoT.jpg"

const VisionMission = () => {
  return (
    <>
    <div className="relative text-center lg:mb-8 lg:mt-8 mt-4">
    <h2 className="about-title font-semibold capitalize">
      Our Vision & Mission
    </h2>
    <p className="text-gray-600 md:text-lg text-base -mt-3">
    To foster innovation and excellence in computer science education and research.
    </p>
    </div>
    <div className="flex flex-col lg:flex-row gap-8 justify-evenly p-8 bg-gray-50">
    <div className="VisonMisonBg lg:hidden block mx-auto text-white p-8 h-80 rounded-lg shadow-lg w-[99%]">
        <h2 className="text-2xl md:text-right lg:text-2xl text-center font-bold mb-4">
          Our plan makes you feel more comfortable with the help of our experienced faculty and best infrastructure...
        </h2>
      </div>
      {/* Left Column */}
      <div className="flex flex-col gap-6 w-full lg:w-1/2">
        {/* Card: Our Vision */}
        <div className="bg-white border-t-4 border-blue-600 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
          <div className="flex items-center gap-3 mb-3">
            <FaEye className="text-blue-600 text-xl md:text-3xl" /> {/* Icon */}
            <h3 className="text-xl md:text-2xl font-semibold text-blue-700">Our Vision</h3>
          </div>
          <p className="text-gray-800 md:text-base text-sm">
            Towards ubiquitous computing technology...
          </p>
          <p className="text-gray-800  md:text-base text-sm">
          To be a leading institution in the field of computing technology, shaping future leaders who will drive innovation and advancements in IT, making technology more accessible and impactful for society.
          </p>
        </div>

        {/* Card: Our Mission */}
        <div className="bg-white border-t-4 border-purple-600 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
          <div className="flex items-center gap-3 mb-3">
            <FaBullseye className="text-purple-600 text-xl md:text-3xl" /> {/* Icon */}
            <h3 className="text-xl md:text-2xl  font-semibold text-purple-700">Our Mission</h3>
          </div>
          <p className="text-gray-800  md:text-base text-sm">
            To provide access to higher educational opportunities in Computing Technology programs that will enable learners to develop theoretical, practical, and ethical skills and knowledge necessary to achieve their professional goals, improve the productivity of their organizations, and provide valuable and creative, innovative, and resourceful contributions to society.
          </p>
        </div>
      </div>

      {/* Right Column */}
      <div className="VisonMisonBg lg:block hidden text-white p-8 rounded-lg shadow-lg w-full lg:w-[35%]">
        <h2 className="text-xl lg:text-2xl text-right font-bold mb-4">
          Our plan makes you feel more comfortable with the help of our experienced faculty and best infrastructure...
        </h2>
      </div>
    </div>
    </>
  );
};

export default VisionMission;
