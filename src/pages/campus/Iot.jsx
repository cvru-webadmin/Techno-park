import React from 'react';
import GouravSirIOT from '../../assets/images/IOTGouravSir.jpg'
import SmartRoofing from '../../assets/images/SmartRoofing.jpg'
import SmartIrrigation from '../../assets/images/SmartIrrigation.jpg'
import AutoLighting from '../../assets/images/AutoLighting.jpg'

const IOT = () => {
  return (
    <>
      <div
        className="relative bg-cover w-full bg-center lg:h-[50dvh] md:h-[50dvh] h-[45dvh] text-white"
        style={{ backgroundImage:`url(${GouravSirIOT})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="absolute lg:top-60 lg:left-[450px] md:top-48 md:left-20 top-40 left-5 flex flex-col text-left">
          <h1 className="md:text-5xl font-bold text-3xl">IOT(INTERNET OF THINGS)</h1>
        </div>
      </div>

      {/* Main Content */}
      <main className="container mx-auto lg:py-12 lg:w-full w-[90%] py-6">
        {/* Section 1 */}
        <section className="lg:mb-12 mb-8">
          <h2 className="md:text-3xl text-2xl font-bold text-gray-800 mb-6 text-left">
            What is the Internet of Things (IoT)?
          </h2>
          <p className="md:text-lg text-base text-gray-600 leading-relaxed text-justify mx-auto">
            The Internet of Things (IoT) refers to the network of physical
            devices embedded with sensors, software, and other technologies
            that enable them to connect and exchange data with other devices
            and systems over the internet. These connected devices collect and
            share data, allowing us to monitor and control objects remotely.
          </p>
        </section>
        <h2 className="md:text-4xl text-3xl font-bold flex text-blue-600 text-left">
        <svg xmlns="http://www.w3.org/2000/svg" className='mr-4 md:mt-1 bg-blue-600 text-white rounded-full h-12 w-12 p-2 ' viewBox="0 0 24 24"><path fill="currentColor" d="M5 13v9H3v-9Zm18 0v2h-2v7h-2v-7h-2v-2Zm-11-2a7.54 7.54 0 0 1 3.96 1.149l1.447-1.45A9.5 9.5 0 0 0 12 9a9.36 9.36 0 0 0-5.333 1.68l1.449 1.453A7.36 7.36 0 0 1 12 11"/><path fill="currentColor" d="M12 7a11.5 11.5 0 0 1 6.834 2.27l1.427-1.43A13.48 13.48 0 0 0 12 5a13.33 13.33 0 0 0-8.186 2.822l1.426 1.43A11.34 11.34 0 0 1 12 7"/><path fill="currentColor" d="M12 3a15.47 15.47 0 0 1 9.687 3.41l1.427-1.429A17.43 17.43 0 0 0 .96 4.964l1.427 1.429A15.33 15.33 0 0 1 12 3m0 10a4.5 4.5 0 1 0 4.5 4.5A4.5 4.5 0 0 0 12 13m0 7a2.5 2.5 0 1 1 2.5-2.5A2.5 2.5 0 0 1 12 20"/></svg>
            <p className='mt-2'>IoT Projects</p>
          </h2>
        {/* Project Sections */}
        {[
          {
            title: 'Automatic Crop Protection System for Unexpected Rainfall',
            description:
              'This system utilizes rain sensors and actuators to automatically deploy protective covers over crops when unexpected rainfall is detected. This helps prevent crop damage and promotes efficient water management.',
            components: [
              'Rain Sensors',
              'Actuators (Motors for Covers)',
              'Communication Module',
            ],
            useCase:
              'Protects crops from excessive rain, minimizes losses, and optimizes water usage.',
            image:
            SmartRoofing,
          },
          {
            title: 'Smart Irrigation System',
            description:
              'This project automates irrigation based on soil moisture sensors, ensuring optimal water delivery to crops. Farmers can monitor soil conditions remotely and adjust irrigation schedules accordingly, leading to water conservation and increased crop yield.',
            components: [
              'Soil Moisture Sensors',
              'Water Valves',
              'Control Unit (Microcontroller/Computer)',
            ],
            useCase:
              'Efficient water management, improved crop health, and increased agricultural productivity.',
            image:
            SmartIrrigation,
          },
          {
            title: 'Smart Lighting System',
            description:
              'This project automates home lighting using sensors and a central hub. Users can control lights remotely, set schedules, and adjust brightness based on preferences and environmental conditions.',
            components: [
              'Microcontroller',
              'Light Sensors',
              'Internet Gateway',
              'Mobile App',
            ],
            useCase: 'Improved energy efficiency, convenience, and security.',
            image:
              AutoLighting,
          },
        ].map((project, index) => (
          <section
            key={index}
            className="grid grid-cols-1 lg:grid-cols-2 lg:gap-28 gap-10 items-center lg:mb-16 mb-10 bg-white rounded-lg"
          >
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                {project.title}
              </h3>
              <p className="lg:text-base text-base md:text-lg text-gray-600 text-justify">
                {project.description}
              </p>
              <ul className="list-disc mt-4 lg:text-base text-base ml-4 md:text-lg text-gray-600 text-justify">
                <li className='mb-4'>
                  <span className="font-semibold text-gray-800">Components:</span>{' '}
                  {project.components.join(', ')}
                </li>
                <li>
                  <span className="font-semibold text-gray-800">Use Case:</span>{' '}
                  {project.useCase}
                </li>
              </ul>
            </div>
            <img
              src={project.image}
              alt={project.title}
              className="w-full md:h-80 h-52 object-cover rounded-lg shadow-md transition-transform duration-300 hover:scale-105"
            />
          </section>
        ))}
      </main>
      </>
  );
};

export default IOT;