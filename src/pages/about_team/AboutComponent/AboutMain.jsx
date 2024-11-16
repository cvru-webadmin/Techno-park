import React from "react";

const MainImage = () => {
  return (
    <>
      <div className="h-[300px] mt-[60px] flex flex-col items-center justify-center">
      <div className="w-full h-full shadow-lg rounded-lg">
        <img
          src="src/assets/images/mca stu lab.jpeg" // Replace with the correct image path
          alt="Science & Technology"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-70 flex h-[300px] mt-[60px] flex-col items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-semibold text-white">
          About Us
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mt-3">
        Is more than just a place to earn a degree - it's place where you can discover your potential...
        </p>
        </div>
      </div>
      </div>
    </>
  );
};

export default MainImage;
