import React from "react";
import calenderIluustration from "./freepik__retouch__10656.png";

export default function Header({scroll}) {
  return (
    // from-[#fff3e7]
    <header className="bg-gradient-to-r from-gray-100 to-gray-50 py-20">
      <div className="container mx-auto flex flex-col lg:flex-row items-center lg:items-start gap-10 px-6 lg:px-20">
        {/* Right Side: Image or SVG */}
        <div className="flex-shrink-0 w-full lg:w-1/2">
          <img
            src={calenderIluustration}
            alt="Events Calendar"
            className="w-full max-w-md lg:max-w-lg mx-auto"
          />
        </div>
        {/* Left Side: Content */}
        <div className="text-center lg:text-left flex flex-col justify-center h-auto lg:h-[25rem] max-w-lg">
          <h1 className="text-3xl lg:text-5xl font-bold flex flex-col gap-3 text-gray-800 leading-tight">
            <span className="text-gray-600">Techno Park</span> <span>Events & News</span>
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Discover the latest events, announcements, and updates from Techno
            Park. Stay connected and never miss an opportunity!
          </p>
          <div className="mt-6">
            <button onClick={scroll} className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-full shadow-md hover:bg-indigo-700 transition duration-300">
              Explore More
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
