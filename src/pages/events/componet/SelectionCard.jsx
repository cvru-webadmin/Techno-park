import React from "react";
import Upcoming from "./upcoming event.avif";
import active from "./image.png";
import news from "./news.jpg";

export default function SelectionCard() {
  // Array of card objects
const cards = [
    {
      id: 1,
      title: "Upcoming Events",
      description: "Discover upcoming events and be part of event.",
      color: "text-indigo-700", // Matches the theme of upcoming events
      image: Upcoming,
      onClick: () => console.log("Navigate to Upcoming Events"),
    },
    {
      id: 2,
      title: "Active Events",
      description: "Join ongoing events happening right now.",
      color: "text-green-700", // Reflects active and vibrant energy
      image: active,
      onClick: () => console.log("Navigate to Active Events"),
    },
    {
      id: 3,
      title: "News",
      description: "Get the latest updates and stay informed.",
      color: "text-red-600", // Highlights urgency or importance
      image: news,
      onClick: () => console.log("Navigate to News"),
    },
  ];
  
  return (
    <div className="py-10 px-6 lg:px-16 bg-gray-50">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {cards.map((card) => (
          <button
          key={card.id}
          onClick={card.onClick}
          className="flex flex-col h-auto pb-2 lg:h-80 items-center border border-gray-300 rounded-lg shadow-lg hover:scale-105 overflow-hidden bg-white hover:shadow-xl transition-all duration-300 focus:outline-none"
        >
          {/* Image Section */}
          <div className="h-2/3 w-full relative">
            <img
              src={card.image}
              alt={card.title}
              className="w-full h-full object-cover rounded-t-lg"
            />
          </div>
        
          {/* Content Section */}
          <div className="p-6 flex-1 lg:text-left">
            <h3 className={`text-xl lg:text-2xl text-center font-semibold ${card.color} mb-1`}>
              {card.title}
            </h3>
            <p className="text-gray-600 text-center text-sm lg:text-sm">{card.description}</p>
          </div>
        </button>
        
        ))}
      </div>
    </div>
  );
}
