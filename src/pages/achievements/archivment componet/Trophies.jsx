import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Trophies({ trophies }) {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
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

  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-[90rem] mx-auto px-6">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="md:text-3xl text-2xl font-extrabold text-gray-800 mb-4">
            Our Trophies
          </h2>
          <p className="text-gray-600 xl:text-lg md:text-base text-sm">
            Showcasing the prestigious awards and accolades we’ve earned over
            the years.
          </p>
        </div>  

        {/* Trophy Slider */}
        <Slider {...sliderSettings}>
          {trophies.map((trophy, index) => (
            <div key={index} className="p-4">
              <div className="bg-white border border-gray-200 shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300 h-full flex flex-col">
                {/* Trophy Image */}
                <div className="h-52 w-full flex items-center justify-center bg-gray-50">
                  <img
                    src={trophy.image}
                    alt={`${trophy.title} image`}
                    style={{mixBlendMode:"darken"}}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>

                {/* Trophy Details */}
                <div className="p-4 flex-grow flex flex-col">
                  {/* Title */}
                  <h3 className="text-lg font-bold h-14 text-gray-800 mb-2 text-center">
                    {trophy.title}
                  </h3>

                  {/* Year */}
                  <p className="text-sm text-gray-700 text-center">
                    <span className="font-semibold text-gray-600">Year:</span>{" "}
                    {trophy.year}
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
