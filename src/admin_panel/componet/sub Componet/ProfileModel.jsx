import React, { useState, useEffect } from "react";

const ProfileEditModal = ({ isOpen, onClose ,name ,setName}) => {

  const [profilePic, setProfilePic] = useState(localStorage.getItem("ProfileURL") || "https://example.pic/.com");


  useEffect(() => {
    // Save changes to local storage
    localStorage.setItem("ProfileName", name);
    localStorage.setItem("ProfileURL", profilePic);
  }, [name, profilePic]);

  const handleSaveChanges = () => {
    if (window.confirm("Confirm save the changes?")) {
      onClose();
    }
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleProfilePicChange = (e) => {
    setProfilePic(e.target.value);
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setProfilePic(reader.result); // Set the uploaded image as the profile picture
      };
      reader.readAsDataURL(file); // Convert the file to a Data URL
    }
  };

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-70 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg w-96 p-6">
            {/* Header */}
            <div className="flex justify-between items-center border-b pb-3">
              <h5 className="text-lg font-semibold">Profile Information</h5>
              <button
                onClick={onClose}
                className="text-gray-700 text-2xl hover:text-gray-900"
                aria-label="Close modal"
              >
                &times;
              </button>
            </div>

            {/* Profile Picture */}
            <div className="mt-5 flex flex-col items-center">
              <div
                className="h-32 w-32 rounded-full bg-gray-200 bg-cover bg-center"
                style={{ backgroundImage: `url(${profilePic})` }}
              ></div>
            </div>

            {/* User Name Input */}
            <div className="mt-6">
              <label className="block text-[14px] font-medium text-indigo-500">Admin name</label>
              <div className="relative flex items-center mt-1">
                <input
                  type="text"
                  value={name}
                  onChange={handleNameChange}
                  className="w-full p-2 border rounded-md focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                />
                <span className="absolute right-3 text-gray-500">
                  <i className="bi bi-pencil-square"></i>
                </span>
              </div>
            </div>

            {/* Profile Picture Link Input */}
            {/* <div className="mt-4">
              <label className="block text-[14px] font-medium text-indigo-500">Profile Online Image Link</label>
              <input
                type="text"
                value={profilePic}
                onChange={handleProfilePicChange}
                className="w-full p-2 border rounded-md focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                placeholder="https://example.pic/.com"
              />
            </div> */}

            {/* File Upload for Profile Picture */}
            <div className="mt-4">
              <label className="block text-[14px] font-medium text-indigo-500">Upload Profile Picture</label>
              <input
                type="file"
                accept="image/*"
                onChange={handleFileUpload}
                className="w-full p-2 border rounded-md focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              />
            </div>

            <div className="text-gray-500 text-xs flex mt-3 gap-2 mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2m1 15h-2v-6h2zm0-8h-2V7h2z"
                  ></path>
                </svg>
                <h4>
                Name and image are only stored on your system, making it more admin-friendly and secure.
                </h4>
              </div>

            {/* Save Button */}
            <div className="mt-6 flex justify-end">
              <button
                onClick={handleSaveChanges}
                className="px-4 py-2 bg-indigo-500 text-white rounded-md hover:bg-indigo-600"
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProfileEditModal;
