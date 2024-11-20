import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState(null); 
  const [tab,settab]=useState("Home");

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

  const [sticky,setSticky]=useState(false);
  useEffect(()=>{
    window.addEventListener('scroll',(e)=>{
      window.scrollY>50?setSticky(true):setSticky(false);
    })
  },[])

  useEffect(()=>{
    settab(window.location.pathname);
  },[window.location.pathname])

  // console.log(tab)
  return (
    <nav className={`fixed w-full top-0 z-50 text-white py-2 lg:px-6 px-4   ${sticky?"bg-gray-900 transition-all duration-200 ease-in-out transform":"bg-transparent transition-all duration-200 ease-in-out transform"}`}>
      <div className="flex items-center justify-between">
       {/* Logo Section */}
         <div className="flex items-center space-x-2">
           <div className="text-left">
             <h1 className="text-md lg:text-xl font-extrabold tracking-wide text-white">Techno Park</h1>
             <p className={`text-[10px] lg:text-xs font-normal  ${sticky?"text-gray-400":"text-gray-300"}`}>School of Computer Science and Technology</p>
           </div>
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
          className={`flex-col lg:flex-row lg:flex xl:space-x-6 lg:space-x-3 absolute z-30 lg:z-0 lg:space-y-0 space-y-5 lg:py-0 py-5 top-[3.6rem] lg:top-0 w-full lg:w-auto lg:right-0 right-0 pl-5 lg:relative bg-gray-900 lg:bg-transparent ${
            isMobileMenuOpen ? "flex" : "hidden"
          } lg:flex`}
        >
          {navLinks.map((link, index) => (
            <li key={index} className="relative group">
              <div className="flex items-center">
                <NavLink
                  to={link.path}
                  onClick={()=>settab(link.path)}
                  className="xl:text-base lg:text-xs font-semibold transition duration-300 text-white  group-hover:text-amber-400">
                  {link.name}
              
                  {link.submenu?
                  // for dorpdown tabs
                  (<span
                    className={`absolute left-0 -bottom-1 w-[75%] h-[1.5px] bg-amber-400 transform group-hover:scale-x-100 transition-transform duration-300 origin-left ${
                      tab==link.path?"scale-100":"scale-x-0"
                    }`}></span>):
                  //for all tab 
                  (<span
                    className={`absolute left-0 -bottom-1 w-full h-[1.5px] bg-amber-400 transform group-hover:scale-x-100 transition-transform duration-300 origin-left ${
                      tab==link.path?"scale-100":"scale-x-0"
                    }`}
                    ></span> )}
                
                </NavLink>

                {/* Toggle Submenu Button */}
                {link.submenu && (
                  <button 
                    onClick={() => toggleSubmenu(link.name)}
                    className="ml-2 focus:outline-none"
                  >
                    {openSubmenu === link.name ? (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 text-white -rotate-45 transform duration-150" viewBox="0 0 24 24">
                        <rect width="24" height="24" fill="none" />
                        <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M16 16V8H8" />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 rotate-[135deg] transform duration-150"
                        viewBox="0 0 24 24"
                      >
                        <rect width="24" height="24" fill="none" />
                        <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M16 16V8H8" />
                      </svg>
                    )}
                  </button>
                )}
              </div>

              {/* Animated Dropdown Submenu */}
              {link.submenu && openSubmenu === link.name && (
                <ul  key={index} 
                  onMouseLeave={() => setOpenSubmenu(false)}
                  className={`absolute w-48 z-30 top-10 left-0 bg-gray-800 mt-2 py-3 px-2 rounded-lg shadow-xl transition-transform duration-500 ease-in-out transform ${
                    openSubmenu === link.name ? "opacity-100 scale-100 visible" : "opacity-0 scale-95 invisible"
                  }`}
                >
                  {link.submenu.map((subitem, subIndex) => (
                    <NavLink to={`${link.path}/${subitem.toLowerCase().replace(/ /g, "-")}`}>
                    <li
                      key={subIndex}
                      className="px-4 py-2 rounded-md transition-colors duration-300 hover:bg-gradient-to-r hover:from-amber-500 hover:to-amber-700 hover:shadow-md text-sm text-gray-200 hover:text-gray-200"
                    >
                        {subitem}
                    </li>
                      </NavLink>
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
