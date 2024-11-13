import React from "react";
import Course3 from '../../../assets/Course1.jpeg';
import Course1 from '../../../assets/Course2.jpg';
import Course2 from '../../../assets/Course3.jpg';
import Course4 from '../../../assets/Course4.png';
import Course5 from '../../../assets/Course5.webp';
import Course6 from '../../../assets/Course6.webp';

const CourseCard = ({ image, title, description }) => {
  return (
    <div className="w-full sm:w-72 bg-white group hover:bg-[#365071] text-gray-800 border transform transition-transform shadow-md duration-500 hover:scale-105 hover:shadow-lg border-gray-200 rounded-lg">
      <img src="https://th.bing.com/th/id/OIP.-iDV_N_fUDEjW0uy2PwmAgHaE8?rs=1&pid=ImgDetMain" alt={title} className="rounded-t-lg w-full h-48 object-cover" />
      <div className="px-4 py-4">
        <h2 className="text-xl font-semibold group-hover:text-white mb-2">{title}</h2>
        <p className="mt-2 text-sm group-hover:text-slate-300 line-clamp-3 text-gray-500">{description}</p>
      </div>
    </div>
  );
};

const FeaturedCourses = () => {
  const courses = [
    {
      image: Course1,
      title: 'DCA (Diploma in Computer Application)',
      description: 'DCA or Diploma in Computer Applications, is a 1-year diploma course in the field of Computer Applications that involves the study of numerous computer applications...',
    },
    {
      image: Course3,
      title: 'PGDCA (Post Graduate Diploma in Computer Applications)',
      description: 'PGDCA Full Form is a Post Graduate Diploma in Computer Application. PGDCA is a 1-year postgraduate course that focuses on computer applications...',
    },
    {
      image: Course2,
      title: 'BCA (Bachelor of Computer Applications)',
      description: 'BCA is an undergraduate degree programme in the field of computer application and information technology...',
    },
    {
      image: Course4,
      title: 'MCA (Master of Computer Applications)',
      description: 'MCA (Master of Computer Applications) is a master’s level course focusing on computer applications and software development...',
    },
    // {
    //   image: Course5,
    //   title: 'BSc IT (Bachelor of Science in Information Technology)',
    //   description: 'BSc IT stands for Bachelor of Science in Information Technology. BSc Information Technology is an undergraduate science course of 3 years dealing with software...',
    // },
    // {
    //   image: Course6,
    //   title: 'MSc IT (Master of Science in Information Technology)',
    //   description: 'Master of Science in information technology (IT) is a 2-year post-graduate level program aimed at providing theoretical as well as practical knowledge...',
    // },
  ];

  return (
    <>
      <div className="flex justify-center">
        <section className="bg-white border rounded-xl items-center flex flex-col shadow-md w-[93%] py-8 px-6">
          <h2 className="text-3xl sm:text-4xl font-semibold text-blue-600 text-center mb-3">
            Featured Courses
          </h2>
          <p className="text-gray-600 text-center mt-4 mb-8">
            Offering a diverse range of cutting-edge courses designed to equip students with in-demand skills and hands-on experience across various industries.
          </p>
          
          {/* Course Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6 px-4 sm:px-6 lg:px-8">
            {courses.map((course, index) => (
              <CourseCard
                key={index}
                image={course.image}
                title={course.title}
                description={course.description}
              />
            ))}
          </div>

          {/* Explore More Button */}
          <div className="text-center mt-8">
            <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 px-10 text-lg font-semibold rounded-md shadow-md transform transition-all duration-300 ease-in-out hover:scale-105">
              Explore More
            </button>
          </div>
        </section>
      </div>
    </>
  );
};

export default FeaturedCourses;
