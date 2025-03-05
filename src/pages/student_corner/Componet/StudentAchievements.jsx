import React from "react";

// student archivment image import 
import RajyaAnand from './../../../assets/Student_archivment/RajyaAnand.jpeg';
import WomanDay from './../../../assets/Student_archivment/WomanDay.jpeg';
import IPRKhushi from './../../../assets/Student_archivment/IPRKhushi.jpeg';
import KhushiHackCraft from './../../../assets/Student_archivment/khushi_Hackathon.jpg';
import solor from "./../../../assets/Student_archivment/solar2.jpg";
import merit from "./../../../assets/Student_archivment/merit.jpg";
import Inovation from "./../../../assets/Student_archivment/Inovation.jpg";
import Inovation2 from "./../../../assets/Student_archivment/Inovation2.jpg";
import HackCraft2 from './../../../assets/images/hackathon.jpg';
import shooting from "./../../../assets/Student_archivment/shothing.png";
import HackCraft1 from "./../../../assets/Student_archivment/Hackcraft1.jpg";
import LogoDesign1 from "./../../../assets/Student_archivment/LogoDesign1.jpg";
import LogoDesign2 from "./../../../assets/Student_archivment/LogoDesign2.jpg";
import Ideapresent1 from "./../../../assets/Student_archivment/IdeaPresent1.jpg";
import MathExivition3 from "./../../../assets/Student_archivment/Math3.jpg";
import MathExivition from "./../../../assets/Student_archivment/GeetMaths.jpg";
import Debt1 from "./../../../assets/Student_archivment/Debet 1.jpg";
import Aditya from "./../../../assets/Student_archivment/Aditya.jpg";
import AwardDefualt from "../../../assets/AwardDefualt.png"

