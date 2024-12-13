import React from "react";
import "./About.css";
import Chancellorsir from "../../../assets/images/callcor sir.jpg";
import Chancellorsir2 from '../../../assets/images/Chancellorsir.jpg'

const Chancellor = () => {
  return (
    <>
      {/* nav and header  */}
      <nav className="h-16 bg-gray-900 text-white shadow-lg"></nav>
      <section className="p-6 pb-0 lg:p-12 lg:pb-4 justify-center flex items-center">
        <div className="w-[100%] text-justify flex justify-evenly flex-col lg:flex-row overflow-hidden">
          {/* Section Title */}
          <h2 className="about-title lg:hidden text-left font-semibold">
            Chancellor's Message
          </h2>
          {/* Image Container */}
          <div className="relative lg:h-[520px] h-[400px] overflow-hidden rounded-lg shadow-lg group">
            <img
              src={Chancellorsir}
              alt="Chancellor Sir"
              className="object-cover object-top md:hidden lg:block block h-full w-full lg:w-[450px] transition-transform duration-300 group-hover:scale-105"
            />
                <img
              src={Chancellorsir2}
              alt="Chancellor Sir"
              className="object-cover object-top md:block lg:hidden hidden h-full w-full lg:w-[450px] transition-transform duration-300 group-hover:scale-105"
            />
            {/* Overlay Effect */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-300"></div>
            {/* Image Label */}
            <div className="absolute bottom-4 left-4 bg-white bg-opacity-90 px-4 py-2 rounded-lg shadow-md">
              <span className="text-gray-800 font-semibold text-lg">
                Mr. Santosh Choubey
              </span>
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
              <p className="about-description">
                Chancellor, Dr. CV Raman University (Khandwa)
              </p>
            </p>
            <p className="text-gray-700 mb-4 text-justify leading-relaxed">
              It is the most proud moment for me to release the first
              Information Brochure cum Prospectus for Dr. CV Raman University
              (Khandwa) – the fifth university of the AISECT Group of
              Universities which has come up in the Nimar region of Madhya
              Pradesh (Khandwa). The other four universities of the group are
              operating at different rural sectors of Madhya Pradesh,
              Chhattisgarh, Jharkhand, and Bihar. AISECT Group has a very rich
              legacy of providing skill-based quality education with assurance
              of excellent job opportunities and entrepreneurial options.
              Excellent infrastructure, highly qualified experienced teachers
              and trainers with long industrial background, AISECT-NSDC
              partnership and certification, and online placement support by
              Rojgar Mantra, a unique portal of AISECT group with thousands of
              placements, are some of the dimensions that make education at Dr.
              CV Raman University (Khandwa) the best option for a promising
              career.
            </p>
            <p className="text-gray-700 lg:hidden block mb-4 text-justify leading-relaxed">
            Dr. CV Raman University (Khandwa) offers a large number of
              programs ranging from one-month certificate courses to diploma,
              UG, and PG level programs. All courses are designed to include
              emerging technologies from the field, meeting industrial needs,
              while following government-approved skill frameworks. AISECT, the
              sponsoring body of Dr. CV Raman University (Khandwa), are pioneers
              of skill education at a national level.
            </p>
            <p className="text-gray-700 lg:block hidden text-justify leading-relaxed">
              Dr. CV Raman University (Khandwa) offers a large number of
              programs ranging from one-month certificate courses to diploma,
              UG, and PG level programs. All courses are designed to include
              emerging technologies from the field, meeting industrial needs,
              while following
            </p>
          </div>
        </div>
      </section>
      <div className="lg:max-w-7xl px-6 lg:px-0 mx-auto lg:mb-10">
        <p className="text-gray-700 lg:mb-4 lg:block hidden text-justify leading-relaxed">
        government-approved skill frameworks. AISECT, the
              sponsoring body of Dr. CV Raman University (Khandwa), are pioneers
              of skill education at a national level.
        </p>
      <p className="text-gray-700 mb-4 text-justify leading-relaxed">
              The teaching-learning methodology at the university emphasizes
              hands-on experience through various Skill Academies under
              conventional teaching departments. The pedagogy includes
              ICT-based systems and focuses on value-based education, making
              students socially responsive. Cultural, social, and sporting
              activities throughout the year foster holistic development,
              enriching campus life and ensuring the best placement
              opportunities while motivating students toward entrepreneurship.
            </p>
            <p className="text-gray-700 mb-4 text-justify leading-relaxed">
              I am confident that students at Dr. CV Raman University (Khandwa)
              will have a unique learning experience and campus life that
              transforms them into competent professionals and worthy citizens.
            </p>
      </div>
    </>
  );
};

export default Chancellor;
