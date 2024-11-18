import React, { useContext, useState } from "react";
import { LuPanelLeftClose } from "react-icons/lu";
import { FaBars, FaHome, FaFolder, FaImages, FaUsers, FaTrashAlt, FaSignOutAlt } from "react-icons/fa"; // Example icons
import { FireContext } from "../../Context/context";

export default function AdminSidebar() {
  const [isOpen, setIsOpen] = useState(true);

  const {LogoutAdmin} = useContext(FireContext);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className={`${
        isOpen ? "w-64" : "w-16"
      } h-screen bg-gray-100 shadow-md flex flex-col justify-between transition-all duration-300`}
    >
      {/* Toggle Button */}
      <div className="flex items-center justify-between px-4 py-3">
        <span className={`text-xl font-semibold ${isOpen ? "block" : "hidden"}`}>
          Admin
        </span>
        <button
          className="text-gray-600 hover:text-gray-800"
          onClick={toggleSidebar}
        >
          <LuPanelLeftClose size={20} /> 
        </button>
      </div>

      {/* Navigation Menu */}
      <nav className="flex-grow">
        <ul>
          <li>
            <a
              href="/home"
              className="flex items-center space-x-4 px-4 py-3 hover:bg-gray-200 hover:border-l-4 hover:border-blue-500 group transition-all"
            >
              <FaHome size={20} className="text-gray-600 group-hover:text-blue-500" />
              <span className={`${isOpen ? "block" : "hidden"} text-gray-700  group-hover:font-semibold`}>
                Home
              </span>
            </a>
          </li>
          <li>
            <a
              href="/files"
              className="flex items-center space-x-4 px-4 py-3 hover:bg-gray-200 hover:border-l-4 hover:border-blue-500 group transition-all"
            >
              <FaFolder size={20} className="text-gray-600 group-hover:text-blue-500" />
              <span className={`${isOpen ? "block" : "hidden"} text-gray-700  group-hover:font-semibold`}>
                My Files
              </span>
            </a>
          </li>
          <li>
            <a
              href="/photos"
              className="flex items-center space-x-4 px-4 py-3 hover:bg-gray-200 hover:border-l-4 hover:border-blue-500 group transition-all"
            >
              <FaImages size={20} className="text-gray-600 group-hover:text-blue-500" />
              <span className={`${isOpen ? "block" : "hidden"} text-gray-700  group-hover:font-semibold`}>
                Photos
              </span>
            </a>
          </li>
          <li>
            <a
              href="/shared"
              className="flex items-center space-x-4 px-4 py-3 hover:bg-gray-200 hover:border-l-4 hover:border-blue-500 group transition-all"
            >
              <FaUsers size={20} className="text-gray-600 group-hover:text-blue-500" />
              <span className={`${isOpen ? "block" : "hidden"} text-gray-700  group-hover:font-semibold`}>
                Shared
              </span>
            </a>
          </li>
          <li>
            <a
              href="/recycle"
              className="flex items-center space-x-4 px-4 py-3 hover:bg-gray-200 hover:border-l-4 hover:border-blue-500 group transition-all"
            >
              <FaTrashAlt size={20} className="text-gray-600 group-hover:text-blue-500" />
              <span className={`${isOpen ? "block" : "hidden"} text-gray-700  group-hover:font-semibold`}>
                Recycle Bin
              </span>
            </a>
          </li>
        </ul>
      </nav>

      {/* Logout Button */}
      <div className="px-4 py-3">
        <button
           onClick={LogoutAdmin}
          className="flex items-center space-x-4 w-full text-red-600 hover:bg-red-100 px-4 py-2 rounded-md"
        >
          <FaSignOutAlt size={20} />
          <span className={`${isOpen ? "block" : "hidden"} text-gray-700  group-hover:font-semibold`}>
            Logout
          </span>
        </button>
      </div>
    </div>
  );
}
