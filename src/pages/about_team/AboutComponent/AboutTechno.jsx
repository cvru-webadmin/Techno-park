import React from "react";
import { NavLink } from "react-router-dom";
import "./About.css";
const AboutSchool = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-evenly p-6 md:p-12">
      {/* Left Side Section: Images */}
      <div className="flex flex-col md:flex-row w-full md:w-1/2 gap-4">
              {/* Right Column: Single Image */}
              <div className="relative h-64 md:h-auto w-[45%] rounded-lg overflow-hidden shadow-md">
          <img
            src="src/assets/images/Front.jpeg" // Replace with the correct image path
            alt="Collaborative Work"
            className="w-full h-full object-cover"
          />
        </div>
        {/* Left Column: Two Stacked Images */}
        <div className="flex flex-col gap-4">
          {/* First Image */}
          <div className="relative h-64 w-80 rounded-lg overflow-hidden shadow-md">
            <img
              src="src/assets/images/Birthday.jpeg" // Replace with the correct image path
              alt="Professional Faculty"
              className="w-full h-full object-cover"
            />
          </div>
          {/* Highlight Card */}
          <div className="relative h-28 bg-gradient-to-r from-teal-400 via-blue-500 to-purple-700 text-white flex items-center justify-center rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
  <p className="text-center text-lg font-bold text-shadow-lg">8+ Years of Experience</p>
</div>

        </div>
      </div>

      {/* Right Side Section: About the Department */}
      <div className="w-[45%]">
          <h2 className="about-title">
            About Our Department
          </h2>
          <p className="about-description">
          Techno Park School of Computer Science and Information Technology, affiliated with CVRUK University and ISO 9001:2015 certified,Techno Park is a top institution offering programs like BCA, PGDCA, DCA, B.Sc. (IT), M.Sc. (IT), and MCA. The school emphasizes academic excellence, preparing students for the dynamic tech sector through innovative courses.
            </p>
            <p className="about-description">
            With modern labs, a digital library, and a focus on outcome-based learning, the institute offers strong industry links, internships, and live projects, ensuring excellent placement opportunities with leading companies like TCS, Infosys, and Wipro. Guided by experienced faculty and supported by strong industry ties, students benefit from internships, workshops, and live projects.
            </p>
        </div>
    </section>
  );
};

export default AboutSchool;
