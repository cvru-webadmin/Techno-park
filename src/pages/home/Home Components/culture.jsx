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
        "Ganesh Chaturthi is a vibrant and joyous festival that celebrates the birth of Lord Ganesha, the remover of obstacles. During this time, communities come together to honor Lord Ganesha through elaborate decorations, processions, and prayers. It is a festival that brings together creativity, devotion, and cultural unity, with participants often engaging in artistic activities, performances, and traditional rituals.",
      image: GaneshJi,
    },
    {
      title: "Skitt Play on Social Media",
      description:
        "Skitt Play on Social Media combines creativity with purpose, often addressing relatable social issues or delivering inspiring messages. These performances leverage the power of visuals and storytelling on digital platforms to engage viewers and create a lasting impact. The performances aim to raise awareness, provoke thought, and entertain, making a difference in how society perceives important themes through the lens of social media.",
      image: Skitt,
    },
    {
      title: "Hackathon",
      description:
        "A Hackathon is an intense and fast-paced event where participants, often in teams, come together to solve real-world problems through technology and innovation. Participants work relentlessly to create functional prototypes, apps, or solutions within a short time frame, typically 24-48 hours. It fosters teamwork, creativity, and problem-solving skills, and provides an opportunity for participants to push their limits while contributing to impactful solutions.",
      image: Hackathon,
    },
    {
      title: "Republic Day Celebration",
      description:
        "Republic Day is a significant national holiday in India that honors the adoption of the Indian Constitution in 1950, which made India a sovereign democratic republic. The celebration includes flag hoisting, parades, and cultural performances across the country. It’s a moment for citizens to reflect on India’s democratic values, unity in diversity, and the importance of freedom, while also honoring the nation's progress and achievements.",
      image: RepublicDay,
    },
    {
      title: "Outdoor Games",
      description:
        "Outdoor games are a wonderful way to promote physical fitness, teamwork, and healthy competition. They encourage participants to engage in various physical activities such as running, team sports, and fun challenges that require strategy and collaboration. These games provide an opportunity to enjoy the outdoors while building camaraderie among participants, offering a refreshing break from daily routines and fostering a sense of community.",
      image: OutdoorGame,
    },
    {
      title: "Idea Presentation",
      description:
        "The Idea Presentation event is an exciting opportunity for participants to showcase their innovative ideas, projects, or solutions in front of an audience. This platform allows individuals to pitch their ideas to potential investors, collaborators, or mentors, encouraging creativity, problem-solving, and entrepreneurship. Presenters communicate their vision, strategy, and impact, with the goal of inspiring others and potentially turning ideas into actionable plans.",
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
        <p className="text-gray-600 text-justify md:text-center  lg:mb-8 text-sm sm:text-base">
          Explore the vibrant culture and engaging activities that bring our community together, fostering creativity, innovation, and unity.
        </p>
      </div>

{/* Events Gallery */}
<div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8 max-w-7xl mx-auto py-12">
{events.map((event, index) => (
  <div
    key={index}
    className="relative shadow-lg overflow-hidden transition-all transform hover:scale-105 hover:shadow-2xl group bg-white border border-gray-200 rounded-xl"
  >
    {/* Event Image */}
    <img
      src={event.image}
      alt={event.title || "Event image"}
      className="h-60 w-full object-cover rounded-t-xl"
      loading="lazy"
    />

    {/* Gradient Overlay for hover effect */}
    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-300"></div>

    {/* Event Title - Hidden on smaller screens */}
    <h3 className="absolute bottom-4 w-full text-center flex justify-center px-2 min-[766px]:hidden">
      <span className="py-2 px-4 text-xs rounded-md font-semibold bg-white text-gray-800 shadow-lg transform transition-all duration-300 tracking-wide">
        {event.title}
      </span>
    </h3>

    {/* Event Title and Description on larger screens */}
    <div className="absolute bottom-4 left-4 px-6 py-2 rounded-lg text-white font-semibold text-xl tracking-wide shadow-lg flex items-center">
      <h3 className="text-base hidden md:block md:text-base font-bold text-white shadow-md" style={{textShadow: "2px 2px 3px rgba(0,0,0,0.5)"}}>
        {event.title}
      </h3>
    </div>

    {/* Event Description */}
    {/* <div className="absolute bottom-14 text-justify line-clamp-6 left-4 text-white text-xs md:text-sm w-11/12 bg-black bg-opacity-70 rounded-md py-1 px-3 opacity-0 group-hover:opacity-100 transition-all duration-300">
      <p>{event.description || "Description of the event"}</p>
    </div> */}

    {/* Hover effect for the entire card */}
    {/* <div className="absolute inset-0 bg-transparent group-hover:bg-black/50 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div> */}
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
