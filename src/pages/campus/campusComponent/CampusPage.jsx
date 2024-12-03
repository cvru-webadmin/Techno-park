import React from "react";
import { NavLink } from "react-router-dom";
import { useState, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import IOT from '../../../assets/images/IOT.png'
import Library from '../../../assets/images/Library.jpeg'
import ProgrammingLab from '../../../assets/images/ProgrammingLab.jpeg';
import Seminar from '../../../assets/images/Seminar.jpeg'
import ProjectLab from '../../../assets/images/LanguageLab.jpeg'
import Cabin from '../../../assets/images/FacultyCabin.png'
import Front from '../../../assets/images/Front.jpeg'

  const slides = [
    {
      id: 1,
      image:IOT, // Replace with actual image paths.
    },
    {
      id: 2,
      image: Library,
    },
    {
      id: 3,
      image: ProgrammingLab, // Replace with actual image paths.
    },
    {
      id: 4,
      image: Cabin,
    },
    {
      id: 5,
      image: ProjectLab, // Replace with actual image paths.
    },
  ];

const data = [
  {
    title: "IoT Lab",
    description:
      "An IoT (Internet of Things) Lab is a specialized facility designed to support the development, experimentation, and deployment of Internet of Things solutions. It typically features a wide range of IoT hardware such as sensors, actuators, microcontrollers (e.g., Arduino, Raspberry Pi, ESP32), and connectivity modules (Wi-Fi, Bluetooth). The lab provides tools for data collection, analysis, and visualization, often integrating cloud platforms and edge computing systems for real-time processing. It fosters interdisciplinary collaboration, enabling students, researchers, and professionals to prototype smart systems for applications like smart cities, industrial IoT, healthcare, agriculture, and home automation. The IoT Lab serves as a hub for innovation, skill development, and solving real-world challenges using IoT technologies. It is a facility equipped with devices, sensors, microcontrollers, and communication tools for developing and testing IoT systems. It supports prototyping, real-time data processing, and experimentation for applications in areas like smart homes, healthcare, and industrial automation.",
    image: IOT,
  },
  {
    title: "Project Lab",
    description:
      "A Project Lab is a dynamic workspace designed to support the planning, development, and execution of academic, industrial, or research-based projects. It provides essential tools, equipment, and resources to enable hands-on learning and innovation. These labs are equipped with workstations, prototyping tools, electronic components, and software platforms to facilitate interdisciplinary projects. They encourage collaboration among students, researchers, and professionals to design, prototype, and implement solutions in various domains such as engineering, technology, and science. Project labs are crucial for fostering creativity, critical thinking, and practical problem-solving skills in a structured environment.",
    image: ProjectLab,
  },
  {
    title: "Main Library",
    description:
      "A library is a resource-rich facility that serves as a hub for learning, research, and knowledge acquisition. It houses a diverse collection of books, journals, magazines, digital media, and other resources across various disciplines, along with modern tools like e-books, online databases, and multimedia platforms to support both traditional and digital learning. Designed to foster a quiet and focused environment, libraries also offer study areas, collaborative spaces, and technology resources like computers and printers. Serving as community and academic centers, they host workshops, seminars, and events that encourage knowledge sharing and skill development. Many libraries feature advanced facilities such as digital archives, interactive learning tools, and virtual reality systems, enabling innovative exploration. By providing services like interlibrary loans, research assistance, and inclusive resources for diverse audiences, libraries remain a cornerstone of education, personal growth, and innovation in the digital age.",
    image: Library,
  },
  {
    title: "Programming Lab",
    description: "A Programming Lab is a specialized environment designed for coding, software development, and computational learning. Equipped with modern computers, programming tools, compilers, and development environments, it supports a wide range of programming languages like Python, Java, C++, and more. The lab provides an ideal setting for students, researchers, and professionals to practice coding, debug programs, and develop software applications. Often integrated with internet access, version control systems, and collaboration tools, programming labs facilitate teamwork and innovation. They are essential for conducting hands-on exercises, building algorithms, and working on real-world projects, fostering problem-solving skills and technical expertise.",
    image: ProgrammingLab,
  },
  {
    title: "Seminar Hall",
    description:
      "A Seminar Hall is a versatile venue designed to cater to a variety of events such as academic lectures, corporate meetings, training sessions, cultural programs, and panel discussions. It is typically equipped with state-of-the-art technology, including high-resolution projectors, interactive whiteboards, wireless microphones, advanced sound systems, and sometimes video conferencing facilities for virtual or hybrid events. The hall is designed with ergonomic seating, proper ventilation, and acoustics to ensure comfort and clarity for participants. Many seminar halls also feature podiums, stages, and lighting systems to accommodate formal presentations and performances. They are often adaptable to different seating arrangements, such as U-shaped, theater-style, or banquet-style layouts, depending on the event's nature. By providing an engaging and professional atmosphere, seminar halls play a critical role in fostering knowledge dissemination, innovation, and collaboration in educational, corporate, and community settings.",
    image: Seminar,
  },
  {
    title: "Faculty Cabin",
    description: "A Faculty Cabin is a private, designated workspace within educational institutions, typically assigned to professors or academic staff. It provides a quiet, comfortable environment for faculty members to conduct research, grade assignments, meet with students, and plan lessons. Faculty cabins are usually equipped with essential office furniture such as desks, chairs, bookshelves, and storage cabinets, as well as technology like computers, printers, and internet access to facilitate academic tasks. Some cabins also feature a small meeting area for one-on-one student consultations or faculty discussions. Designed to support productivity and professional activities, faculty cabins offer a space for focused work while also ensuring privacy and a personal space for academic responsibilities.",
    image: Cabin,
  },
];

const CampusPage = () => {
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
    <div className="font-sans bg-white text-gray-800">
      {/* Hero Section */}
      <div
        className="relative bg-cover w-full bg-center h-[100dvh] text-white"
        style={{ backgroundImage:`url(${Front})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="absolute -inset-[50px] inset-x-10 flex flex-col sm:mt-40 mt-28 text-left">
          <h1 className="md:text-5xl font-bold text-3xl w-full">Discover Your Future with Us</h1>
          <p className="lg:text-xl md:text-2xl text-justify text-gray-200 md:mt-4 mt-1 text-[15px] w-full sm:w-[650px]">Explore our campus, where learning goes beyond the classroom– it's a place to unlock your potential and shape your future.</p>
        </div>
      </div>

      {/* slider section */}
      <div className="flex flex-col items-center">
      <h1 className="lg:text-4xl md:text-[43px] font-bold text-3xl mt-8 text-gray-800 text-center w-full">Campus Life</h1>
      <div className="lg:w-[96%] w-[86%] mb-8 mt-4">
      <Slider {...settings} ref={sliderRef} centerMode={true} centerPadding="0px">
  {slides.map((slide, index) => (
    <div key={slide.id} className="p-10 mb-3">
      <div
        className={`bg-white border border-gray-200 shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300 h-full flex flex-col ${
          index === currentSlide ? "lg:scale-125 scale-110" : "scale-100 blur-[1px] opacity-75"
        }`} // Scale the center image
      >
        <div className="lg:h-72 md:h-80 w-full h-56 flex items-center justify-center">
          <img
            src={slide.image}
            className="object-cover h-full w-full"
            alt={`Slide ${slide.id}`} // Add alt for accessibility
          />
        </div>
      </div>
    </div>
  ))}
</Slider>
        </div>
        </div>

      {/* Content Sections */}
      <div className="px-5 md:px-20">
        {data.map((section, index) => (
          <div
            key={index}
            className={`flex flex-col lg:flex-row justify-center items-center md:items-start lg:my-16 my-10 ${
              index % 2 !== 0 ? "" : "lg:flex-row-reverse"
            }`}
          >
            <div className={`${index % 2 !== 0 ?"lg:w-[69%] ":"lg:w-[44%]"}`}>
              <img
                src={section.image}
                alt={section.title}
                className="sm:h-[470px] w-full md:mb-5 sm:object-cover object-contain shadow-lg"
              />
            </div>
            <div className={`lg:w-[44%] lg:h-[470px] h-auto mt-3 w-full lg:px-14 md:px-8 px-6 py-4 ${index % 2 !== 0 ?"lg:py-1 md:py-0":"w-full sm:px-[70px] sm:py-[45px] md:py-[20px] bg-[#e3e3e373] lg:py-10 lg:w-[66%] mt-5 md:mt-0"}`}>
              <h2 className="md:text-[2.2rem] lg:text-[1.8rem] text-[1.4rem] font-bold">{section.title}</h2>
              <p className="mt-4 lg:text-base text-base md:text-xl text-gray-600">{section.description} {section.title=="IoT Lab"?<NavLink to="/" className="text-blue-600 font-semibold">Explore More</NavLink>:""}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CampusPage;
