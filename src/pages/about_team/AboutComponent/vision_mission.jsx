import React from "react";
import { FaEye, FaBullseye, FaHistory } from "react-icons/fa"; // Import icons

const VisionMission = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-8 justify-evenly p-8 bg-gray-50">
      {/* Left Column */}
      <div className="flex flex-col gap-6 w-full lg:w-1/2">
        {/* Card: Our Vision */}
        <div className="bg-blue-100 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow border border-blue-300">
          <div className="flex items-center gap-3 mb-3">
            <FaEye className="text-blue-600 text-3xl" /> {/* Icon */}
            <h3 className="text-2xl font-semibold text-blue-900">Our Vision</h3>
          </div>
          <p className="text-gray-800">
            Towards ubiquitous computing technology...
          </p>
        </div>

        {/* Card: Our Mission */}
        <div className="bg-teal-100 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow border border-teal-300">
          <div className="flex items-center gap-3 mb-3">
            <FaBullseye className="text-teal-600 text-3xl" /> {/* Icon */}
            <h3 className="text-2xl font-semibold text-teal-900">Our Mission</h3>
          </div>
          <p className="text-gray-800">
            To provide access to higher educational opportunities in Computing Technology programs that will enable learners to develop theoretical, practical, and ethical skills and knowledge necessary to achieve their professional goals, improve the productivity of their organizations, and provide valuable and creative, innovative, and resourceful contributions to society.
          </p>
        </div>

        {/* Card: Our History */}
        <div className="bg-purple-100 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow border border-purple-300">
          <div className="flex items-center gap-3 mb-3">
            <FaHistory className="text-purple-600 text-3xl" /> {/* Icon */}
            <h3 className="text-2xl font-semibold text-purple-900">Our History</h3>
          </div>
          <p className="text-gray-800">
            Fusce sed pellentesque dui. Nullam lacinia, nibh vitae gravida
            condimentum, turpis neque commodo mauris, in rutrum lacus nisl a
            risus.
          </p>
        </div>
      </div>

      {/* Right Column */}
      <div className="VisonMisonBg text-white p-8 rounded-lg shadow-lg w-full lg:w-[35%]">
        <h2 className="text-xl lg:text-2xl text-right font-bold mb-4">
          Our plan makes you feel more comfortable with the help of our experienced faculty and best infrastructure...
        </h2>
      </div>
    </div>
  );
};

export default VisionMission;
