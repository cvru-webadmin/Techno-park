import React from "react";
import { Link } from "react-router-dom";
import Pagenotfound from "./page-found-warning-404-number-display-laptop_197170-871.jpg"

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center space-y-8 min-h-screen bg-gray-100 text-center px-6">
        {/* <img
        src={Pagenotfound}
        alt="Not Found"
        className="mt-8 max-w-xs h-auto rounded-lg shadow-lg"
        /> */}
       {/* Animated SVG with Title */}
       <h2 className="text-2xl md:text-4xl font-semibold flex items-center space-x-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-20 animate-bounce text-indigo-500"
          viewBox="0 0 24 24"
        >
          <rect width="24" height="24" fill="none" />
          <path
            fill="currentColor"
            fillRule="evenodd"
            d="m9.592 8.277l-.898-1.384l3.46-2.247l.898 1.384zm-.485 2.282l-.899-1.384l-.898-1.384l-.9-1.383l1.385-.9l3.46-2.246l1.383-.899l.9 1.384l.898 1.384l.899 1.384l-1.384.899l-3.46 2.247zm4.47 4.063l1.697.865l-.1-1.903l-.188-3.61l-.1-1.902l-1.598 1.038l-3.032 1.968l-1.598 1.038l1.698.865zm-.1-1.903l-.09-1.707l-1.433.931zm4.258-.755h2.475v8.251h-2.475zm4.125-1.65v11.551h-5.775v-11.55zm-13.652.698l-3.76 10.922l-1.56-.537l3.76-10.922zm2.513 9.203a2.063 2.063 0 1 0 0-4.125a2.063 2.063 0 0 0 0 4.125m3.713-2.063a3.713 3.713 0 1 1-7.425 0a3.713 3.713 0 0 1 7.425 0"
            clipRule="evenodd"
          />
        </svg>
      </h2>
      <h2 className="text-2xl md:text-4xl font-semibold mt-4 text-indigo-300">ERROR</h2>
      <h1 className="text-9xl font-bold text-indigo-500">404</h1>
      <h2 className="text-2xl md:text-3xl capitalize font-semibold mt-4 text-indigo-400">
        This page is outside of univers
      </h2>
      {/* <h2 className="text-2xl md:text-3xl font-semibold mt-4 text-gray-800">
        Oops! Page Not Found
      </h2> */}
      <p className="mt-2 text-gray-600 max-w-xl">
      The page you are trying to access doesn’t exist or has been moved.
      Try going back to our homepage.
      </p>
      <Link
        to="/"
        className="mt-6 px-6 py-3 bg-indigo-500 text-white rounded-lg shadow-md hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default NotFoundPage;
