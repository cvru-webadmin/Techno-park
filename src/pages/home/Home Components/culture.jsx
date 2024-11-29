import React from 'react';
import Hackathon from '../../../assets/images/hackathon.jpg';
import Skitt from '../../../assets/images/Skitt.png';
import TeachersDay from '../../../assets/images/TeachersDay.jpeg';
import RepublicDay from '../../../assets/images/RepublicDay.jpeg';

const CultureAndActivities = () => {
  const events = [
    {
      title: "Hackathon",
      description:
        "A Hackathon is an immersive and fast-paced innovation marathon where participants come together to solve real-world problems, create impactful solutions, and turn ideas into reality. It's a collaborative event that fosters creativity, teamwork, and out-of-the-box thinking.",
      image: Hackathon,
    },
    {
      title: "Skitt Play on Social Media",
      description:
        "These performances combine creativity with purpose, often addressing relatable issues, highlighting societal themes, or delivering inspiring messages. Skitt play on social media leverage the power of visuals to make a lasting impression on viewers.",
      image: Skitt,
    },
    {
      title: "Teacher’s Day Celebration",
      description:
        "Teacher’s Day is a special occasion to honor the incredible role educators play in shaping minds and building the foundation of our future. It is a day to reflect on the tireless efforts, patience, and dedication that teachers bring to their work and guiding the challenges of life.",
      image: TeachersDay,
    },
    {
      title: "Republic Day Celebration",
      description:
        "Republic Day is more than just a date on the calendar; it’s a celebration of India’s vibrant culture, diversity, and democratic values. Observed every year on January 26, it marks the day when the Constitution of India came into effect in 1950, transforming India into a sovereign, democratic republic.",
      image: RepublicDay,
    },
  ];

  return (
    <section className="flex flex-col items-center bg-white py-6 pb-10 px-4 sm:px-8 lg:px-16">
      <div className="max-w-[93%] w-full text-center">
        {/* Main Heading */}
        <h2 className="text-3xl sm:text-4xl font-semibold text-blue-600 mb-6">
          Culture & Activities
        </h2>
        <p className="text-gray-600 mb-8">
          Explore the vibrant culture and engaging activities that bring our community together, fostering creativity, innovation, and unity.
        </p>
      </div>

      {/* Events Gallery */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 max-w-[97%] mb-10">
        {events.map((event, index) => (
          <div key={index} className="h-[420px] space-y-5">
            {index % 2 === 0 ? (
              <>
                <img src={event.image} alt={event.title} className="h-1/2 w-full object-cover" />
                <div className="px-6 py-2.5 border h-1/2 w-full">
                  <h3 className="text-lg font-semibold">{event.title}</h3>
                  <p className="text-gray-600 text-sm">{event.description}</p>
                </div>
              </>
            ) : (
              <>
                <div className="px-6 py-2.5 h-1/2 border w-full">
                  <h3 className="text-lg font-semibold">{event.title}</h3>
                  <p className="text-gray-600 text-sm">{event.description}</p>
                </div>
                <img src={event.image} alt={event.title} className="h-1/2 w-full object-cover" />
              </>
            )}
          </div>
        ))}
      </div>

      {/* Add More Events Button */}
      <div className="mt-5 text-center">
        <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 px-10 text-lg font-semibold rounded-md shadow-md hover:scale-105">
          Explore More
        </button>
      </div>
    </section>
  );
};

export default CultureAndActivities;
