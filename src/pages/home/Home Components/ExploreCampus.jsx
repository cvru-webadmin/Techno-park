import React from 'react';

// Example images array with names (replace URLs and names with actual campus image URLs and place names)
const campusImages = [
  { src: "src/assets/cvru_campus.jpg", name: "Main Library" },
  { src: "src/assets/cvru_campus.jpg", name: "Science Lab" },
  { src: "src/assets/cvru_campus.jpg", name: "Student Center" },
  { src: "src/assets/cvru_campus.jpg", name: "Sports Complex" },
  { src: "src/assets/cvru_campus.jpg", name: "Engineering Building" },
  { src: "src/assets/cvru_campus.jpg", name: "Art and Design Studio" },
];

const CampusExplore = () => {
  return (
    <section className="flex flex-col items-center bg-white pb-12 px-4 sm:px-8 lg:px-16">
      <div className="max-w-[93%] w-full text-center">
        {/* Main Heading */}
        <h2 className="text-3xl sm:text-4xl font-semibold text-blue-600 mb-6">
          Explore Our Campus
        </h2>

        {/* Description */}
        <p className="text-gray-600 mb-8 ">
          Discover the vibrant life, cutting-edge facilities, and inspiring spaces that make our campus a hub for learning and innovation. Take a virtual tour or visit us in person to experience it yourself.
        </p>
      </div>

      {/* Gallery of Campus Images with Place Names */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-[87%] w-full mb-10 px-4">
        {campusImages.map((image, index) => (
          <div key={index} className="relative overflow-hidden rounded-lg shadow-md group">
            {/* Image */}
            <img
              src={image.src}
              alt={image.name}
              className="w-full h-60 object-cover transform transition duration-300 group-hover:scale-105"
            />
            {/* Caption Overlay */}
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 text-white text-center py-2 text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {image.name}
            </div>
          </div>
        ))}
      </div>

      {/* Campus Info Section */}
      <div className="flex flex-col md:flex-row items-center md:justify-between max-w-[87%] w-full px-4">
        {/* Left Side: Campus Info */}
        <div className="text-center md:text-left mb-6 md:mb-0 md:pr-6">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            Experience the Heart of Our College
          </h3>
          <p className="text-gray-600 mb-6">
          Techno Park School: Empowering future innovators with cutting-edge technology and hands-on learning in a vibrant, collaborative environment.          </p>
          <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 px-8 text-lg font-semibold rounded-md shadow-md transform transition duration-300 ease-in-out hover:scale-105">
            Take a Virtual Tour
          </button>
        </div>

        {/* Right Side: Large Feature Image */}
        <div className="w-full md:w-1/2">
          <img
            src="src/assets/cvru_campus.jpg" // Replace with main feature campus image
            alt="Main Campus"
            className="w-full h-64 md:h-[200px] object-cover rounded-lg shadow-md"
          />
        </div>
      </div>
    </section>
  );
};

export default CampusExplore;

