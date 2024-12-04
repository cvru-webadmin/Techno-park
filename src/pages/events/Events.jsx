import React from "react";
import Header from "./componet/Header";
import EventCard from "./componet/EventCard";
import upcoming from "./componet/upcoming-events-label-collection_662550-1788.jpg";
import SelectionCard from "./componet/SelectionCard";

const EventsPage = () => {
  const Events = [
    {
      id: 1,
      title: "Tech Fest 2024",
      date: "January 15, 2024",
      description:
        "Explore cutting-edge technology and innovations at the annual tech fest.Explore cutting-edge technology and innovations at the annual tech fest.",
      tag: "Upcoming",
      image:
        "http://res.cloudinary.com/dcbniehli/image/upload/v1733036705/fwiqg0rj39r1lviofpa4.jpg",
    },
    {
      id: 2,
      title: "Science Symposium",
      date: "February 5, 2024",
      description:
        "Join us for insightful sessions by renowned scientists and researchers.",
      tag: "Upcoming",
      image: "https://via.placeholder.com/300x200.png?text=Science+Symposium",
    },
    {
      id: 3,
      title: "Cultural Fest",
      date: "December 5, 2023",
      description:
        "Experience the vibrancy of culture through dance, music, and more.",
      tag: "Active",
      image: "https://via.placeholder.com/300x200.png?text=Cultural+Fest",
    },
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
      {/* nav and header  */}
      <nav className="h-16 bg-gradient-to-r from-gray-600 via-gray-700 to-gray-800 text-white shadow-lg">
        {" "}
      </nav>
      <Header />

      <div className="py-0 px-6 lg:px-16 bg-gray-50">
        <h2 className="text-3xl lg:text-4xl font-extrabold text-indigo-900 text-center mb-5">
          Explore Our Events
        </h2>
        <p className="text-md lg:text-lg text-gray-600 text-center">
          Select any category to filter events and find out what’s happening
          next!
        </p>
        <SelectionCard />
      </div>

      {/*Events Section */}
      <section className="py-12 px-6 lg:px-16 bg-white">
      <h2 className="text-3xl lg:text-4xl font-extrabold text-indigo-900 text-center mb-5">
          All Events
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
          {Events.map((event) => (
            <EventCard key={event.id} {...event} />
          ))}
        </div>
      </section>

      {/* Active Events Section */}
      {/* <section className="py-12 px-6 lg:px-16 bg-gray-100">
        <h2 className="text-4xl font-bold text-indigo-900 mb-8">
          Active Events
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {activeEvents.map((event) => (
            <EventCard key={event.id} {...event} />
          ))}
        </div>
      </section> */}

      {/* News Section
      <section className="py-12 px-6 lg:px-16 bg-white">
        <h2 className="text-4xl font-bold text-indigo-900 mb-8">Latest News</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {news.map((event) => (
            <EventCard key={event.id} {...event} />
          ))}
        </div>
      </section> */}
    </div>
  );
};

export default EventsPage;
