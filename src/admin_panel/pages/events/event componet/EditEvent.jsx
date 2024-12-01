import React, { useEffect, useState } from "react";
import LeaveConfirmationModal from "../../../componet/LeaveComform";

const EditEventModal = ({ isOpen, onClose, eventData, onSave, onEdit, edit }) => {
  const [formData, setFormData] = useState(eventData || {});
  const [conformOpen,setComfomation]=useState(false);


  // Update formData whenever eventData changes
  useEffect(() => {
    if (eventData) {
      setFormData(eventData);
    }
  }, [eventData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let rss = await onSave(formData.id, {
      ...formData,
      ["updateAt"]: new Date().toLocaleString(),
    }); // Pass the updated formData to the parent
    if (rss) {
      onEdit(!edit);
    }
    onClose(); // Close the modal
  };

  
  const onConformation=()=>{
    setComfomation(false);
    onClose();
  }

  if (!isOpen || !eventData || Object.keys(eventData).length === 0) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <LeaveConfirmationModal Open={conformOpen} Close={()=>setComfomation(false)} Confirm={onConformation} />
      <div className="bg-white shadow-lg rounded-xl w-full max-w-xl p-8">
      <h2 className="text-2xl flex justify-between items-center font-semibold text-gray-800 mb-6 text-center border-b pb-4">
          
          <span>Edit Event</span>
            <button
              onClick={()=>setComfomation(true)}
              className="text-gray-500 text-[20px] hover:text-gray-700 focus:outline-none"
            >
              ✕
            </button>
        </h2>
        <form onSubmit={handleSubmit}>
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
              value={formData.title || ""}
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
              value={formData.description || ""}
              onChange={handleChange}
              rows="4"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm text-gray-800 focus:ring-2 focus:ring-indigo-400 focus:outline-none"
              placeholder="Enter event description"
              required
            ></textarea>
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
              value={formData.status || "Upcoming"}
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
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditEventModal;
