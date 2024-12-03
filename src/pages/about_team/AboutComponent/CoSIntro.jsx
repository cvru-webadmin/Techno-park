import React from "react";
import './About.css'
import SwatiAtre from "../../../assets/images/SwatiAtre2.png"

const IntroCoS = () => {
  return (
    <section className="p-6 lg:p-12 justify-center flex items-center ">
      <div className="w-[100%] text-justify flex justify-evenly flex-col lg:flex-row overflow-hidden">
         {/* Section Title */}
         <h2 className="about-title lg:hidden text-left font-semibold">
                CHAIR OF THE SCHOOL
          </h2>
        {/* Image Container */}
  <div className="relative lg:h-[500px] h-[400px] overflow-hidden rounded-lg shadow-lg group">
    <img
      src={SwatiAtre} // Replace with the actual image URL
      alt="Chief of Staff"
      className="object-cover object-top h-full w-full transition-transform duration-300 group-hover:scale-105"
    />
    {/* Overlay Effect */}
    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-300"></div>
    {/* Image Label */}
    <div className="absolute bottom-4 left-4 bg-white bg-opacity-90 px-4 py-2 rounded-lg shadow-md">
      <span className="text-gray-800 font-semibold text-lg">Ms. Swati Atre</span>
      <p className="text-sm text-gray-600">Head of the Department</p>
    </div>
  </div>



        {/* Right Column: Content */}
        <div className="lg:w-[53%] py-1">
          {/* Section Title */}
          <h2 className="about-title lg:block hidden font-semibold">
                CHAIR OF THE SCHOOL
          </h2>
          {/* Message Content */}
          <p className="text-gray-700 lg:mt-0 mt-5 mb-2">
            <h3 className="text-2xl font-semibold text-blue-700">
              Ms. Swati Atre
            </h3>
            <p className="about-description">COS, Techno Park School of CS & IT</p>
          </p>
          <p className="text-gray-700 mb-4 text-justify leading-relaxed">
          Ms. Swati Atre is the Chair of the School of Computer Science and Technology at Dr. C.V. Raman University, holding a Master's in Computer Applications (MCA) and 12 years of academic and professional experience. She also serves as the University Quality Assurance Coordinator (UQAC). Specializing in Programming Languages and Web Technology, Ms. Atre has earned several prestigious awards, including the Young Researcher Award 2023 and the Jyestha Acharya Award 2023-2024. Under her leadership, the department fosters innovation and academic excellence.          </p>
          <p className="text-gray-700 mb-4 text-justify leading-relaxed">
          The Techno-Park School of CS & IT at our university offers a dynamic learning environment focused on nurturing innovation and critical thinking. Led by a dedicated team of faculty, we provide quality education in areas like programming, algorithms, artificial intelligence, and IoT. Our updated curriculum equips students with the skills needed to succeed in the ever-evolving tech industry, with alumni excelling in both corporate and government sectors.          </p>
        </div>
      </div>
    </section>
  );
};

export default IntroCoS;
