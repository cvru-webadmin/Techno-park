import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import AwardDefualt from "../../../assets/AwardDefualt.png"
import "slick-carousel/slick/slick-theme.css";


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
      className={`${className} absolute right-0 top-1/2 rounded-full p-2 shadow-lg cursor-pointer z-10`}
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


const sliderSettings = {
  dots: false,
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

export default function TeachersAchievements({ achievements }) {

  return (
    <section className="py-16 bg-gradient-to-b from-gray-100 to-gray-200">
      <div className="max-w-[82rem] mx-auto px-6">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="md:text-3xl text-2xl font-extrabold text-gray-800 mb-4">
            Teacher's Achievements
          </h2>
          <p className="text-gray-600 xl:text-lg md:text-base text-sm">
            Honoring the remarkable contributions and accomplishments of our
            educators.
          </p>
        </div>

        {/* Slider */}
        <Slider
          {...sliderSettings}
          prevArrow={<PrevArrow />}
          nextArrow={<NextArrow />}
        >
          {achievements.map((achievement, index) => (
            <div key={index} className="p-4">
            <div className="bg-white border border-gray-200 shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 mx-auto lg:h-auto h-[420px] w-full sm:w-[90%] md:w-[80%] lg:w-full">
              {/* Achievement Image */}
              
              {achievement.image !== "" ? (
                <img
                  src={achievement.image}
                  alt={`${achievement.name} achievement`}
                  className="w-full h-48 sm:h-56 md:h-72 lg:h-60 object-top object-cover"
                />
              ) : (
                <div className="w-full h-48 sm:h-56 md:h-72 lg:h-60 bg-[#131f35]">
                  <img
                    src={AwardDefualt}
                    alt={`${achievement.name} achievement`}
                    className="w-full h-48 sm:h-56 md:h-72 lg:h-60 object-center object-contain"
                  />
                </div>
              )}
          
              {/* Achievement Details */}
              <div className="p-4 sm:p-6 md:p-8 lg:p-6">
                <h3 className="text-lg sm:text-xl  font-bold text-gray-800 mb-2">
                  {achievement.name}
                </h3>
                <p className="text-sm sm:text-base md:h-14 md:text-lg font-semibold text-blue-700 mb-4 line-clamp-2">
                  {achievement.title}
                </p>
                <p className="text-xs sm:text-sm md:h-20 line-clamp-4 text-gray-700 mb-3 leading-relaxed">
                  {achievement.description}
                </p>
                <p className="text-xs sm:text-sm md:text-base text-gray-600">
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
