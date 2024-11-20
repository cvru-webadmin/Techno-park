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
                       
                             Instruction: Please respond to the user's question based on the information in the context. If only part of the answer is available, provide that information in a friendly and helpful manner, even if it does not fully address the question. If there is no relevant information in the context,dont inlude ** , respond with "I'm sorry, I don't have that information right now."
                       
                             User question: ${userInput}
                           `
                         }]}]});
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
  className="relative bg-gradient-to-r from-blue-500 group to-purple-600 text-white py-3 px-3 text-base font-semibold rounded-full shadow-md transform transition-all duration-300 ease-in-out hover:scale-105"
>
  {/* Chatbot Icon */}
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" width="20" height="20">
    <rect width="20" height="20" fill="none" />
    <path
      fill="currentColor"
      d="M12 5.5a1 1 0 1 0 0 2a1 1 0 0 0 0-2m-5 1a1 1 0 1 1 2 0a1 1 0 0 1-2 0m3.5-4a.5.5 0 0 0-1 0V3h-3A1.5 1.5 0 0 0 5 4.5v4A1.5 1.5 0 0 0 6.5 10h6.294l.326-1H6.5a.5.5 0 0 1-.5-.5v-4a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v3.583a1.42 1.42 0 0 1 1 .016V4.5A1.5 1.5 0 0 0 13.5 3h-3zm-2 9h1.908a1.42 1.42 0 0 0-.408.997v.006H5.31a.81.81 0 0 0-.81.81v.437c0 .69.131 1.456.802 2.069C5.99 16.446 7.34 17 10 17c1.55 0 2.655-.188 3.444-.47a1.4 1.4 0 0 0 .678.419a1.3 1.3 0 0 0-.117.439c-.916.367-2.137.59-3.755.61V18h-.5v-.002c-2.616-.033-4.195-.595-5.122-1.44c-.875-.8-1.089-1.777-1.123-2.556H3.5v-.69c0-.999.81-1.809 1.81-1.809H8.5zm6.378-2.218l.348 1.071a2.2 2.2 0 0 0 1.399 1.397l1.071.348l.021.006a.423.423 0 0 1 0 .798l-1.071.348a2.2 2.2 0 0 0-1.399 1.397l-.348 1.07a.423.423 0 0 1-.798 0l-.349-1.07a2.2 2.2 0 0 0-.65-.977a2.2 2.2 0 0 0-.748-.426l-1.071-.348a.423.423 0 0 1 0-.798l1.071-.348a2.2 2.2 0 0 0 1.377-1.397l.348-1.07a.423.423 0 0 1 .799 0m4.905 7.931l-.766-.248a1.58 1.58 0 0 1-.998-.998l-.25-.765a.302.302 0 0 0-.57 0l-.248.765a1.58 1.58 0 0 1-.984.998l-.765.248a.303.303 0 0 0-.146.46c.036.05.087.09.146.11l.765.249a1.58 1.58 0 0 1 1 1.002l.248.764a.302.302 0 0 0 .57 0l.249-.764a1.58 1.58 0 0 1 .999-.999l.765-.248a.302.302 0 0 0 0-.57zm-6.174-.527l.07.053Z"
    />
  </svg>

  {/* Tooltip on hover */}
  {!isOpen&&<div className="absolute left-[-180px] bottom-12 px-4 py-2 bg-white rounded-br-none text-gray-700 text-[11px] rounded-lg shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
    <p><span className='font-bold'> Assistant: </span>Your Personal Chatbot</p>
    <div className=' absolute bottom-0 left-1 rounded-l-full rounded-xl h-1 w-[98%] bg-gradient-to-r from-purple-600 via-teal-500  to-amber-400'></div>
  </div>}
</button>


      {/* Chat modal */}
      {isOpen && (
        <div className="mt-3 w-96 bg-opacity-10 ChatBotBG rounded-lg shadow-2xl border border-gray-400/20 py-2 transition-transform transform-gpu duration-300 ease-out">
         {/* Header with chatbot name and close button */}
         <div className="flex justify-between items-center pb-2 border-b bg-white border-gray-300 px-4 py-2">
           <div className="flex items-center space-x-2">
             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" width="20" height="20">
               <rect width="20" height="20" fill="none" />
               <path fill="currentColor" d="M12 5.5a1 1 0 1 0 0 2a1 1 0 0 0 0-2m-5 1a1 1 0 1 1 2 0a1 1 0 0 1-2 0m3.5-4a.5.5 0 0 0-1 0V3h-3A1.5 1.5 0 0 0 5 4.5v4A1.5 1.5 0 0 0 6.5 10h6.294l.326-1H6.5a.5.5 0 0 1-.5-.5v-4a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v3.583a1.42 1.42 0 0 1 1 .016V4.5A1.5 1.5 0 0 0 13.5 3h-3zm-2 9h1.908a1.42 1.42 0 0 0-.408.997v.006H5.31a.81.81 0 0 0-.81.81v.437c0 .69.131 1.456.802 2.069C5.99 16.446 7.34 17 10 17c1.55 0 2.655-.188 3.444-.47a1.4 1.4 0 0 0 .678.419a1.3 1.3 0 0 0-.117.439c-.916.367-2.137.59-3.755.61V18h-.5v-.002c-2.616-.033-4.195-.595-5.122-1.44c-.875-.8-1.089-1.777-1.123-2.556H3.5v-.69c0-.999.81-1.809 1.81-1.809H8.5zm6.378-2.218l.348 1.071a2.2 2.2 0 0 0 1.399 1.397l1.071.348l.021.006a.423.423 0 0 1 0 .798l-1.071.348a2.2 2.2 0 0 0-1.399 1.397l-.348 1.07a.423.423 0 0 1-.798 0l-.349-1.07a2.2 2.2 0 0 0-.65-.977a2.2 2.2 0 0 0-.748-.426l-1.071-.348a.423.423 0 0 1 0-.798l1.071-.348a2.2 2.2 0 0 0 1.377-1.397l.348-1.07a.423.423 0 0 1 .799 0m4.905 7.931l-.766-.248a1.58 1.58 0 0 1-.998-.998l-.25-.765a.302.302 0 0 0-.57 0l-.248.765a1.58 1.58 0 0 1-.984.998l-.765.248a.303.303 0 0 0-.146.46c.036.05.087.09.146.11l.765.249a1.58 1.58 0 0 1 1 1.002l.248.764a.302.302 0 0 0 .57 0l.249-.764a1.58 1.58 0 0 1 .999-.999l.765-.248a.302.302 0 0 0 0-.57zm-6.174-.527l.07.053Z" />
             </svg>
             <span className="font-bold text-lg text-gray-800 mr-2">Techno Bot</span>
           </div>
           <button onClick={toggleChat} className="text-gray-500 hover:text-gray-700 focus:outline-none">
             <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" viewBox="0 0 24 24">
               <rect width="24" height="24" fill="none" />
               <path fill="currentColor" d="M16.066 8.995a.75.75 0 1 0-1.06-1.061L12 10.939L8.995 7.934a.75.75 0 1 0-1.06 1.06L10.938 12l-3.005 3.005a.75.75 0 0 0 1.06 1.06L12 13.06l3.005 3.006a.75.75 0 0 0 1.06-1.06L13.062 12z" />
             </svg>
           </button>
         </div>


       {/* Chat messages */}
       <div className="flex flex-col chatbot space-y-3 h-72 overflow-y-auto mb-4 p-4 bg-gray-100/20 rounded-lg shadow-inner">
         {messages.map((msg, index) => (
           <div
             key={index}
             className={`flex ${
               msg.sender === 'User' ? 'justify-end' : 'justify-start'
             } items-start`}
           >
             {msg.sender !== 'User' && (
               <div className="flex-shrink-0 w-7 h-7 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-white shadow-md mr-2">
               <svg xmlns="http://www.w3.org/2000/svg" height={18} width={18} viewBox="0 0 24 24">
                	<rect width="24" height="24" fill="none" />
                	<path fill="currentColor" d="M22.078 8.347a1.4 1.4 0 0 0-.488-.325V4.647a.717.717 0 1 0-1.434 0V7.85h-.21a5.48 5.48 0 0 0-5.25-3.92H9.427a5.48 5.48 0 0 0-5.25 3.92H3.9V4.647a.717.717 0 1 0-1.434 0v3.385a1.5 1.5 0 0 0-.469.315A1.72 1.72 0 0 0 1.5 9.552v4.896a1.7 1.7 0 0 0 1.702 1.702h.956a5.48 5.48 0 0 0 5.25 3.92h5.183a5.48 5.48 0 0 0 5.25-3.92h.955a1.7 1.7 0 0 0 1.702-1.702V9.552c.02-.44-.131-.872-.42-1.205M3.996 14.716H3.24a.27.27 0 0 1-.191-.077a.3.3 0 0 1-.076-.191V9.552a.26.26 0 0 1 .248-.268h.775a.6.6 0 0 0 0 .125v5.182a.6.6 0 0 0 0 .125m4.695-3.118a.813.813 0 0 1-1.386-.578c0-.217.086-.425.238-.579l.956-.956a.813.813 0 0 1 1.148 0l.956.956a.812.812 0 0 1-.574 1.387a.8.8 0 0 1-.573-.23l-.412-.41zm5.9 4.074a3.605 3.605 0 0 1-5.068 0a.813.813 0 0 1 .885-1.326a.8.8 0 0 1 .262.178a2.017 2.017 0 0 0 2.773 0a.804.804 0 0 1 1.148 0a.813.813 0 0 1 0 1.148m1.912-4.074a.813.813 0 0 1-1.148 0l-.41-.41l-.402.41a.82.82 0 0 1-.574.23a.8.8 0 0 1-.574-.23a.82.82 0 0 1 0-1.157l.957-.956a.813.813 0 0 1 1.147 0l.956.956a.82.82 0 0 1 .077 1.157zm4.609 2.869a.3.3 0 0 1-.077.191a.27.27 0 0 1-.191.077h-.755a.6.6 0 0 0 0-.125V9.37a.6.6 0 0 0 0-.124h.765a.25.25 0 0 1 .181.077c.049.052.076.12.077.19z" />
                </svg>
             </div>
             
             )}
             <span
               className={`max-w-xs px-4 py-3 rounded-lg text-[0.80rem] leading-none font-medium shadow ${
                 msg.sender === 'User'
                   ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-br-none'
                   : 'bg-white text-gray-900 border border-gray-200 rounded-tl-none'
               }`}
               style={{
                 whiteSpace: 'pre-wrap',
                 wordBreak: 'break-word',
               }}
             >
               {msg.text}
             </span>
           </div>
         ))}
       
         {/* Loading indicator for bot typing */}
          {isLoading && (
            <div className="flex justify-start items-center space-x-2">
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-white shadow-md">
              <svg xmlns="http://www.w3.org/2000/svg" className='h-[0.95rem] w-[0.95rem]' viewBox="0 0 24 24">
                	<rect width="24" height="24" fill="none" />
                	<path fill="currentColor" d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12z" />
                	<circle cx="16" cy="10" r="0" fill="currentColor">
                		<animate attributeName="r" begin=".67" calcMode="spline" dur="1.5s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" repeatCount="indefinite" values="0;1.75;0;0" />
                	</circle>
                	<circle cx="12" cy="10" r="0" fill="currentColor">
                		<animate attributeName="r" begin=".33" calcMode="spline" dur="1.5s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" repeatCount="indefinite" values="0;1.75;0;0" />
                	</circle>
                	<circle cx="8" cy="10" r="0" fill="currentColor">
                		<animate attributeName="r" begin="0" calcMode="spline" dur="1.5s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" repeatCount="indefinite" values="0;1.75;0;0" />
                	</circle>
                </svg>
              </div>
              <div className="px-4 py-2 'bg-white text-gray-900 border border-gray-200 rounded-bl-md text-[0.80rem] font-medium shadow-md">
                Techno Bot is typing<span className='animate-pulse'>...</span>
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
       </div>
       
         {/* Input and suggestions area */}
           <div className="space-y-1">
             {/* Suggestions Row */}
             <div className="flex items-center space-x-3 suggestion overflow-x-auto p-2 bg-gray-50 border border-gray-200 rounded-lg shadow-inner">
               {["Hello", "Admissions Info", "Course Details", "Contact Support","HOD"].map(
                 (suggestion, index) => (
                   <button
                     key={index}
                     onClick={
                      () => {
                      setUserInput(suggestion);
                        handleSend;
                    }}
                     className="px-4 py-2 bg-gradient-to-r  from-gray-200 to-gray-300 text-gray-800 text-[0.80rem] text-nowrap font-medium rounded-full shadow-sm hover:bg-gray-400 transition-transform transform hover:scale-105"
                   >
                     {suggestion}
                   </button>
                 )
               )}
             </div>
           
             {/* Input Area */}
             <div className="flex items-center space-x-3 p-4 bg-white border border-gray-200 rounded-lg shadow-lg">
               <input
                 type="text"
                 placeholder="Type your message..."
                 value={userInput}
                 onChange={(e) => setUserInput(e.target.value)}
                 onKeyDown={(e) => {
                   if (e.key === "Enter") {
                     handleSend();
                   }
                 }}
                 className="flex-grow px-4 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-500 text-gray-900 text-sm"
               />
               <button
                 onClick={handleSend}
                 className="p-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full shadow-md hover:shadow-lg hover:scale-105 transform transition-transform duration-200 ease-in-out"
                 aria-label="Send Message"
               >
                 <svg
                   xmlns="http://www.w3.org/2000/svg"
                   viewBox="0 0 28 28"
                   width="20"
                   height="20"
                   fill="currentColor"
                 >
                   <path d="M3.79 2.625c-.963-.46-2.021.42-1.746 1.451l2.016 7.533a1 1 0 0 0 .824.732l9.884 1.412c.286.04.286.454 0 .495l-9.883 1.411a1 1 0 0 0-.824.732l-2.017 7.537c-.275 1.03.783 1.91 1.746 1.451L25.288 15.13c.949-.452.949-1.804 0-2.257z" />
                 </svg>
               </button>
             </div>
           </div>
           
          
        </div>
      )}
    </div>
  );
};

export default ChatBot;
