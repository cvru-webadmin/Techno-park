import React from "react";
import "./About.css";
import ViceChancellorimg from "../../../assets/images/ViceChancellor.jpg"; // Update the image path as needed

const ViceChancellor = () => {
  return (
    <>
      {/* nav and header  */}
      <nav className="h-16 bg-gray-900 text-white shadow-lg"> </nav>
      <section className="p-6 pb-0 lg:p-12 lg:pb-4 justify-center flex items-center ">
        <div className="w-[100%] text-justify flex justify-evenly flex-col lg:flex-row overflow-hidden">
          {/* Section Title */}
          <h2 className="about-title lg:hidden text-left font-semibold">
            Vice Chancellor's Message
          </h2>
          {/* Image Container */}
          <div className="relative lg:h-[520px] h-[400px] overflow-hidden rounded-lg shadow-lg group">
            <img
              src={ViceChancellorimg} // Replace with the actual image URL
              alt="Vice Chancellor"
              className="object-cover object-top h-full w-full lg:w-[450px] transition-transform duration-300 group-hover:scale-105"
            />
            {/* Overlay Effect */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-300"></div>
            {/* Image Label */}
            <div className="absolute bottom-4 left-4 bg-white bg-opacity-90 px-4 py-2 rounded-lg shadow-md">
              <span className="text-gray-800 font-semibold text-lg">
              Dr. Arun Joshi
              </span>
              <p className="text-sm text-gray-600">Vice Chancellor</p>
            </div>
          </div>

          {/* Right Column: Content */}
          <div className="lg:w-[55%] py-1">
            {/* Section Title */}
            <h2 className="about-title lg:block hidden font-semibold">
              Vice Chancellor's Message
            </h2>
            {/* Message Content */}
            <p className="text-gray-700 lg:mt-0 mt-5 mb-2">
              <h3 className="text-2xl font-semibold text-blue-700">
              Dr. Arun Joshi
              </h3>
              <p className="about-description">
                Vice Chancellor, Dr. CV Raman University (Khandwa)
              </p>
            </p>
            <p className="text-gray-700 mb-4 text-justify leading-relaxed">
              The institutions of higher learning must evolve a new paradigm
              wherein the principles and practice combine to shape the learning
              of the students. CVRU, Khandwa has engaged with global-level
              experts and recognizes their professional acumen, long-standing
              experience, and evolved expertise in fields such as Circular
              Economy and Waste Management, Small Ruminant Based Livelihoods for
              Women, Marginal and Poor Farmers, Decentralized Planning and Water
              Governance, Climate Change and Mitigation Strategies, and more.
            </p>
            <p className="text-gray-700 mb-4 text-justify leading-relaxed">
              Dr. CV Raman University, Khandwa is a multidisciplinary university
              in its true sense, with 11 schools of study, covering disciplines
              like Management Science, Information Technology, Computer Science,
              Science, Humanities, and Liberal Arts, along with Agriculture
              Science, Food Science and Technology, Dairy Science and
              Technology, Home Science, and Digital Learning.
            </p>
            <p className="text-gray-700 lg:hidden block mb-4 text-justify leading-relaxed">
              The university’s student profile over the past four years
              highlights its acceptance among youth aspiring for high-quality
              education at an affordable cost. CVRU Khandwa aspires to be the
              dream destination for students, providing not just a university
              education but also entrepreneurship opportunities, preparing the
              youth to become professional farmers or job creators, and
              contributing to the digital revolution or the preservation of art,
              literature, and culture.
            </p>
            <p className="text-gray-700 text-justify lg:block hidden leading-relaxed">
              The university’s student profile over the past four years
              highlights its acceptance among youth aspiring for high-quality
              education at an affordable cost. CVRU Khandwa aspires to be the
            </p>
          </div>
        </div>
      </section>
      <div className="lg:max-w-7xl px-6 lg:px-0 mx-auto lg:mb-10">
      <p className="text-gray-700 lg:mb-4 lg:block hidden text-justify leading-relaxed">
      dream destination for students, providing not just a university
              education but also entrepreneurship opportunities, preparing the
              youth to become professional farmers or job creators, and
              contributing to the digital revolution or the preservation of art,
              literature, and culture.
            </p>
            <p className="text-gray-700 mb-4 text-justify leading-relaxed">
              CVRU, Khandwa offers a range of hands-on experiences, including
              internships, apprenticeships, on-the-job training, and real-life
              incubation opportunities. With over 40 Memorandum of
              Understandings (MoUs) and 21 Centers of Excellence on campus, it
              provides a holistic learning experience.
            </p>
            <p className="text-gray-700 mb-4 text-justify leading-relaxed">
              CVRU, Khandwa is committed to the Atmnirbhar Bharat initiative,
              supporting Samarth Bharat Abhiyan, and encouraging youth from
              rural areas to join the mainstream of national development,
              contributing to India’s growth in all dimensions.
            </p>
       </div>
    </>
  );
};

export default ViceChancellor;
