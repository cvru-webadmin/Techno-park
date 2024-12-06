import React from "react";
import TrainingIllustration from "../../../assets/images/VIHANIllustrationbg.png";

export default function VIHAN() {
  return (
    <header className="bg-white py-8">
      <div className="lg:w-[90%] w-full mx-auto flex flex-col lg:flex-row items-center lg:gap-20 gap-5 px-6 lg:px-20">
        {/* Left Side: Content */}
        <div className="text-center lg:text-left lg:w-[65%] w-full flex flex-col justify-center h-auto lg:h-[25rem]">
          <h1 className="text-2xl lg:text-4xl md:text-3xl font-bold flex flex-col gap-3 text-gray-800 leading-tight">
          VIHAN Program
          </h1>
          <p className="mt-4 lg:text-lg text-base text-justify text-gray-600">
          VIHAN is a campus recruitment training program which is uniquely offered by us. This program is designed to develop student’s skills and prepare them for the job market. In this program we deliver sessions on Personal Vision building, Resume writing, Group discussion. We also invite Industry and behaviour experts to conduct Mock Interviews.<br></br><br></br>In VIHAN Program we also provide guidance to students for Government sector jobs.
          </p>
        </div>
          {/* Right Side: Image or SVG */}
          <div className="flex-shrink-0 w-full lg:w-[30%]">
          <img
            src={TrainingIllustration}
            alt="Events Calendar"
            className="w-full bg-blue-100 lg:p-4 rounded-lg lg:h-80 h-60 max-w-md lg:max-w-lg mx-auto"
          />
        </div>
      </div>
    </header>
  );
}
