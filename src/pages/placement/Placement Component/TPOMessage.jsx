import React from "react";
import TPO from '../../../assets/images/TPO.png'

const IntroTPO = () => {
  return (
    <section className="p-6 lg:p-10 justify-center flex-col flex items-left ml-10 ">
        <h2 className="text-4xl text-gray-800 mb-7 lg:block hidden font-semibold">
        <div className="flex">
        <svg xmlns="http://www.w3.org/2000/svg" className="mr-1" width="40" height="40" viewBox="0 0 20 20"><g fill="none"><path fill="url(#fluentColorChatMore200)" d="M10 2a8 8 0 1 1-3.613 15.14l-.121-.065l-3.645.91a.5.5 0 0 1-.62-.441v-.082l.014-.083l.91-3.644l-.063-.12a8 8 0 0 1-.83-2.887l-.025-.382L2 10a8 8 0 0 1 8-8"/><path fill="url(#fluentColorChatMore201)" d="M10.5 11h-3l-.09.008a.5.5 0 0 0 0 .984L7.5 12h3l.09-.008a.5.5 0 0 0 0-.984zm2-3h-5l-.09.008a.5.5 0 0 0 0 .984L7.5 9h5l.09-.008a.5.5 0 0 0 0-.984z"/><defs><linearGradient id="fluentColorChatMore200" x1="2.571" x2="16.54" y1="5" y2="28.815" gradientUnits="userSpaceOnUse"><stop stop-color="#0fafff"/><stop offset="1" stop-color="#cc23d1"/></linearGradient><linearGradient id="fluentColorChatMore201" x1="7.525" x2="7.974" y1="8.07" y2="12.414" gradientUnits="userSpaceOnUse"><stop stop-color="#fdfdfd"/><stop offset="1" stop-color="#cceaff"/></linearGradient></defs></g></svg>
          Message From Training and Placement Officer
        </div>
        </h2>
      <div className="w-[100%] text-justify flex justify-between pr-10 flex-col lg:flex-row overflow-hidden">
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
            <h3 className="text-[28px] font-semibold text-blue-700">
            Mr. Abhilesh Kumar Kochle(TPO)
            </h3>
            <p className="text-[18px] text-[#555] font-medium mt-1">13 years of experience in Industries and Education Sector</p>
          </p>
          <p className="leading-relaxed mt-4 text-[17px] text-justify text-gray-600">
          At the outset I, Abhilesh Kumar Kochle, Training and Placement Officer, Dr. C. V. Raman University Khandwa, welcome you to the one of the fastest growing University in East Nimar.
          </p>
          <p className="leading-relaxed mt-4 text-[17px] text-justify text-gray-600">
          Training and Placement Cell is integral part of university where we prepare the students to appear for Campus interview through our VIHAN program that includes Resume writing, Group Discussion, Personal Interview and other sessions that makes students Industry ready. We also provide internship opportunities to our students to get exposure to the working environment of industry.
          </p>
          <p className="leading-relaxed mt-4 text-[17px] text-justify text-gray-600">
          We invite reputed companies to universities for close campus drives to provide job opportunities to all courses students. The Training and Placement Cell also educates students with various carrier opportunities in different areas such as Public Sector, Armed forces and Government Sector services by Guest lectures and Career counselling.
          </p>
        </div>
      </div>
    </section>
  );
};

export default IntroTPO;
