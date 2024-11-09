import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState(null); // State to manage opened submenu

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about", submenu: ["Our Mission", "Faculty", "Facilities"] },
    { name: "Courses", path: "/courses", submenu: ["Undergraduate", "Postgraduate", "Diploma"] },
    { name: "Activities", path: "/activities" },
    { name: "Campus", path: "/campus" },
    { name: "Achievements", path: "/achievements" },
    { name: "Placement", path: "/placement" },
    { name: "Admission", path: "/admission" },
    { name: "Contact", path: "/contact" },
  ];

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev);
  };

  // Function to toggle submenu visibility
  const toggleSubmenu = (name) => {
    setOpenSubmenu((prev) => (prev === name ? null : name)); // Toggle the submenu
  };

  return (
    <nav className="bg-gray-900 fixed lg:static w-full top-0 z-50 text-white py-2 lg:px-6 px-4 shadow-lg">
      <div className="flex items-center justify-between">
        {/* Logo Section */}
        <div className="lg:text-center text-left">
          <h1 className="lg:text-2xl text-xl font-extrabold tracking-wide">Techno Park</h1>
          <p className="lg:text-sm text-[0.65rem] font-light text-gray-300">School of Computer Science and Technology</p>
        </div>

        {/* Hamburger Menu for Mobile */}
        <button
          className="block lg:hidden focus:outline-none"
          onClick={toggleMobileMenu}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>

        {/* Navigation Links */}
        <ul
          className={`flex-col lg:flex-row lg:flex lg:space-x-6 absolute z-30 lg:z-0 lg:space-y-0 space-y-5 lg:py-0 py-5 top-[3.6rem] lg:top-0 w-full lg:w-auto lg:right-0 right-0 pl-5 lg:relative bg-gray-900 lg:bg-transparent ${
            isMobileMenuOpen ? "flex" : "hidden"
          } lg:flex`}
        >
          {navLinks.map((link, index) => (
            <li key={index} className="relative group">
              <div className="flex items-center">
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    `text-base font-semibold transition duration-300 ${
                      isActive
                        ? "text-blue-400 underline decoration-2 decoration-blue-500 underline-offset-4"
                        : "text-white"
                    } hover:text-blue-300`
                  }
                >
                  {link.name}
                </NavLink>

                {/* Toggle Submenu Button */}
                {link.submenu && (
                  <button
                    onClick={() => toggleSubmenu(link.name)}
                    className="ml-2 focus:outline-none"
                  >
                    {openSubmenu === link.name ? (
                      <svg
                        className="w-4 h-4 transform rotate-90" // Rotate for open state
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 12h12m-6-6l6 6-6 6" />
                      </svg>
                    ) : (
                      <svg
                        className="w-4 h-4 -rotate-90"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 12h12m-6 6l6-6-6-6" />
                      </svg>
                    )}
                  </button>
                )}
              </div>

              {/* Animated Dropdown Submenu */}
              {link.submenu && openSubmenu === link.name && (
                <ul  onMouseLeave={()=>setOpenSubmenu(false)} className={`absolute z-30 top-full left-0 bg-gray-800 mt-2 py-2 rounded-md shadow-lg transition-all duration-300`}>
                  {link.submenu.map((subitem, subIndex) => (
                    <li key={subIndex} className="px-4 py-2 hover:bg-blue-600 transition-colors duration-200 rounded-md">
                      <NavLink
                        to={`${link.path}/${subitem.toLowerCase().replace(/ /g, "-")}`}
                        className="text-sm text-gray-200 hover:text-white transition-colors duration-200"
                      >
                        {subitem}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
