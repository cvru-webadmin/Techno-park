import React from 'react'
import Award from '../../../assets/acsilentes award.png';


export default function Header({scroll}) {
  return (
    <header className="bg-gradient-to-r pt-24 from-blue-900 to-blue-700 py-16">
  <div className="xl:max-w-[90rem] mx-auto px-6 md:max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
    {/* Left Section: Heading and Description */}
    <div className="text-white sm:space-y-6 space-y-3">
  <h1 className="xl:text-5xl text-2xl text-nowrap text-center lg:text-left md:text-4xl font-extrabold leading-tight">
    Celebrating Excellence
  </h1>
  <p className="md:text-lg md:text-center lg:text-left leading-relaxed">
    Recognizing the achievements and milestones of our university's exceptional 
    departments and individuals. A tradition of honoring those who inspire and excel.
  </p>
  <p className="md:text-sm text-xs md:text-center lg:text-left text-gray-200 leading-snug">
    From academic breakthroughs to groundbreaking innovations, explore the stories 
    behind the awards that shape our community and inspire future generations.
  </p>
  <div className='md:flex w-full lg:justify-start justify-center'>
  <button onClick={scroll} className="mt-4 px-6 py-3 bg-yellow-500 w-full sm:w-auto hover:bg-yellow-600 text-blue-900 font-bold rounded-lg shadow-lg transition duration-300">
    Explore Achievements
  </button>
  </div>
</div>

{/* Right Section: Image */}
<div className="flex justify-center">
  <div className="relative w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl">
    <img
      src={Award}
      alt="Department Excellence"
      className="w-full h-auto rounded-lg shadow-lg"
    />
    <div className="absolute bottom-4 left-4 bg-white bg-opacity-90 px-4 py-2 rounded-lg">
      <p className="text-xs sm:text-sm md:text-base font-semibold text-blue-900">
        Celebrating 6+ Excellence Awards
      </p>
    </div>
  </div>
</div>

  </div>
</header>


  )
}
