import React, { useContext, useEffect, useState } from "react";
import { LuPanelLeftClose } from "react-icons/lu";
import { FaBars, FaHome, FaFolder, FaImages, FaUsers, FaTrashAlt, FaSignOutAlt } from "react-icons/fa"; // Example icons
import { FireContext } from "../../Context/context";
import { NavLink } from "react-router-dom";
import LogoutConfirmationModal from "./sub Componet/LogoutConfrom";

let homeIcon=(<svg xmlns="http://www.w3.org/2000/svg" className="h-6" viewBox="0 0 24 24">
	<rect width="24" height="24" fill="none" />
	<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5">
		<path d="M6.133 21C4.955 21 4 20.02 4 18.81v-8.802c0-.665.295-1.295.8-1.71l5.867-4.818a2.09 2.09 0 0 1 2.666 0l5.866 4.818c.506.415.801 1.045.801 1.71v8.802c0 1.21-.955 2.19-2.133 2.19z" />
		<path d="M9.5 21v-5.5a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2V21" />
	</g>
</svg>);

let TeamsIcon=(<svg xmlns="http://www.w3.org/2000/svg" className="h-6" viewBox="0 0 20 20">
	<rect width="20" height="20" fill="none" />
	<path fill="currentColor" d="M12.5 4.5a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0m5 .5a2 2 0 1 1-4 0a2 2 0 0 1 4 0m-13 2a2 2 0 1 0 0-4a2 2 0 0 0 0 4M6 9.25C6 8.56 6.56 8 7.25 8h5.5c.69 0 1.25.56 1.25 1.25V14a4 4 0 0 1-8 0zm-1 0c0-.463.14-.892.379-1.25H3.25C2.56 8 2 8.56 2 9.25V13a3 3 0 0 0 3.404 2.973A5 5 0 0 1 5 14zM15 14c0 .7-.144 1.368-.404 1.973Q14.794 16 15 16a3 3 0 0 0 3-3V9.25C18 8.56 17.44 8 16.75 8h-2.129c.24.358.379.787.379 1.25z" />
</svg>);

let eventIcon=(<svg xmlns="http://www.w3.org/2000/svg" className="h-6" viewBox="0 0 1024 1024">
	<rect width="1024" height="1024" fill="none" />
	<path fill="currentColor" d="m960 95.888l-256.224.001V32.113c0-17.68-14.32-32-32-32s-32 14.32-32 32v63.76h-256v-63.76c0-17.68-14.32-32-32-32s-32 14.32-32 32v63.76H64c-35.344 0-64 28.656-64 64v800c0 35.343 28.656 64 64 64h896c35.344 0 64-28.657 64-64v-800c0-35.329-28.656-63.985-64-63.985m0 863.985H64v-800h255.776v32.24c0 17.679 14.32 32 32 32s32-14.321 32-32v-32.224h256v32.24c0 17.68 14.32 32 32 32s32-14.32 32-32v-32.24H960zM736 511.888h64c17.664 0 32-14.336 32-32v-64c0-17.664-14.336-32-32-32h-64c-17.664 0-32 14.336-32 32v64c0 17.664 14.336 32 32 32m0 255.984h64c17.664 0 32-14.32 32-32v-64c0-17.664-14.336-32-32-32h-64c-17.664 0-32 14.336-32 32v64c0 17.696 14.336 32 32 32m-192-128h-64c-17.664 0-32 14.336-32 32v64c0 17.68 14.336 32 32 32h64c17.664 0 32-14.32 32-32v-64c0-17.648-14.336-32-32-32m0-255.984h-64c-17.664 0-32 14.336-32 32v64c0 17.664 14.336 32 32 32h64c17.664 0 32-14.336 32-32v-64c0-17.68-14.336-32-32-32m-256 0h-64c-17.664 0-32 14.336-32 32v64c0 17.664 14.336 32 32 32h64c17.664 0 32-14.336 32-32v-64c0-17.68-14.336-32-32-32m0 255.984h-64c-17.664 0-32 14.336-32 32v64c0 17.68 14.336 32 32 32h64c17.664 0 32-14.32 32-32v-64c0-17.648-14.336-32-32-32" />
</svg>);

let eventIcon2=(<svg xmlns="http://www.w3.org/2000/svg" className="h-6" viewBox="0 0 24 24">
	<rect width="24" height="24" fill="none" />
	<path fill="currentColor" d="M5 22q-.825 0-1.412-.587T3 20V6q0-.825.588-1.412T5 4h1V2h2v2h8V2h2v2h1q.825 0 1.413.588T21 6v14q0 .825-.587 1.413T19 22zm0-2h14V10H5zM5 8h14V6H5zm0 0V6zm2 6v-2h10v2zm0 4v-2h7v2z" />
</svg>);

