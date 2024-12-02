import React from "react";
import Header from "./componet/Header";
import Trophies from "./componet/Trophies";
import departmet_excel from "../../assets/Trophies/Department excellence.jpg"
import best_perfomnce from "../../assets/Trophies/bestPerfomace.jpg"
import best_perfomnce2 from "../../assets/Trophies/Best perfoming.jpg"
import acadmicAward from "../../assets/Trophies/Acadmic professonal.jpg"
import InovationAward from "../../assets/Trophies/inovation2.jpg"

const AchievementsPage = () => {
  const departments = [
    { name: "Computer Science", description: "Excellence in Research and AI", image: "https://via.placeholder.com/150" },
    { name: "Mechanical Engineering", description: "Best Innovation in Robotics", image: "https://via.placeholder.com/150" },
    { name: "Biotechnology", description: "Top Academic Achievement", image: "https://via.placeholder.com/150" },
    { name: "Business Administration", description: "Leadership and Strategy Award", image: "https://via.placeholder.com/150" },
  ];

  const trophies = [
    { title: "National Excellence Trophy", year: 2023, image: departmet_excel },
    { title: "Best University Award", year: 2022, image: best_perfomnce },
    { title: "Sports Championship Trophy", year: 2021, image: best_perfomnce2 },
    { title: "Innovation in Teaching Award", year: 2020, image: acadmicAward },
    { title: "Innovation in Teaching Award", year: 2020, image: InovationAward },
  ];

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Header Section */}
      <Header />
       {/* Trophies  */}
       <Trophies trophies={trophies} />
      {/* Categories Section */}
      <section className="py-10">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-gray-800">Excellent Departments</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-6">
            {departments.map((dept, index) => (
              <div
                key={index}
                className="bg-white shadow-lg rounded-lg p-4 text-center hover:shadow-2xl transition-shadow duration-300"
              >
                <img
                  src={dept.image}
                  alt={dept.name}
                  className="w-full h-32 object-cover rounded-t-lg"
                />
                <h3 className="mt-4 text-lg font-semibold text-blue-800">{dept.name}</h3>
                <p className="text-gray-600 mt-2">{dept.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      
    </div>
  );
};

export default AchievementsPage;
