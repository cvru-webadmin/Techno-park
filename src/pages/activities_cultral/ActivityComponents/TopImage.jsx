import React, { useState, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CarouselComponent = () => {
  const sliderRef = useRef(null); // Create a ref to control the slider
  const [currentSlide, setCurrentSlide] = useState(0); // Track the current slide

  const slides = [
    {
      id: 1,
      title: "CULTURE & ACTIVITES",
      description:
        "Explore a vibrant blend of activities that enhance student life, from cultural events to campus-wide celebrations. Culture includes the traditions, values, and customs that define a community. Activities range from recreational and offering opportunities for creativity, bonding, and personal growth.",
      image: "src/assets/images/Front.jpeg", // Replace with actual image paths.
    },
    {
      id: 2,
      title: "SKITT play on social media",
      description:
        "These performances combine creativity with purpose, often addressing relatable issues, highlighting societal themes, or delivering inspiring messages. Skitt play on social media leverage the power of visuals,to make a lasting impression on viewers.",
      image: "src/assets/images/Skitt.png",
    },
    {
      id: 3,
      title: "Teacher's Day Celebration",
      description:
        "Teacher’s Day is a special occasion to honor the incredible role educators play in shaping minds and building the foundation of our future. It is a day to reflect on the tireless efforts, patience, and dedication that teachers bring to their work and guiding the challenges of life.",
      image: "src/assets/images/TeacherDay.jpeg", // Replace with actual image paths.
    },
  ];

  const settings = {
    dots: false, // Disable default dots
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    beforeChange: (oldIndex, newIndex) => setCurrentSlide(newIndex), // Update current slide index
  };

  const handleSlideChange = (index) => {
    setCurrentSlide(index); // Update current slide state
    sliderRef.current.slickGoTo(index); // Programmatically change the slide
  };

  return (
    <div className="w-full h-[100dvh] bg-gray-100 overflow-hidden">
      <Slider {...settings} ref={sliderRef}>
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className="relative w-full h-[100dvh] flex items-center justify-center"
          >
            {/* Background Image */}
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url(${slide.image})`,
              }}
            ></div>

            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-60"></div>

            {/* Content */}
            <div className="relative z-10 top-[400px] left-60 text-center flex flex-col items-center justify-center px-6 max-w-5xl">
              <h1 className="text-white text-5xl md:text-6xl font-bold uppercase">
                {slide.title}
              </h1>
              <p className="text-white text-sm md:text-lg mt-5 w-[70%] leading-relaxed">
                {slide.description}
              </p>
            </div>
          </div>
        ))}
      </Slider>

      {/* Custom Radio Buttons */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex space-x-4 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => handleSlideChange(index)} // Handle slide change on button click
            className={`w-3 h-3 rounded-full border-2 transition-all duration-300 ${
              currentSlide === index
                ? "bg-[#F9A826] border-[#F9A826] scale-125 shadow-lg" // Active styling
                : "bg-transparent border-[#F9A826]"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default CarouselComponent;
