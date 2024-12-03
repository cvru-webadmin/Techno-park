import React, { useState } from "react";
import UploadModal from "./UploadImg";
import LeaveConfirmationModal from "../../../componet/LeaveComform";

const AddEventModal = ({ isOpen, onClose, onAddEvent, add, EventAdd,formatDate }) => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    status: "Upcoming",
  });

  const [imageUpload,setImageUrl]=useState("");
  const [ModelImageopen,setImageModel]=useState(false)
  const [conformOpen,setComfomation]=useState(false);


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
        image:imageUpload.url,
        imageId:imageUpload.id,
        createdAt:formatDate(),
    });
    onClose();
    if(res){
      EventAdd(!add)
      setFormData({ title: "", description: "", status: "Upcoming" });
      setImageUrl("");
      onClose();
    }
  };

  
  const onConformation=()=>{
    setComfomation(false);
    onClose();
  }


  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      {/* models  */}
      <UploadModal
        isOpen={ModelImageopen}
        onClose={() => setImageModel(false)}
        setImageUrl={setImageUrl}
      />
      <LeaveConfirmationModal
        Open={conformOpen}
        Close={() => setComfomation(false)}
        Confirm={onConformation}
      />

      <div className="bg-white shadow-lg rounded-lg w-full max-w-xl p-8">
        <h2 className="text-2xl flex justify-between items-center font-semibold text-gray-800 mb-6 text-center border-b pb-4">
          <span>Add New Event</span>
          <button
            onClick={()=>setComfomation(true)}
            className="text-gray-500 text-[20px] hover:text-gray-700 focus:outline-none"
          >
            ✕
          </button>
        </h2>
        <form onSubmit={handleSubmit}>
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

            {/* Upload Image */}
            <div className="mb-6">
              <label
                htmlFor="image"
                className="block text-sm font-medium text-gray-600 mb-2"
              >
                Upload Image
              </label>
              {!imageUpload ? (
                <input
                  type="button"
                  onClick={() => setImageModel(true)}
                  value={"Click to upload"}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm text-gray-800 focus:ring-2 focus:ring-indigo-400 focus:outline-none"
                />
              ) : (
                <div className="p-4 py-2 text-sm flex capitalize justify-between items-center bg-gray-100 border rounded-lg text-gray-500">
                  upload image preview
                  <img
                    className="h-10 rounded-sm"
                    src={imageUpload.url}
                    alt="UploadImage"
                  />
                </div>
              )}
            </div>

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
                onClick={()=>setComfomation(true)}
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
