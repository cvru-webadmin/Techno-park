import React from "react";

const data = [
  {
    title: "IoT Lab",
    description:
      "An IoT (Internet of Things) Lab is a specialized facility designed to support the development, experimentation, and deployment of IoT solutions. It features a wide range of IoT hardware such as sensors, actuators, microcontrollers (e.g., Arduino, Raspberry Pi, ESP32), and connectivity modules (Wi-Fi, Zigbee, LoRa, Bluetooth, 5G). The lab integrates cloud platforms, edge computing systems, and real-time data processing tools for various applications like smart cities, industrial IoT, healthcare, and more.",
    image: "src/assets/images/IOT.png",
  },
  {
    title: "Project Lab",
    description:
      "A Project Lab is a dynamic workspace designed to support the development and execution of academic, industrial, or research-based projects. It provides tools, equipment, and resources for interdisciplinary work and hands-on learning in fields like engineering, technology, and science. These labs foster collaboration and creativity among students, researchers, and professionals to create innovative solutions.",
    image: "src/assets/images/LanguageLab.jpeg",
  },
  {
    title: "Main Library",
    description:
      "The library is a resource-rich hub for learning, research, and knowledge acquisition. With a diverse collection of books, journals, and digital media, it supports both traditional and digital learning. The library offers quiet study areas, collaborative spaces, and advanced facilities like digital archives and interactive learning tools, making it a cornerstone of education and personal growth.",
    image: "src/assets/images/Library.jpeg",
  },
  {
    title: "Programming Lab",
    description:
      "A Programming Lab is a specialized environment for coding and software development. Equipped with modern computers, programming tools, and development environments, it supports various programming languages and fosters collaboration, problem-solving, and technical expertise through hands-on coding, debugging, and application development.",
    image: "src/assets/images/ProgrammingLab.jpeg",
  },
  {
    title: "Seminar Hall",
    description:
      "A Seminar Hall is a versatile venue designed for academic lectures, corporate meetings, training sessions, and cultural programs. With state-of-the-art technology, ergonomic seating, and adaptable layouts, it provides an ideal setting for presentations, discussions, and networking in a professional environment.",
    image: "src/assets/images/Seminar.jpeg",
  },
  {
    title: "Faculty Cabin",
    description:
      "A Faculty Cabin is a private workspace for professors and academic staff, providing a quiet and comfortable environment for research, grading, meetings, and lesson planning. It is equipped with office furniture, technology tools, and a small meeting area for one-on-one student consultations.",
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
        <div className="absolute inset-x-10 top-[25%] text-center text-white px-6 md:px-12">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
            Discover Your Future with Us
          </h1>
          <p className="text-lg md:text-xl text-gray-200">
            Explore our campus, where learning goes beyond the classroom – it's a place to unlock your potential and shape your future.
          </p>
        </div>
      </div>

      {/* Content Sections */}
      <div className="px-6 md:px-20 py-12">
        {data.map((section, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row justify-center items-center md:items-start my-16 ${
              index % 2 !== 0 ? "" : "md:flex-row-reverse"
            }`}
          >
            <div className="md:w-[45%]">
              <img
                src={section.image}
                alt={section.title}
                className="w-full h-[300px] md:h-[350px] object-cover rounded-lg shadow-lg transition-transform transform hover:scale-105"
              />
            </div>
            <div
              className={`md:w-[50%] px-6 py-4 mt-5 md:mt-0 ${
                index % 2 !== 0 ? "" : "md:pl-12"
              }`}
            >
              <h2 className="text-3xl font-bold mb-4">{section.title}</h2>
              <p className="text-lg leading-relaxed text-gray-700">{section.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CampusPage;