import React from 'react';
import { NavLink } from 'react-router-dom';
import CvruGlobLogo from '../../../assets/CVRU_GlobLogo.png'
import Techno_park from '../../../assets/TechnoPARK Logo.png'

const About = () => {
  return (
    <div className="bg-gray-100 text-gray-800">
      {/* Row 1 */}
      <div className="flex items-center justify-between py-4 px-10 bg-[#012970] text-white">
        {/* Column 1: Logo */}
        <div className="w-1/4 flex justify-start">
          <div className="w-20 h-20 bg-white rounded-md shadow-md flex items-center justify-center">
            <img
              src={CvruGlobLogo}
              alt="University Logo"
              className="w-3/4 h-3/4 object-contain"
            />
          </div>
        </div>

        {/* Column 2: University Name */}
        <div className="text-center flex-1">
          <h1 className="text-2xl font-bold uppercase tracking-wider">
            Dr. C.V. Raman University
          </h1>
        </div>

        {/* Column 3: Main Website Button */}
        <div className="w-1/4 flex justify-end">
          <NavLink
            to="https://cvrump.ac.in/"
            target="_blank"
            // rel="noopener noreferrer"
            className="bg-[#ffc107] capitalize text-black px-4 py-2 rounded-md font-medium hover:bg-[#e6b806] transition-all"
          >
            Visit University site
          </NavLink>
        </div>
      </div>

      {/* Row 2 */}
      <div className="grid grid-cols-2 bg-gray-50 py-8 px-6">
        {/* Column 1: Techno Park Logo */}
        <div className="flex items-center justify-center">
          <div className="w-1/2">
            <img
              src={Techno_park}
              alt="Techno Park Logo"
              className="w-full object-contain"
            />
          </div>
        </div>

        {/* Column 2: Department Name */}
        <div className="flex flex-col lg:h-36 justify-center">
          <h2 className="text-4xl uppercase font-bold text-gray-900 tracking-wide pl-2">
            Techno Park
          </h2>
          <p className="mt-2 text-xl relative z-10 text-white bg-blue-900 shadow-md font-semibold border border-gray-500 w-10/12 pl-2">
            School of Computer Science and Information Technology
          </p>
          <span className='h-6 w-6 absolute z-0 translate-y-10 right-[9.5rem] shadow-md rotate-45 bg-blue-900'></span>
        </div>
      </div>

      {/* Row 3 */}
      <div className="grid grid-cols-3 bg-white py-8 px-6 gap-7">
        {/* Column 1: About Computer Science */}
        <div className="flex flex-col justify-center h-52">
          <h3 className="text-xl font-bold text-gray-800">About Computer Science & Technology</h3>
          <p className="mt-4 text-gray-600 leading-relaxed h-28">
            Our department provides an excellent foundation in computer science and IT, offering
            students opportunities to excel in academics, research, and industry. 
            We emphasize practical learning and innovative problem-solving techniques to prepare 
            students for real-world challenges.
          </p>
        </div>
      
        {/* Column 2: Tech Placements & Future */}
        <div className="flex flex-col justify-center h-52">
          <h3 className="text-xl font-bold text-gray-800">Tech Placements & Future</h3>
          <p className="mt-4 text-gray-600 leading-relaxed h-28">
            We equip students with the skills required to secure placements in top tech companies,
            ensuring a bright and successful career path. With a focus on emerging trends, we
            prepare students for future technologies like AI, data science, and blockchain.
          </p>
        </div>
      
        {/* Column 3: Research & Innovations */}
        <div className="flex flex-col justify-center h-52">
          <h3 className="text-xl font-bold text-gray-800">Research & Innovations</h3>
          <p className="mt-4 text-gray-600 leading-relaxed h-28">
            Explore groundbreaking research and innovative projects driven by our talented faculty and
            students. Our department focuses on emerging technologies, fostering a culture of innovation. 
            Join us in redefining the boundaries of technology and its applications in society.
          </p>
        </div>
      </div>
      

     <div className='grid grid-cols-3 gap-10 bg-white'>
     <div></div>
      <NavLink
            to="/About"
            className="mt-4 inline-block capitalize bg-[#012970] text-white text-center px-6 py-3.5 rounded-md text-sm font-medium hover:bg-[#011d53] transition-all"
          >
            Read More About Techno park
          </NavLink>
     </div>
     
    </div>
  );
};

export default About;
