import React from "react";
import Header from "./componet/Header";

const EventCard = ({ title, date, description, tag, image }) => (
  <div className="group border rounded-lg shadow-lg overflow-hidden bg-white hover:shadow-2xl transition-shadow duration-300">
    {image && (
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
      />
    )}
    <div className="p-4">
      <span className="inline-block text-xs bg-gradient-to-r from-indigo-400 to-purple-500 text-white px-2 py-1 rounded-full font-semibold mb-2">
        {tag}
      </span>
      <h3 className="text-lg font-bold text-gray-800 group-hover:text-purple-600 transition-colors duration-300">
        {title}
      </h3>
      <p className="text-sm text-gray-500 mt-1">{date}</p>
      <p className="text-gray-700 mt-2 line-clamp-2">{description}</p>
      <button className="mt-4 inline-block text-sm text-purple-600 hover:underline">
        Read More
      </button>
    </div>
  </div>
);

const EventsPage = () => {
  const upcomingEvents = [
    {
      id: 1,
      title: "Tech Fest 2024",
      date: "January 15, 2024",
      description: "Explore cutting-edge technology and innovations at the annual tech fest.",
      tag: "Upcoming",
      image: "https://via.placeholder.com/300x200.png?text=Tech+Fest",
    },
    {
      id: 2,
      title: "Science Symposium",
      date: "February 5, 2024",
      description: "Join us for insightful sessions by renowned scientists and researchers.",
      tag: "Upcoming",
      image: "https://via.placeholder.com/300x200.png?text=Science+Symposium",
    },
  ];

  const activeEvents = [
    {
      id: 3,
      title: "Cultural Fest",
      date: "December 5, 2023",
      description: "Experience the vibrancy of culture through dance, music, and more.",
      tag: "Active",
      image: "https://via.placeholder.com/300x200.png?text=Cultural+Fest",
    },
  ];

  const news = [
    {
      id: 4,
      title: "Exam Results Announcement",
      date: "December 20, 2023",
      description: "Final exam results will be released on December 20, 2023.",
      tag: "News",
      image: "https://via.placeholder.com/300x200.png?text=Exam+Results",
    },
    {
      id: 5,
      title: "Admissions Open for 2024",
      date: "January 1, 2024",
      description: "Admissions for the 2024 academic session are now open.",
      tag: "News",
      image: "https://via.placeholder.com/300x200.png?text=Admissions+Open",
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      <nav className="h-16 bg-gradient-to-r from-gray-600 via-gray-700 to-gray-800 text-white shadow-lg">
        <div className="container mx-auto flex items-center justify-between px-6 lg:px-20"></div>
      </nav>

      <Header />

      {/* Upcoming Events Section */}
      <section className="py-12 px-6 lg:px-16 bg-white">
        <h2 className="text-4xl font-bold text-indigo-900 mb-8">
          Upcoming Events
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {upcomingEvents.map((event) => (
            <EventCard key={event.id} {...event} />
          ))}
        </div>
      </section>

      {/* Active Events Section */}
      <section className="py-12 px-6 lg:px-16 bg-gray-100">
        <h2 className="text-4xl font-bold text-indigo-900 mb-8">
          Active Events
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {activeEvents.map((event) => (
            <EventCard key={event.id} {...event} />
          ))}
        </div>
      </section>

      {/* News Section */}
      <section className="py-12 px-6 lg:px-16 bg-white">
        <h2 className="text-4xl font-bold text-indigo-900 mb-8">Latest News</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {news.map((event) => (
            <EventCard key={event.id} {...event} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default EventsPage;
