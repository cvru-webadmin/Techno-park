import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import MobilNavbar from "./MobileNav";
import { ScrollContext } from "../context/DropDownScrollContext";

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState(null);
  const [tab, settab] = useState("Home");
  const { setDropDown } = useContext(ScrollContext);

  const navLinks = [
    { name: "Home", path: "/" },
    {
      name: "About",
      path: "/about",
      submenu: [
        "Our Mission",
        "Faculty",
        { name: "Chancellor's Message", path: "/about/chancellor-message" },
        { name: "Vice Chancellor's Message", path: "/about/vice-chancellor-message"},
        { name: "Registrar's Message", path: "/about/registrar-message" },
        { name: "Vedant Ahluwalia", path: "/about/Vedant-Profile" },
      ],
    },
    {
      name: "Courses",
      path: "/courses",
      submenu: ["Diploma", "Undergraduate", "Postgraduate"],
    },
    { name: "Activities", path: "/activities" },
    { name: "Campus", path: "/campus" },
    { name: "Achievements", path: "/achievements" },
    { name: "Placement", path: "/placement" },
    { name: "Events", path: "/event" },
    { name: "Student Corner", path: "/student-Corner" },
    { name: "Contact", path: "/contact" },
  ];

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev);
  };

  // Function to toggle submenu visibility
  const toggleSubmenu = (name) => {
    setOpenSubmenu((prev) => (prev === name ? null : name)); // Toggle the submenu
  };

  const [sticky, setSticky] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", (e) => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    });
  }, []);

  useEffect(() => {
    settab(window.location.pathname);
  }, [window.location.pathname]);

  // console.log(tab)
  return (
    <>
      <MobilNavbar />
      <nav
        className={`fixed w-full top-0 z-30 text-white py-2 lg:px-6 px-4   ${
          sticky
            ? "bg-gray-900 transition-all duration-200 ease-in-out transform"
            : "bg-transparent transition-all duration-200 ease-in-out transform"
        }`}
      >
        <div className="flex items-center justify-between">
          {/* Logo Section */}
          <div className="flex items-center space-x-2">
            <div className="text-left">
              <h1 className="text-md lg:text-xl font-extrabold tracking-wide text-white">
                Techno Park
              </h1>
              <p
                className={`text-[10px] lg:text-xs font-normal  ${
                  sticky ? "text-gray-400" : "text-gray-300"
                }`}
              >
                School of Computer Science and Technology
              </p>
            </div>
          </div>

          {/* Navigation Links */}
          <ul
            className={`flex-col lg:flex-row lg:flex xl:space-x-6 lg:space-x-3 absolute z-30 lg:z-0 lg:space-y-0 space-y-5 lg:py-0 py-5 top-[3.6rem] lg:top-0 w-full lg:w-auto lg:right-0 right-0 pl-5 lg:relative bg-gray-900 lg:bg-transparent ${
              isMobileMenuOpen ? "flex" : "hidden"
            } lg:flex`}
          >
            {navLinks.map((link, index) => (
              <li key={index + link.path} className="relative group">
                <div className="flex items-center">
                  <NavLink
                    to={link.path}
                    onClick={() => {
                      settab(link.path);
                      window.scrollTo(0, 0);
                    }}
                    className="xl:text-base lg:text-xs font-semibold transition duration-300 text-white  group-hover:text-amber-400"
                  >
                    {link.name}

                    {link.submenu ? (
                      // for dorpdown tabs
                      <span
                        className={`absolute left-0 -bottom-1 w-[75%] h-[1.5px] bg-amber-400 transform group-hover:scale-x-100 transition-transform duration-300 origin-left ${
                          tab == link.path ? "scale-100" : "scale-x-0"
                        }`}
                      ></span>
                    ) : (
                      //for all tab
                      <span
                        className={`absolute left-0 -bottom-1 w-full h-[1.5px] bg-amber-400 transform group-hover:scale-x-100 transition-transform duration-300 origin-left ${
                          tab == link.path ? "scale-100" : "scale-x-0"
                        }`}
                      ></span>
                    )}
                  </NavLink>

                  {/* Toggle Submenu Button */}
                  {link.submenu && (
                    <button
                      onClick={() => toggleSubmenu(link.name)}
                      className="ml-2 focus:outline-none"
                    >
                      {openSubmenu === link.name ? (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 text-white -rotate-45 transform duration-150"
                          viewBox="0 0 24 24"
                        >
                          <rect width="24" height="24" fill="none" />
                          <path
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="3"
                            d="M16 16V8H8"
                          />
                        </svg>
                      ) : (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 rotate-[135deg] transform duration-150"
                          viewBox="0 0 24 24"
                        >
                          <rect width="24" height="24" fill="none" />
                          <path
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="3"
                            d="M16 16V8H8"
                          />
                        </svg>
                      )}
                    </button>
                  )}
                </div>

                {/* Animated Dropdown Submenu */}

                {link.submenu && openSubmenu === link.name && (
                  <ul
                    key={index}
                    onMouseLeave={() => setOpenSubmenu(false)}
                    className={`absolute w-48 z-30 top-10 left-0 bg-gray-800 mt-2 py-3 px-2 rounded-lg shadow-xl transition-transform duration-500 ease-in-out transform ${
                      openSubmenu === link.name
                        ? "opacity-100 scale-100 visible"
                        : "opacity-0 scale-95 invisible"
                    }`}
                  >
                    {link.submenu.map((subitem, subIndex) => {
                      // Check if subitem is an object or string
                      if (typeof subitem === "object") {
                        return (
                          <NavLink key={subIndex} to={subitem.path}>
                            <li
                              onClick={() => window.scrollTo(0, 0)}
                              className="px-4 py-2 rounded-md transition-colors duration-300 hover:bg-gradient-to-r hover:from-amber-500 hover:to-amber-700 hover:shadow-md text-sm text-gray-200 hover:text-gray-200"
                            >
                              {subitem.name}
                            </li>
                          </NavLink>
                        );
                      } else {
                        return (
                          <NavLink to={link.path}>
                            <li
                              onClick={() => {
                                setDropDown(subitem);
                              }}
                              key={subIndex}
                              className="px-4 py-2 rounded-md transition-colors duration-300 hover:bg-gradient-to-r hover:from-amber-500 hover:to-amber-700 hover:shadow-md text-sm text-gray-200 hover:text-gray-200"
                            >
                              {subitem}
                            </li>
                          </NavLink>
                        );
                      }
                    })}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
