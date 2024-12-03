import React from 'react'
import Award from '../../../assets/acsilentes award.png';


export default function Header({scroll}) {
  return (
    <header className="bg-gradient-to-r pt-24 from-blue-900 to-blue-700 py-16">
  <div className="max-w-[90rem] mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
    {/* Left Section: Heading and Description */}
    <div className="text-white space-y-6">
  <h1 className="text-5xl font-extrabold leading-tight">
    Celebrating Excellence
  </h1>
  <p className="text-lg leading-relaxed">
    Recognizing the achievements and milestones of our university's exceptional 
    departments and individuals. A tradition of honoring those who inspire and excel.
  </p>
  <p className="text-sm text-gray-200 leading-snug">
    From academic breakthroughs to groundbreaking innovations, explore the stories 
    behind the awards that shape our community and inspire future generations.
  </p>
  <button onClick={scroll} className="mt-4 px-6 py-3 bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-bold rounded-lg shadow-lg transition duration-300">
    Explore Achievements
  </button>
</div>


    {/* Right Section: Image */}
    <div className="flex justify-center">
      <div className="relative">
        <img
          src={Award}
          alt="Department Excellence"
          className="rounded-lg shadow-lg"
        />
        <div className="absolute bottom-4 left-4 bg-white bg-opacity-90 px-4 py-2 rounded-lg">
          <p className="text-sm font-semibold text-blue-900">
            Celebrating 6+ Excellence Awards
          </p>
        </div>
      </div>
    </div>
  </div>
</header>


  )
}
