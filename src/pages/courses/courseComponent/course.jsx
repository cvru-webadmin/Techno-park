import React from "react";
import { useRef } from 'react'
import { useContext } from 'react'
import {ScrollContext} from '../../../context/DropDownScrollContext'
import './course.css'
import { useEffect } from "react";
import BCA from '../../../assets/images/BCA.jpeg';
import DCA from '../../../assets/images/DCA.jpg';
import PGDCA from '../../../assets/images/PGDCA.png';
import MCA from '../../../assets/images/mca stu lab.jpeg';
import BSC from '../../../assets/images/BSC.jpeg'
import MSC from '../../../assets/images/MSC.jpeg'
// Sample data
const courses = {
    diploma: [
        {
          name: "Diploma in Computer Applications (DCA)",
          duration: "1 Year",
          description: "An introductory program designed to impart foundational knowledge in computer applications, including programming, office automation, and IT fundamentals.",
          fees: "₹20,000 per year",
          eligibility: "10+2 with any subject.",
          image: DCA, // Replace with actual image URL
        },
        {
          name: "Post Graduate Diploma in Computer Applications (PGDCA)",
          duration: "1 Year",
          description: "A postgraduate program emphasizing advanced topics in computer applications, database management, and software development.",
          fees: "₹30,000 per year",
          eligibility: "Graduate in any discipline.",
          image: PGDCA, // Replace with actual image URL
        },
    ],
    undergraduate: [
        {
          name: "Bachelor of Computer Applications (BCA)",
          duration: "3 Years",
          description: "A comprehensive undergraduate program focused on computer programming, software development, and IT infrastructure management.",
          fees: "₹25,000 per year",
          eligibility: "10+2 (PCB/PCM/Commerce/Agriculture).",
          image: BCA, // Replace with actual image URL
        },
        {
          name: "B.Sc. in Information Technology (B.Sc.(IT))",
          duration: "3 Years",
          description: "A specialized undergraduate course offering an in-depth understanding of information technology systems, networking, and software design.",
          fees: "₹25,000 per year",
          eligibility: "10+2 with Mathematics.",
          image: BSC, // Replace with actual image URL
        },
    ],
    postgraduate: [
        {
          name: "Master of Computer Applications (MCA)",
          duration: "2 Years",
          description: "A professional master's degree focusing on advanced computing skills, software engineering, and IT project management.",
          fees: "₹30,000 per year",
          eligibility: "Graduation with Mathematics.",
          image: MCA, // Replace with actual image URL
        },
        {
          name: "M.Sc. in Information Technology (M.Sc.(IT))",
          duration: "2 Years",
          description: "An advanced program specializing in system design, big data analytics, and emerging IT technologies.",
          fees: "₹35,000 per year",
          eligibility: "B.Sc.(Maths/IT/CS), BCA.",
          image: MSC, // Replace with actual image URL
        },
    ],
    
};

const CoursePage = () => {
  const {dropDown,setDropDown}=useContext(ScrollContext)
  const ScrollCourses=useRef([])
  function ScrollToSection(index) {
    if (ScrollCourses.current[index]) {
      const offset = 80; // Adjust this offset for fixed headers
      const elementPosition = ScrollCourses.current[index].getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: 'smooth',
      });
    }
  } 
  useEffect(()=>{
    if(dropDown=="Diploma"){
      ScrollToSection(0)
    }
    if(dropDown=="Undergraduate"){
      ScrollToSection(1)
    }
    if(dropDown=="Postgraduate"){
      ScrollToSection(2)
    }
    setDropDown("")
  },[dropDown]) 
  return (
    <div className="bg-gray-50 min-h-screen px-4 py-8"> 
      {/* Main Sections */}
      {Object.entries(courses).map(([section, sectionCourses],index) => (
        <div key={section} className="lg:mb-16 mb-10 md:mb-14 flex flex-col items-center"  ref={(e) => (ScrollCourses.current[index] = e)}>
          {/* Section Heading with Enhanced Separator */}
          <div className="relative text-center lg:mb-12 mb-6 md:mb-8">
  <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 tracking-wide uppercase">
    {section}
  </h2>
  <p className="text-gray-500 text-base mt-3">
    Explore our {section} courses designed to meet your aspirations.
  </p>
  <div className="absolute left-1/2 transform -translate-x-1/2 top-[40px] h-1 w-24 bg-gradient-to-r from-blue-500 to-purple-600 rounded"></div>
</div>

          {/* Course Cards */}
          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 lg:px-40 lg:gap-20 md:gap-14 lg:w-full md:w-[80%] gap-10">
            {sectionCourses.map((course, index) => (
              <div
                key={index}
                className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                {/* Image */}
                <img
                  src={course.image}
                  alt={course.name}
                  className="w-full h-72 object-cover"
                />

                {/* Course Details */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-blue-700 mb-2">
                    {course.name}
                  </h3>
                  <p className="text-gray-600 text-base mb-4">
                    {course.description}
                  </p>
                  <ul className="text-base text-gray-700 space-y-2">
                    <li>
                      <span className="font-semibold">Duration:</span>{" "}
                      {course.duration}
                    </li>
                    <li>
                      <span className="font-semibold">Fees:</span> {course.fees}
                    </li>
                    <li>
                      <span className="font-semibold">Eligibility:</span>{" "}
                      {course.eligibility}
                    </li>
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
      
      {/* Footer Call-to-Action */}
      <footer className="bg-gradient-to-r from-blue-500 to-purple-600 text-white text-center py-6 mt-12 rounded-lg">
        <h3 className="text-2xl font-semibold">Need More Information?</h3>
        <p className="text-gray-200 mt-2 lg:p-0 p-2">Contact our department office for detailed information on admissions and courses.</p>
        <button className="lg:mt-4 mt-2 px-6 py-2 bg-white text-blue-700 font-semibold rounded-md shadow-md hover:bg-gray-100">
          Contact Us
        </button>
      </footer>
    </div>
  );
};

export default CoursePage;