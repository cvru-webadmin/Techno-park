import React from 'react';
import { NavLink } from 'react-router-dom';
import IOT from '../../../assets/images/IOT.png';
import Library from '../../../assets/images/Library.jpeg';
import ProgrammingLab from '../../../assets/images/ProgrammingLab.jpeg';
import Seminar from '../../../assets/images/Seminar.jpg';
import ProjectLab from '../../../assets/images/LanguageLab.jpeg';
import Lab from '../../../assets/images/Lab.png';
import Cabin from '../../../assets/images/FacultyCabin.png';

// Images array with names
const campusImages = [
  { src: IOT, name: "IOT Lab" },
  { src: ProgrammingLab, name: "Programming Lab" },
  { src: Cabin, name: "Faculty Cabin" },
  { src: ProjectLab, name: "Project Lab" },
  { src: Library, name: "Main Library" },
  { src: Seminar, name: "Seminar Hall" },
];

const CampusExplore = () => {
  return (
    <section className="flex flex-col items-center bg-white pb-12 px-4 sm:px-8 lg:px-16">
      <div className="max-w-[93%] w-full text-center">
        {/* Main Heading */}
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-blue-600 mb-6">
          Explore Our Campus
        </h2>

        {/* Description */}
        <p className="text-gray-600 text-justify md:text-center  mb-8 text-sm sm:text-base lg:text-lg max-w-5xl mx-auto">
          Discover the vibrant life, cutting-edge facilities, and inspiring spaces that make our campus a hub for learning and innovation. Take a virtual tour or visit us in person to experience it yourself.
        </p>
      </div>

      {/* Gallery of Campus Images */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-3 gap-6 max-w-[87%] w-full mb-10">
        {campusImages.map((image, index) => (
          <div
            key={index}
            className="relative overflow-hidden rounded-lg shadow-md group"
          >
            {/* Image */}
            <img
              src={image.src}
              alt={image.name}
              className="w-full h-48 sm:h-60 object-cover transform transition duration-300 group-hover:scale-105"
            />
            {/* Caption Overlay */}
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 text-white text-center py-2 text-sm font-semibold transition-opacity duration-300 opacity-100 lg:opacity-0 lg:group-hover:opacity-100">
              {image.name}
            </div>
          </div>
        ))}
      </div>

      {/* Campus Info Section */}
      <div className="flex flex-col md:flex-row items-center md:justify-between max-w-[87%] w-full gap-8">
        {/* Left Side: Campus Info */}
        <div className="text-center md:text-left md:flex-1">
          <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">
            Experience the Heart of Our College
          </h3>
          <p className="text-gray-600 mb-8 text-sm sm:text-base lg:text-lg">
            Techno Park School: Empowering future innovators with cutting-edge technology and hands-on learning in a vibrant, collaborative environment.
          </p>
          <NavLink to="/campus" onClick={()=>{("/campus");window.scrollTo(0, 0);}} className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-2 px-6 sm:py-3 sm:px-8 text-sm sm:text-lg font-semibold rounded-md shadow-md transform transition duration-300 ease-in-out hover:scale-105">
            Take a Virtual Tour
          </NavLink>
        </div>

        {/* Right Side: Large Feature Image */}
        <div className="w-full md:w-1/2 lg:w-1/3">
          <img
            src={Lab} // Replace with main feature campus image
            alt="Main Campus"
            className="w-full h-48 sm:h-64 object-cover rounded-lg shadow-md"
          />
        </div>
      </div>
    </section>
  );
};

export default CampusExplore;
