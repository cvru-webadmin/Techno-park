import React, { useState } from "react";

const AddEventModal = ({ isOpen, onClose, onAddEvent, add, EventAdd,formatDate }) => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    status: "Upcoming",
  });

  const [image,setImage]=useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let res =onAddEvent({
        title:formData.title,
        description:formData.description,
        status:formData.status,
        createdAt:formatDate(),
    });
    onClose();
    if(res){
      EventAdd(!add)
      setFormData({ title: "", description: "", status: "Upcoming" });
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white shadow-lg rounded-lg w-full max-w-5xl p-8">
        <h2 className="text-2xl flex justify-between items-center font-semibold text-gray-800 mb-6 text-center border-b pb-4">
          <span>Add New Event</span>
          <button
            onClick={onClose}
            className="text-gray-500 text-[20px] hover:text-gray-700 focus:outline-none"
          >
            ✕
          </button>
        </h2>
        <form onSubmit={handleSubmit} className="flex gap-7">
          <div class="flex items-start justify-center w-2/3">
            {image ? (
              <div className="mt-4">
                <p className="text-sm text-gray-500 relative">Preview:</p>
                <button
                  onClick={()=>setImage(null)}
                  className="text-white absolute mt-6 ml-80 px-2 rounded-full bg-indigo-600/30 text-[20px] hover:text-gray-700 focus:outline-none"
                >
                  ✕
                </button>
                <img
                  src={URL.createObjectURL(image)}
                  alt="Preview"
                  className="w-full h-72 object-cover rounded-lg shadow-md mt-2"
                />
              </div>
            ) : (
              <div>
              <p className="text-sm text-gray-500">Upload Image:</p>
              <label
                for="dropzone-file"
                class="flex flex-col mt-3 items-center justify-center w-full h-72 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100"
              >
                <div class="flex flex-col items-center justify-center pt-5 pb-6">
                  <svg
                    class="w-8 h-8 mb-4 text-gray-500"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 16"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                    />
                  </svg>
                  <p class="mb-2 text-sm text-gray-500">Click to upload</p>
                  <p class="text-xs text-gray-500">
                    SVG, PNG, JPG or GIF (MAX. 800x400px)
                  </p>
                </div>
                <input
                  id="dropzone-file"
                  type="file"
                  accept="image/*"
                  className=" opacity-0"
                  onChange={(e) => setImage(e.target.files[0])}
                />
              </label>
              </div>
            )}
          </div>

          <div className="h-full w-full">
            {/* Event Title */}
            <div className="mb-6">
              <label
                htmlFor="title"
                className="block text-sm font-medium text-gray-600 mb-2"
              >
                Event Title
              </label>
              <input
                type="text"
                id="title"
                name="title"
                value={formData.title}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm text-gray-800 focus:ring-2 focus:ring-indigo-400 focus:outline-none"
                placeholder="Enter event title"
                required
              />
            </div>

            {/* Description */}
            <div className="mb-6">
              <label
                htmlFor="description"
                className="block text-sm font-medium text-gray-600 mb-2"
              >
                Description
              </label>
              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                rows="4"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm text-gray-800 focus:ring-2 focus:ring-indigo-400 focus:outline-none"
                placeholder="Enter event description"
                required
              ></textarea>
            </div>

            {/* Upload Image
            <div className="mb-6">
              <label
                htmlFor="image"
                className="block text-sm font-medium text-gray-600 mb-2"
              >
                Upload Image
              </label>
              <input
                type="file"
                id="image"
                accept="image/*"
                onChange={(e) => setImage(e.target.files[0])}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm text-gray-800 focus:ring-2 focus:ring-indigo-400 focus:outline-none"
              /> */}

            {/* Status */}
            <div className="mb-6">
              <label
                htmlFor="status"
                className="block text-sm font-medium text-gray-600 mb-2"
              >
                Status
              </label>
              <select
                id="status"
                name="status"
                value={formData.status}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm text-gray-800 focus:ring-2 focus:ring-indigo-400 focus:outline-none"
              >
                <option value="Upcoming">Upcoming</option>
                <option value="Active">Active</option>
                <option value="News">News</option>
              </select>
            </div>

            {/* Action Buttons */}
            <div className="flex justify-end gap-4">
              <button
                type="button"
                onClick={onClose}
                className="px-6 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-6 py-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              >
                Add Event
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddEventModal;
