import React from 'react';

const teamMembers = [
  { name: "Ms. Swati Atre", title: "Chair of the School", imageUrl: "https://cvrump.ac.in/Images/School/School%20Staff/ITCS/SwatiAtre.png" },
  { name: "Ms. Vaidehi Bakshi", title: "Assistant Professor", imageUrl: "https://cvrump.ac.in/Images/School/School%20Staff/ITCS/Vaidehi.png" },
  { name: "Ms. Shruti Sriwas", title: "Assistant Professor", imageUrl: "https://cvrump.ac.in/Images/School/School%20Staff/ITCS/Shruti.png" },
  { name: "Mr. Amit Sawanni", title: "Assistant Professor", imageUrl: "https://cvrump.ac.in/Images/School/School%20Staff/ITCS/Amit.png" },
  { name: "Mr. Kunal Mishra", title: "Network Administrator", imageUrl: "https://cvrump.ac.in/Images/School/School%20Staff/ITCS/Kunal.png" },
  { name: "Mr. Gourav Soni", title: "Research Assistant", imageUrl: "https://cvrump.ac.in/Images/School/School%20Staff/ITCS/Gourav.png" },
  { name: "Mr. Ganesh Nimje", title: "Research Assistant", imageUrl: "https://cvrump.ac.in/Images/School/School%20Staff/ITCS/Ganesh_Nimje.jpeg" },
];

function Our_Team() {
  return (
<div className="min-h-screen bg-white pb-16 pt-7 px-6">
  <h2 className="text-3xl sm:text-4xl font-semibold text-blue-600 text-center mb-24">Our Team</h2>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 max-w-7xl mx-auto">
    {teamMembers.map((member, index) => (
    
      <div
        key={index+member.name}
        className="group border-2 w-[250px] h-[280px] relative mb-20 flex flex-col items-center text-center bg-white shadow-xl rounded-3xl p-8 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:bg-gray-50"
      >
        {/* Unique Shape for Image */}
        <div className="relative -mt-24 w-40 h-40 flex items-center justify-center rounded-full overflow-hidden group">
          {/* Gradient Border */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-r  from-blue-500 via-teal-500 to-green-500 p-0.5 transition-transform duration-1000 group-hover:scale-105">
            {/* <div className="w-full h-full bg-white rounded-full"></div> */}
          </div>
          
          {/* Image Element */}
          <img
            src={member.imageUrl}
            alt={member.name}
            className="absolute inset-0 w-full h-full object-cover rounded-full border-4 group-hover:border-[3px] border-white group-hover:border-transparent"
          />
        </div>

        {/* Card Content */}
        <div className="flex flex-col items-center mt-6 space-y-3">
          <h3 className="text-xl font-bold text-gray-800 group-hover:text-blue-700 transition-colors duration-300">
            {member.name}
          </h3>
          <p className="text-gray-500 text-sm">{member.title}</p>
        </div>
        {/* Decorative Line */}
        <div className="w-10 h-1 mt-5 bg-blue-400 rounded-md mx-auto mb-4 group-hover:w-16 group-hover:bg-gradient-to-r from-blue-500 via-teal-500 to-green-500 group-hover:rounded-md transition-all duration-300"></div>
      </div>
    ))}
  </div>
</div>


  );
}

export default Our_Team;
