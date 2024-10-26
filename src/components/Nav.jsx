import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [hoveredTab, setHoveredTab] = useState(null);
  const [submenuTimeout, setSubmenuTimeout] = useState(null);

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

  // Cleanup function to clear the timeout
  useEffect(() => {
    return () => {
      if (submenuTimeout) {
        clearTimeout(submenuTimeout);
      }
    };
  }, [submenuTimeout]);

  const handleMouseEnter = (name) => {
    if (submenuTimeout) {
      clearTimeout(submenuTimeout);
    }
    setHoveredTab(name);
  };

  const handleMouseLeave = () => {
    // Set a timeout before closing the submenu
    const timeoutId = setTimeout(() => {
      setHoveredTab(null);
    }, 200); // Adjust the delay as needed
    setSubmenuTimeout(timeoutId);
  };

  return (
    <nav className="bg-gray-900 text-white py-4 px-6 shadow-lg">
      <div className="flex items-center justify-between">
        {/* Logo Section */}
        <div className="text-center">
          <h1 className="text-2xl font-extrabold tracking-wide">Techno Park</h1>
          <p className="text-sm font-light text-gray-300">School of Computer Science and Technology</p>
        </div>

        {/* Navigation Links */}
        <ul className="flex space-x-6">
          {navLinks.map((link, index) => (
            <li
              key={index}
              onMouseEnter={() => handleMouseEnter(link.name)}
              onMouseLeave={handleMouseLeave}
              className="relative group"
            >
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

              {/* Animated Dropdown Submenu */}
              {link.submenu && (
                <ul
                  className={`absolute top-full left-0 bg-gray-800 mt-2 py-2 rounded-md shadow-lg transition-opacity duration-300 ${
                    hoveredTab === link.name ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                  }`}
                  style={{
                    pointerEvents: hoveredTab === link.name ? 'auto' : 'none',
                  }}
                  onMouseEnter={() => handleMouseEnter(link.name)} // Keep the dropdown open
                  onMouseLeave={handleMouseLeave} // Close the dropdown when mouse leaves
                >
                  {link.submenu.map((subitem, subIndex) => (
                    <li key={subIndex} className="px-4 py-2 hover:bg-gray-700">
                      <NavLink
                        to={`${link.path}/${subitem.toLowerCase().replace(/ /g, "-")}`}
                        className="text-sm text-gray-200 hover:text-white transition duration-200"
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
