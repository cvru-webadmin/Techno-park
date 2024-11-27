import React, { useEffect, useState } from "react";

const EditEventModal = ({ isOpen, onClose, eventData, onSave, onEdit, edit }) => {
  const [formData, setFormData] = useState(eventData || {});

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

  const handleSubmit = async(e) => {
    e.preventDefault();
    let rss= await onSave(formData.id,formData); // Pass the updated formData to the parent
    if(rss){onEdit(!edit)}
    onClose(); // Close the modal
  };

  if (!isOpen || !eventData || Object.keys(eventData).length === 0) return null;

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg w-full max-w-lg p-6">
        <h2 className="text-2xl font-bold text-gray-700 mb-4">Edit Event</h2>
        <form onSubmit={handleSubmit}>
          {/* Event Title */}
          <div className="mb-4">
            <label htmlFor="title" className="block text-sm font-medium text-gray-600">
              Event Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title || ""}
              onChange={handleChange}
              className="w-full mt-1 px-4 py-2 border rounded-lg text-gray-700 focus:ring focus:ring-indigo-300 focus:outline-none"
              required
            />
          </div>
          {/* Description */}
          <div className="mb-4">
            <label htmlFor="description" className="block text-sm font-medium text-gray-600">
              Description
            </label>
            <textarea
              id="description"
              name="description"
              value={formData.description || ""}
              onChange={handleChange}
              rows="4"
              className="w-full mt-1 px-4 py-2 border rounded-lg text-gray-700 focus:ring focus:ring-indigo-300 focus:outline-none"
              required
            ></textarea>
          </div>
          {/* Status */}
          <div className="mb-4">
            <label htmlFor="status" className="block text-sm font-medium text-gray-600">
              Status
            </label>
            <select
              id="status"
              name="status"
              value={formData.status || "Upcoming"}
              onChange={handleChange}
              className="w-full mt-1 px-4 py-2 border rounded-lg text-gray-700 focus:ring focus:ring-indigo-300 focus:outline-none"
            >
              <option value="Upcoming">Upcoming</option>
              <option value="Active">Active</option>
              <option value="News">News</option>
            </select>
          </div>
          {/* Actions */}
          <div className="flex items-center justify-end">
            <button
              type="button"
              onClick={onClose}
              className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg mr-2 hover:bg-gray-300"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-indigo-500 text-white px-4 py-2 rounded-lg hover:bg-indigo-600"
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