let feedbackIcon=(<svg xmlns="http://www.w3.org/2000/svg" className="h-6" viewBox="0 0 24 24">
	<rect width="24" height="24" fill="none" />
	<path fill="currentColor" d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2m-7 12h-2v-2h2zm0-4h-2V6h2z" />
</svg>);

let EnquiryIcon=(<svg xmlns="http://www.w3.org/2000/svg" className="h-6" viewBox="0 0 28 28">
	<rect width="28" height="28" fill="none" />
	<path fill="currentColor" d="M11 3a9 9 0 0 0-8.048 13.032l-.908 3.389a1.25 1.25 0 0 0 1.53 1.53l3.387-.906A9 9 0 1 0 11 3m0 14.5a1 1 0 1 1 0-2a1 1 0 0 1 0 2M9.5 9.256A.75.75 0 0 1 8 9.25v-.019a2 2 0 0 1 .007-.127a3 3 0 0 1 .37-1.222C8.789 7.152 9.598 6.5 11 6.5s2.212.652 2.622 1.382A3 3 0 0 1 14 9.2l.001.05v.001c0 1.124-.692 1.88-1.193 2.428l-.125.137c-.546.606-.932 1.11-.932 1.935a.75.75 0 0 1-1.5 0c0-1.425.739-2.296 1.318-2.939l.018-.02c.609-.677.912-1.013.914-1.535v-.003a1.5 1.5 0 0 0-.185-.635C12.163 8.348 11.847 8 11 8s-1.163.348-1.315.618a1.5 1.5 0 0 0-.185.638M17 25a8.98 8.98 0 0 1-6.732-3.026a10 10 0 0 0 2.109-.068A7.47 7.47 0 0 0 17 23.5a7.46 7.46 0 0 0 3.59-.914a.75.75 0 0 1 .555-.066l3.25.87l-.872-3.252a.75.75 0 0 1 .066-.553A7.5 7.5 0 0 0 24.5 16a7.5 7.5 0 0 0-3.825-6.54a10 10 0 0 0-.75-1.974a9.004 9.004 0 0 1 5.123 12.547l.908 3.388a1.25 1.25 0 0 1-1.531 1.53l-3.386-.906A9 9 0 0 1 17 25M12.5 9.256v.002v-.005" />
</svg>)
export default function AdminSidebar() {
  const [isOpen, setIsOpen] = useState(true);
  const [LogoutModel,setLogoutModel] = useState(false);

  const {LogoutAdmin} = useContext(FireContext);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const conformation = () => {
    console.log("click in conform")
      LogoutAdmin();
      setLogoutModel(false);
  }

  const tabs=[
    {name:"home",path:"/admin",icon:homeIcon},
    {name:"faculty",path:"/admin/faculty",icon:TeamsIcon},
    {name:"events",path:"/admin/event",icon:eventIcon},
    // {name:"event",path:"/admin/event",icon:eventIcon2},
    {name:"feedbacks",path:"/admin/feedbacks",icon:feedbackIcon},
    {name:"Enquirys",path:"/admin/enquers",icon:EnquiryIcon},
  ]



  return (
    <div
      className={`${
        isOpen ? "w-80" : "w-[5rem]"
      } h-screen bg-white border-r-2 border-r-gray-200 shadow-md flex flex-col justify-between transition-all duration-300`}
    >
       <div className={`flex h-20 mb-5 items-center bg-indigo-500 text-white px-4 py-3 shadow-md ${!isOpen?"justify-evenly":"justify-between"}`}>
      {/* Admin Text */}
      <span className={`text-xl font-semibold transition-all duration-300 ${isOpen ? "block" : "hidden"}`}>
        Admin
      </span>

      {/* Toggle Button */}
      <button
        className="flex items-center justify-center w-10 h-10 bg-white rounded-full text-indigo-500 hover:bg-gray-200 hover:text-indigo-700 transition-colors duration-300"
        onClick={toggleSidebar}
      >
        {isOpen ? (
          // Custom SVG for Close Icon
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 48 48" fill="none">
            <rect width="48" height="48" fill="none" />
            <g fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="4">
              <path d="M6 9a3 3 0 0 1 3-3h30a3 3 0 0 1 3 3v30a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3z" />
              <path strokeLinecap="round" d="M32 6v36M16 20l4 4l-4 4M26 6h12M26 42h12" />
            </g>
          </svg>
        ) : (
          // React Icon for Sidebar Open Icon
          <LuPanelLeftClose size={24} />
        )}
      </button>
    </div>


      {/* Navigation Menu */}
      <nav className={`flex-grow  ${!isOpen&&"pr-2"}`}>
        <ul>
          {
            tabs.map((tab,index)=>{
              const isActive = location.pathname === tab.path; // Check if the current path matches the tab's path
              return(
              <li key={tab.path+index}>
                <NavLink
                  to={tab.path}
                  className={({ isActive }) =>
                    `transition-all group mt-3 flex ${
                      isActive ? " border-l-4 border-indigo-600 :" : " hover:border-l-4 hover:border-indigo-600"
                    }`
                  }
                >
                  <div className={` ml-2 rounded-md w-11/12 flex items-center space-x-4 px-4 py-3
                  ${isActive?"bg-gray-200 text-green-600":"group-hover:bg-gray-200"}
                  `}>
                  <div
                  className={`${
                    isActive ? "text-indigo-600" : "text-gray-500"
                  } group-hover:text-indigo-600`}
                >
                  {tab.icon}
                </div>
                  <span className={`${isOpen ? "block"+ isActive?" font-semibold ":" group-hover:font-semibold" : "hidden"} text-gray-700  capitalize`}>
                    {tab.name}
                  </span>
                  </div>
                </NavLink>
              </li>)})}
        
        </ul>
      </nav>
      
      {/* Logout Button */}
      <div className=" px-2 py-1 border-y-2  border-indigo-500/10 -shadow-md inset-1">
        <button
           onClick={()=>setLogoutModel(true)}
          className="flex items-center w-full group justify-center transition-all duration-200 hover:bg-red-500 hover:text-white py-2 rounded-md"
        >
          <span className={`${isOpen ? "block" : "hidden"} text-gray-700 mr-5 group-hover:font-semibold group-hover:text-white`}>
            Logout
          </span>
          <span>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24">
          	<rect width="24" height="24" fill="none" />
          	<path fill="currentColor" d="M11.25 19a.75.75 0 0 1 .75-.75h6a.25.25 0 0 0 .25-.25V6a.25.25 0 0 0-.25-.25h-6a.75.75 0 0 1 0-1.5h6c.966 0 1.75.784 1.75 1.75v12A1.75 1.75 0 0 1 18 19.75h-6a.75.75 0 0 1-.75-.75" />
          	<path fill="currentColor" d="M15.612 13.115a1 1 0 0 1-1 1H9.756q-.035.533-.086 1.066l-.03.305a.718.718 0 0 1-1.025.578a16.8 16.8 0 0 1-4.885-3.539l-.03-.031a.72.72 0 0 1 0-.998l.03-.031a16.8 16.8 0 0 1 4.885-3.539a.718.718 0 0 1 1.025.578l.03.305q.051.532.086 1.066h4.856a1 1 0 0 1 1 1z" />
          </svg>
          </span>
        </button>
      </div>
      {/* Profile section  */}
      
          <div className={`w-full flex bg-gray-200 items-center gap-3 py-5 px-4`}>
            {/* Profile Initials */}
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-300 via-blue-500 to-purple-300 flex justify-center items-center border-4 border-indigo-800/20 font-semibold text-white">
              DD
            </div>
            {/* Profile Info */}
            { isOpen&&(
            <div className="flex-1">
              <p
                className="font-semibold capitalize text-gray-900 text-sm truncate"
                title="Deepanshu Dashore"
              >
                Deepanshu Dashore
              </p>
              <div className="flex items-center space-x-2 text-xs text-gray-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="w-4 h-4 text-gray-400"
                >
                  <rect width="24" height="24" fill="none" />
                  <path
                    fill="currentColor"
                    d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m-.4 4.25l-6.54 4.09c-.65.41-1.47.41-2.12 0L4.4 8.25a.85.85 0 1 1 .9-1.44L12 11l6.7-4.19a.85.85 0 1 1 .9 1.44"
                  />
                </svg>
                <p className="truncate" title="deepanshudashore@gmail.com">
                  deepanshudashore@gmail.com
                </p>
              </div>
            </div>)
      }
          </div>
      <LogoutConfirmationModal isOpen={LogoutModel} onClose={()=>setLogoutModel(false)} onConfirm={()=>conformation()} />
    </div>
  );
}
