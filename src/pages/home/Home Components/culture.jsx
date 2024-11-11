import React from 'react';

const CultureAndActivities = () => {
  return (
    <section className="flex flex-col items-center bg-white py-12 px-4 sm:px-8 lg:px-16">
      <div className="max-w-[93%] w-full text-center">
        {/* Main Heading */}
        <h2 className="text-3xl sm:text-4xl font-semibold text-blue-600 mb-6">
          Culture & Activities
        </h2>
        <p className="text-gray-600 mb-8 ">
          Explore the vibrant culture and engaging activities that bring our community together, fostering creativity, innovation, and unity.
        </p>
      </div>

      {/* Events Gallery */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 max-w-[97%] mb-10">
        <div className='h-[420px] space-y-5 hover:shadow-2xl hover:translate-y-3 group hover:space-y-0 hover:border transition-all duration-300 transform hover:rounded-md'>
          <img src="src/assets/cvru_campus.jpg" alt="" className='h-1/2 w-full' />
          <div className='px-6 py-2.5 border h-1/2 w-full group-hover:border-none'>
          <h3 className='text-lg font-semibold'>Annual Cultural Fest</h3>
          <p className='text-gray-600 text-sm'>A grand celebration that brings together a vibrant showcase of diverse talents, captivating music, dynamic dance routines, and unforgettable performances, highlighting the creativity and spirit of students from every corner of the campus.</p>
          </div>
        </div>
        <div className='h-[420px] space-y-5 hover:shadow-2xl hover:translate-y-3 group hover:space-y-0 hover:border transition-all duration-300 transform hover:rounded-md'>
        <div className='px-6 py-2.5 h-1/2 border group-hover:border-none w-full'>
          <h3 className='text-lg font-semibold '>Annual Cultural Fest</h3>
          <p className='text-gray-600 text-sm'>A grand celebration that brings together a vibrant showcase of diverse talents, captivating music, dynamic dance routines, and unforgettable performances, highlighting the creativity and spirit of students from every corner of the campus.</p>
          </div>
          <img src="src/assets/cvru_campus.jpg" alt="" className='h-1/2 w-full' />
        </div>
        <div className='h-[420px] space-y-5 hover:shadow-2xl hover:translate-y-3 group hover:space-y-0 hover:border transition-all duration-300 transform hover:rounded-md'>
          <img src="src/assets/cvru_campus.jpg" alt="" className='h-1/2 w-full' />
          <div className='px-6 py-2.5 h-1/2 border w-full'>
          <h3 className='text-lg font-semibold'>Annual Cultural Fest</h3>
          <p className='text-gray-600 text-sm'>A grand celebration that brings together a vibrant showcase of diverse talents, captivating music, dynamic dance routines, and unforgettable performances, highlighting the creativity and spirit of students from every corner of the campus.</p>
          </div>
        </div>
      <div className='h-[420px] space-y-5 hover:shadow-2xl hover:translate-y-3 group hover:space-y-0 hover:border transition-all duration-300 transform hover:rounded-md'>
        <div className='px-6 py-2.5 h-1/2 border group-hover:border-none w-full'>
          <h3 className='text-lg font-semibold'>Annual Cultural Fest</h3>
          <p className='text-gray-600 text-sm'>A grand celebration that brings together a vibrant showcase of diverse talents, captivating music, dynamic dance routines, and unforgettable performances, highlighting the creativity and spirit of students from every corner of the campus.</p>
          </div>
          <img src="src/assets/cvru_campus.jpg" alt="" className='h-1/2 w-full' />
        </div>
        </div>
      {/* Add More Events Button */}
      <div className="mt-5 text-center">
        <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 px-10 text-lg font-semibold rounded-md shadow-md transform transition duration-300 hover:scale-105">
          Explore More
        </button>
      </div>
    </section>
  );
};

export default CultureAndActivities;
