import React from "react";
import { motion } from "framer-motion";
import Khushi from "./Khushi.jpeg";

const TeamPage = () => {
  return (
    <div className="h-[90dvh] flex flex-col items-center justify-center bg-gradient-to-r from-gray-50 to-gray-100 p-6">
      <motion.h1 
        className="text-gray-800 text-4xl md:text-5xl font-extrabold mb-6 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Website Created By Students of BCA-6th Sem
      </motion.h1>
      <motion.h2 
        className="text-lg md:text-xl text-gray-700 mb-8 text-center font-semibold"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        Techno Park School of CS & IT
      </motion.h2>
      <div className="flex flex-col md:flex-row items-center gap-12">
        {/* Khushi Yadav */}
        <motion.div 
          className="relative bg-white w-[300px] p-6 rounded-3xl shadow-2xl flex flex-col items-center transform hover:scale-105 transition-all duration-300 hover:shadow-3xl"
          whileHover={{ scale: 1.05 }}
        >
          <div className="w-52 h-52 rounded-full overflow-hidden border-4 border-purple-500 shadow-lg">
            <img src={Khushi} alt="Khushi Yadav" className="w-full h-full object-cover" />
          </div>
          <h2 className="text-2xl font-bold mt-6 text-purple-700">Khushi Yadav</h2>
          <p className="text-gray-600 text-lg font-medium">BCA - 6th Sem</p>
        </motion.div>
        
        {/* Deepanshu Dashore */}
        <motion.div 
          className="relative bg-white p-6 w-[300px] rounded-3xl shadow-2xl flex flex-col items-center transform hover:scale-105 transition-all duration-300 hover:shadow-3xl"
          whileHover={{ scale: 1.05 }}
        >
          <div className="w-52 h-52 rounded-full overflow-hidden border-4 border-blue-500 shadow-lg">
            <img src="https://res.cloudinary.com/dcbniehli/image/upload/f_auto,q_auto/izldykfi2x4wudknil3m" alt="Deepanshu Dashore" className="w-full h-full object-cover" />
          </div>
          <h2 className="text-2xl font-bold mt-6 text-blue-700">Deepanshu Dashore</h2>
          <p className="text-gray-600 text-lg font-medium">BCA - 6th Sem</p>
        </motion.div>
      </div>
    </div>
  );
};

export default TeamPage;