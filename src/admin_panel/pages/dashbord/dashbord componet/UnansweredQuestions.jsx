import React from "react";

const UnansweredQuestions = () => {
  // Mock Data
  const isTime = "Good Morning"; // Dynamically set based on time
  
  return (
    <div className=" p-6 pt-0">
      {/* Questions Table */}
      <section>
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">
          Unanswered Questions
        </h2>
        <div className="bg-white shadow-lg rounded-lg p-6">
          <table className="w-full table-auto border-collapse">
            <thead>
              <tr className="bg-gray-100">
                <th className="text-left px-4 py-3 border-b text-sm font-medium text-gray-600">Question</th>
                <th className="text-left px-4 py-3 border-b text-sm font-medium text-gray-600">Asked By</th>
                <th className="text-left px-4 py-3 border-b text-sm font-medium text-gray-600">Number</th>
                <th className="text-left px-4 py-3 border-b text-sm font-medium text-gray-600">Email</th>
                <th className="text-left px-4 py-3 border-b text-sm font-medium text-gray-600">Actions</th>
              </tr>
            </thead>
            <tbody>
              {/* Table Row */}
              <tr className="hover:bg-gray-50">
                <td className="px-4 py-3 border-b">How to enroll in a course?</td>
                <td className="px-4 py-3 border-b">John Doe</td>
                <td className="px-4 py-3 border-b">+1234567890</td>
                <td className="px-4 py-3 border-b">john.doe@example.com</td>
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
              
              {/* Table Row */}
              <tr className="hover:bg-gray-50">
                <td className="px-4 py-3 border-b">How to enroll in a course?</td>
                <td className="px-4 py-3 border-b">John Doe</td>
                <td className="px-4 py-3 border-b">+1234567890</td>
                <td className="px-4 py-3 border-b">john.doe@example.com</td>
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
              {/* More rows can be added */}
            </tbody>
          </table>
          <div className="mt-6 flex justify-between">
            <button className="bg-indigo-500 text-white px-6 py-3 rounded-md hover:bg-indigo-600 transition duration-200">
              Go to Questions Page
            </button>
          </div>
        </div>
      </section>
      
    </div>
  );
};

export default UnansweredQuestions;
