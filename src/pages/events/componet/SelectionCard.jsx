import React from "react";
import UpcomingImg from "../image/upcoming event.avif";
import active from "../image/image.png";
import news from "../image/news.jpg";
import all from "../image/all events.avif";

export default function SelectionCard({Upcoming,Active,News,AllEvent,setEvent,scroll,tab}) {
  // Array of card objects
const cards = [
  {
    id: 1,
    title: "All Events",
    description: "Explore all events happening at Techno Park.",
    color: "text-blue-700", // Represents inclusiveness and accessibility
    image: all, // Use a suitable placeholder or unique image for this card
    onClick: () => {setEvent(AllEvent);scroll();tab("all-event")},
  },
  {
    id: 3,
    title: "Event Spotlight",
    description: "Join ongoing events happening right now.",
    color: "text-green-700", // Reflects active and vibrant energy
    image: active,
    onClick: () => {setEvent(Active);scroll();tab("active")},
  },
  {
    id: 2,
    title: "Upcoming Events",
    description: "Discover upcoming events and be part of the excitement.",
    color: "text-indigo-700", // Matches the theme of upcoming events
    image: UpcomingImg,
    onClick: () => {setEvent(Upcoming);scroll();tab("upcoming")},
  },
  {
    id: 4,
    title: "News  & Announcement",
    description: "Get the latest updates and stay informed.",
    color: "text-red-600", // Highlights urgency or importance
    image: news,
    onClick: () => {setEvent(News);scroll();tab("news")}
  },
  
];

  
  return (
    <div className="py-10 px-6 lg:px-16 bg-gray-50">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10">
        {cards.map((card) => (
          <button
          key={card.id}
          onClick={card.onClick}
          className="flex flex-col h-auto pb-2 md:h-72 items-center border border-gray-300 rounded-lg shadow-lg hover:scale-105 overflow-hidden bg-white hover:shadow-xl transition-all duration-300 focus:outline-none"
        >
          {/* Image Section */}
          <div className="w-full relative">
            <img
              src={card.image}
              alt={card.title}
              className="w-full h-44 object-cover rounded-t-lg"
            />
          </div>
        
          {/* Content Section */}
          <div className="p-4 flex-1 lg:text-left">
            <h3 className={`text-md lg:text-xl text-center font-semibold ${card.color} mb-1`}>
              {card.title}
            </h3>
            <p className="text-gray-600 text-center text-xs lg:text-[0.80rem]">{card.description}</p>
          </div>
        </button>
        
        ))}
      </div>
    </div>
  );
}
