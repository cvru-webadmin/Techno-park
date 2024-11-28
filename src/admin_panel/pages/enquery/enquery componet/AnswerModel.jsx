import React, { useState } from "react";

const AnswerModal = ({ isOpen, onClose, askerDetails, onSave, Answer, setAnswer }) => {
    const [adminAnswer, setAdminAnswer] = useState("");
  
    if (!isOpen) return null;
  
    const handleAnswerChange = (e) => setAdminAnswer(e.target.value);
  
    const handleSubmit = () => {
      if (!adminAnswer.trim()) {
        alert("Please provide an answer before submitting.");
        return;
      }
      let res = onSave(askerDetails.id,{
        ...askerDetails,
        Answer: adminAnswer,
        ["updateAt"]: new Date().toISOString().split('T')[0],
      });
      setAdminAnswer(""); // Reset answer field
      onClose(); // Close modal
      if(res){setAnswer(!Answer)}
    };
  
    return (
      <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white rounded-lg w-full max-w-xl p-6 shadow-lg">
          {/* Header */}
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold text-gray-800">Inquiry Answer</h2>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700 focus:outline-none"
            >
              ✕
            </button>
          </div>

           {/* Query Display */}
           
           
          {/* Askers Details */}
          <div className="mb-4">
             <label className="block text-sm font-medium text-gray-600 mb-1">
               Ask By:
             </label>
             <div className="p-4 bg-gray-100 border rounded-lg text-gray-700">
               {askerDetails.Name || "No question provided."}
             </div>
           </div>
          <div className="mb-4">
             <label className="block text-sm font-medium text-gray-600 mb-1">
               Subject:
             </label>
             <div className="p-4 bg-gray-100 border rounded-lg text-gray-700">
               {askerDetails.Subject || "No question provided."}
             </div>
           </div>
          <div className="mb-4">
             <label className="block text-sm font-medium text-gray-600 mb-1">
               Your Question:
             </label>
             <div className="p-4 bg-gray-100 border rounded-lg text-gray-700">
               {askerDetails.Message || "No question provided."}
             </div>
           </div>
  
          {/* Admin Answer Box */}
          <div className="mb-4">
            <label
              htmlFor="adminAnswer"
              className="block text-sm font-medium text-gray-600 mb-1"
            >
              Write Your Answer:
            </label>
            <textarea
              id="adminAnswer"
              rows="4"
              value={adminAnswer}
              onChange={handleAnswerChange}
              placeholder="Type your answer here..."
              className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:ring focus:ring-indigo-300 focus:outline-none"
            ></textarea>
          </div>

          <div className="text-gray-500 text-xs flex gap-2 mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4" viewBox="0 0 24 24">
            	<path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2m1 15h-2v-6h2zm0-8h-2V7h2z"></path>
            </svg>
            <h4>Please ensure your answer is accurate and final before submitting. Double-check carefully to avoid future changes.</h4>
          </div>
  
          {/* Actions */}
          <div className="flex justify-end">
            <button
              onClick={onClose}
              className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg mr-2 hover:bg-gray-300"
            >
              Cancel
            </button>
            <button
              onClick={handleSubmit}
              className="bg-indigo-500 text-white px-4 py-2 rounded-lg hover:bg-indigo-600"
            >
              Submit Answer
            </button>
          </div>
        </div>
      </div>
    );
  };

export default AnswerModal;
