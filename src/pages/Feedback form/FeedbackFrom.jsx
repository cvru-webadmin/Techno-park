import React, { useContext, useState } from "react";
import { FireContext } from "../../Context/context";

const FeedbackForm = () => {
  const [selectedPosition, setSelectedPosition] = useState("Select your position");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    feedbackBy: "",
    email: "",
    position: "",
    feedback: "",
  });

  const positions = ["Student", "Teacher", "Visitor", "Parent", "Other"];

  //import send feedback method

  const {SendFeedback,formatDate}=useContext(FireContext);

  const handleSelect = (position) => {
    setSelectedPosition(position);
    setFormData((prev) => ({
      ...prev,
      position, // Update position in formData
    }));
    setIsDropdownOpen(false);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen((prevState) => !prevState);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    if(formData.feedbackBy==""||formData.feedback==""||formData.email==""||formData.position==""){
      return alert("all field are requerd for feedback")
    }
    e.preventDefault();
    let res=SendFeedback({
      ...formData,
      ["createdAt"]:formatDate()
    });
    if(res){
      setIsModalOpen(true); // Open the Thank You modal
      setFormData({
        feedbackBy: "",
        email: "",
        position: "",
        feedback: "",
      })
    }
  };

  const closeModal = () => {
    setIsModalOpen(false); // Close the modal
  };

  return (
    <>
      <div className="h-16 bg-[var(--DarkBlue)]"></div>
      <div className="min-h-screen bg-gray-100 flex mt-10 items-center justify-center">
        <div className="w-full max-w-3xl bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">
            Feedback Form
          </h2>
          <p className="text-gray-600 text-center mb-6">
            Your feedback is valuable to us. Please take a moment to share your
            thoughts.
          </p>
          <form onSubmit={handleSubmit}>
            {/* Name Field */}
            <div className="mb-4">
              <label
                htmlFor="feedbackBy"
                className="block text-gray-700 font-medium mb-2"
              >
                Feedback By
              </label>
              <input
                type="text"
                id="feedbackBy"
                name="feedbackBy"
                value={formData.feedbackBy}
                onChange={handleChange}
                placeholder="Enter your name"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            {/* Email Field */}
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-700 font-medium mb-2"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Dropdown Field */}
            <div className="mb-4 relative">
              <label
                htmlFor="position"
                className="block text-gray-700 font-medium mb-2"
              >
                Your Position
              </label>
              <div className="relative">
                <button
                  type="button"
                  onClick={toggleDropdown}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-left text-gray-700 flex justify-between items-center"
                  aria-expanded={isDropdownOpen}
                >
                  {selectedPosition}
                  <svg
                    className={`w-5 h-5 text-gray-500 transform ${
                      isDropdownOpen ? "rotate-180" : ""
                    } transition-transform`}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.707a1 1 0 011.414 0L10 11.586l3.293-3.879a1 1 0 111.414 1.414l-4 4.293a1 1 0 01-1.414 0l-4-4.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
                {isDropdownOpen && (
                  <ul className="absolute z-10 bg-white border rounded-lg shadow-lg w-full mt-2">
                    {positions.map((position, index) => (
                      <li
                        key={index}
                        className="px-4 py-2 hover:bg-blue-100 cursor-pointer text-gray-700"
                        onClick={() => handleSelect(position)}
                      >
                        {position}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>

            {/* Feedback Field */}
            <div className="mb-4">
              <label
                htmlFor="feedback"
                className="block text-gray-700 font-medium mb-2"
              >
                Feedback
              </label>
              <textarea
                id="feedback"
                name="feedback"
                value={formData.feedback}
                onChange={handleChange}
                rows="4"
                placeholder="Share your feedback here..."
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-blue-800 text-white mt-2 px-10 py-3 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Submit Feedback
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Thank You Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center px-4">
          <div className="bg-white max-w-lg w-full p-8 rounded-xl shadow-xl transform transition-all">
            <div className="text-center">
              <div className="flex justify-center items-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-14 w-14 text-blue-600"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.11 0 2-.89 2-2V4a2 2 0 0 0-2-2m-9.53 12L7 10.5l1.4-1.41l2.07 2.08L15.6 6L17 7.41z"
                  ></path>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">
                Thank You, {formData.feedbackBy || "Guest"}!
              </h3>
              <p className="text-gray-600 mb-6">
                Your feedback has been successfully submitted. We truly value
                your time and effort to help us improve.
              </p>
            </div>
            <div className="flex justify-center">
              <button
                className="bg-blue-800 text-white px-8 py-3 rounded-lg shadow-lg hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-400 transition-all"
                onClick={closeModal}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default FeedbackForm;
