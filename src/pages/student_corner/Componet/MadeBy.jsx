import React from "react";
import { motion } from "framer-motion";
import Khushi from "./Khushi1.jpeg";

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

      <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
        {/* Khushi Yadav */}
        <motion.div 
          className="relative bg-white w-[320px] p-8 rounded-3xl shadow-xl flex flex-col items-center transform hover:scale-105 transition-all duration-300 hover:shadow-2xl border border-purple-100"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          whileHover={{ y: -5 }}
        >
          <div className="w-56 h-56 rounded-full overflow-hidden border-4 border-purple-500 shadow-lg hover:border-purple-600 transition-colors duration-300">
            <img src={Khushi} alt="Khushi Yadav" className="w-full object-top h-full object-cover" />
          </div>
          <h2 className="text-2xl font-bold mt-6 text-purple-700">Khushi Yadav</h2>
          <p className="text-gray-600 text-lg font-medium mt-2">BCA - 6th Sem</p>
          <div className="mt-4 flex gap-3">
            <span className="px-4 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">Frontend</span>
            <span className="px-4 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">UI/UX</span>
          </div>
        </motion.div>
        
        {/* Deepanshu Dashore */}
        <motion.div 
          className="relative bg-white w-[320px] p-8 rounded-3xl shadow-xl flex flex-col items-center transform hover:scale-105 transition-all duration-300 hover:shadow-2xl border border-blue-100"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          whileHover={{ y: -5 }}
        >
          <div className="w-56 h-56 rounded-full overflow-hidden border-4 border-blue-500 shadow-lg hover:border-blue-600 transition-colors duration-300">
            <img src="https://res.cloudinary.com/dcbniehli/image/upload/f_auto,q_auto/izldykfi2x4wudknil3m" alt="Deepanshu Dashore" className="w-full h-full object-cover" />
          </div>
          <h2 className="text-2xl font-bold mt-6 text-blue-700">Deepanshu Dashore</h2>
          <p className="text-gray-600 text-lg font-medium mt-2">BCA - 6th Sem</p>
          <div className="mt-4 flex gap-3">
            <span className="px-4 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">Frontend</span>
            <span className="px-4 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">Backend</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default TeamPage;