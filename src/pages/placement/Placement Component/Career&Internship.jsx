import React from "react";
import InternshipIllustration from "../../../assets/images/Internship.jpg";
import CareerIllustration from "../../../assets/images/Career.jpg";

export default function CareerInternship() {
  return (
    <header className="bg-white pt-4 pb-10">
      <div className="w-[100%] mx-auto flex flex-col lg:flex-row lg:gap-20 gap-10 px-6 lg:px-20">
        {/* Right Side: Image or SVG */}
        <div className="text-center lg:text-left lg:w-[50%] w-full flex flex-col justify-center h-auto">
          <h1 className="text-2xl lg:text-4xl md:text-3xl font-bold flex flex-row gap-3 text-gray-800 leading-tight">
            <img src={CareerIllustration} className="lg:w-18 lg:w-16 w-14 h-12 -mt-2"></img>
          Career Counselling
          </h1>
          <p className="mt-2 lg:mt-4 text-base lg:text-lg text-justify text-gray-600">
          It is one of the unique features of Training and Placement cell at Dr. C. V. Raman University. In Career counselling with individual analysis, we counsel student on various career options mapping it with their current course. We help them on career exploration with their future goal.<br></br><br></br>
          The Counselling service of the university thus tries to understand the problems students are going through and prepares them mentally to help them fulfil their academic and personal potential.
          </p>
        </div>
        {/* Left Side: Content */}
        <div className="text-center lg:text-left lg:w-[50%] w-full flex flex-col justify-center h-auto">
          <h1 className="text-2xl lg:text-4xl md:text-3xl font-bold flex flex-row gap-3 text-gray-800 leading-tight">
          <img src={InternshipIllustration} className="lg:w-18 lg:w-16 w-14 h-12 -mt-2"></img>
          Internships
          </h1>
          <p className="mt-4 text-base lg:text-lg text-justify text-gray-600">
          Dr. C. V. Raman University offers internships and in-house training in partnership with corporate organizations, providing students with industry exposure to enhance their skills before starting their careers. Internship opportunities are available across various sectors.  <br></br><br></br>
          The university also supports internships for external students and provides international opportunities, including a fully sponsored internship in Germany for a 2024 University student. These initiatives ensure comprehensive industry exposure and skill development.</p>
        </div>
      </div>
    </header>
  );
}
