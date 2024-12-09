import React from 'react';
import { NavLink } from 'react-router-dom';
import Hackathon from '../../../assets/images/HackcraftChallenge.jpg';
import Skitt from '../../../assets/images/Skitt.png';
import RepublicDay from '../../../assets/images/RepublicDay.jpeg';
import GaneshJi from '../../../assets/images/Ganeshji.jpg'
import HerbalGallery from '../../../assets/images/Herbal Gallery.jpg'
import OutdoorGame from '../../../assets/images/OutdoorGame.jpg'

const CultureAndActivities = () => {
  const events = [
    {
      title: "Ganesh Chaturthi",
      description:
        "A Hackathon is an immersive and fast-paced innovation marathon where participants come together to solve real-world problems, create impactful solutions, and turn ideas into reality. It's a collaborative event that fosters creativity, teamwork, and out-of-the-box thinking.",
      image: GaneshJi,
    },
    {
      title: "Skitt Play on Social Media",
      description:
      "These performances combine creativity with purpose, often addressing relatable issues, highlighting societal themes, or delivering inspiring messages. Skitt play on social media leverage the power of visuals to make a lasting impression on viewers.",
      image: Skitt,
    },
    {
      title: "Hackathon",
      description:
        "A Hackathon is an immersive and fast-paced innovation marathon where participants come together to solve real-world problems, create impactful solutions, and turn ideas into reality. It's a collaborative event that fosters creativity, teamwork, and out-of-the-box thinking.",
      image: Hackathon,
    },
    {
      title: "Republic Day Celebration",
      description:
        "Republic Day is more than just a date on the calendar; it’s a celebration of India’s vibrant culture, diversity, and democratic values. Observed every year on January 26, it marks the day when the Constitution of India came into effect in 1950, transforming India into a sovereign, democratic republic.",
      image: RepublicDay,
    },
    {
      title: "Outdoor Games",
      description:
        "Republic Day is more than just a date on the calendar; it’s a celebration of India’s vibrant culture, diversity, and democratic values. Observed every year on January 26, it marks the day when the Constitution of India came into effect in 1950, transforming India into a sovereign, democratic republic.",
      image: OutdoorGame,
    },
    {
      title: "Idea Presentation",
      description:
        "Republic Day is more than just a date on the calendar; it’s a celebration of India’s vibrant culture, diversity, and democratic values. Observed every year on January 26, it marks the day when the Constitution of India came into effect in 1950, transforming India into a sovereign, democratic republic.",
      image: HerbalGallery,
    },
  ];

  return (
    <>
    <section className="flex flex-col items-center bg-white py-6 pb-10 px-4 sm:px-8 lg:px-16">
      <div className="max-w-[93%] w-full text-center">
        {/* Main Heading */}
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-blue-600 mb-6">
          Culture & Activities
        </h2>
        <p className="text-gray-600 lg:mb-8 text-sm sm:text-base">
          Explore the vibrant culture and engaging activities that bring our community together, fostering creativity, innovation, and unity.
        </p>
      </div>

{/* Events Gallery */}
<div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8 max-w-7xl mx-auto py-12">
  {events.map((event, index) => (
    <div
      key={index}
      className="relative rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-xl group"
    >
      {/* Event Image */}
      <img
        src={event.image}
        alt={event.title || "Event image"}
        className="h-60 w-full object-cover"
        loading="lazy"
      />

      <h3 className="absolute min-[766px]:hidden bottom-4 w-full text-center flex justify-center">
        <span className=' py-1.5 text-sm rounded-md font-bold bg-white w-10/12 text-gray-800 tracking-wide shadow-md'>{event.title}</span>
      </h3>
      <span className='md:block hidden'>
      {/* Gradient Overlay */}
      <div className="absolute md:hidden inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent transition-opacity duration-300"></div>
      <div className="md:absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

      {/* Event Title */}
      <h3 className="absolute bottom-4 left-4 text-base font-bold text-white tracking-wide shadow-md font-sans" style={{textShadow:"2px 2px 0.5px rgba(0,0,0,0.5)"}}>
        {event.title}
      </h3>
      </span>
    </div>
  ))}
</div>


      {/* Add More Events Button */}
      <div className="md:mt-0 text-center">
        <NavLink to="/activities" onClick={()=>{("/activities");useEffect(() => {window.scrollTo(0, 0);},[]);}} className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-2 px-6 sm:py-3 sm:px-8 text-sm sm:text-lg font-semibold rounded-md shadow-md transform transition duration-300 ease-in-out hover:scale-105">
            Explore More
          </NavLink>
      </div>
    </section>
    </>
  );
};

export default CultureAndActivities;
