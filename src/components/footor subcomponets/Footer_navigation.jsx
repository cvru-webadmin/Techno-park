import React from "react";
import { NavLink } from "react-router-dom";

export default function Footer_navigation() {
  return (
    <div>
      <h2 className="text-lg font-semibold text-white mb-4">Quick Links</h2>
      <ul className="space-y-3 ml-1">
        {[
          { to: "/", label: "Home" },
          { to: "/about", label: "About Us" },
          { to: "/courses", label: "Courses" },
          { to: "/admission", label: "Admission" },
          { to: "/contact", label: "Contact" },
        ].map((link, index) => (
          <li key={index}>
            <NavLink
              to={link.to}
              className="text-sm text-gray-300 hover:text-blue-400 transition duration-200 ease-in-out"
            >
              {link.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
}
