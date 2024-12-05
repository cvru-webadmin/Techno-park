import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const MobilNavbar = () => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState(null);
  const [tab, settab] = useState("Home");
  const [sticky, setSticky] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about", submenu: ["Our Mission", "Faculty", "Facilities"] },
    { name: "Courses", path: "/courses", submenu: ["Undergraduate", "Postgraduate", "Diploma"] },
    { name: "Activities", path: "/activities" },
    { name: "Campus", path: "/campus" },
    { name: "Achievements", path: "/achievements" },
    { name: "Placement", path: "/placement" },
    { name: "Events", path: "/event" },
    { name: "Contact", path: "/contact" },
  ];

  const toggleDrawer = () => {
    setDrawerOpen(!isDrawerOpen);
  };

  const toggleSubmenu = (name) => {
    setOpenSubmenu((prev) => (prev === name ? null : name));
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setSticky(window.scrollY > 50);
    });
  }, []);

  useEffect(() => {
    settab(window.location.pathname);
  }, [window.location.pathname]);

  return (
    <>
      {/* Top Navbar */}
      <nav
        className={`fixed min-[1023px]:hidden w-full top-0 z-50 text-white py-2 px-4 ${
          sticky
            ? "bg-gray-900 transition-all duration-200"
            : "bg-transparent transition-all duration-200"
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
                className={`text-[10px] lg:text-xs font-normal ${
                  sticky ? "text-gray-400" : "text-gray-300"
                }`}
              >
                School of Computer Science and Technology
              </p>
            </div>
          </div>

          {/* Drawer Toggle Button */}
          <button
            onClick={toggleDrawer}
            className="text-white bg-blue-700 hover:bg-blue-800 p-2 rounded-lg focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </nav>

      {/* Drawer with Backdrop */}
      {isDrawerOpen && (
        <div
          className="fixed inset-0 z-40 bg-black bg-opacity-50"
          onClick={toggleDrawer}
        ></div>
      )}

      <div
        className={`fixed top-0 right-0 z-50 h-full w-64 bg-gray-900 text-white transform transition-transform duration-300 ${
          isDrawerOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Drawer Header */}
        <div className="flex justify-between items-center p-4 border-b border-gray-700">
          <h5 className="text-lg font-semibold">Menu</h5>
          <button
            onClick={toggleDrawer}
            className="text-gray-400 hover:text-white focus:outline-none"
          >
            <svg
              className="w-5 h-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1l6 6m0 0l6 6M7 7l6-6M7 7l-6 6"
              />
            </svg>
          </button>
        </div>

        {/* Drawer Links */}
        <ul className="p-4 space-y-4">
          {navLinks.map((link, index) => (
            <li key={index} className="relative">
              <div className="flex items-center justify-between">
                <NavLink
                  to={link.path}
                  onClick={() => {
                    settab(link.path);
                    window.scrollTo(0, 0);
                    toggleDrawer();
                  }}
                  className="block py-2 text-sm font-medium hover:text-amber-400"
                >
                  {link.name}
                </NavLink>

                {/* Submenu Toggle Button */}
                {link.submenu && (
                  <button
                    onClick={() => toggleSubmenu(link.name)}
                    className="focus:outline-none"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className={`w-4 h-4 transform duration-150 ${
                        openSubmenu === link.name ? "rotate-180" : "rotate-0"
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                )}
              </div>

              {/* Submenu */}
              {link.submenu && openSubmenu === link.name && (
                <ul className="pl-4 mt-2 space-y-2 text-sm">
                  {link.submenu.map((subitem, subIndex) => (
                    <li key={subIndex}>
                      <NavLink
                        to={`${link.path}/${subitem.toLowerCase().replace(/ /g, "-")}`}
                        onClick={toggleDrawer}
                        className="block py-1 hover:text-amber-400"
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
    </>
  );
};

export default MobilNavbar;
