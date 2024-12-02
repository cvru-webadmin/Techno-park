import React from 'react';
import Award from '../../../assets/acsilentes award.png';
import Award2023 from '../../../assets/Award2023.jpg';

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
  // Add more awards as needed
];



export default function ExcellenceAwards() {
  return (
    <div className="max-w-7xl mx-auto px-6 pt-10">
      {/* Section Title */}
      <div className="text-center mb-16 py-12 bg-gray-100 rounded-lg ">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">
          Department Achievements
        </h2>
        <p className="text-gray-700 text-lg max-w-4xl mx-auto leading-relaxed">
          Celebrating the groundbreaking milestones, innovations, and
          exceptional work of our department.
        </p>
      </div>

      {awardsData.map((award, index) => (
        <div
          key={award.year}
          className={`flex flex-col md:flex-row gap-8 mb-20 ${
            index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
          }`}
        >
          {/* Left Section: Image */}
          <div className="flex justify-center mb-8 md:mb-0 md:w-1/2">
            <div className="relative w-full max-w-[550px] mx-auto">
              <img
                src={award.image}
                alt={award.awardName}
                className="rounded-lg shadow-lg object-cover w-full h-auto"
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
            className={`space-y-6 md:w-1/2 ${
              index % 2 === 0 ? "text-left " : "text-right"
            }`}
          >
            <h2 className="text-3xl font-extrabold text-blue-900">
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