// Student Achievements Data
const achievements =[
    {
      name: "Solar Model",
      title: "Solar Mobile Charging Station",
      description:
        "A solar mobile charging station is a portable, eco-friendly solution with photovoltaic panels, a battery storage system, and multiple outlets for charging devices like smartphones, tablets, and laptops, offering a sustainable alternative to traditional charging methods.",
      year: 2023,
      image: solor, // Update with the correct image path
    },
    {
      name: "Innovative Idea",
      title: "Digital Water Footprint Calculator",
      description:
        "Our students won second prize for their innovative digital water footprinting concept, using IoT and AI to optimize water use in farming and promote sustainability. This achievement reflects their creativity and commitment to environmental conservation.",
      year: 2023,
      image: Inovation, // Update with the correct image path
    },    
    {
      name: "Innovative Idea",
      title: "Herbal Gallery",
      description:
        "Our students won 1st prize for their Herbal Gallery project, showcasing the medicinal benefits of herbal plants and promoting wellness through engaging visuals. Their creativity highlighted the importance of herbal medicine and sustainable living.",
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
        "Rishabh Sharma secured first place in the Hackcraft Idea Presentation Challenge, showcasing innovation, problem-solving, and impactful solutions. His achievement highlights his talent and inspires aspiring innovators.",
      year: 2024,
      image:Ideapresent1,
    },
    {
      name: "Hackcraft Event",
      title: "1st Rank in Webpage Design Challenge",
      description:
        "Yogesh Yadav won first place in the Hackcraft Webpage Design Challenge, impressing judges with his creative, user-friendly, and functional design, showcasing his expertise in web development and setting a high standard for innovation.",
      year: 2024,
      image:HackCraft1,
    },
    {
      name: "Hackcraft Event",
      title: "1st Rank in Logo Design Challenge",
      description:
        "Aditya Pratap Singh won first prize in the Hackcraft Logo Design Challenge, showcasing creativity and skill in branding with a unique and impactful design, setting a high standard for visual communication and inspiring future designers.",
      year: 2024,
      image:LogoDesign1,
    },
    {
      name: "Hackcraft Event",
      title: "2nd Rank in Logo Design Challenge",
      description:
        "Geetansh Jain won second prize in the Hackcraft Logo Design Challenge, demonstrating creativity and skill in impactful branding, with a design that effectively captured the brand’s essence and stood out for its originality.",
      year: 2024,
      image:LogoDesign2,
    },
    {
      name: "Shodh Shikhar",
      title: "Research Paper Presentation",
      description:
        "Mr. Mandeep Pawar presented 'Transforming Education through Digital Technologies' at RNTU (Shodh Shikhar), highlighting the integration of innovative tools in education, emphasizing their potential to revolutionize teaching and learning.",
      year: 2024,
      image:AwardDefualt,
    },
    {
      name: "University Topper",
      title: "BCA University Topper, June 2023",
      description:
        "Atul Bhaisare achieved the prestigious title of University Topper in BCA for June 2023, showcasing exceptional academic performance, and setting a benchmark for excellence among his peers with his hard work and dedication.",
      year: 2023,
      image: merit,
    },
    {
      name: "Sports Shooting",
      title: "Silver Medal in Inter-Group Sports Shooting Competition",
      description:
        "Aksha Siddiqui earned a silver medal in the Inter-Group Sports Shooting Competition, demonstrating her skill and dedication in sports, and reflecting her commitment to excellence and focus in competitive shooting, inspiring others to pursue their passions.",
      year: 2024,
      image:shooting,
    },
    {
      name: "Hackcraft Event",
      title: "2nd Rank in Webpage Design Challenge",
      description:
        "Deepanshu Dashore earned second place in the Webpage Design Challenge at the Hackcraft event, showcasing his design acumen. His innovative approach to layout and user experience impressed the judges, highlighting his potential in web design.",
      year: 2024,
      image:HackCraft2,
    },
    {
      name: "Research Paper",
      title: "AI & Marketing",
      description:
        "Ms. Payal Jagtap and Ms. Prachi Parwani presented their research paper 'AI & Marketing' at RNTU, exploring the integration of AI in market strategies, and highlighting its potential to revolutionize the marketing landscape with data-driven insights.",
      year: 2024,
      image:AwardDefualt,
    },
    {
      name: "Professional Program",
      title: "Participation in Professional Advancement Program (Course III)",
      description:
        "Students from BCA and MCA actively participated in the Professional Advancement Program (Course III), gaining industry-relevant skills and knowledge, and preparing themselves for future career success in the tech industry.",
      year: 2024,
      image:AwardDefualt,
    },
    {
      name: "Hackcraft Event",
      title: "Participation in Web Designing Challenge",
      description:
        "Khushi Yadav participated in the Web Designing Challenge during the Hackcraft event, demonstrating her creativity and technical skills in crafting innovative and user-friendly web designs. Her efforts were recognized with a certificate of participation.",
      year: 2024,
      image: KhushiHackCraft, // No image provided
    },
    {
      name: "IPR Seminar",
      title: "Participation in IPR Seminar",
      description:
        "Deepnashu dashore participated in the IPR Seminar, gaining valuable insights into intellectual property rights and their role in fostering innovation and protecting creative works. Her active involvement was recognized with a certificate of participation.",
      year: 2024,
      image: AwardDefualt, // No image provided
    },    
    {
      name: "IPR Seminar",
      title: "Participation in IPR Seminar",
      description:
        "Shivam dubey participated in the IPR Seminar, gaining valuable insights into intellectual property rights and their role in fostering innovation and protecting creative works. Her active involvement was recognized with a certificate of participation.",
      year: 2024,
      image: AwardDefualt, // No image provided
    },    
    {
      name: "IPR Seminar",
      title: "Participation in IPR Seminar",
      description:
        "Geetensh Jain participated in the IPR Seminar, gaining valuable insights into intellectual property rights and their role in fostering innovation and protecting creative works. Her active involvement was recognized with a certificate of participation.",
      year: 2024,
      image: AwardDefualt, // No image provided
    },    
    {
      name: "IPR Seminar",
      title: "Participation in IPR Seminar",
      description:
        "Khushi Yadav participated in the IPR Seminar, gaining valuable insights into intellectual property rights and their role in fostering innovation and protecting creative works. Her active involvement was recognized with a certificate of participation.",
      year: 2024,
      image: IPRKhushi, // No image provided
    },  
    {
      name: "Maths Exhibition",
      title: "Participation in of Maths Exhibition",
      description: "Awarded for outstanding participation in the Maths Exhibition, securing a position, the recognition highlights the student's creativity in presenting mathematical concepts and dedication to academic excellence, showcasing their problem-solving abilities.",
      year: 2023,
      image: MathExivition,
    },
    {
      name: "Participation Certificate",
      title: "Participation in IPR Seminar",
      description: "Aditya Pratap Singh participated in the IPR Seminar, gaining valuable insights into intellectual property rights and their role in fostering innovation and protecting creative works. Her active involvement was recognized with a certificate of participation.",
      year: 2024,
      image: Aditya,  
    },
    {
      name: "Maths Exhibition",
      title: "Certificate of Achievement",
      description: "This certificate is presented to Rishabh Sharma for his exceptional performance in the Maths Exhibition, securing 3rd position on December 21, 2023, at Dr. C.V. Raman University, Khandwa. His dedication and skills have been recognized with this achievement.",
      year: 2023,
      image: MathExivition3  // Empty string for image path
    },
    {
      name: "Woman's Day Celebration",
      title: "Participation in Woman's Day Programs",
      description:
        "Khushi Yadav participated in the Women’s Day Program, engaging in activities like sack race, kho-kho, documentary making, and managing a food stall. Her dedication was recognized with a certificate of participation, reflecting her enthusiasm and teamwork.",
      year: 2024,
      image: WomanDay, // No image provided
    },  
    {
      name: "Debate Competition",
      title: "Participation in Debate Competition",
      description: "Awarded for outstanding participation in the Debate Competition, securing the first position, this recognition highlights exceptional communication skills, critical thinking, and the ability to engage effectively in discussions, setting a high standard for future participants.",
      year: 2023,
      image: Debt1,
    },  
    {
      name: "Rajya Anand Sansthan Workshop",
      title: "Participation in Rajya Anand Sansthan Seminar",
      description:
        "Khushi Yadav participated in the Rajya Anand Sansthan Workshop, focusing on well-being and mindfulness. Her involvement earned a certificate of participation, highlighting her commitment to growth.",
      year: 2024,
      image: RajyaAnand, // No image provided
    },    
  ];

