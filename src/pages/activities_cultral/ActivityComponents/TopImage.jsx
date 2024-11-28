import React, { useState, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CarouselComponent = () => {
  const sliderRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      title: "CULTURE & ACTIVITIES",
      description:
        "Explore a vibrant blend of activities that enhance student life, from cultural events to campus-wide celebrations. Culture includes the traditions, values, and customs that define a community. Activities range from recreational and offering opportunities for creativity, bonding, and personal growth.",
      image: "src/assets/images/Front.jpeg",
    },
    {
      id: 2,
      title: "Teacher's Day Celebration",
      description:
        "Teacher’s Day is a special occasion to honor the incredible role educators play in shaping minds and building the foundation of our future. It is a day to reflect on the tireless efforts, patience, and dedication that teachers bring to their work and guiding the challenges of life.",
      image: "src/assets/images/TeacherDay.jpeg",
    },
    {
      id: 3,
      title: "SKITT play on social media",
      description:
        "These performances combine creativity with purpose, often addressing relatable issues, highlighting societal themes, or delivering inspiring messages. Skitt play on social media leverage the power of visuals,to make a lasting impression on viewers.",
      image: "src/assets/images/Skitt.png",
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    beforeChange: (_, newIndex) => setCurrentSlide(newIndex),
  };

  const handleSlideChange = (index) => {
    setCurrentSlide(index);
    sliderRef.current.slickGoTo(index);
  };

  return (
    <div className="relative w-full h-screen bg-gray-100 overflow-hidden">
      <Slider {...settings} ref={sliderRef}>
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className="relative w-full h-screen flex items-center justify-center"
          >
            {/* Background Image */}
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-500"
              style={{
                backgroundImage: `url(${slide.image})`,
              }}
            ></div>

            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-60"></div>

            {/* Content */}
            <div className={`${index % 2 == 0 ?"relative z-10 top-14 text-center max-w-4xl px-8":"relative z-10 top-[460px] left-60 text-center flex flex-col items-center justify-center px-6 max-w-5xl"}`}>
              <h1 className="text-white text-4xl md:text-6xl font-extrabold uppercase leading-tight shadow-md">
                {slide.title}
              </h1>
              <p className="text-white text-base md:text-lg mt-4 md:mt-6 leading-relaxed">
                {slide.description}
              </p>
            </div>
          </div>
        ))}
      </Slider>

      {/* Custom Dots */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => handleSlideChange(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={`w-4 h-4 rounded-full border-2 transition-all duration-300 ${
              currentSlide === index
                ? "bg-[#F9A826] border-[#F9A826] scale-110 shadow-md"
                : "bg-transparent border-white"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default CarouselComponent;
