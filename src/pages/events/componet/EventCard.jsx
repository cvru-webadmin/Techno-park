import React, { useState } from "react";

const EventCard = ({ title, date, description, tag, image }) => {
  // State to track if the description is expanded
  const [isExpanded, setIsExpanded] = useState(false);

  return (
   
    <div className="group border flex rounded-lg shadow-lg overflow-hidden bg-white hover:shadow-2xl w-full transition-shadow duration-300">
    {image && (
      <img
        src={image}
        alt={title}
        className="w-1/3 h-60 object-cover group-hover:scale-105 transition-transform duration-300"
      />
    )}
    <div className="p-4">
      <span className="flex justify-between mt-2">
      <h3 className="text-xl font-bold text-gray-800 group-hover:text-purple-600 transition-colors duration-300">
        {title}
      </h3>
      <span className="inline-block text-xs bg-gradient-to-r from-indigo-400 to-purple-500 text-white px-2 py-1 rounded-full font-semibold mb-2">
        {tag}
      </span>
      </span>
      <p className="text-sm text-gray-500 mt-1">{date}</p>
      <p className="text-gray-700 mt-2">{description}</p>
      {/* <button className="mt-4 inline-block text-sm text-purple-600 hover:underline">
        Read More
      </button> */}
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