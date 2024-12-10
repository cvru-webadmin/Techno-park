import React from "react";
import './About.css'
import ViceChancellorimg from "../../../assets/ViceChancellor.jpg"// Update the image path as needed

const ViceChancellor = () => {
  return (
    <section className="p-6 lg:p-12 justify-center flex items-center ">
      <div className="w-[100%] text-justify flex justify-evenly flex-col lg:flex-row overflow-hidden">
         {/* Section Title */}
         <h2 className="about-title lg:hidden text-left font-semibold">
         Vice Chancellor's Message
          </h2>
        {/* Image Container */}
        <div className="relative lg:h-[520px] h-[400px] overflow-hidden rounded-lg shadow-lg group">
          <img
            src={ViceChancellorimg} // Replace with the actual image URL
            alt="Vice Chancellor"
            className="object-cover object-top h-full w-full lg:w-[450px] transition-transform duration-300 group-hover:scale-105"
          />
          {/* Overlay Effect */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-300"></div>
          {/* Image Label */}
          <div className="absolute bottom-4 left-4 bg-white bg-opacity-90 px-4 py-2 rounded-lg shadow-md">
            <span className="text-gray-800 font-semibold text-lg">Dr. [Vice Chancellor's Name]</span>
            <p className="text-sm text-gray-600">Vice Chancellor</p>
          </div>
        </div>

        {/* Right Column: Content */}
        <div className="lg:w-[55%] py-1">
          {/* Section Title */}
          <h2 className="about-title lg:block hidden font-semibold">
          Vice Chancellor's Message
          </h2>
          {/* Message Content */}
          <p className="text-gray-700 lg:mt-0 mt-5 mb-2">
            <h3 className="text-2xl font-semibold text-blue-700">
            Dr. [Vice Chancellor's Name]
            </h3>
            <p className="about-description">Vice Chancellor, Dr. CV Raman University (Khandwa)</p>
          </p><p className="text-gray-700 mb-4 text-justify leading-relaxed">
  Higher learning institutions must evolve to integrate principles with practice to shape students’ learning. CVRU, Khandwa collaborates with global experts to focus on fields like Circular Economy, Waste Management, Climate Change, and more, preparing students for emerging challenges.
</p>
<p className="text-gray-700 mb-4 text-justify leading-relaxed">
  As a multidisciplinary university, CVRU Khandwa offers programs across 11 schools, from Management Science and IT to Agriculture, Food Science, and Digital Learning, addressing the diverse needs of modern education.
</p>
<p className="text-gray-700 mb-4 text-justify leading-relaxed">
  Over the past four years, CVRU has become the destination for youth seeking affordable, high-quality education and entrepreneurial opportunities, preparing them to lead in farming, tech, or cultural preservation.
</p>
<p className="text-gray-700 mb-4 text-justify leading-relaxed">
  The university offers hands-on learning experiences through internships, apprenticeships, and real-life projects, supported by 40+ MoUs and 21 Centers of Excellence.
</p>
<p className="text-gray-700 mb-4 text-justify leading-relaxed">
  Committed to the Atmnirbhar Bharat initiative, CVRU empowers youth to contribute to national development and India’s growth.
</p>

        </div>
      </div>
    </section>
  );
};

export default ViceChancellor;