const StudentAchievement = () => {
  return (
    <section className="bg-gray-100 py-16 px-6 lg:px-20">
      {/* Section Title */}
      {/* <h2 className="text-3xl font-bold text-blue-700 text-center mb-10">🏆 Student Achievements</h2> */}
      {/* <h2 className="text-3xl font-semibold text-center  text-gray-800 mb-6">🏆 Student Achievements</h2> */}
      <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6 ">
      🏆  <span className="bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 inline-block text-transparent bg-clip-text drop-shadow-lg">Student Excellence </span>
      🏆  <span className="bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500  text-transparent bg-clip-text drop-shadow-lg block">____________________________</span>
</h2>

      {/* Achievements Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {achievements.map((achievement, index) => (
          <div key={index} className="relative group rounded-lg bg-gradient-to-b from-blue-600 via-purple-500 to-red-500">
          <div className="relative h-full bg-white ml-1 text-gray-900 p-4 rounded-lg shadow-md max-w-lg mx-auto flex flex-col md:flex-row items-center space-x-4 transition-transform duration-500 hover:scale-105 overflow-hidden">
          {/* Default & Hover Image with Blur Effect */}
          <div className="absolute inset-0 transition-opacity opacity-0 duration-500 group-hover:opacity-100">
            <img 
              src={achievement.image || 'https://via.placeholder.com/300'} 
              alt={achievement.title} 
              className="w-full h-full object-cover transition-all duration-500 group-hover"
            />
          </div>
          
          {/* Achievement Icon */}
          <div className="relative w-12 h-12 bg-gradient-to-b from-blue-600 via-purple-500 to-red-500 text-white flex items-center justify-center rounded-full shadow-md z-10 group-hover:opacity-0 transition-opacity duration-500">
          <svg className="w-8 h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="m305.975 298.814l22.704 2.383V486l-62.712-66.965V312.499l18.214 8.895zm-99.95 0l-22.716 2.383V486l62.711-66.965V312.499l-18.213 8.895zm171.98-115.78l7.347 25.574l-22.055 14.87l-1.847 26.571l-25.81 6.425l-10.803 24.314l-26.46-2.795l-18.475 19.087L256 285.403l-23.902 11.677l-18.475-19.15l-26.46 2.795l-10.803-24.313l-25.81-6.363l-1.847-26.534l-22.118-14.92l7.348-25.573l-15.594-21.544l15.644-21.52l-7.398-25.523l22.068-14.87L150.5 73.03l25.86-6.362l10.803-24.313l26.46 2.794L232.098 26L256 37.677L279.902 26l18.475 19.149l26.46-2.794l10.803 24.313l25.81 6.425l1.847 26.534l22.055 14.87l-7.347 25.574l15.656 21.407zm-49.214-21.556a72.242 72.242 0 1 0-72.242 72.242a72.355 72.355 0 0 0 72.242-72.242m-72.242-52.283a52.282 52.282 0 1 0 52.282 52.283a52.395 52.395 0 0 0-52.282-52.245z"></path></svg>
          </div>
          
          {/* Achievement Content (Hidden on Hover) */}
          <div className="relative flex-1 z-10 bg-white p-4 rounded-md shadow-sm transition-opacity duration-500 group-hover:opacity-0">
            <h3 className="text-lg font-semibold">{achievement.title}</h3>
            <p className="text-blue-600 text-xs mt-1 font-medium">{achievement.year}</p>
            <p className="mt-2 text-gray-700 text-sm leading-relaxed">{achievement.description}</p>
          </div>
        </div>
        </div>
        ))}
      </div>
    </section>
  );
};

export default StudentAchievement;
