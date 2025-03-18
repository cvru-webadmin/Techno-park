import React from "react";
import { motion } from "framer-motion";
import { FiCreditCard, FiMail, FiUser, FiUsers } from "react-icons/fi";
import { GiTechnoHeart } from "react-icons/gi";
import Khushi from "./Khushi1.jpeg";
import { Link } from "react-router-dom";

const TeamPage = () => {
  return (
    <div className="min-h-[90dvh] flex flex-col items-center justify-center bg-gradient-to-br from-gray-50 via-purple-50 to-blue-50 py-12 px-4">
      <motion.div
        className="max-w-7xl mx-auto text-center"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h1 
          className="text-4xl md:text-6xl font-extrabold mb-4 bg-gradient-to-r from-purple-600 to-blue-600 text-transparent bg-clip-text"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Meet Our Developers
        </motion.h1>
        <motion.h2 
          className="text-xl md:text-2xl text-gray-600 mb-12 font-medium"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          BCA 6th Semester • Techno Park School of CS & IT
        </motion.h2>
      </motion.div>

      {/* <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16"> */}
        {/* Team Members */}
      <div className="mt-10 flex flex-col md:flex-row gap-6 items-center justify-center">
      {/* Khushi Yadav */}
      <CardMotion
          name="Khushi Yadav"
          role="BCA - 6th Sem"
          skills={["Frontend", "UI/UX"]}
          imgSrc={Khushi}
          borderColor="purple"
          description="Khushi specializes in frontend development and UI/UX design, ensuring an intuitive and visually appealing user experience."
          Icon={GiTechnoHeart}
        />
        
        {/* Deepanshu Dashore */}
        <CardMotion
          name="Deepanshu Dashore"
          role="BCA - 6th Sem"
          skills={["Frontend", "Backend"]}
          imgSrc="https://res.cloudinary.com/dcbniehli/image/upload/f_auto,q_auto/izldykfi2x4wudknil3m"
          borderColor="blue"
          description="Deepanshu is proficient in both frontend and backend development, ensuring seamless functionality and optimal performance."
          Icon={GiTechnoHeart}
        />
      </div>
    </div>
  );
};

export default TeamPage;

const CardMotion = ({ name, role, skills, imgSrc, borderColor, description, Icon }) => {
  return (
    <motion.div 
      className="relative bg-white w-[400px] p-8 rounded-3xl shadow-xl flex flex-col items-center transform hover:scale-105 transition-all duration-300 hover:shadow-2xl overflow-hidden group backdrop-blur-md bg-opacity-70 hover:bg-opacity-90"
      initial={{ opacity: 0, x: borderColor === "purple" ? -50 : 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: borderColor === "purple" ? 0.5 : 0.7 }}
      whileHover={{ y: -5 }}
      style={{ border: `2px solid ${borderColor}` }}
    >
      <Icon className="absolute z-10 -top-12 -right-12 group-hover:-right-7  text-9xl group-hover:-top-7 rotate-45 transition-all duration-300" style={{ color: borderColor }} />
      <div className="w-56 h-56 rounded-full overflow-hidden border-4 shadow-lg transition-colors duration-300 relative z-10" style={{ borderColor: borderColor }}>
        <img src={imgSrc} alt={name} className="w-full object-top h-full object-cover" />
      </div>
      <h2 className="text-2xl font-bold mt-6 relative z-10 transition-colors duration-300" style={{ color: borderColor }}>{name}</h2>
      <p className="text-gray-600 text-lg font-medium mt-2 relative z-10 transition-colors duration-300">{role}</p>
      <div className="mt-4 flex gap-3 relative z-10">
        {skills.map(skill => (
          <span key={skill} className="px-4 py-1 rounded-full text-sm font-medium group-hover:text-white transition-colors duration-300 border" style={{ borderColor: `${borderColor}`, color: borderColor }}>
            {skill}
          </span>
        ))}
      </div>
      <p className="mt-4 text-center text-gray-500 relative z-10 transition-colors duration-300">{description}</p>
      <Link to={name==="Deepanshu Dashore"?"https://deepanshu-dashore.netlify.app":"https://khushi-yadav.netlify.app"} target="_black" className="mt-4 cursor-pointer px-4 py-2 text-sm font-semibold text-white rounded-lg shadow-md group-hover:bg-opacity-90 transition-colors duration-300" style={{ backgroundColor: borderColor }}>About More</Link>
    </motion.div>
  );
};