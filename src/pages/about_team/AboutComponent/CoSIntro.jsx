import React from "react";

const IntroCoS = () => {
  return (
    <section className="p-6 lg:p-12 justify-center flex items-center">
      <div className="w-[100%] text-justify flex justify-evenly overflow-hidden lg:flex">
        {/* Left Column: Image */}
        <div className="w-[25%]">
        <div className="lg:w-full">
          <img
            src="src/assets/images/SwatiAtre.png" // Replace with the actual image URL
            alt="COS"
            className="object-cover rounded-lg shadow-lg"
          />
        </div>
          </div>


        {/* Right Column: Content */}
        <div className="lg:w-[55%]">
          {/* Section Title */}
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-800 uppercase mb-4">
                CHAIR OF THE SCHOOL
          </h2>
          {/* Message Content */}
          <p className="text-gray-700 mb-2">
            <h3 className="text-xl font-semibold text-blue-700">
              Ms. Swati Atre
            </h3>
            <p className="text-base text-gray-600">COS, Techno Park School of CS & IT</p>
          </p>
          <p className="text-gray-700 mb-4 text-justify leading-relaxed">
          Ms. Swati Atre serves as the esteemed Chair of the School of Computer Science and Technology at Dr. C.V. Raman University. She holds a Master's degree in Computer Applications (MCA) and brings 12 years of rich academic and professional experience to her role. In addition to her responsibilities as the Head of Department, Ms. Atre is the University Quality Assurance Coordinator (UQAC), further showcasing her commitment to academic excellence and institutional growth.
          </p>
          <p className="text-gray-700 mb-4 text-justify leading-relaxed">
          Her core expertise lies in Programming Languages and Web Technology, areas where she has made significant contributions through teaching and research. Ms. Atre's exceptional dedication has been recognized with numerous prestigious awards, including: Young Researcher Award 2023, Best Academic Professional Award 2023, Jyestha Acharya Award 2023-2024. Under her leadership, the department thrives as a hub of innovation and knowledge, fostering academic growth and excellence for both students and faculty.
          </p>
        </div>
      </div>
    </section>
  );
};

export default IntroCoS;
