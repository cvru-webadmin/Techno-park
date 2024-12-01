import React, { useContext, useEffect, useState } from "react";
import {useDropzone} from 'react-dropzone';
import { FireContext } from "../../../../Context/context";

const UploadModal = ({ isOpen, onClose, setImageUrl }) => {
    const {acceptedFiles, getRootProps, getInputProps,isDragActive} = useDropzone();
    const [image, setImage] = useState(null);

    //import context 
    const {UploadImage}=useContext(FireContext);
    

    useEffect(()=>{
        const files = acceptedFiles.map(file => file)
        if(files){
            setImage(files[0])
        }
    },[acceptedFiles])
    
    const handleImageUpload = (e) => {
        setImage(e.target.files[0]);
    };
  
    const handleCancel = () => {
      setImage(null);
      setImageUrl("");
      onClose(); // Close the modal
    };
  
    const handleClose = () => {
      setImage(null);
      setImageUrl("");
      onClose(); // Close the modal
    };

    const [isloading,setloading]=useState(false);
    const handleUpload = async() => {
        setloading(true);
        if(!image){
            return alert("Before uploading select image")
        }
        try {
            let res= await UploadImage(image);
            if(res){
                setImageUrl(res);
                onClose();
                alert("Image uploaded successfully!");
            }
        } catch (error) {
            console.log("some error ocurred uploading image :",error);
            setloading(false);
        }
        finally{
            setloading(false);
        }
    }
  
    return isOpen ? (
      <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center">
        <div className="bg-white rounded-lg p-5 w-3/4 max-w-lg">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">
            Upload Image
          </h2>
  
          {/* Image Preview */}
          {isloading?(
            <div>
                <div className="w-full h-72 bg-gray-100 border-2 rounded-md border-indigo-400 border-dashed  flex flex-col justify-evenly items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="text-indigo-400" width={80} height={80} viewBox="0 0 24 24"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}><path strokeDasharray="2 4" strokeDashoffset={6} d="M12 21c-4.97 0 -9 -4.03 -9 -9c0 -4.97 4.03 -9 9 -9"><animate attributeName="stroke-dashoffset" dur="0.6s" repeatCount="indefinite" values="6;0"></animate></path><path strokeDasharray={32} strokeDashoffset={32} d="M12 3c4.97 0 9 4.03 9 9c0 4.97 -4.03 9 -9 9"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.1s" dur="0.4s" values="32;0"></animate></path><path strokeDasharray={10} strokeDashoffset={10} d="M12 16v-7.5"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.5s" dur="0.2s" values="10;0"></animate></path><path strokeDasharray={6} strokeDashoffset={6} d="M12 8.5l3.5 3.5M12 8.5l-3.5 3.5"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.7s" dur="0.2s" values="6;0"></animate></path></g></svg>
                <span className="text-indigo-500 text-2xl font-semibold  tracking-wide">Upload Your Image</span>
                <p className="text-gray-800 text-sm">Please wait while your image is being uploaded.</p>
                </div>
            </div>
        ):(image ? (
            <div className="mt-4 relative bg-gray-50 p-4 rounded-lg shadow-lg">
              <div className="relative">
                <p className="text-sm text-gray-500 font-medium mb-2">
                  Image Preview:
                </p>
                <button
                  onClick={() => setImage(null)}
                  className="absolute flex text-xs gap-1 top-2 right-2 text-white bg-indigo-500/80 hover:bg-indigo-600/90 transition-all duration-200 hover:shadow-xl hover:scale-105 rounded-full p-2 shadow-md focus:outline-none"
                  aria-label="Remove Image"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} viewBox="0 0 24 24"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth={1.5}><path strokeLinejoin="round" d="M21.25 13V8.5a5 5 0 0 0-5-5h-8.5a5 5 0 0 0-5 5v7a5 5 0 0 0 5 5h6.26"></path><path strokeLinejoin="round" d="m3.01 17l2.74-3.2a2.2 2.2 0 0 1 2.77-.27a2.2 2.2 0 0 0 2.77-.27l2.33-2.33a4 4 0 0 1 5.16-.43l2.47 1.91M8.01 10.17a1.66 1.66 0 1 0-.02-3.32a1.66 1.66 0 0 0 .02 3.32"></path><path strokeMiterlimit={10} d="m21.5 16.5l-4 3.991m0-3.982l4 3.991"></path></g></svg>
                  Remove
                </button>
              </div>
              <img
                src={URL.createObjectURL(image)}
                alt="Preview"
                className="w-full h-72 object-cover rounded-lg border border-gray-200 shadow-md transition-transform duration-300"
              />
            </div>
          ) : (
            <div>
              <p className="text-sm text-gray-500 font-medium mb-2">
                Upload an Image:
              </p>
              <label
                htmlFor="dropzone-file"
                {...getRootProps({className: 'dropzone'})}
                className={`group flex flex-col items-center justify-center w-full h-72 bg-gradient-to-br from-gray-100 to-gray-200 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-indigo-400 hover:bg-gradient-to-br hover:from-indigo-50 hover:to-indigo-100 transition-all duration-200 ${isDragActive&&"border-indigo-400 bg-gradient-to-br from-indigo-50 to-indigo-100"}`}
              >
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                  <svg
                    className={`w-12 h-12 mb-3 text-gray-400 group-hover:text-indigo-400 transition-all duration-200 ${isDragActive&&"text-indigo-400"}`}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 4.5v15m7.5-7.5H4.5"
                    />
                  </svg>
                  <p className={`mb-2 text-sm text-gray-500 group-hover:text-indigo-400 ${isDragActive&&"text-indigo-400"}`}>
                    Drag and drop your file here, or click to select
                  </p>
                  <p className="text-xs text-gray-400">
                    Supported formats: SVG, PNG, JPG, GIF (max 800x400px)
                  </p>
                </div>
                <input
                  // id="dropzone-file"
                  type="file"
                  accept="image/*"
                  className="hidden"
                  {...getInputProps()}
                  onChange={handleImageUpload}
                />
              </label>
            </div>)
          )}
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
                Once the event is added, the image cannot be changed. Please upload carefully.
                </h4>
              </div>
  
          {/* Action Buttons */}
          <div className="flex justify-end gap-4 mt-4">
            <button
              onClick={handleCancel}
              disabled={isloading}
              className="px-6 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400"
            >
              Cancel
            </button>
            <button
              onClick={handleUpload}
              disabled={!image||isloading}
              className="px-6 py-2 bg-indigo-500 disabled:bg-indigo-300 text-white rounded-lg hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            >
              Upload
            </button>
          </div>
        </div>
      </div>
    ) : null;
  };

export default UploadModal;
