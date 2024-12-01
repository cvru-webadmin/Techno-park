import React from "react";
import { Link, NavLink } from "react-router-dom";

const UnansweredQuestions = ({ Inqueris }) => {
  return (
    <div className="w-full p-6 pt-0">
      {/* Questions Table */}
      <section>
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">
          Unanswered Questions
        </h2>
        <div className="bg-white shadow-lg w-full rounded-lg p-6">
          <table className="w-full table-auto border-collapse">
            <thead>
              <tr className="bg-gray-100">
                <th className="text-left px-4 py-3 border-b text-sm font-medium text-gray-600">
                  Question
                </th>
                <th className="text-left px-4 py-3 border-b text-sm font-medium text-gray-600">
                  Asked By
                </th>
                <th className="text-left px-4 py-3 border-b text-sm font-medium text-gray-600">
                  Number
                </th>
                <th className="text-left px-4 py-3 border-b text-sm font-medium text-gray-600">
                  Email
                </th>
                <th className="text-left px-4 py-3 border-b text-sm font-medium text-gray-600">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {/* Table Row */}
              {!Inqueris.length == 0 ? (
                Inqueris.filter((message) => message.Answer === "")
                  .slice(0, 4)
                  .map((message) => (
                    <tr className="hover:bg-gray-50 w-full">
                      <td className="px-4 py-3 border-b w-[35%]">
                        {message.Message}
                      </td>
                      <td className="px-4 py-3 border-b">{message.Name}</td>
                      <td className="px-4 py-3 border-b">
                        {message.PhoneNumber}
                      </td>
                      <td className="px-4 py-3 border-b">{message.Email}</td>
                      <td className="px-4 py-3 border-b">
                        <div className="flex space-x-2">
                          {/* <button className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition duration-200">
                      Answered
                    </button> */}
                          <button className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition duration-200">
                            Not Answered
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
              ) : (
                Array(3).fill(null).map((data)=>(
                <tr className="hover:bg-gray-50">
                  <td className="px-4 py-3 border-b w-[35%]">
                    <div className="h-4 bg-gray-200 rounded-md animate-pulse"></div>
                  </td>
                  <td className="px-4 py-3 border-b">
                    <div className="h-4 bg-gray-200 rounded-md animate-pulse"></div>
                  </td>
                  <td className="px-4 py-3 border-b">
                    <div className="h-4 bg-gray-200 rounded-md animate-pulse"></div>
                  </td>
                  <td className="px-4 py-3 border-b">
                    <div className="h-4 bg-gray-200 rounded-md animate-pulse"></div>
                  </td>
                  <td className="px-4 py-3 border-b">
                    <div className="flex space-x-2">
                      <div className="h-8 w-24 bg-gray-200 rounded-md animate-pulse"></div>
                    </div>
                  </td>
                </tr>
                ))
                
              )}

              {/* More rows can be added */}
            </tbody>
          </table>
          <div className="mt-6 flex justify-between">
            <button className="bg-indigo-500 text-white px-6 py-3 rounded-md hover:bg-indigo-600 transition duration-200">
              <NavLink to="/admin/enquers">Go to Questions Page</NavLink>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default UnansweredQuestions;
