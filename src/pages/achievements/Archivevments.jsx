import React, { useRef } from "react";
import Header from "./archivment componet/Header";
import Trophies from "./archivment componet/Trophies";
import departmet_excel from "../../assets/Trophies/Department excellence.jpg"
import best_perfomnce from "../../assets/Trophies/bestPerfomace.jpg"
import best_perfomnce2 from "../../assets/Trophies/Best perfoming.jpg"
import acadmicAward from "../../assets/Trophies/Acadmic professonal.jpg"
import InovationAward from "../../assets/Trophies/inovation2.jpg"
import InovationAward1 from "../../assets/Trophies/BestIdea1.jpg"
import TeachersAchievements from "./archivment componet/TeachersAchievements";
import StudentAchievements from "./archivment componet/student";
import ExcellenceAwards from "./archivment componet/ExcellenceAwards";
// import InovationAward1 from "./../assets/Trophies/BestIdea1.jpg"

import solor from "./../../assets/Student archivment/solar2.jpg"
import merit from "./../../assets/Student archivment/merit.jpg"
import Inovation from "./../../assets/Student archivment/Inovation.jpg"
import hackathon from "./../../assets/Student archivment/hackathon.jpg"
import shoting from "./../../assets/Student archivment/shothing.png"
import respectEducationMinistor from "./../../assets/Student archivment/respectEducationMinistor.jpg"

import facultAward from "./../../assets/FacultyAward.jpg"
import AcharyaAward from "./../../assets/Acharya award.jpg"


const AchievementsPage = () => {
  const departments = [
    { name: "Computer Science", description: "Excellence in Research and AI", image: "https://via.placeholder.com/150" },
    { name: "Mechanical Engineering", description: "Best Innovation in Robotics", image: "https://via.placeholder.com/150" },
    { name: "Biotechnology", description: "Top Academic Achievement", image: "https://via.placeholder.com/150" },
    { name: "Business Administration", description: "Leadership and Strategy Award", image: "https://via.placeholder.com/150" },
  ];

  const trophies = [
    { title: "National Excellence Trophy", year: 2023, image: departmet_excel },
    { title: "Best University Award", year: 2022, image: best_perfomnce },
    { title: "Sports Championship Trophy", year: 2021, image: best_perfomnce2 },
    { title: "Innovation in Teaching Award", year: 2020, image: acadmicAward },
    { title: "Best Innovation Award First prize", year: 2020, image: InovationAward },
    { title: "Best Innovation Award second prize", year: 2020, image: InovationAward1 },
  ];

  const achievements = [
    {
      name: "Mis. Swati Atre",
      title: "Best Faculty Award",
      description: "Recognized for outstanding contributions to educational innovation.",
      year: 2023,
      image: facultAward,
    },
    {
      name: "Mis. Swati Atre",
      title: "Acharya Award",
      description: "Awarded for groundbreaking research in machine learning.",
      year: 2022,
      image: AcharyaAward,
    },
    {
      name: "Dr. Emily Davis",
      title: "Teaching Excellence",
      description: "Acknowledged for inspiring students and advancing pedagogy.",
      year: 2021,
      image: "https://via.placeholder.com/400x300",
    },
  ];

  const Studentachievements = [
    {
      name: "Solar Model",
      title: "Solar mobile charging station",
      description:
        "solar mobile charging station is a portable, eco-friendly charging solution powered by solar energy. It typically consists of photovoltaic panels to capture sunlight, a battery storage system to store excess energy, and multiple USB or power outlets to charge devices such as smartphones, tablets, and laptops.",
      year: 2023,
      image: solor, // Update with the correct image path
    },
    {
      name: "Hackathon",
      title: "First Place in Robotics Competition",
      description:
        "Ryan's innovative robotics project won first place in the National Robotics Championship.",
      year: 2022,
      image: hackathon, // Update with the correct image path
    },
    {
      name: "Education Minister Attribute",
      title: "Published Research Paper",
      description:
        "Sophia published groundbreaking research on AI ethics in a renowned journal.",
      year: 2023,
      image: respectEducationMinistor, // Update with the correct image path
    },
    {
      name: "Merit Student",
      title: "First Place in Robotics Competition",
      description:
        "Ryan's innovative robotics project won first place in the National Robotics Championship.",
      year: 2022,
      image: merit, // Update with the correct image path
    },
    {
      name: "Innovation IDEA",
      title: "Published Research Paper",
      description:
        "Sophia published groundbreaking research on AI ethics in a renowned journal.",
      year: 2023,
      image: Inovation, // Update with the correct image path
    },
    {
      name: "Shooting Competition",
      title: "Akshara Selected for Pre-National Shooting Competition",
      description:
        "Akshara Siddiqui, an NCC cadet from Khandwa district, has been selected for the Pre-National Shooting Competition, bringing pride to the region. She showcased exceptional performance in the 50-meter rifle shooting event, earning a silver medal. Her achievement has been widely celebrated by her school and family",
      year: 2024,
      image: shoting, // Update with the correct image path
    },
  ];

  const Sectionacroll=useRef(null);

  const gotoAchivment=()=>{
    Sectionacroll.current.scrollIntoView({ behavior: "smooth" })
  }  
  

  return (
    <div className=" min-h-screen">
      {/* Header Section */}
      <Header scroll={gotoAchivment} />
       {/* Trophies  */}
       <span ref={Sectionacroll}></span>
       <ExcellenceAwards />

       <Trophies trophies={trophies} />

       <TeachersAchievements achievements={achievements} />

       <StudentAchievements achievements={Studentachievements} />

      {/* Categories Section */}
      {/* <section className="py-10">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-gray-800">Excellent Departments</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-6">
            {departments.map((dept, index) => (
              <div
                key={index}
                className="bg-white shadow-lg rounded-lg p-4 text-center hover:shadow-2xl transition-shadow duration-300"
              >
                <img
                  src={dept.image}
                  alt={dept.name}
                  className="w-full h-32 object-cover rounded-t-lg"
                />
                <h3 className="mt-4 text-lg font-semibold text-blue-800">{dept.name}</h3>
                <p className="text-gray-600 mt-2">{dept.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      
    </div>
  );
};

export default AchievementsPage;
