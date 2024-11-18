import React from "react";
import MainImage from "../../../assets/images/mca stu lab.jpeg"

const AboutTopImage = () => {
  return (
    <div className="relative h-[300px] mt-[60px] flex items-center justify-center">
      {/* Image container with rounded corners and shadow */}
      <div className="w-full h-full shadow-lg rounded-lg overflow-hidden">
        {/* Background Image */}
        <img
          src={MainImage} // Update with the correct image path
          alt="About Image"
          className="w-full h-full object-cover"
        />
        {/* Overlay with text */}
         <div className="absolute inset-0 bg-black bg-opacity-70 flex flex-col items-center justify-center p-4">
           {/* Main Heading */}
           <h1
             className="text-4xl md:text-5xl lg:text-5xl font-extrabold text-white leading-tight text-center"
             style={{
               textShadow: "3px 3px 8px rgba(0, 0, 0, 0.6)",
             }}
           >
             About Us
           </h1>
         
           {/* Subtitle/Description */}
           <p className="text-base md:text-lg lg:text-xl text-gray-300 mt-4 text-center max-w-4xl tracking-wide">
             Discover a world beyond academics — where learning meets innovation, 
             and dreams transform into achievements.
           </p>
         </div>
      </div>
    </div>
  );
};

export default AboutTopImage;