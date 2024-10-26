import React from 'react';
import Course1 from '../../../assets/Course1.jpeg'
import Course2 from '../../../assets/Course2.jpg'
import Course3 from '../../../assets/Course3.jpg'
import Course4 from '../../../assets/Course4.png'
import Course5 from '../../../assets/Course5.webp'
import Course6 from '../../../assets/Course6.webp'
const CourseCard = ({ image, title, description }) => {
    return (
        <div className="bg-gray-800 w-full text-white flex flex-col sm:flex-row items-center rounded-lg shadow-lg p-4 sm:p-6 transition-transform transform hover:scale-105">
            <img 
                src={image} 
                alt={title} 
                className="w-full sm:w-1/3 h-auto object-scale-down rounded-none rounded-l-lg" 
            />
            <div className="sm:ml-6 mt-4 sm:mt-0 text-center sm:text-left">
                <h3 className="text-lg font-bold mb-2">{title}</h3>
                <p className="text-sm text-gray-300">{description}</p>
            </div>
        </div>
    );
};

const FeaturedCourses = () => {
    const courses = [
        {
            image: Course1,
            title: 'BCA(Bachelor of Computer Applications)',
            description: 'BCA is an undergraduate degree programme in the field of computer application and information techno...',
        },
        {
            image: Course2,
            title: 'DCA(Diploma in Computer Application)',
            description: 'DCA or Diploma in Computer Applications, is a 1-year diploma course in the field of Computer Applications that involves the study of numerous computer applications...',
        },
        {
            image: Course3,
            title: 'PGDCA(Post Graduate Diploma in Computer Applications)',
            description: 'PGDCA Full Form is a Post Graduate Diploma in Computer Application. PGDCA is a 1-year postgraduate course that focuses computer applications...',
        },
        {
            image: Course4,
            title: 'MCA(Master of Computer Applications)',
            description: 'MCA (Master of Computer Applications) is a master’s level course focusing on computer applications and software development...',
        },
        {
            image: Course5,
            title: 'BSc IT(Bachelor of Science in Information Technology)',
            description: 'BSc IT stands for Bachelor of Science in Information Technology. BSc Information Technology is an undergraduate science course of 3 years dealing with software...',
        },
        {
            image: Course6,
            title: 'MSc IT(Master of Science in Information Technology)',
            description: 'Master of Science in information technology IT is a 2 years long post-graduate level master degree program. MSc IT aims to provide theoretical as well as practical knowledge...',
        },
    ];

    return (
        <div className='flex justify-center'> 
        <section className="bg-gray-900 border rounded-xl shadow-md mt-4 w-[98%] py-10 px-6">
            <h2 className="text-3xl sm:text-4xl font-semibold text-white text-center mb-3">Featured Courses</h2>
            <p className='text-base text-gray-300 sm:ml-6 mt-4 sm:mt-0 text-center mb-8'>Offering a diverse range of cutting-edge courses designed to equip students with in-demand skills and hands-on experience across various industries.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {courses.map((course, index) => (
                    <CourseCard
                        key={index}
                        image={course.image}
                        title={course.title}
                        description={course.description}
                    />
                ))}
            </div>
            <div className="text-center mt-10">
                <button className="bg-white text-gray-900 py-3 px-10 text-lg rounded-full hover:bg-gray-300 transition">
                    Explore More
                </button>
            </div>
        </section>
        </div>
    );
};

export default FeaturedCourses;

