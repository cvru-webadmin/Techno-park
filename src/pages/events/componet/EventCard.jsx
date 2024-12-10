import React, { useState } from "react";
import Notimage from '../image/not_image.jpg'

const EventCard = ({ title, date, description, status, image }) => {
  // State to track if the description is expanded
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="group flex flex-col md:flex-row border rounded-lg shadow-lg overflow-hidden bg-white hover:shadow-2xl w-full transition-shadow duration-300">
    {/* Image Section */}
    <div className={`w-full relative flex justify-center items-center lg:w-1/2 h-full ${image? "lg:h-auto":"lg:h-40"}`}>
    {image? (
      <img
        src={image}
        alt={title}
        className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
      />
    ):
    (
      <img
        src={Notimage}
        alt={title}
        className="object-cover object-center w-full h-full group-hover:scale-105 transition-transform duration-300"
      />
    )
    }
    <span className="text-xs absolute right-3 top-3 md:hidden bg-gradient-to-r from-indigo-400 to-purple-500 text-white px-3 py-1 rounded-full font-semibold">
          {status}
        </span>
    </div>
  
    {/* Content Section */}
    <div className="p-6 flex flex-col w-full">
      {/* Title and Status */}
      <div className="flex items-center w-full justify-between mb-4">
        <h3 className="text-lg capitalize text-nowrap lg:text-xl font-bold text-gray-800 group-hover:text-purple-600 transition-colors duration-300">
          {title}
        </h3>
        <span className="text-xs hidden md:block bg-gradient-to-r from-indigo-400 to-purple-500 text-white px-3 py-1 rounded-full font-semibold">
          {status}
        </span>
      </div>
  
      {/* Date */}
      <p className="text-sm text-gray-500 mb-3">{date}</p>
  
      {/* Description */}
      <p className="text-sm pr-2 md:text-xs md:text-justify text-gray-700">
        {description}
      </p>
    </div>
  </div>
  
  );
};

export default EventCard;



// {/* <div className="group border rounded-lg shadow-lg overflow-hidden bg-white hover:shadow-2xl transition-shadow duration-300">
// {image && (
//   <img
//     src={image}
//     alt={title}
//     className="w-full h-60 object-cover group-hover:scale-105 transition-transform duration-300"
//   />
// )}
// <div className="p-4 h-auto">
//   <span className="flex justify-between">
//   <h3 className="text-xl font-bold text-gray-800 group-hover:text-purple-600 transition-colors duration-300">
//     {title}
//   </h3>
//   <span className="inline-block text-xs bg-gradient-to-r from-indigo-400 to-purple-500 text-white px-2 py-1 rounded-full font-semibold mb-2">
//     {tag}
//   </span>
//   </span>
//   <p className="text-sm text-gray-500 mt-1">{date}</p>

//   {/* Description */}
//   <p className="text-gray-700 mt-2">
//     {description}
//   </p>
//   {/* <p className="text-gray-700 mt-2">
//     {isExpanded ? description : `${description.slice(0, 100)}...`}
//   </p> */}

//   {/* Read More Button */}
//   {/* <button
//     onClick={() => setIsExpanded(!isExpanded)}
//     className="mt-4 inline-block text-sm text-purple-600 hover:underline"
//   >
//     {isExpanded ? "Read Less" : "Read More"}
//   </button> */}
// </div>
// </div> */}