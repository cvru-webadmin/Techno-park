import React from "react";
import Slider from "react-slick";


// Custom Arrow components
const PrevArrow = (props) => {
    const { className, onClick } = props;
    return (
      <div
        className={`${className} absolute left-0 top-1/2 transform -translate-y-1/2 rounded-full p-2 shadow-lg cursor-pointer z-10`}
        onClick={onClick}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-6 h-6 text-gray-600 bg-black/20 p-0.5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </div>
    );
  };
  
  const NextArrow = (props) => {
    const { className, onClick } = props;
    return (
      <div
        className={`${className} absolute right-0 top-1/2 transform -translate-y-1/2 rounded-full p-2 shadow-lg cursor-pointer z-10`}
        onClick={onClick}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-6 h-6 text-gray-600 bg-black/20 p-0.5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </div>
    );
  };
  

// Slider settings for the carousel
const sliderSettings = {
    dots: true,
    // infinite: true,
    // speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
    arrows: true, // Hide arrows for a clean look; can be toggled
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 1280, // Large screens
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1024, // Medium screens
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768, // Small screens
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

export default function StudentAchievements({ achievements }) {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-800 mb-4">
            Student Achievements
          </h2>
          <p className="text-gray-600 text-lg">
            Celebrating the outstanding accomplishments of our students.
          </p>
        </div>

        {/* Slider */}
        <Slider {...sliderSettings}>
          {achievements.map((achievement, index) => (
            <div key={index} className="p-4">
            <div className="bg-white border border-gray-200 shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 h-full flex flex-col">
              {/* Achievement Image */}
              <img
                src={achievement.image}
                alt={`${achievement.name} achievement`}
                className="w-full h-60 object-top object-cover"
              />
          
              {/* Achievement Details */}
              <div className="flex-1 p-6 flex flex-col justify-between">
                {/* Title */}
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {achievement.name}
                </h3>
          
                {/* Award or Title */}
                <p className="text-lg h-12 font-semibold text-blue-700 mb-4">
                  {achievement.title}
                </p>
          
                {/* Description */}
                <p className="text-sm text-gray-700 mb-3 leading-relaxed line-clamp-2 flex-grow">
                  {achievement.description}
                </p>
          
                {/* Year */}
                <p className="text-sm text-gray-600">
                  <span className="font-semibold">Year:</span> {achievement.year}
                </p>
              </div>
            </div>
          </div>
          
          ))}
        </Slider>
      </div>
    </section>
  );
}
