import axios from "axios";
import React, { useContext, useState } from "react";
import { FireContext } from "../../Context/context";

const UploadImagePage = () => {
  const [image, setImage] = useState(null);
  const [url, setUrl] = useState("");
  const {UploadImage}=useContext(FireContext);

  const saveImage = async () => {
    if (!image) {
      alert("Please upload an image");
      return;
    }

    const data = new FormData();
    data.append("file", image);
    data.append("upload_preset", "Technopark-website");
    data.append("cloud_name", "dcbniehli");

    try {
      const res = await axios.post("https://api.cloudinary.com/v1_1/dcbniehli/image/upload",data);

      console.log(res)
      const cloudData = res;
      if (cloudData.url) {
        setUrl(cloudData.url);
        alert("Image uploaded successfully!");
      } else {
        alert("Failed to upload image. Please try again.");
      }
    } catch (error) {
      console.error("Error uploading image:", error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6 text-gray-700">Upload Image</h1>

      {/* Image Upload Form */}
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md">
        <div className="mb-4">
          <label
            htmlFor="file"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Select an Image
          </label>
          <input
            type="file"
            id="file"
            accept="image/*"
            onChange={(e) => setImage(e.target.files[0])}
            className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-400 focus:outline-none"
          />
        </div>
        <button
          onClick={()=>UploadImage(image)}
          className="w-full bg-indigo-600 text-white px-4 py-2 rounded-lg shadow-md hover:bg-indigo-700 transition duration-300"
        >
          Upload Image
        </button>
      </div>

      {/* Display Uploaded Image */}
      {url && (
        <div className="mt-6 text-center">
          <h2 className="text-xl font-medium text-gray-800 mb-4">
            Uploaded Image
          </h2>
          <img
            src={url}
            alt="Uploaded"
            className="w-64 h-64 object-cover border rounded-lg shadow-md"
          />
        </div>
      )}
    </div>
  );
};

export default UploadImagePage;
