import React from "react";
import './About.css'
import Vaidehi from "../../../assets/images/Vaidehi.png"
import Shruti from "../../../assets/images/Shruti.png"
import Amit from "../../../assets/images/Amit.png"
import Kunal from "../../../assets/images/Kunal.png"
import Gourav from "../../../assets/images/Gourav.png"
import Ganesh from "../../../assets/images/Ganesh_Nimje.jpeg"

const cardData = [
  {
    name: "Ms. Vaidehi Bakshi",
    title: "Assistant Professor",
    image: Vaidehi,
    description:
      "With 3 years of experience in academia and research, Ms. Bakshi focuses on Internet of Things (IoT). She is passionate about bridging the gap between theoretical concepts and practical applications in IoT, inspiring students to explore cutting-edge technology.",
  },
  {
    name: "Ms. Shruti Sriwas",
    title: "Assistant Professor",
    image: Shruti,
    description:
      "Ms. Shruti Sriwas brings 1 year of fresh academic perspective to Database Management. Her expertise lies in designing efficient database systems and fostering analytical problem-solving skills in her students.",
  },
  {
    name: "Mr. Amit Sawanni",
    title: "Assistant Professor",
    image: Amit,
    description:
      "With over 11 years of teaching and industry experience, Mr. Sawanni is a seasoned professional specializing in Programming Languages. His expertise includes developing innovative teaching methods and mentoring students to excel in coding and software development.",
  },
  {
    name: "Mr. Kunal Mishra",
    title: "Network Administrator",
    image: Kunal,
    description:
      "A skilled professional in Networking, Mr. Mishra ensures robust and efficient network systems at Techno Park. His expertise enhances the learning environment, enabling seamless technology integration.",
  },
  {
    name: "Mr. Gourav Soni",
    title: "Research Assistant",
    image: Gourav,
    description:
      "Mr. Soni, with 2 years of experience, excels in Digital Marketing. He contributes valuable insights into online strategies, analytics, and branding, encouraging students to thrive in the digital economy.",
  },
  {
    name: "Mr. Ganesh Nimje",
    title: "Research Assistant",
    image: Ganesh,
    description:
      "With 5 years of professional experience, Mr. Nimje specializes in Full Stack Development. His teaching approach emphasizes real-world application, empowering students with hands-on skills in web and software development.",
  },
];

const Card = ({ image, title, description, name }) => {
  return (
    <div className="flex flex-col border md:flex-row items-center gap-6 p-6 bg-white shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300">
      {/* Image Section */}
      <div className="flex-shrink-0">
        <img
          src={image}
          alt={name}
          className="w-full h-auto max-w-[150px] md:max-w-[200px] shadow-lg hover:shadow-xl rounded-full"
        />
      </div>

      {/* Text Section */}
      <div className="text-center md:text-left px-5">
        <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-2">
          {name}
        </h2>
        <h3 className="text-lg text-blue-600 mb-4">{title}</h3>
        <p className="about-description">{description}</p>
      </div>
    </div>
  );
};

const FacultyCard = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="about-title">
        Meet Our Faculty
      </h1>
      <div className="grid grid-cols-1 gap-8">
        {cardData.map((card, index) => (
          <Card
            key={index}
            image={card.image}
            name={card.name}
            title={card.title}
            description={card.description}
          />
        ))}
      </div>
    </div>
  );
};

export default FacultyCard;
