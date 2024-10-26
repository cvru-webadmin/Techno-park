import React from 'react';

const CourseCard = ({ image, title, description }) => {
    return (
        <div className="bg-gray-800 text-white flex flex-col sm:flex-row items-center rounded-lg shadow-lg p-4 sm:p-6 transition-transform transform hover:scale-105">
            <img 
                src={image} 
                alt={title} 
                className="w-full sm:w-1/3 h-40 sm:h-auto object-cover rounded-lg sm:rounded-none sm:rounded-l-lg" 
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
            image: 'https://via.placeholder.com/150',
            title: 'Course Name 1',
            description: 'This is a brief description of Course 1.',
        },
        {
            image: 'https://via.placeholder.com/150',
            title: 'Course Name 2',
            description: 'This is a brief description of Course 2.',
        },
        {
            image: 'https://via.placeholder.com/150',
            title: 'Course Name 3',
            description: 'This is a brief description of Course 3.',
        },
        {
            image: 'https://via.placeholder.com/150',
            title: 'Course Name 4',
            description: 'This is a brief description of Course 4.',
        },
    ];

    return (
        <section className="bg-gray-900 py-10 px-6">
            <h2 className="text-2xl sm:text-3xl font-semibold text-green-950 text-center mb-8">Featured Courses</h2>
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
                <button className="bg-white text-gray-900 py-2 px-6 rounded-full hover:bg-gray-300 transition">
                    Explore More
                </button>
            </div>
        </section>
    );
};

export default FeaturedCourses;

