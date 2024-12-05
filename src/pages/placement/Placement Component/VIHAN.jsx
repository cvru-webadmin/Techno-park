import React from "react";
import TrainingIllustration from "../../../assets/images/VIHANIllustrationbg.png";

export default function VIHAN() {
  return (
    <header className="bg-white py-8">
      <div className="w-[90%] mx-auto flex flex-col lg:flex-row items-center gap-20 px-6 lg:px-20">
        {/* Left Side: Content */}
        <div className="text-center lg:text-left w-[65%] flex flex-col justify-center h-auto lg:h-[25rem]">
          <h1 className="text-3xl lg:text-4xl font-bold flex flex-col gap-3 text-gray-800 leading-tight">
          VIHAN Program
          </h1>
          <p className="mt-4 text-lg text-justify text-gray-600">
          VIHAN is a campus recruitment training program which is uniquely offered by us. This program is designed to develop student’s skills and prepare them for the job market. In this program we deliver sessions on Personal Vision building, Resume writing, Group discussion. We also invite Industry and behaviour experts to conduct Mock Interviews.<br></br><br></br>In VIHAN Program we also provide guidance to students for Government sector jobs.
          </p>
        </div>
          {/* Right Side: Image or SVG */}
          <div className="flex-shrink-0 w-full lg:w-[30%]">
          <img
            src={TrainingIllustration}
            alt="Events Calendar"
            className="w-full bg-blue-100 p-4 rounded-lg h-80 max-w-md lg:max-w-lg mx-auto"
          />
        </div>
      </div>
    </header>
  );
}
