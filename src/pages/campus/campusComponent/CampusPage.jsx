import React from "react";
import { NavLink } from "react-router-dom";
const data = [
  {
    title: "IoT Lab",
    description:
      "An IoT (Internet of Things) Lab is a specialized facility designed to support the development, experimentation, and deployment of Internet of Things solutions. It typically features a wide range of IoT hardware such as sensors, actuators, microcontrollers (e.g., Arduino, Raspberry Pi, ESP32), and connectivity modules (Wi-Fi, Bluetooth). The lab provides tools for data collection, analysis, and visualization, often integrating cloud platforms and edge computing systems for real-time processing. It fosters interdisciplinary collaboration, enabling students, researchers, and professionals to prototype smart systems for applications like smart cities, industrial IoT, healthcare, agriculture, and home automation. The IoT Lab serves as a hub for innovation, skill development, and solving real-world challenges using IoT technologies. It is a facility equipped with devices, sensors, microcontrollers, and communication tools for developing and testing IoT systems. It supports prototyping, real-time data processing, and experimentation for applications in areas like smart homes, healthcare, and industrial automation.",
    image: "src/assets/images/IOT.png",
  },
  {
    title: "Project Lab",
    description:
      "A Project Lab is a dynamic workspace designed to support the planning, development, and execution of academic, industrial, or research-based projects. It provides essential tools, equipment, and resources to enable hands-on learning and innovation. These labs are equipped with workstations, prototyping tools, electronic components, and software platforms to facilitate interdisciplinary projects. They encourage collaboration among students, researchers, and professionals to design, prototype, and implement solutions in various domains such as engineering, technology, and science. Project labs are crucial for fostering creativity, critical thinking, and practical problem-solving skills in a structured environment.",
    image: "src/assets/images/LanguageLab.jpeg",
  },
  {
    title: "Main Library",
    description:
      "A library is a resource-rich facility that serves as a hub for learning, research, and knowledge acquisition. It houses a diverse collection of books, journals, magazines, digital media, and other resources across various disciplines, along with modern tools like e-books, online databases, and multimedia platforms to support both traditional and digital learning. Designed to foster a quiet and focused environment, libraries also offer study areas, collaborative spaces, and technology resources like computers and printers. Serving as community and academic centers, they host workshops, seminars, and events that encourage knowledge sharing and skill development. Many libraries feature advanced facilities such as digital archives, interactive learning tools, and virtual reality systems, enabling innovative exploration. By providing services like interlibrary loans, research assistance, and inclusive resources for diverse audiences, libraries remain a cornerstone of education, personal growth, and innovation in the digital age.",
    image: "src/assets/images/Library.jpeg",
  },
  {
    title: "Programming Lab",
    description: "A Programming Lab is a specialized environment designed for coding, software development, and computational learning. Equipped with modern computers, programming tools, compilers, and development environments, it supports a wide range of programming languages like Python, Java, C++, and more. The lab provides an ideal setting for students, researchers, and professionals to practice coding, debug programs, and develop software applications. Often integrated with internet access, version control systems, and collaboration tools, programming labs facilitate teamwork and innovation. They are essential for conducting hands-on exercises, building algorithms, and working on real-world projects, fostering problem-solving skills and technical expertise.",
    image: "src/assets/images/ProgrammingLab.jpeg",
  },
  {
    title: "Seminar Hall",
    description:
      "A Seminar Hall is a versatile venue designed to cater to a variety of events such as academic lectures, corporate meetings, training sessions, cultural programs, and panel discussions. It is typically equipped with state-of-the-art technology, including high-resolution projectors, interactive whiteboards, wireless microphones, advanced sound systems, and sometimes video conferencing facilities for virtual or hybrid events. The hall is designed with ergonomic seating, proper ventilation, and acoustics to ensure comfort and clarity for participants. Many seminar halls also feature podiums, stages, and lighting systems to accommodate formal presentations and performances. They are often adaptable to different seating arrangements, such as U-shaped, theater-style, or banquet-style layouts, depending on the event's nature. By providing an engaging and professional atmosphere, seminar halls play a critical role in fostering knowledge dissemination, innovation, and collaboration in educational, corporate, and community settings.",
    image: "src/assets/images/Seminar.jpeg",
  },
  {
    title: "Faculty Cabin",
    description: "A Faculty Cabin is a private, designated workspace within educational institutions, typically assigned to professors or academic staff. It provides a quiet, comfortable environment for faculty members to conduct research, grade assignments, meet with students, and plan lessons. Faculty cabins are usually equipped with essential office furniture such as desks, chairs, bookshelves, and storage cabinets, as well as technology like computers, printers, and internet access to facilitate academic tasks. Some cabins also feature a small meeting area for one-on-one student consultations or faculty discussions. Designed to support productivity and professional activities, faculty cabins offer a space for focused work while also ensuring privacy and a personal space for academic responsibilities.",
    image: "src/assets/images/FacultyCabin.png",
  },
];

const CampusPage = () => {
  return (
    <div className="font-sans bg-white text-gray-800">
      {/* Hero Section */}
      <div
        className="relative bg-cover bg-center h-[100dvh] text-white"
        style={{ backgroundImage: "url('src/assets/images/Front.jpeg')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="absolute -inset-[50px] inset-x-10 flex flex-col mt-40 text-left">
          <h1 className="text-4xl md:text-5xl w-[800px] font-bold">Discover Your Future with Us</h1>
          <p className="mt-4 text-lg md:text-xl w-[650px] text-justify text-gray-200">Explore our campus, where learning goes beyond the classroom– it's a place to unlock your potential and shape your future.</p>
        </div>
      </div>

      {/* Content Sections */}
      <div className="px-5 md:px-20">
        {data.map((section, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row justify-center items-center md:items-start my-16 ${
              index % 2 !== 0 ? "" : "md:flex-row-reverse"
            }`}
          >
            <div className={`${index % 2 !== 0 ?"md:w-[69%] ":"md:w-[44%]"}`}>
              <img
                src={section.image}
                alt={section.title}
                className="h-[470px] w-full object-cover shadow-lg"
              />
            </div>
            <div className={`md:w-[44%] h-[470px] px-14 py-4 ${index % 2 !== 0 ?"":"w-full px-[70px] py-[45px] bg-[#e3e3e373] md:w-[66%] mt-5 md:mt-0"}`}>
              <h2 className="text-2xl font-bold">{section.title}</h2>
              <p className="mt-4 text-gray-600">{section.description} {section.title=="IoT Lab"?<NavLink to="/" className="text-blue-600 font-semibold">Explore More</NavLink>:""}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CampusPage;
