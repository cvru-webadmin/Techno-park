import React from 'react'
import { useState, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Drive1 from '../../../assets/images/Drive1.png'
import Drive2 from '../../../assets/images/Drive2.png'
import Drive3 from '../../../assets/images/Drive3.png'
import Drive4 from '../../../assets/images/Drive4.png'
import Drive5 from '../../../assets/images/Drive5.png'

const data=[
    {
        id:1,
        image:Drive1,
    },
    {
        id:2,
        image:Drive2,
    },
    {
        id:3,
        image:Drive3,
    },
    {
        id:4,
        image:Drive4,
    },
    {
        id:5,
        image:Drive5,
    },
]
export default function CampusDriveCVRU() {
    const sliderRef = useRef(null); // Create a ref to control the slider
    const [currentSlide, setCurrentSlide] = useState(0); // Track the current slide
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      responsive: [
        {
          breakpoint: 800, // Small screens
          settings: {
            slidesToShow: 1,
          },
        },
        {
          breakpoint: 500, // Small screens
          settings: {
            slidesToShow: 1,
          },
        },
      ],
      beforeChange: (oldIndex, newIndex) => setCurrentSlide(newIndex), // Update current slide index
    };
  return (
    <div className='bg-gradient-to-r from-gray-100 to-gray-50 py-10 flex flex-col'>
    <div className="text-center lg:mb-12 mb-5">
          <h2 className="lg:text-4xl md:text-3xl text-2xl font-bold text-gray-800">
          Glimpse of Campus Drives at CVRU Khandwa 
          </h2>
    </div>
          {/* slider section */}
          <div className="flex flex-col items-center">
      <div className="lg:w-[96%] w-[86%] lg:mb-8">
      <Slider {...settings} ref={sliderRef} centerMode={true} centerPadding="0px">
  {data.map((slide, index) => (
    <div key={slide.id} className="lg:p-10 p-5 mb-3">
      <div
        className={`bg-white border border-gray-200 shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300 h-full flex flex-col ${
          index === currentSlide
            ? "lg:scale-125 scale-110 transition-transform duration-500 ease-in-out"
            : "scale-100 blur-[0.5px] opacity-80 transition-all duration-500 ease-in-out"
        }`} // Apply scale to center image and blur + opacity to others
      >
        <div className="lg:h-72 md:h-80 w-full h-52 flex items-center justify-center">
          <img
            src={slide.image}
            className="object-cover object-center h-full w-full"
            alt={`Slide ${slide.id}`} // Add alt for accessibility
          />
        </div>
      </div>
    </div>
  ))}
</Slider>
        </div>
        </div>
    </div>
  )
}
