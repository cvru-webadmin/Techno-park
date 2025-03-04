import React from "react";

// Student Activity Data
const studentActivities = [
  {
    title: "Skitt Play on Social Media",
    description:
      "A skit play on social media creatively depicts its impact on daily life, blending humor and serious moments to highlight both the positive and negative aspects. It encourages mindful usage through engaging storytelling.",
    videoUrl: "https://www.youtube.com/embed/NYtjcM3dnkg",
  },
  {
    title: "Explaining Binary Search by Play",
    description:
      "Students and teachers demonstrate binary search through an interactive game, visualizing how halving the search space makes finding a number efficient. This hands-on activity fosters teamwork and problem-solving.",
    videoUrl: "https://www.youtube.com/embed/NYtjcM3dnkg",
  },
  {
    title: "Documentary on Climate Change",
    description:
      "Students created an impactful documentary exploring climate change, its causes, effects, and solutions. Through visuals and expert insights, they inspire action toward sustainability and environmental conservation.",
    videoUrl: "https://www.youtube.com/embed/QSqtXi-rkbY",
  },
  {
    title: "Skitt Play on Save Environment",
    description:
      "A powerful skit on saving the environment highlights issues like pollution and deforestation while emphasizing small everyday actions that can help protect the planet. This engaging performance leaves a lasting message.",
    videoUrl: "https://www.youtube.com/embed/QSqtXi-rkbY",
  },
];

const StudentActivityHighlights = () => {
  return (
    <section id="activities" className="bg-white py-16 px-6 lg:px-20">
      {/* Section Title */}
      <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">
        🎥 Student Activity Highlights
      </h2>

      {/* Video Showcase Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-10">
        {studentActivities.map((activity, index) => (
          <div
            key={index}
            className="bg-gray-50 p-6 rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 transform hover:-translate-y-2 border border-gray-200"
          >
            {/* Video Title */}
            <h3 className="text-2xl font-semibold text-gray-900 mb-2">
              {activity.title}
            </h3>

            {/* Video Description */}
            <p className="text-gray-700 mb-4">{activity.description}</p>

            {/* Embedded Video */}
            <div className="relative">
              <iframe
                className="w-full h-64 rounded-lg shadow-md"
                src={activity.videoUrl}
                title={activity.title}
                allowFullScreen
              ></iframe>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StudentActivityHighlights;
