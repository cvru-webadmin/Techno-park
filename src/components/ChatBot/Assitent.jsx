import axios from 'axios';
import React, { useState, useEffect, useRef } from 'react';
import chatbotContext from './context';
import API_key from './APIKEY.jsx';
import './Chatbot.css'

const ChatBot = () => {

  const context="";
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState('');
  const [hasWelcomed, setHasWelcomed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Toggle chat modal visibility
  const toggleChat = () => {
    setIsOpen(!isOpen);

    if (!isOpen && !hasWelcomed) {
      setTimeout(() => {
        addMessage('Techno Bot', 'Hello! How can I assist you today?');
        setHasWelcomed(true);
      }, 2000);
    }
  };

  // Add messages to the chat
  const addMessage = (sender, text) => {
    setMessages(prevMessages => [...prevMessages, { sender, text }]);
  };

  // Handle send message
  const handleSend = async() => {
    if (userInput.trim()) {
      addMessage('User', userInput);
      setUserInput('');
      setIsLoading(true);
      try{
        let response = await axios.post(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${API_key}`,
            {
              contents: [
                {
                  parts: [
                    {
                      text: `
                     Context: ${JSON.stringify(chatbotContext)}
                     
                     Instruction: Please respond to the user's question based on the information in the context. If only part of the answer is available, provide that information in a friendly and helpful manner, even if it does not fully address the question. If there is no relevant information in the context, respond with "I'm sorry, I don't have that information right now."

                     User question: ${userInput}`}]}]});
          
          setIsLoading(false);
          addMessage('Techno Bot',response.data?.candidates?.[0]?.content?.parts?.[0]?.text || "Sorry, I couldn't understand that.");
        }
      catch(error){
        console.log(error)
      }
      finally{
        setIsLoading(false);
      }
      
    //   Simulate a bot response delay
    //   setTimeout(() => {
    //     addMessage('Techno Bot', 'Thanks for reaching out! I’ll get back to you shortly.');
    //     setIsLoading(false);
    //   }, 1000);
    
  }

  };

  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <div className="fixed z-50 bottom-16 right-16">
      {/* Button to open chatbot */}
      <button
        onClick={toggleChat}
        className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 px-3 text-base font-semibold rounded-full shadow-md transform transition-all duration-300 ease-in-out hover:scale-105"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" width="20" height="20">
          <rect width="20" height="20" fill="none" />
          <path fill="currentColor" d="M12 5.5a1 1 0 1 0 0 2a1 1 0 0 0 0-2m-5 1a1 1 0 1 1 2 0a1 1 0 0 1-2 0m3.5-4a.5.5 0 0 0-1 0V3h-3A1.5 1.5 0 0 0 5 4.5v4A1.5 1.5 0 0 0 6.5 10h6.294l.326-1H6.5a.5.5 0 0 1-.5-.5v-4a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v3.583a1.42 1.42 0 0 1 1 .016V4.5A1.5 1.5 0 0 0 13.5 3h-3zm-2 9h1.908a1.42 1.42 0 0 0-.408.997v.006H5.31a.81.81 0 0 0-.81.81v.437c0 .69.131 1.456.802 2.069C5.99 16.446 7.34 17 10 17c1.55 0 2.655-.188 3.444-.47a1.4 1.4 0 0 0 .678.419a1.3 1.3 0 0 0-.117.439c-.916.367-2.137.59-3.755.61V18h-.5v-.002c-2.616-.033-4.195-.595-5.122-1.44c-.875-.8-1.089-1.777-1.123-2.556H3.5v-.69c0-.999.81-1.809 1.81-1.809H8.5zm6.378-2.218l.348 1.071a2.2 2.2 0 0 0 1.399 1.397l1.071.348l.021.006a.423.423 0 0 1 0 .798l-1.071.348a2.2 2.2 0 0 0-1.399 1.397l-.348 1.07a.423.423 0 0 1-.798 0l-.349-1.07a2.2 2.2 0 0 0-.65-.977a2.2 2.2 0 0 0-.748-.426l-1.071-.348a.423.423 0 0 1 0-.798l1.071-.348a2.2 2.2 0 0 0 1.377-1.397l.348-1.07a.423.423 0 0 1 .799 0m4.905 7.931l-.766-.248a1.58 1.58 0 0 1-.998-.998l-.25-.765a.302.302 0 0 0-.57 0l-.248.765a1.58 1.58 0 0 1-.984.998l-.765.248a.303.303 0 0 0-.146.46c.036.05.087.09.146.11l.765.249a1.58 1.58 0 0 1 1 1.002l.248.764a.302.302 0 0 0 .57 0l.249-.764a1.58 1.58 0 0 1 .999-.999l.765-.248a.302.302 0 0 0 0-.57zm-6.174-.527l.07.053Z" />
        </svg>
      </button>


      {/* Chat modal */}
      {isOpen && (
        <div className="mt-4 w-96 bg-white rounded-lg shadow-lg p-4 transition-transform transform-gpu duration-300 ease-out">
         {/* Header with chatbot name and close button */}
         <div className="flex justify-between items-center pb-2 border-b border-gray-300 bg-white px-4 py-2">
           <div className="flex items-center space-x-2">
             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" width="20" height="20">
               <rect width="20" height="20" fill="none" />
               <path fill="currentColor" d="M12 5.5a1 1 0 1 0 0 2a1 1 0 0 0 0-2m-5 1a1 1 0 1 1 2 0a1 1 0 0 1-2 0m3.5-4a.5.5 0 0 0-1 0V3h-3A1.5 1.5 0 0 0 5 4.5v4A1.5 1.5 0 0 0 6.5 10h6.294l.326-1H6.5a.5.5 0 0 1-.5-.5v-4a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v3.583a1.42 1.42 0 0 1 1 .016V4.5A1.5 1.5 0 0 0 13.5 3h-3zm-2 9h1.908a1.42 1.42 0 0 0-.408.997v.006H5.31a.81.81 0 0 0-.81.81v.437c0 .69.131 1.456.802 2.069C5.99 16.446 7.34 17 10 17c1.55 0 2.655-.188 3.444-.47a1.4 1.4 0 0 0 .678.419a1.3 1.3 0 0 0-.117.439c-.916.367-2.137.59-3.755.61V18h-.5v-.002c-2.616-.033-4.195-.595-5.122-1.44c-.875-.8-1.089-1.777-1.123-2.556H3.5v-.69c0-.999.81-1.809 1.81-1.809H8.5zm6.378-2.218l.348 1.071a2.2 2.2 0 0 0 1.399 1.397l1.071.348l.021.006a.423.423 0 0 1 0 .798l-1.071.348a2.2 2.2 0 0 0-1.399 1.397l-.348 1.07a.423.423 0 0 1-.798 0l-.349-1.07a2.2 2.2 0 0 0-.65-.977a2.2 2.2 0 0 0-.748-.426l-1.071-.348a.423.423 0 0 1 0-.798l1.071-.348a2.2 2.2 0 0 0 1.377-1.397l.348-1.07a.423.423 0 0 1 .799 0m4.905 7.931l-.766-.248a1.58 1.58 0 0 1-.998-.998l-.25-.765a.302.302 0 0 0-.57 0l-.248.765a1.58 1.58 0 0 1-.984.998l-.765.248a.303.303 0 0 0-.146.46c.036.05.087.09.146.11l.765.249a1.58 1.58 0 0 1 1 1.002l.248.764a.302.302 0 0 0 .57 0l.249-.764a1.58 1.58 0 0 1 .999-.999l.765-.248a.302.302 0 0 0 0-.57zm-6.174-.527l.07.053Z" />
             </svg>
             <span className="font-bold text-lg text-gray-800">Techno Bot</span>
           </div>
           <button onClick={toggleChat} className="text-gray-500 hover:text-gray-700 focus:outline-none">
             <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" viewBox="0 0 24 24">
               <rect width="24" height="24" fill="none" />
               <path fill="currentColor" d="M16.066 8.995a.75.75 0 1 0-1.06-1.061L12 10.939L8.995 7.934a.75.75 0 1 0-1.06 1.06L10.938 12l-3.005 3.005a.75.75 0 0 0 1.06 1.06L12 13.06l3.005 3.006a.75.75 0 0 0 1.06-1.06L13.062 12z" />
             </svg>
           </button>
         </div>


       {/* Chat messages */}
       <div className="flex flex-col chatbot space-y-3 h-64 overflow-y-auto mb-4 p-3 bg-white rounded-lg shadow-inner">
         {messages.map((msg, index) => (
           <div key={index} className={`flex ${msg.sender === 'User' ? 'justify-end' : 'justify-start'}`}>
             <span
               className={`max-w-xs px-4 py-2 rounded-2xl text-sm font-medium shadow-sm ${
                 msg.sender === 'User'
                   ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-br-none'
                   : 'bg-gray-200 text-gray-900 rounded-bl-none'
               }`}
               style={{ whiteSpace: 'pre-wrap' }}
             >
               {msg.text}
             </span>
           </div>
         ))}
         
         {/* Loading indicator for bot typing */}
         {isLoading && (
           <div className="flex justify-start">
             <span className="px-4 py-2 rounded-2xl bg-gray-200 text-gray-800 animate-pulse text-sm font-medium">
               Techno Bot is typing...
             </span>
           </div>
         )}
          <div ref={messagesEndRef} />
       </div>
       
          {/* Input area */}
          <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg shadow-md">
            <input
              type="text"
              placeholder="Type your message..."
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              onKeyDown={(e)=>{
                if(e.key==="Enter"){
                    // e.preventDefault();
                    handleSend()
                }
              }}
              className="flex-grow px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-500 text-gray-800"
            />
            <button
              onClick={handleSend}
              className="p-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full shadow-lg hover:bg-blue-600 transform transition-transform duration-300 ease-in-out hover:scale-110"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="20" height="20" fill="currentColor">
                <rect width="28" height="28" fill="none" />
                <path d="M3.79 2.625c-.963-.46-2.021.42-1.746 1.451l2.016 7.533a1 1 0 0 0 .824.732l9.884 1.412c.286.04.286.454 0 .495l-9.883 1.411a1 1 0 0 0-.824.732l-2.017 7.537c-.275 1.03.783 1.91 1.746 1.451L25.288 15.13c.949-.452.949-1.804 0-2.257z" />
              </svg>
            </button>
          </div>
          
        </div>
      )}
    </div>
  );
};

export default ChatBot;
