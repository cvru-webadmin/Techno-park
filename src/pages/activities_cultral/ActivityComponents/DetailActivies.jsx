import React from "react";

const DetailActivities = () => {
  const activities = [
    {
      id: 1,
      name: "Skitt play on social media",
      description:
        "A skitt play on social media can creatively depict its impact on everyday life, blending humor and serious moments to deliver an engaging message. The story might follow a group of friends navigating different aspects of social media, such as seeking validation through likes, falling into the trap of misinformation, or dealing with cyberbullying. Alongside these challenges, the skit can also show positive aspects, like staying connected with loved ones, learning new skills, or spreading awareness for social causes. By portraying relatable scenarios, exaggerated behaviors, and thought-provoking outcomes, the play can encourage the audience to reflect on their own social media habits and promote mindful usage.",
      image: "src/assets/images/Skitt.png",
    },
    {
      id: 2,
      name: "Teacher's Day Celebration",
      description:
        "On Teacher's Day, we, come together to honor and appreciate the immense contributions of our teachers in shaping our futures. This special occasion is celebrated with enthusiasm and gratitude. The day includes heartfelt speeches, cultural performances, and fun activities planned by the students to make our teachers feel valued. We also organize games and interactive sessions to create a joyful atmosphere. To express our respect, we present handmade cards and tokens of appreciation to our teachers. This celebration reflects our deep gratitude and strengthens the bond between students and mentors, making it a memorable event for all.",
      image: "src/assets/images/TeachersDay.jpeg",
    },
    {
      id: 3,
      name: "Hackathon Challenge",
      description:
        "A Hackathon is an event where individuals, often in teams, come together to collaborate intensively on software or hardware projects within a set time frame, typically ranging from a few hours to several days. The primary goal is to solve a specific problem or create innovative solutions, often using coding, design, and engineering skills. Participants work on various challenges such as building apps, developing websites, or designing prototypes, with the aim of producing a working product or prototype by the end of the event. Hackathons encourage creativity, teamwork, and problem-solving, and they often include presentations or demos of the projects to a panel of judges.",
      image: "src/assets/images/hackathon.jpg",
    },
  ];

  return (
    <div className="w-[90%] mx-auto p-6 mt-12">
      {/* <h2 className="text-3xl font-bold text-center mb-10">
        Our Amenities & How It Looks Like
      </h2> */}
      <div className="space-y-16">
        {activities.map((activity, index) => (
          <div
            key={activity.id}
            className={`flex flex-col ${
              index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
            } items-center gap-20`}
          >
            {/* Image Section */}
            <div className="w-full relative overflow-hidden lg:w-1/2">
              <img
                src={activity.image}
                alt={activity.name}
                className="shadow-md transform transition duration-300 hover:scale-105 w-full h-[400px] object-cover"
              />
            </div>

            {/* Text Section */}
            <div className="w-full lg:w-1/2 text-center lg:text-left">
              <h3 className="text-[2rem] text-[#2c3e50] capitalize mb-2">{activity.name}</h3>
              <p className="text-[#555] text-justify text-[1.1rem] leading-relaxed">{activity.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DetailActivities;
