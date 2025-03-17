import React, { useState, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// import image for slider 
import Front from "../../../assets/images/Front.jpeg"
import SkittPlay from "../../../assets/images/Skitt.png"
import TechersDay from "../../../assets/images/TeacherDay.jpeg"

const CarouselComponent = () => {
  const sliderRef = useRef(null); // Create a ref to control the slider
  const [currentSlide, setCurrentSlide] = useState(0); // Track the current slide

  const slides = [
    {
      id: 1,
      title: "CULTURE & ACTIVITES",
      description:"Celebrating Diversity, Inspiring Connections.",
      image: Front, // Replace with actual image paths.
    },
    {
      id: 2,
      title: "SKIT play on social media",
      description:"Unleashing Creativity and Connection in the Social Media Sphere",
      image: SkittPlay,
    },
    {
      id: 3,
      title: "Teacher's Day Celebration",
      description:"A Day to Celebrate Wisdom and Inspiration",
      image: TechersDay, // Replace with actual image paths.
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
            <div className="absolute inset-0 bg-black bg-opacity-40"></div>

            {/* Content */}
            <div className="relative z-10 lg:top-[500px] lg:left-60 md:top-[250px] top-[100px] text-center flex flex-col items-center justify-center px-6 max-w-5xl">
              <h1 className="text-white w-[350px] md:w-full lg:w-full text-2xl lg:text-6xl md:text-5xl font-bold uppercase">
                {slide.title}
              </h1>
              <p className="text-[#F9A826] w-[350px] md:w-full lg:w-full font-extrabold uppercase text-sm md:text-xl mt-3 md:mt-4 leading-relaxed">
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