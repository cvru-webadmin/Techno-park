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
  const {dropDown}=useContext(ScrollContext)
  const ScrollCourses=useRef([])
  function ScrollToSection(index){
    if (ScrollCourses.current[index]) {
      ScrollCourses.current[index].scrollIntoView({ behavior: 'smooth', block: 'start' });
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
  },[dropDown])
  return (
    <div className="bg-gray-50 min-h-screen px-4 py-8"> 
      {/* Main Sections */}
      {Object.entries(courses).map(([section, sectionCourses],index) => (
        <div key={section} className="mb-16"  ref={(e) => (ScrollCourses.current[index] = e)}>
          {/* Section Heading with Enhanced Separator */}
          <div className="relative text-center mb-10">
            <h2 className="course-title">
              {section}
            </h2>
            <div className="absolute left-1/2 transform -translate-x-1/2 top-[60px] h-1 w-20 bg-blue-500 rounded"></div>
          </div>

          {/* Course Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 px-40 gap-20">
            {sectionCourses.map((course, index) => (
              <div
                key={index}
                className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                {/* Image */}
                <img
                  src={course.image}
                  alt={course.name}
                  className="w-full h-60 object-cover"
                />

                {/* Course Details */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-blue-700 mb-2">
                    {course.name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    {course.description}
                  </p>
                  <ul className="text-sm text-gray-700 space-y-2">
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
      <footer className="bg-blue-700 text-white text-center py-6 mt-12 rounded-lg">
        <h3 className="text-2xl font-semibold">Need More Information?</h3>
        <p className="text-gray-200 mt-2">Contact our department office for detailed information on admissions and courses.</p>
        <button className="mt-4 px-6 py-2 bg-white text-blue-700 font-semibold rounded-md shadow-md hover:bg-gray-100">
          Contact Us
        </button>
      </footer>
    </div>
  );
};

export default CoursePage;