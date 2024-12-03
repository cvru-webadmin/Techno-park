import React from 'react';
import Award from '../../../assets/acsilentes award.png';
import Award2023 from '../../../assets/Award2023.jpg';
import Ai_lab from '../../../assets/Ai-lab.jpg';

const awardsData = [
  {
    year: "2024",
    awardName: "Best Department Award 2024",
    description: "The 'Best Department Award 2024' recognizes the Techno Park in the School of Computer Science and Information Technology at Dr. C.V. Raman University for its outstanding performance, innovation, and collaboration. This prestigious award celebrates the department's remarkable contributions to academia and its unwavering commitment to advancing the university’s mission. Through continuous research, development, and excellence in teaching, the Techno Park has set a high standard of achievement, shaping the future of computer science and technology education.",
    image: Award // Add the path to the image for 2024 award
  },
  {
    year: "2023",
    awardName: "Department Excellence Award 2023",
    description: "The 'Department Excellence Award 2023' honors the Techno Park for its exceptional contributions to education and technology over the past year. This award acknowledges the department's trailblazing efforts in fostering innovation, advancing research, and creating a forward-thinking learning environment. It celebrates the hard work of faculty and students alike, who have collectively pushed the boundaries of excellence, setting the stage for continued success and influence in the tech industry.",
    image: Award2023 // Add the path to the image for 2023 award
  },
  {
    year: "2024",
    awardName: "AI Expert Prof. Vedant Ahluwalia Visits",
    description: "Dr. C.V. Raman University, Khandwa, hosted renowned AI expert Prof. Vedant Ahluwalia, who emphasized the importance of embracing AI technology in modern education. He highlighted the need for AI labs and courses to prepare students for global challenges. During the event, Prof. Ahluwalia interacted with students and shared insights on innovation and future trends in AI. The university plans to launch specialized AI labs and training programs, marking a significant step in advancing technical education.",
    image: Ai_lab // Add the path to the image for 2023 award
  },
  {
    year: "2024",
    awardName: "Inauguration of Advanced Computer Lab",
    description: "Dr. C.V. Raman University, Khandwa, unveiled a state-of-the-art central computer lab, spanning over 4,000 square feet, to foster skill development among students. Equipped with advanced IT and animation facilities, the lab aims to provide opportunities for competitive exams and professional training. The initiative is part of the university's commitment to creating a modern learning environment, preparing students for global challenges, and enhancing technical education in the region.",
    image: Ai_lab // Add the path to the image for 2023 award
  },
  // Add more awards as needed
];



export default function ExcellenceAwards() {
  return (
    <div className="max-w-7xl mx-auto px-6 pt-10">
      {/* Section Title */}
      <div className="text-center mb-16 py-10 bg-gray-100 rounded-lg ">
        <h2 className="md:text-4xl text-3xl font-bold text-gray-800 mb-4">
          Department Achievements
        </h2>
        <p className="text-gray-700 md:text-lg text-base max-w-4xl mx-auto leading-relaxed">
          Celebrating the groundbreaking milestones, innovations, and
          exceptional work of our department.
        </p>
      </div>

      {awardsData.map((award, index) => (
        <div
          key={award.year}
          className={`flex flex-col lg:flex-row lg:gap-8 mb-8 lg:mb-20 ${
            index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
          }`}
        >
          {/* Left Section: Image */}
          <div className="flex justify-center mb-8 lg:mb-0 lg:w-1/2">
            <div className="relative w-full lg:max-w-[560px] mx-auto">
              <img
                src={award.image}
                alt={award.awardName}
                className="rounded-lg shadow-lg object-cover w-full md:h-auto h-72"
              />
              <div className="absolute bottom-4 left-4 bg-white bg-opacity-80 px-6 py-3 rounded-lg shadow-md">
                <p className="text-sm font-semibold text-blue-800">
                  {award.awardName}
                </p>
              </div>
            </div>
          </div>

          {/* Right Section: Award Information */}
          <div
            className={`space-y-6 lg:w-1/2 ${
              index % 2 === 0 ? "text-left " : "text-right"
            }`}
          >
            <h2 className="text-3xl font-semibold text-blue-800">
              {award.awardName}
            </h2>
            <p className="text-md leading-relaxed text-justify text-gray-700">
              {award.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
