import React from "react";
import Course3 from '../../../assets/images/BCA.jpeg';
import Course1 from '../../../assets/images/DCA.jpg';
import Course2 from '../../../assets/images/PGDCA.png';
import Course4 from '../../../assets/images/mca stu lab.jpeg';

const CourseCard = ({ image, title, description }) => {
  return (
    <div className="w-full sm:w-[90%] lg:w-72 xl:w-80 h-[45vh] sm:h-[50vh] md:h-[55vh] xl:max-h-[55vh] bg-white  text-gray-800 border transform transition-transform shadow-md duration-400 hover:shadow-lg border-gray-200 rounded-lg">
  {/* Image */}
  <img
    src={image}
    alt={title}
    className="rounded-t-lg w-full h-32 sm:h-36 md:h-40 xl:h-48 object-cover"
  />
  
  {/* Content */}
  <div className="px-3 sm:px-4 py-3 sm:py-4 relative z-30">
    <h2 className="text-md sm:text-lg xl:text-xl font-semibold transition-all duration-500 group-hover:text-[#012970] mb-2">
      {title}
    </h2>
    <p className="mt-2 text-xs sm:text-sm xl:text-base group-hover:text-gray-500 line-clamp-3 text-gray-600">
      {description}
    </p>
  </div>
  
  {/* Hover Effect Background */}
  <div className="bg-[#365071] w-full h-32 sm:h-36 md:h-40 xl:h-48 absolute bottom-0 left-0 scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-[700ms] ease-in-out rounded-b-lg"></div>
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
      `,
    },
    {
      image: Course2,
      title: 'PGDCA (Post Graduate Diploma in Computer Applications)',
      description: `
        PGDCA Full Form is a Post Graduate Diploma in Computer Application. PGDCA is a 1-year postgraduate course that focuses on computer applications. 
        The eligibility criteria are graduation in any discipline. The course has an annual intake of 60 students and a total enrollment of 180. 
        Evaluation methods include Class Tests.
      `,
    },
    {
      image: Course3,
      title: 'BCA (Bachelor of Computer Applications)',
      description: `
        BCA is an undergraduate degree programme in the field of computer application and information technology. 
        The course spans 3 years, with eligibility criteria of 12th Pass with any stream. It has an annual intake of 60 students and a total enrollment of 148. 
        Evaluation methods include Mid-Semester Test (MST), End-Semester Test (PUT), Project Presentations, Internships, and Problem-solving Activities.
      `,
    },
    {
      image: Course4,
      title: 'MCA (Master of Computer Applications)',
      description: `
        MCA (Master of Computer Applications) is a master’s level course focusing on computer applications and software development. 
        The duration is 2 years, with eligibility criteria of graduation with at least 50% marks (45% for reserved categories), ideally with math at 10+2 or graduation level. 
        The annual intake is 60 students, and the total enrollment is 14. 
        Evaluation methods include Mid-Semester Test (MST), End-Semester Test (PUT), Project Presentations, Internships, and Problem-solving Activities.
      `,
    },
  ];

  return (
    <>
      <div className="flex justify-center">
        <section className="bg-white rounded-xl items-center flex flex-col w-[98%] pt-8 px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-blue-600 text-center mb-3">
            Featured Courses
          </h2>
          <p className="text-gray-600 text-sm sm:text-base md:text-lg text-center mt-4 mb-8">
            Offering a diverse range of cutting-edge courses designed to equip students with in-demand skills and hands-on experience across various industries.
          </p>

          {/* Course Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 px-4 sm:px-6 md:px-8">
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
            <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 px-8 sm:px-10 text-base md:text-lg font-semibold rounded-md shadow-md transform transition-all duration-300 ease-in-out hover:scale-105">
              Explore More
            </button>
          </div>
        </section>
      </div>
    </>
  );
};

export default FeaturedCourses;
