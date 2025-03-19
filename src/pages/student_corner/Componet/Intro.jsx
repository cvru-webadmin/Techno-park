import React from "react";
import { Link as ScrollLink } from "react-scroll"; // Smooth scrolling
import StudentCornerImage from "./../../assets/images/student_corner.jpg"; // Add your preferred image

const StudentCornerIntro = () => {
  return (
    <section className="bg-gray-50 py-16 px-6 lg:px-20 flex flex-col lg:flex-row items-center justify-between">
      {/* Left Content: Heading, Description, Button */}
      <div className="lg:w-1/2 text-center lg:text-left space-y-6">
        <h1 className="text-4xl font-bold text-blue-700">🎓 Student Corner</h1>
        <p className="text-lg text-gray-700 leading-relaxed">
          Welcome to the **Student Corner**! This is a dedicated space to **celebrate student achievements**,  
          **showcase placements and internships**, and **highlight various academic and extracurricular activities**.  
          From hackathons to internships, every milestone of our students is recognized here!
        </p>

        {/* Scroll Button */}
        <ScrollLink
          to="student-sections"
          smooth={true}
          duration={800}
          className="inline-block bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition cursor-pointer"
        >
          Explore More ⬇️
        </ScrollLink>
      </div>

      {/* Right Side: Image Container */}
      <div className="lg:w-1/2 mt-10 lg:mt-0 flex justify-center">
        <img
          src={StudentCornerImage}
          alt="Student Corner"
          className="w-full rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
        />
      </div>
    </section>
  );
};

export default StudentCornerIntro;
