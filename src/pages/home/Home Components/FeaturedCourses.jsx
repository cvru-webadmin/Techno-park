import React from "react";
import Course3 from '../../../assets/images/BCA.jpeg';
import Course1 from '../../../assets/images/DCA.jpg';
import Course2 from '../../../assets/images/PGDCA.png';
import Course4 from '../../../assets/images/mca stu lab.jpeg';

const CourseCard = ({ image, title, description }) => {
  return (
    <div className="w-full sm:w-80 h-[52vh] bg-white group text-gray-800 border transform transition-transform shadow-md duration-400 hover:shadow-lg border-gray-200 rounded-lg">
      <img src={image} alt={title} className="rounded-t-lg w-full h-48 object-cover" />
      <div className="px-4 py-4 relative z-30">
        <h2 className="text-xl font-semibold transition-all duration-500 group-hover:text-white mb-2">{title}</h2>
        <p className="mt-2 text-sm group-hover:text-slate-300 line-clamp-3 text-gray-500">{description}</p>
      </div>
      <div
    className="bg-[#365071] w-full h-48 absolute bottom-0 left-0 scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-[700ms] ease-in-out rounded-b-lg">
   </div>
  </div>
  );
};

const FeaturedCourses = () => {
  const courses = [ 
    {
      image: Course1,
      title: 'DCA (Diploma in Computer Application)',
      description: `
        DCA or Diploma in Computer Applications, is a 1-year diploma course in the field of Computer Applications that involves the study of numerous computer applications. 
        This course has a duration of 1 year, with eligibility criteria of 12th Pass with any stream. The annual intake is 60 students, with a total enrollment of 180. 
        Evaluation methods include Class Tests.
      `
    },
    {
      image: Course2,
      title: 'PGDCA (Post Graduate Diploma in Computer Applications)',
      description: `
        PGDCA Full Form is a Post Graduate Diploma in Computer Application. PGDCA is a 1-year postgraduate course that focuses on computer applications. 
        The eligibility criteria are graduation in any discipline. The course has an annual intake of 60 students and a total enrollment of 180. 
        Evaluation methods include Class Tests.
      `
    },
    {
      image: Course3,
      title: 'BCA (Bachelor of Computer Applications)',
      description: `
        BCA is an undergraduate degree programme in the field of computer application and information technology. 
        The course spans 3 years, with eligibility criteria of 12th Pass with any stream. It has an annual intake of 60 students and a total enrollment of 148. 
        Evaluation methods include Mid-Semester Test (MST), End-Semester Test (PUT), Project Presentations, Internships, and Problem-solving Activities.
      `
    },
    {
      image: Course4,
      title: 'MCA (Master of Computer Applications)',
      description: `
        MCA (Master of Computer Applications) is a master’s level course focusing on computer applications and software development. 
        The duration is 2 years, with eligibility criteria of graduation with at least 50% marks (45% for reserved categories), ideally with math at 10+2 or graduation level. 
        The annual intake is 60 students, and the total enrollment is 14. 
        Evaluation methods include Mid-Semester Test (MST), End-Semester Test (PUT), Project Presentations, Internships, and Problem-solving Activities.
      `
    }
  ];

  return (
    <>
      <div className="flex justify-center">
        <section className="bg-white rounded-xl items-center flex flex-col w-[98%] pt-8 px-6">
          <h2 className="text-3xl sm:text-4xl font-semibold text-blue-600 text-center mb-3">
            Featured Courses
          </h2>
          <p className="text-gray-600 text-center mt-4 mb-8">
            Offering a diverse range of cutting-edge courses designed to equip students with in-demand skills and hands-on experience across various industries.
          </p>
          
          {/* Course Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 px-4 gap-9 sm:px-6 lg:px-8">
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
