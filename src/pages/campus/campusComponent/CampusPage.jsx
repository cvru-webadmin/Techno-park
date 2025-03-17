import React from "react";
import { NavLink } from "react-router-dom";
import { useState, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import IOT from '../../../assets/images/IOT.png'
import Library from '../../../assets/images/Library.jpeg'
import ProgrammingLab from '../../../assets/images/ProgrammingLab.jpeg';
import Seminar from '../../../assets/images/Seminar.jpg'
import ProjectLab from '../../../assets/images/LanguageLab.jpeg'
import Cabin from '../../../assets/images/FacultyCabin.png'
import Front from '../../../assets/images/Front.jpeg'
import HardwareLab from '../../../assets/images/HardwareLab.jpg'
import SolarPark from '../../../assets/images/SolarPark.jpg'
import Garden from '../../../assets/images/Garden.jpg'
import MCASlider from '../../../assets/images/MCA Slider.jpeg'
import BCASlider from '../../../assets/images/BCA Slider.jpg'
import GroupSlider from '../../../assets/images/Group Slider.jpg'
import Slide2 from '../../../assets/images/2.jpeg'
import Slide1 from '../../../assets/images/1.jpeg'
import Slide3 from '../../../assets/images/3.jpeg'
import Slide4 from '../../../assets/images/4.jpeg'
import GardenStudents from '../../../assets/images/GardenStudent.jpg'
import LibraryStudents from '../../../assets/images/LibraryStudent.jpg'
import Studio from '../../../assets/images/Studio.jpg'
import Canteen from '../../../assets/images/Canteen.jpg'
import Parking from '../../../assets/images/Parking.jpg'

  const slides = [
    {
      id: 1,
      image:MCASlider, // Replace with actual image paths.
    },
    {
      id: 2,
      image: BCASlider,
    },
    {
      id: 3,
      image: GroupSlider, // Replace with actual image paths.
    },
    {
      id: 4,
      image: GardenStudents,
    },
    {
      id: 5,
      image: LibraryStudents, // Replace with actual image paths.
    },
    {
      id: 6,
      image: Slide1,
    },
    {
      id: 7,
      image: Slide2,
    },
    {
      id: 8,
      image: Slide3,
    },
    {
      id: 9,
      image: Slide4,
    },
  ];

const data = [
  {
    title: "IoT Lab",
    description:
      "The Internet of Things (IoT) Lab is a well-equipped facility designed to foster innovation, experimentation, and skill development in IoT technologies. It can accommodate up to 28 students simultaneously and offers a variety of tools and components, including diverse sensors, Arduino boards, microcontrollers like ESP32 and Raspberry Pi, relays, camera modules, and communication modules for Wi-Fi and Bluetooth connectivity. The lab supports the creation and testing of IoT solutions for smart systems, providing resources for data collection, analysis, cloud integration, and edge computing. Students actively engage in projects such as smart lighting systems, automatic irrigation systems, and automatic crop protection systems for unexpected rainfall, while also working on prototypes addressing real-world problems in areas like healthcare, industrial automation, and agriculture. With its emphasis on interdisciplinary collaboration, the lab facilitates the development of intelligent solutions, offering hands-on learning opportunities to prototype, test, and deploy IoT-based innovations.",
    image: IOT,
  },
  {
    title: "Project Lab",
    description:
      "A Project Lab is a versatile facility designed to accommodate up to 28 students, providing a collaborative environment for project-based learning and innovation. Equipped with a projector for clear and effective explanations, it supports presentations, demonstrations, and interactive discussions. The lab includes essential tools and resources such as software platforms to aid in designing, developing, and implementing projects. It fosters teamwork, critical thinking, and creativity, making it an ideal space for students to engage in interdisciplinary and practical problem-solving activities in various fields. The structured setting ensures an efficient and immersive learning experience for all participants.",
    image: ProjectLab,
  },
  {
    title: "Hardware Lab",
    description:
      "A Hardware Lab is a hands-on facility designed to foster learning through practical exploration of electronic and mechanical systems, guided by the motto `तोड़ो, जोड़ो, सीखो` (Break, Join, Learn). In this lab, students can disassemble hardware components such as computer CPUs, study and understand their internal parts, and then reassemble them to see how they function together. It is equipped with essential tools like multimeters, screwdrivers, soldering kits, and diagnostic devices to aid in the exploration and testing of hardware systems. Beyond computers, students can also work on components like hard drives, motherboards, and power supplies to deepen their understanding of electronics. The lab creates an engaging environment that encourages innovation, collaboration, and critical thinking, allowing students to bridge theoretical concepts with practical application. Regular workshops and hands-on sessions ensure students stay updated with emerging hardware technologies and trends, building a strong foundation for future technical careers.",
    image: HardwareLab,
  },
  {
    title: "Programming Lab",
    description: "A Programming Lab is a specialized environment designed for coding, software development, and computational learning, with a capacity of 56 students. Equipped with modern computers, programming tools, compilers, and development environments, it supports a wide range of programming languages like Python, Java, and C++. The lab provides an ideal setting for students to practice coding, debug programs, and develop software applications. Often integrated with internet access and collaboration tools, it facilitates teamwork and innovation. The lab is essential for conducting hands-on exercises, building algorithms, and working on real-world projects, fostering problem-solving skills and technical expertise.",
    image: ProgrammingLab,
  },
  {
    title: "Vanamali Central Library",
    description:
      "A library is a resource-rich facility that serves as a hub for learning, research, and knowledge acquisition. It houses a diverse collection of books, journals, magazines, digital media, and other resources across various disciplines, along with modern tools like e-books, online databases, and multimedia platforms to support both traditional and digital learning. Designed to foster a quiet and focused environment, libraries also offer study areas, collaborative spaces, and technology resources like computers and printers. Serving as community and academic centers, they host workshops, seminars, and events that encourage knowledge sharing and skill development. Many libraries feature advanced facilities such as digital archives, interactive learning tools, and virtual reality systems, enabling innovative exploration. By providing services like interlibrary loans, research assistance, and inclusive resources for diverse audiences, libraries remain a cornerstone of education, personal growth, and innovation in the digital age.",
    image: Library,
  },
  {
    title: "Faculty Cabin",
    description: "A Faculty Cabin is a private, designated workspace within educational institutions, typically assigned to professors or academic staff. It provides a quiet, comfortable environment for faculty members to conduct research, grade assignments, meet with students, and plan lessons. Faculty cabins are usually equipped with essential office furniture such as desks, chairs, bookshelves, and storage cabinets, as well as technology like computers, printers, and internet access to facilitate academic tasks. Some cabins also feature a small meeting area for faculty discussions. Designed to support productivity and professional activities, faculty cabins offer a space for focused work while also ensuring privacy and a personal space for academic responsibilities.",
    image: Cabin,
  },
  {
    title: "Raman(Seminar) Hall",
    description:
      "A Seminar Hall is a versatile venue designed to cater to a variety of events such as academic lectures, corporate meetings, training sessions, cultural programs, and panel discussions. It is typically equipped with state-of-the-art technology, including high-resolution projectors, interactive whiteboards, wireless microphones, advanced sound systems, and sometimes video conferencing facilities for virtual or hybrid events. The hall is designed with ergonomic seating, proper ventilation, and acoustics to ensure comfort and clarity for participants. Many seminar halls also feature podiums, stages, and lighting systems to accommodate formal presentations and performances. They are often adaptable to different seating arrangements, such as U-shaped, theater-style, or banquet-style layouts, depending on the event's nature. By providing an engaging and professional atmosphere, seminar halls play a critical role in fostering knowledge dissemination, innovation, and collaboration in educational, corporate, and community settings.",
    image: Seminar,
  },
  {
    title: "Solar Park",
    description:
      "A small solar park is a sustainable energy initiative designed to harness the power of the sun through various solar-powered devices. It features a solar cooker, which uses solar energy to cook food without the need for conventional fuels, promoting eco-friendly cooking methods. The solar tree is an innovative structure that mimics a real tree, with solar panels as its branches, capturing sunlight to generate clean energy. A solar fountain is also part of the park, using solar energy to power water pumpps. Together, these installations not only provide renewable energy solutions but also demonstrate the diverse applications of solar power, contributing to energy conservation and raising awareness about the benefits of solar energy.",
    image: SolarPark,
  },
  {
    title: "Garden",
    description:
      "A garden is a versatile outdoor space designed to provide a calm and inviting environment for relaxation, activities, and social interactions. It is filled with lush greenery, including a mix of flowering plants, shrubs, and trees, creating a natural ambiance that encourages tranquility. The garden is equipped with tables for sitting, offering a perfect spot for enjoying meals, reading, or socializing with friends and colleagues. There is also ample open space for various activities such as outdoor games, group discussions, creative projects, or simply enjoying the fresh air. The layout of the garden is designed to ensure both comfort and functionality, providing an ideal setting for lunchtime gatherings, casual meetings, or recreational time. This well-balanced design promotes relaxation, well-being, and connection with nature while supporting a variety of outdoor experiences. The peaceful surroundings and natural beauty also make it a perfect venue for mindfulness practices or enjoying a break from busy routines.",
    image: Garden,
  },
  {
    title: "Vanamali Sampreshan Kendra",
    description:
      "Raman Studio is a state-of-the-art facility designed for high-quality voice recording and professional studio work. Equipped with advanced audio recording equipment, soundproof walls, and acoustic panels, it ensures clear and precise sound output, free from external noise or disturbances. The studio features microphones, audio mixers, and digital editing software, allowing users to record, edit, and produce a variety of audio projects, including voiceovers, music, podcasts, and narrations. A dedicated control room enabling real-time monitoring and adjustments. Raman Studio provides a creative and focused environment.",
    image: Studio,
  },
  {
    title: "Canteen",
    description:
      "A college canteen is a bustling and essential hub designed to cater to the diverse needs of students, faculty, and staff by providing affordable, nutritious, and tasty food in a lively environment. It features a spacious seating arrangement with tables and chairs that can accommodate large groups, fostering a sense of community and offering a space for informal discussions, group studies, or simply unwinding during breaks. The menu typically includes a wide range of freshly prepared meals, snacks, beverages, and desserts, catering to various dietary preferences and regional tastes. Equipped with clean and hygienic facilities, the canteen ensures high standards of food safety and quality. Beyond dining, the canteen serves as a vibrant social space where students can relax, network, and rejuvenate between academic sessions. Its welcoming ambiance, combined with its ability to provide an affordable and refreshing culinary experience, makes the college canteen an integral part of campus life, supporting both nourishment and camaraderie.",
    image: Canteen,
  },
  {
    title: "Parking",
    description: 
    "The college parking facility is a well-organized and secure space designed to cater to the needs of students, faculty, and visitors. It features designated spots for two-wheelers, four-wheelers, and bicycles, with proper lighting and surveillance ensuring safety and convenience. The facility includes spaces for individuals with disabilities, promoting inclusivity and accessibility. Regular maintenance and cleanliness provide a hassle-free experience for all users. Strategically located for easy access, the parking area enhances campus functionality and supports a seamless commuting experience. Security personnel and cameras ensure protection against unauthorized access, while the efficient layout minimizes congestion during peak hours.",
    image: Parking,
  }
  

  
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
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
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

      {/* Content Sections */}
      <div className="px-5 md:px-20">
      <h1 className="lg:text-4xl md:text-[43px] font-bold text-3xl mt-8 text-gray-800 text-center w-full">Campus Tour</h1>

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
                className="sm:h-[470px] h-[250px] w-full md:mb-5 sm:object-cover object-cover shadow-lg"
              />
            </div>
            <div className={`lg:w-[44%] lg:h-[470px] h-auto mt-3 w-full lg:px-14 md:px-8 px-6 py-4 ${index % 2 !== 0 ?"lg:py-1 md:py-0":"w-full sm:px-[70px] sm:py-[45px] md:py-[20px] bg-[#e3e3e373] lg:py-10 lg:w-[66%] mt-5 md:mt-0"}`}>
              <h2 className="md:text-[2.2rem] lg:text-[1.8rem] text-[1.4rem] font-bold">{section.title}</h2>
              <p className="mt-4 lg:text-base text-base md:text-xl text-gray-600 text-justify">{section.description} {section.title=="IoT Lab"?<NavLink to="/IOT" onClick={()=>{("/IOT");window.scrollTo(0, 0);}} className="text-blue-600 font-semibold">Explore More</NavLink>:""}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CampusPage;
