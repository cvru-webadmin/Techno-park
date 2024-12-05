import React from 'react';
import Front from '../../assets/images/IOT.png'

const IOT = () => {
  return (
    <>
      <div
        className="relative bg-cover w-full bg-center h-[50dvh] text-white"
        style={{ backgroundImage:`url(src/assets/images/IMG20241005123411.jpg)` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="absolute top-20 left-[450px] flex flex-col sm:mt-40 mt-28 text-left">
          <h1 className="md:text-5xl font-bold text-3xl w-full">IOT(INTERNET OF THINGS)</h1>
        </div>
      </div>

      {/* Main Content */}
      <main className="container mx-auto py-12">
        {/* Section 1 */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-left">
            What is the Internet of Things (IoT)?
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed text-justify mx-auto">
            The Internet of Things (IoT) refers to the network of physical
            devices embedded with sensors, software, and other technologies
            that enable them to connect and exchange data with other devices
            and systems over the internet. These connected devices collect and
            share data, allowing us to monitor and control objects remotely.
          </p>
        </section>
        <h2 className="text-4xl font-bold flex text-blue-600 mb-6 text-left">
        <svg xmlns="http://www.w3.org/2000/svg" className='mr-4 mt-0.5 text-blue-600' width="35" height="35" viewBox="0 0 24 24"><path fill="currentColor" d="M5 13v9H3v-9Zm18 0v2h-2v7h-2v-7h-2v-2Zm-11-2a7.54 7.54 0 0 1 3.96 1.149l1.447-1.45A9.5 9.5 0 0 0 12 9a9.36 9.36 0 0 0-5.333 1.68l1.449 1.453A7.36 7.36 0 0 1 12 11"/><path fill="currentColor" d="M12 7a11.5 11.5 0 0 1 6.834 2.27l1.427-1.43A13.48 13.48 0 0 0 12 5a13.33 13.33 0 0 0-8.186 2.822l1.426 1.43A11.34 11.34 0 0 1 12 7"/><path fill="currentColor" d="M12 3a15.47 15.47 0 0 1 9.687 3.41l1.427-1.429A17.43 17.43 0 0 0 .96 4.964l1.427 1.429A15.33 15.33 0 0 1 12 3m0 10a4.5 4.5 0 1 0 4.5 4.5A4.5 4.5 0 0 0 12 13m0 7a2.5 2.5 0 1 1 2.5-2.5A2.5 2.5 0 0 1 12 20"/></svg>
            IoT Projects
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
              'https://i.ibb.co/tctMn8V/IMG20240622112011.jpg',
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
              'https://i.ibb.co/b7qkx87/Picsart-24-06-22-11-41-25-718.jpg',
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
              'https://i.ibb.co/P6pvNgk/IMG20240622111241.jpg',
          },
        ].map((project, index) => (
          <section
            key={index}
            className="grid grid-cols-1 md:grid-cols-2 gap-28 items-center mb-16 bg-white rounded-lg"
          >
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                {project.title}
              </h3>
              <p className="lg:text-base text-base md:text-xl text-gray-600 text-justify">
                {project.description}
              </p>
              <ul className="list-disc mt-4 lg:text-base text-base ml-4 md:text-xl text-gray-600 text-justify">
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
              className="w-full h-80 object-cover rounded-lg shadow-md transition-transform duration-300 hover:scale-105"
            />
          </section>
        ))}
      </main>
      </>
  );
};

export default IOT;