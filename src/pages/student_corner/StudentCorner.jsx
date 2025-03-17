import React from "react";
import "./StudentCorner.css"; // Optional for extra styling
import { Link as ScrollLink } from "react-scroll"; // Smooth scrolling
import { FaMapMarkerAlt, FaBriefcase, FaBuilding, FaRupeeSign } from "react-icons/fa";
import MainImage from "./Componet/happy-group.avif"
import cornner from "./Componet/7103-removebg-preview.png"


// Student Internship & Placement Data
const studentPlacements = [
  {
    name: "Priyanka Chouhan",
    organization: "WNS Global Services",
    position: "Senior Associate",
    package: "3 LPA",
    address: "Tower C, WEIKFIELD IT CITI INFO PARK, Viman Nagar, Pune, Maharashtra",
  },
  {
    name: "Gaurav Sugandhi",
    organization: "Orarega Technologies OPC PVT LTD",
    position: "Field Support Engineer",
    package: "2.4 LPA",
    address: "Sangam Complex, Sangamwadi, Pune, Maharashtra",
  },
  {
    name: "Sachin Mourya",
    organization: "AGA KHAN RURAL SUPPORT PROGRAM INDIA",
    position: "DO (Skill)",
    package: "3 LPA + Travel & Mobile Allowance",
    address: "BISTAN (Khargone)",
  },
];

// Achievement Images
import RajyaAnand from "./../../assets/Student_archivment/RajyaAnand.jpeg";
import WomanDay from "./../../assets/Student_archivment/WomanDay.jpeg";
import IPRKhushi from "./../../assets/Student_archivment/IPRKhushi.jpeg";
import KhushiHackCraft from "./../../assets/Student_archivment/khushi_Hackathon.jpg";
import solor from "./../../assets/Student_archivment/solar2.jpg";
import merit from "./../../assets/Student_archivment/merit.jpg";
import Inovation from "./../../assets/Student_archivment/Inovation.jpg";
import Inovation2 from "./../../assets/Student_archivment/Inovation2.jpg";
import HackCraft2 from "../../assets/Student_archivment/Hackathon.jpg";

import shooting from "./../../assets/Student_archivment/shothing.png";
import StudentAchievement from "./Componet/StudentAchievements";
import StudentActivityHighlights from "./Componet/StudentActivityHighlights";
import { Info } from "lucide-react";
import InternshipList from "./Componet/Intership";
import TeamPage from "./Componet/MadeBy";

const StudentCorner = () => {
  return (
    <>
        <div className="h-16 bg-blue-500"></div>
        <TeamPage/>
    <div className="bg-gray-100 py-12 px-4 lg:px-10">
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
          src={MainImage}
          alt="Student Corner"
          className="w-full max-w-lg rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
        />
      </div>
    </section>

    {/* Internships & Placements Section */}
    <h2 className="text-2xl border-2 relative overflow-hidden bg-white shadow-sm py-5 rounded-md font-semibold text-gray-800 text-center my-6">
      🌟 Stepping Stones to Success: Our Internship Achievers!
      <img src={cornner} alt="pattern" className=" absolute rotate-90 opacity-30 top-0 left-0 h-44" />
      <img src={cornner} alt="pattern" className=" absolute -rotate-90 opacity-30 bottom-0 right-0 h-44" />
               
    </h2>
    <InternshipList />

<StudentAchievement />
<StudentActivityHighlights/>



    
      {/* Page Title */}
      {/* <h1 className="text-4xl font-bold text-center text-blue-700 mb-8">Student Corner</h1> */}


      {/* Achievements Section */}
      {/* <section className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">🏆 Student Achievements</h2>
        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
          {[solor, Inovation, Inovation2, merit, RajyaAnand, WomanDay, shooting, HackCraft2].map(
            (image, index) => (
              <div key={index} className="relative group">
                <img
                  src={image}
                  alt="Achievement"
                  className="w-full h-56 object-cover rounded-lg shadow-md group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
                  <p className="text-white font-bold text-lg">View More</p>
                </div>
              </div>
            )
          )}
        </div>
      </section> */}

      {/* Student Highlights (Video Iframe Section) */}
      {/* <section className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">🎥 Student Activity Highlights</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <iframe
            className="w-full h-64 rounded-lg shadow-lg"
            src="https://www.youtube.com/embed/your_video_id"
            title="Binary Search Video"
            allowFullScreen
          ></iframe>
          <iframe
            className="w-full h-64 rounded-lg shadow-lg"
            src="https://www.youtube.com/embed/your_documentary_video_id"
            title="Documentary"
            allowFullScreen
          ></iframe>
          <iframe
            className="w-full h-64 rounded-lg shadow-lg"
            src="https://www.youtube.com/embed/your_social_media_skit"
            title="Social Media Skit"
            allowFullScreen
          ></iframe>
        </div>
      </section> */}

      {/* Call to Action */}
      <div className="text-center mt-12">
        <p className="text-lg text-gray-700">Want to be featured? Share your achievements with us!</p>
        <button disabled title="This feature will be introduced in a future update." className="mt-4 px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition">
          Submit Your Achievement
        </button>
      </div>
    </div>
    </>
  );
};

export default StudentCorner;
