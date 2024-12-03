import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
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

export default function TeachersAchievements({ achievements }) {

  return (
    <section className="py-16 bg-gradient-to-b from-gray-100 to-gray-200">
      <div className="max-w-[82rem] mx-auto px-6">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-800 mb-4">
            Teacher's Achievements
          </h2>
          <p className="text-gray-600 md:text-lg text-base">
            Honoring the remarkable contributions and accomplishments of our
            educators.
          </p>
        </div>

        {/* Slider */}
        <Slider {...sliderSettings}>
          {achievements.map((achievement, index) => (
            <div key={index} className="p-4">
              <div className="bg-white border md:w-[80%] mx-auto w-full lg:w-full border-gray-200 shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                {/* Achievement Image */}
                <img
                  src={achievement.image}
                  alt={`${achievement.name} achievement`}
                  className="w-full lg:h-60 h-60 md:h-72 object-cover"
                />

                {/* Achievement Details */}
                <div className="md:p-10 lg:p-6 p-6">
                  <h3 className="lg:text-xl text-xl md:text-2xl font-bold text-gray-800 mb-2">
                    {achievement.name}
                  </h3>
                  <p className="lg:text-lg md:text-xl text-lg font-semibold text-blue-700 mb-4">
                    {achievement.title}
                  </p>
                  <p className="lg:text-sm text-sm md:text-base text-gray-700 mb-3 leading-relaxed">
                    {achievement.description}
                  </p>
                  <p className="lg:text-sm text-sm md:text-base text-gray-600">
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
