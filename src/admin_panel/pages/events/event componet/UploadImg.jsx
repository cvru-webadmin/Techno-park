import React, { useContext, useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import { FireContext } from "../../../../Context/context";

const UploadModal = ({ isOpen, onClose, setImageUrl }) => {
    const { UploadImage } = useContext(FireContext);
    const [image, setImage] = useState(null);
    const [preview, setPreview] = useState(null);
    const [isLoading, setLoading] = useState(false);

    const { acceptedFiles, getRootProps, getInputProps, isDragActive } = useDropzone({
        accept: { "image/*": [] },
        onDrop: (files) => {
            if (files.length > 0) {
                setImage(files[0]);
                setPreview(URL.createObjectURL(files[0]));
            }
        },
    });

    useEffect(() => {
        return () => {
            if (preview) URL.revokeObjectURL(preview);
        };
    }, [preview]);

    const handleCancel = () => {
        setImage(null);
        setPreview(null);
        setImageUrl("");
        onClose();
    };

    const handleUpload = async () => {
        if (!image) {
            alert("Please select an image before uploading.");
            return;
        }
        setLoading(true);
        try {
            let res = await UploadImage(image);
            if (res) {
                setImageUrl(res);
                alert("Image uploaded successfully!");
                handleCancel();
            }
        } catch (error) {
            alert("Error uploading image. Please try again.");
            console.error("Upload error:", error);
        } finally {
            setLoading(false);
        }
    };

    return isOpen ? (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center">
            <div className="bg-white rounded-lg p-5 w-3/4 max-w-lg">
                <h2 className="text-xl font-semibold text-gray-700 mb-4">
                    Upload Image
                </h2>

                {isLoading ? (
                    <div className="w-full h-72 flex flex-col justify-center items-center bg-gray-100 border-2 border-indigo-400 rounded-md">
                        <p className="text-indigo-500 text-lg">Uploading...</p>
                    </div>
                ) : preview ? (
                    <div className="relative bg-gray-50 p-4 rounded-lg shadow-lg">
                        <p className="text-sm text-gray-500 font-medium mb-2">
                            Image Preview:
                        </p>
                        <button
                            onClick={handleCancel}
                            className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded-full text-xs"
                        >
                            ✕ Remove
                        </button>
                        <img
                            src={preview}
                            alt="Preview"
                            className="w-full h-72 object-cover rounded-lg border border-gray-200 shadow-md"
                        />
                    </div>
                ) : (
                    <div>
                        <p className="text-sm text-gray-500 font-medium mb-2">
                            Upload an Image:
                        </p>
                        <label
                            {...getRootProps()}
                            className={`flex flex-col items-center justify-center w-full h-72 bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-indigo-400 transition-all duration-200 ${
                                isDragActive && "border-indigo-400 bg-indigo-50"
                            }`}
                        >
                            <input {...getInputProps()} />
                            <p className="text-gray-500 text-sm">
                                Drag & drop or click to select an image
                            </p>
                        </label>
                    </div>
                )}

                <div className="flex justify-end gap-4 mt-4">
                    <button
                        onClick={handleCancel}
                        disabled={isLoading}
                        className="px-6 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={handleUpload}
                        disabled={!image || isLoading}
                        className="px-6 py-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 disabled:bg-indigo-300"
                    >
                        Upload
                    </button>
                </div>
            </div>
        </div>
    ) : null;
};

export default UploadModal;
