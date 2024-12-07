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
import Inovation2 from "./../../assets/Student archivment/Inovation2.jpg"
import hackathon from "./../../assets/Student archivment/hackathon.jpg"
import shooting from "./../../assets/Student archivment/shothing.png"
import HackCraft1 from "./../../assets/Student archivment/Hackcraft1.jpg"
import HackCraft2 from "./../../assets/images/hackathon.jpg"
import LogoDesign1 from "./../../assets/Student archivment/LogoDesign1.jpg"
import LogoDesign2 from "./../../assets/Student archivment/LogoDesign2.jpg"
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
      name: "Prof. Swati Atre",
      title: "Bhart Education Excellence Awards (Jyeshtha Acharya Award of recognition)",
      description: "Received from BRAIN O VISION for significant contributions in the field of education.",
      year: "2023-24",
      image: "", // Empty string for image path
    },
    {
      name: "Prof. Swati Atre",
      title: "Vanmali Certificate of Recognition",
      description: "Awarded by CVRUK for excellence in research and innovation.",
      year: "2023-09-05",
      image: "", // Empty string for image path
    },
    {
      name: "Prof. Swati Atre",
      title: "Certificate of Commendation (For Research & Innovation)",
      description: "Recognized by CVRUK for exceptional research and innovative contributions.",
      year: "2023-09-05",
      image: "", // Empty string for image path
    },
    {
      name: "Prof. Swati Atre",
      title: "Certificate of Recognition (Reviewer for INSC International Publishing Platform)",
      description: "Recognized by INSC for her contributions as a reviewer for CS & IT publications.",
      year: "2023-24",
      image: "", // Empty string for image path
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
      name: "Innovation IDEA",
      title: "Digital Water Footprint Calculator",
      description:
        "This project involves the development of a Digital Water Footprint Calculator, designed to track and reduce water consumption in various sectors. The tool aims to promote sustainability by providing users with insights into their water usage, helping industries and individuals make informed decisions to conserve water and reduce their environmental impact.",
      year: 2023,
      image: Inovation, // Update with the correct image path
    },    
    {
      name: "Innovation IDEA",
      title: "Hurbale Gallery",
      description:
        "This project involves the development of 'Hurbale Gallery', an innovative digital platform that showcases rural arts and crafts. It connects local artisans with a broader audience, providing them with a platform to display their work, promote cultural heritage, and boost their livelihoods. The project won the First Prize for its creativity and impact in preserving and promoting rural art forms.",
      year: 2023,
      image: Inovation2, // Update with the correct image path
    },       
    {
      name: "National Shooting",
      title: "Selected for Pre-National Shooting Competition",
      description:
        "Aksha Siddiqui, an NCC cadet, showcased exceptional performance in the 50-meter rifle shooting event and earned a silver medal. She has been selected for the Pre-National Shooting Competition, bringing pride to the region.",
      year: 2024,
      image:shooting,
    },
    {
      name: "Hackcraft Event",
      title: "1st Rank in Idea Presentation Challenge",
      description:
        "Rishabh Sharma achieved first place in the Idea Presentation Challenge during the Hackcraft event, demonstrating exceptional innovation and problem-solving skills.",
      year: 2024,
      image:"",
    },
    {
      name: "Hackcraft Event",
      title: "1st Rank in Webpage Design Challenge",
      description:
        "Yogesh Yadav secured first place in the Webpage Design Challenge at the Hackcraft event, showcasing outstanding creativity and technical expertise.",
      year: 2024,
      image:HackCraft1,
    },
    {
      name: "Hackcraft Event",
      title: "1st Rank in Logo Design Challenge",
      description:
        "Aditya Pratap Singh received the first prize in the Logo Design Challenge at the Hackcraft event, demonstrating creative excellence in branding and design.",
      year: 2024,
      image:LogoDesign1,
    },
    {
      name: "Hackcraft Event",
      title: "2nd Rank in Logo Design Challenge",
      description:
        "Geetansh jain received the second prize in the Logo Design Challenge at the Hackcraft event, demonstrating creative excellence in branding and design.",
      year: 2024,
      image:LogoDesign2,
    },
    {
      name: "Shodh Shikhar",
      title: "Research Paper Presentation",
      description:
        "Mr. Mandeep Pawar presented 'Transforming Education through Digital Technologies' at RNTU (Shodh Shikhar), highlighting the integration of innovative tools in education.",
      year: 2024,
      image:"",
    },
    {
      name: "University Topper",
      title: "BCA University Topper, June 2023",
      description:
        "Atul Bhaisare achieved the prestigious title of University Topper in BCA for June 2023, showcasing exceptional academic performance.",
      year: 2023,
      image: merit,
    },
    {
      name: "Sports Shooting",
      title: "Silver Medal in Inter-Group Sports Shooting Competition",
      description:
        "Aksha Siddiqui earned a silver medal in the Inter-Group Sports Shooting Competition, demonstrating her skill and dedication in sports.",
      year: 2024,
      image:shooting,
    },
    {
      name: "Hackcraft Event",
      title: "2nd Rank in Webpage Design Challenge",
      description:
        "Deepanshu Dashore earned second place in the Webpage Design Challenge at the Hackcraft event, showcasing his design acumen.",
      year: 2024,
      image:HackCraft2,
    },
    {
      name: "Research Paper",
      title: "AI & Marketing",
      description:
        "Ms. Payal Jagtap and Ms. Prachi Parwani presented their research paper 'AI & Marketing' at RNTU, exploring the integration of AI in market strategies.",
      year: 2024,
      image:"",
    },
    {
      name: "Professional Program",
      title: "Participation in Professional Advancement Program (Course III)",
      description:
        "Students from BCA and MCA actively participated in the Professional Advancement Program (Course III), gaining industry-relevant skills and knowledge.",
      year: 2024,
      image:"",
    }
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
