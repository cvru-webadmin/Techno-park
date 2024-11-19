import React from "react";
import './About.css'
import SwatiAtre from "../../../assets/images/SwatiAtre.png"

const IntroCoS = () => {
  return (
    <section className="p-6 lg:p-12 justify-center flex items-center">
      <div className="w-[100%] text-justify flex justify-evenly overflow-hidden lg:flex">
        {/* Image Container */}
  <div className="relative lg:h-[500px] overflow-hidden rounded-lg shadow-lg group">
    <img
      src={SwatiAtre} // Replace with the actual image URL
      alt="Chief of Staff"
      className="object-cover rounded-lg h-full w-full transition-transform duration-300 group-hover:scale-105"
    />
    {/* Overlay Effect */}
    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-300"></div>
    {/* Image Label */}
    <div className="absolute bottom-4 left-4 bg-white bg-opacity-90 px-4 py-2 rounded-lg shadow-md">
      <span className="text-gray-800 font-semibold text-lg">Miss Swati Atre</span>
      <p className="text-sm text-gray-600">Head of Department</p>
    </div>
  </div>



        {/* Right Column: Content */}
        <div className="lg:w-[55%] py-1">
          {/* Section Title */}
          <h2 className="about-title">
                CHAIR OF THE SCHOOL
          </h2>
          {/* Message Content */}
          <p className="text-gray-700 mb-2">
            <h3 className="text-2xl font-semibold text-blue-700">
              Ms. Swati Atre
            </h3>
            <p className="about-description">COS, Techno Park School of CS & IT</p>
          </p>
          <p className="text-gray-700 mb-4 text-justify leading-relaxed">
          Ms. Swati Atre serves as the esteemed Chair of the School of Computer Science and Technology at Dr. C.V. Raman University. She holds a Master's degree in Computer Applications (MCA) and brings 12 years of rich academic and professional experience to her role. In addition to her responsibilities as the Head of Department, Ms. Atre is the University Quality Assurance Coordinator (UQAC), further showcasing her commitment to academic excellence and institutional growth.
          </p>
          <p className="text-gray-700 mb-4 text-justify leading-relaxed">
          Her core expertise lies in Programming Languages and Web Technology, areas where she has made significant contributions through teaching and research. Ms. Atre's exceptional dedication has been recognized with numerous prestigious awards, including: Young Researcher Award 2023, Best Academic Professional Award 2023, Jyestha Acharya Award 2023-2024. Under her leadership, the department thrives as a hub of innovation and knowledge, fostering academic growth and excellence for both students and faculty.
          </p>
        </div>
      </div>
    </section>
  );
};

export default IntroCoS;
