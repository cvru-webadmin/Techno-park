import React from "react";
import TPO from '../../../assets/images/TPO(1).jpg'

const IntroTPO = () => {
  return (
    <section className="px-6 lg:p-10 pb-6 justify-center flex-col flex items-left lg:ml-10 ">
        <h2 className="lg:text-4xl md:text-3xl text-2xl text-gray-800 mb-7 font-bold">
        <div className="flex">
          Message From Training and Placement Officer
        </div>
        </h2>
      <div className="w-[100%] text-justify flex justify-between lg:pr-10 flex-col lg:flex-row overflow-hidden">
        {/* Image Container */}
  <div className="relative lg:h-[410px] lg:w-[350px] h-[400px] overflow-hidden rounded-lg shadow-lg group">
    <img
      src={TPO} // Replace with the actual image URL
      alt="TPO Sir"
      className="object-cover object-top h-full w-full transition-transform duration-300 group-hover:scale-105"
    />
    {/* Overlay Effect */}
    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-300"></div>
    {/* Image Label */}
    <div className="absolute bottom-4 left-4 bg-white bg-opacity-90 px-4 py-2 rounded-lg shadow-md">
      <span className="text-gray-800 font-semibold text-lg">Mr. Abhilesh Kumar Kochle</span>
      <p className="text-sm text-gray-600">Training and Placement Officer</p>
    </div>
  </div>
        {/* Right Column: Content */}
        <div className="lg:w-[67%] py-1">
          {/* Message Content */}
          <p className="text-gray-700 lg:mt-0 mt-5 mb-2">
            <h3 className="lg:text-[28px] text-[22px] font-semibold text-blue-700">
            Mr. Abhilesh Kumar Kochle
            </h3>
            <p className="lg:text-[18px] text-[16px] text-[#555] font-medium mt-1">13 years of experience in Industries and Education Sector</p>
          </p>
          <p className="leading-relaxed lg:mt-4 mt-2 text-[15px] lg:text-[17px] text-justify text-gray-600">
          At the outset I, Abhilesh Kumar Kochle, Training and Placement Officer, Dr. C. V. Raman University Khandwa, welcome you to the one of the fastest growing University in East Nimar.
          </p>
          <p className="leading-relaxed lg:mt-4 mt-2 text-[15px] lg:text-[17px] text-justify text-gray-600">
          Training and Placement Cell is integral part of university where we prepare the students to appear for Campus interview through our VIHAN program that includes Resume writing, Group Discussion, Personal Interview and other sessions that makes students Industry ready. We also provide internship opportunities to our students to get exposure to the working environment of industry.
          </p>
          <p className="leading-relaxed lg:mt-4 mt-2 text-[15px] lg:text-[17px] text-justify text-gray-600">
          We invite reputed companies to universities for close campus drives to provide job opportunities to all courses students. The Training and Placement Cell also educates students with various carrier opportunities in different areas such as Public Sector, Armed forces and Government Sector services by Guest lectures and Career counselling.
          </p>
        </div>
      </div>
    </section>
  );
};

export default IntroTPO;
