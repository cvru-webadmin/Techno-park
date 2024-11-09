import React from 'react';

// Example data (replace URLs and details with actual event data)
const events = [
  {
    id: 1,
    image: 'https://via.placeholder.com/400',
    name: 'Annual Cultural Fest',
    description: 'A grand celebration showcasing diverse talents, music, dance, and performances from across the student body.',
  },
  {
    id: 2,
    image: 'https://via.placeholder.com/400',
    name: 'Tech Expo',
    description: 'A showcase of innovative projects, technology exhibitions, and workshops for budding technologists.',
  },
  {
    id: 3,
    image: 'https://via.placeholder.com/400',
    name: 'Sports Day',
    description: 'An exciting day of sports events and competitions, promoting fitness and camaraderie among students.',
  },
  {
    id: 4,
    image: 'https://via.placeholder.com/400',
    name: 'Drama & Theatre Night',
    description: 'An evening of captivating performances and dramatic showcases, highlighting student talent in the arts.',
  },
];

const CultureAndActivities = () => {
  return (
    <section className="bg-gray-50 py-12 px-4 sm:px-8 lg:px-16">
      <div className="max-w-screen-lg mx-auto text-center">
        {/* Main Heading */}
        <h2 className="text-3xl sm:text-4xl font-semibold text-gray-800 mb-6">
          Culture & Activities
        </h2>
        <p className="text-gray-600 mb-8 text-base sm:text-lg">
          Explore the vibrant culture and engaging activities that bring our community together, fostering creativity, innovation, and unity.
        </p>
      </div>

      {/* Events Gallery */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-screen-lg mx-auto mb-10">
        {events.map((event) => (
          <div key={event.id} className="relative bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-300 hover:scale-105">
            <img
              src={event.image}
              alt={event.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{event.name}</h3>
              <p className="text-gray-600 text-sm">{event.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Add More Events Button */}
      <div className="text-center">
        <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 px-10 text-lg font-semibold rounded-md shadow-md transform transition duration-300 hover:scale-105">
          Add More Events
        </button>
      </div>
    </section>
  );
};

export default CultureAndActivities;
