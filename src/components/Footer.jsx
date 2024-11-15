import React from "react";
import { NavLink } from "react-router-dom";
import Social_media_links from "./footor subcomponets/Social_media_links";
import Logo from "./footor subcomponets/Logo";
import Contact from "./footor subcomponets/Contact";
import Footer_navigation from "./footor subcomponets/Footer_navigation";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 px-5 lg:px-8">
      

      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-8 gap-10 mt-8">
        
      <div className="container col-span-2 flex flex-col items-center">
      {/* Logo Section */}
        <Logo />
        {/* About Section */}
        <div className="w-full">
          <h3 className="text-lg font-semibold text-white mb-4">About Us</h3>
          <p className="text-sm leading-relaxed">
            Welcome to the School of Computer Science and Technology. We aim to
            empower students with advanced knowledge and skills in technology
            and innovation.
          </p>
        </div>
      </div>

        {/* Contact Information Section */}
        <Contact />

        {/* Quick Links Section */}
        <Footer_navigation />

        {/* Social Media Section */}
        <Social_media_links />
        
        {/* Acknowledgment Section */}
        <section className="text-left col-span-2">
          <h2 className="text-lg font-bold text-gray-100 mb-4">Acknowledgment</h2>
          <p className="text-gray-300 text-sm">
            This website was developed by{" "}
            <span className="font-medium text-gray-100">Deepanshu Dashore</span> and{" "}
            <span className="font-medium text-gray-100">Khushi Yadav</span>, students
            of the{" "}
            <span className="font-semibold text-gray-100">
              Techno-park School of Computer Science and Technology, Dr. C.V. Raman University
            </span>.
          </p>
          <p className="text-gray-300 text-sm mt-4">
            We extend our gratitude to{" "}
            <span className="font-medium text-gray-100">Miss Swati Atre</span>, Head
            of the Department, for her support and encouragement throughout the
            project.
          </p>
          <p className="text-gray-300 text-sm mt-4">
            This project is dedicated to enhancing access to departmental resources
            and improving user experience.
          </p>
        </section>
      </div>

      {/* Copyright Section */}
      <div className="mt-10 text-center text-gray-400 text-sm py-3 bg-gray-800/30">
        © {new Date().getFullYear()} Techno Park, School of Computer Science and Technology. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
