import React from "react";
import './About.css'
import Chancellorsir from "../../../assets/images/Chancellorsir.jpg"

const Chancellor = () => {
  return (
    <section className="p-6 lg:p-12 justify-center flex items-center ">
      <div className="w-[100%] text-justify flex justify-evenly flex-col lg:flex-row overflow-hidden">
         {/* Section Title */}
         <h2 className="about-title lg:hidden text-left font-semibold">
         Chancellor's Message
          </h2>
        {/* Image Container */}
  <div className="relative lg:h-[520px] h-[400px] overflow-hidden rounded-lg shadow-lg group">
    <img
      src={Chancellorsir} // Replace with the actual image URL
      alt="Chancellor Sir"
      className="object-cover object-top h-full w-full lg:w-[450px] transition-transform duration-300 group-hover:scale-105"
    />
    {/* Overlay Effect */}
    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-300"></div>
    {/* Image Label */}
    <div className="absolute bottom-4 left-4 bg-white bg-opacity-90 px-4 py-2 rounded-lg shadow-md">
      <span className="text-gray-800 font-semibold text-lg">Mr. Santosh Choubey</span>
      <p className="text-sm text-gray-600">Chancellor Sir</p>
    </div>
  </div>



        {/* Right Column: Content */}
        <div className="lg:w-[55%] py-1">
          {/* Section Title */}
          <h2 className="about-title lg:block hidden font-semibold">
          Chancellor's Message
          </h2>
          {/* Message Content */}
          <p className="text-gray-700 lg:mt-0 mt-5 mb-2">
            <h3 className="text-2xl font-semibold text-blue-700">
            Mr. Santosh Choubey
            </h3>
            <p className="about-description">Chancellor, Dr. CV Raman University (Khandwa)</p>
          </p>
          <p className="text-gray-700 mb-4 text-justify leading-relaxed">
          It is a proud moment to release the first Information Brochure for Dr. CV Raman University (Khandwa), the fifth university of the AISECT Group of Universities, established in the Nimar region of Madhya Pradesh. AISECT, with its rich legacy of skill-based quality education, ensures excellent job and entrepreneurial opportunities through advanced infrastructure, experienced faculty, AISECT-NSDC certification, and online placement support via Rojgar Mantra.
          </p>
          <p className="text-gray-700 mb-4 text-justify leading-relaxed">
          Dr. CV Raman University offers diverse programs, from short-term certificates to UG and PG degrees, aligned with government-approved skill frameworks and emerging industrial needs. The teaching methodology emphasizes hands-on learning through Skill Academies, ICT-based pedagogy, and value-based education, fostering holistic development through cultural, social, and sporting activities.
          </p>
          <p className="text-gray-700 mb-4 text-justify leading-relaxed">
          The university aims to transform students into skilled professionals and responsible citizens, equipping them for successful careers and entrepreneurial ventures.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Chancellor;
