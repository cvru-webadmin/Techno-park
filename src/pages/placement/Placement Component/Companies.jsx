import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TCS from '../../../assets/images/TCS.png'
import ICICI from '../../../assets/images/ICICI.png'
import EFASAL from '../../../assets/images/EFASAL.png'
import IDFC from '../../../assets/images/IDFC.png'
import Equitas from '../../../assets/images/Equitas.png'
import UPL from '../../../assets/images/UPL.png'
import KISAN4U from '../../../assets/images/KISAN4U.png'
import Wellsun from '../../../assets/images/Wellsun.png'
import Kalptaru from '../../../assets/images/Kalptaru.png'
import HindustanAbhikaran from '../../../assets/images/Hindustan Abhikaran.png'
import SKFinance  from '../../../assets/images/SK Finance.png'
import NextEducation  from '../../../assets/images/Next Education.png'
import KHET  from '../../../assets/images/KHET-E.png'

export default function Companies() {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
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
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 500, // Small screens
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  const companies=[
    {
        Title:"Tata Consultancy Services",
        image:TCS
    },
    {
        Title:"ICICI Bank",
        image:ICICI
    },
    {
        Title:"EFASAL",
        image:EFASAL
    },
    {
        Title:"IDFC FIRST Bank Limited",
        image:IDFC
    },
    {
        Title:"Equitas Small Finance Bank",
        image:Equitas
    },
    {
        Title:"UPL Limited",
        image:UPL
    },
    {
        Title:"KISAN4U",
        image:KISAN4U
    },
    {
        Title:"Wellsun Farmer Fertilizer (P) Ltd",
        image:Wellsun
    },
    {
        Title:"Hindustan Abhikaran",
        image:HindustanAbhikaran
    },
    {
        Title:"SK Finance ",
        image:SKFinance 
    },
    {
        Title:"Next Education",
        image:NextEducation
    },
    {
        Title:"KHET-E MANAGEMENT PRIVATE LIMITED ",
        image:KHET
    },
  ]

  return (
    <section className="lg:py-16 py-8 pb-12 bg-gradient-to-r from-gray-100 to-gray-50">
      <div className="lg:max-w-[90rem] lg:mx-auto px-6">
        {/* Section Title */}
        <div className="text-center mb-3 lg:mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 lg:mb-4">
          Campus Drives with Prominent Recruiters
          </h2>
        </div>

        {/* Trophy Slider */}
        <Slider {...sliderSettings}>
          {companies.map((company, index) => (
            <div key={index} className="p-4 lg:mb-2 w-full mb-1">
              <div className="bg-white border border-gray-200 shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300 h-full flex flex-col">
                {/* Trophy Image */}
                <div className="h-52 w-full flex items-center justify-center bg-gray-50">
                  <img
                    src={company.image}
                    alt={`${company.Title} image`}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
                  {/* Title */}
                  <h3 className="text-base font-semibold h-14 text-gray-600 px-2 text-wrap mb-2 text-center">
                    {company.Title}
                  </h3>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
