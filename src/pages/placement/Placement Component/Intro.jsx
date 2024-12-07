import React from "react";
import TrainingIllustration from "../../../assets/images/TrainingIllustrationbg.png";

export default function Intro() {
  return (
    <header className="bg-gradient-to-r from-gray-100 to-gray-50 lg:py-14 py-6">
      <div className="lg:w-[90%] w-full mx-auto flex flex-col lg:flex-row gap-10 px-6 lg:px-20">
        {/* Right Side: Image or SVG */}
        <div className="flex-shrink-0 w-full lg:w-[33%]">
          <img
            src={TrainingIllustration}
            alt="Events Calendar"
            className="w-full rounded-lg lg:h-96 h-60 max-w-md lg:max-w-lg mx-auto"
          />
        </div>
        {/* Left Side: Content */}
        <div className="text-center lg:text-left lg:w-[65%] w-full flex flex-col justify-center h-auto lg:h-[25rem]">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold lg:py-4 lg:text-left text-center gap-3 text-gray-800 leading-tight">
            TRAINING & PLACEMENT CELL
          </h1>
          <p className="lg:mt-4 mt-2 lg:text-2xl text-xl text-blue-600 font-semibold">
            Build Your Skills, Not The Resume
          </p>
          <p className="lg:mt-4 mt-2 lg:text-lg text-base text-justify text-gray-600">
          We have dedicated ‘Training and Placement Cell’ at Dr. C. V. Raman University. Our vision is to bridge the gap between Industry and academia. We provide training at all levels to improve the quality of students.  <br></br>
          All the courses at the University are designed to make the students ready to be absorbed in the market. Apart from the mandatory technical skills, it is also made sure that they acquire other qualities as well, that play an important role in climbing the career ladder with special focus on improving their soft skills. Training and Placement Cell plays this role to make students ready for industry.
          </p>
        </div>
      </div>
    </header>
  );
}
