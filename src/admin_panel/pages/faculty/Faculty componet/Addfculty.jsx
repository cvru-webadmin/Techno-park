import React, { useContext, useState } from "react";
import { FireContext } from "../../../../Context/context";

const AddFaculty = () => {
  const [facultyName, setFacultyName] = useState("");
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);

//get context
// const {UploadImage}=useContext(FireContext);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImage(file);
      const reader = new FileReader();
      reader.onload = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (facultyName && image) {
      alert(`Faculty Added: ${facultyName}`);
      console.log(facultyName,image);
      // UploadImage(facultyName,image);
      // Here you can handle the upload logic, e.g., sending data to the backend.
      setFacultyName("");
      setImage(null);
      setPreview(null);
    } else {
      alert("Please fill in all fields.");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Add Faculty</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1" htmlFor="faculty-name">
            Faculty Name
          </label>
          <input
            id="faculty-name"
            type="text"
            value={facultyName}
            onChange={(e) => setFacultyName(e.target.value)}
            placeholder="Enter faculty name"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1" htmlFor="faculty-image">
            Upload Image
          </label>
          <input
            id="faculty-image"
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer focus:outline-none"
          />
          {preview && (
            <img
              src={preview}
              alt="Preview"
              className="mt-4 h-32 w-32 object-cover rounded-full border"
            />
          )}
        </div>
        <button
          type="submit"
          className="w-full px-4 py-2 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Add Faculty
        </button>
      </form>
    </div>
  );
};

export default AddFaculty;