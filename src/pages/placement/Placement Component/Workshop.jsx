import React from 'react'
import Workshop1 from '../../../assets/images/Workshop1.png'
import Workshop2 from '../../../assets/images/Workshop2.png'

export default function Workshop() {
  return (
    <div className='bg-white py-10 lg:flex flex-col'>
    <div className="text-center mb-4 lg:mb-12">
          <h2 className="lg:text-4xl md:text-3xl text-2xl font-bold text-gray-800">
          Initiatives by Training & Placement Cell
          </h2>
    </div>
    <div className="w-[100%] mx-auto flex flex-col lg:flex-row items-center lg:gap-10 gap-5 px-6 lg:px-20">
        {/* Left Side: Content */}
        <div className="text-center lg:text-left lg:w-[35%] w-full flex flex-col justify-center h-auto lg:h-[25rem]">
          <p className="text-base lg:text-lg text-justify text-gray-600">
          Training and Placement Cell conduct different activities to foster startup ecosystem and innovation at higher educational institutions on with association of IIC CVRU.<br></br><br></br>
          The purpose of ‘National Start up Day’ celebration is to create awareness about Startups among students and inspire them to initiate their own Start Up. The aim of Startup Day Celebration is to foster Start up ecosystem among students and let them know about government Plans and Schemes to encourage students.
          </p>
        </div>
          {/* Right Side: Image or SVG */}
          <div className='flex md:flex-row flex-col lg:w-[65%] w-full md:gap-8 gap-5'>
          <div className="flex-shrink-0 w-full lg:w-[50%] md:w-[48%]">
          <img
            src={Workshop1}
            alt="Workshop1"
            className="w-full object-cover rounded-lg lg:h-96 h-60 lg:max-w-lg"
          />
        </div>
        <div className="flex-shrink-0 w-full lg:w-[50%] md:w-[48%]">
          <img
            src={Workshop2}
            alt="Workshop2"
            className="w-full object-cover rounded-lg lg:h-96 h-60 lg:max-w-lg"
          />
        </div>
        </div>
      </div>
    </div>
  )
}
