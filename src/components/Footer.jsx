import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 px-6 lg:px-10">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-5 gap-8">

         {/* Logo Section */}
         <div className="lg:text-center text-left col-span-2">
          <h1 className="lg:text-2xl text-xl font-extrabold tracking-wide">Techno Park</h1>
          <p className="lg:text-sm text-[0.65rem] font-light text-gray-300">School of Computer Science and Technology</p>
        </div>
        
        {/* Quick Links Section */}
        <div>
          <h2 className="text-lg font-semibold text-white mb-4">Quick Links</h2>
          <ul className="space-y-2">
            <li>
              <NavLink to="/" className="hover:text-blue-400 transition duration-200">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className="hover:text-blue-400 transition duration-200">
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink to="/courses" className="hover:text-blue-400 transition duration-200">
                Courses
              </NavLink>
            </li>
            <li>
              <NavLink to="/admission" className="hover:text-blue-400 transition duration-200">
                Admission
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className="hover:text-blue-400 transition duration-200">
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
        
        {/* Contact Information Section */}
        <div>
          <h2 className="text-lg font-semibold text-white mb-4">Contact Us</h2>
          <p className="text-sm">Techno Park, School of Computer Science and Technology</p>
          <p className="text-sm mt-2">123 University Ave, City, State, 12345</p>
          <p className="text-sm mt-2">Phone: (123) 456-7890</p>
          <p className="text-sm mt-2">Email: info@technopark.edu</p>
        </div>

        {/* Social Media Section */}
        <div>
          <h2 className="text-lg font-semibold text-white mb-4">Follow Us</h2>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-blue-500 transition duration-200">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-blue-500 transition duration-200">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-blue-500 transition duration-200">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-blue-500 transition duration-200">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>
      </div>

      <div className="mt-10 text-center text-gray-300 text-sm py-2 bg-gray-400/10">
        © {new Date().getFullYear()} Techno Park, School of Computer Science and Technology. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
