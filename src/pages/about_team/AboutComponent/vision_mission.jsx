import React from "react";
import './About.css';
const VisionMission = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-6 justify-evenly p-8 bg-white">
      {/* Left Column */}
      <div className="flex flex-col gap-4 w-full lg:w-1/2">
        {/* Card: Our Vision */}
        <div className="bg-blue-50 p-6 rounded-lg shadow-md border border-blue-200">
          <h3 className="text-xl font-bold text-blue-600 mb-2">Our Vision</h3>
          <p className="text-gray-700">
          Towards ubiquitous computing Technology...
          </p>
        </div>

        {/* Card: Our Mission */}
        <div className="bg-teal-50 p-6 rounded-lg shadow-md border border-teal-200">
          <h3 className="text-xl font-bold text-teal-600 mb-2">Our Mission</h3>
          <p className="text-gray-700">
          To provide access to higher educational opportunities in Computing Technology programs that will enable learners to develop theoretical, practical, and ethical skills and knowledge necessary to achieve their professional goals, improve the productivity of their organizations and provide valuable and creative, innovative and resourceful contribution to society.
          </p>
        </div>

        {/* Card: Our History */}
        <div className="bg-indigo-50 p-6 rounded-lg shadow-md border border-indigo-200">
          <h3 className="text-xl font-bold text-indigo-600 mb-2">Our History</h3>
          <p className="text-gray-700">
            Fusce sed pellentesque dui. Nullam lacinia, nibh vitae gravida
            condimentum, turpis neque commodo mauris, in rutrum lacus nisl a
            risus.
          </p>
        </div>
      </div>

      {/* Right Column */}
      <div className="bg-gray-900 bg-opacity-80 text-white VisonMisonBg p-8 rounded-lg shadow-md w-full lg:w-[35%]">
        <h2 className="text-xl lg:text-2xl text-right font-bold mb-4">
        Our plan makes you feel more comfortable with the help of our experienced faculty and best infrastructure...
        </h2>
      </div>
    </div>
  );
};

export default VisionMission;
