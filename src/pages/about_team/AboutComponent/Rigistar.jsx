import React from "react";
import "./About.css";
import Registrarsir from "../../../assets/images/RigistarSir.png";

const Registrar = () => {
  return (
    <>
      {/* nav and header  */}
      <nav className="h-16 bg-gray-900 text-white shadow-lg"></nav>
      <section className="p-6 lg:p-12 justify-center flex items-center">
        <div className="w-[100%] text-justify flex justify-evenly flex-col lg:flex-row overflow-hidden">
          {/* Section Title */}
          <h2 className="about-title lg:hidden text-left font-semibold">
            Registrar's Message
          </h2>
          {/* Image Container */}
          <div className="relative lg:h-[520px] h-[400px] overflow-hidden rounded-lg shadow-lg group">
            <img
              src={Registrarsir}
              alt="Registrar Sir"
              className="object-cover object-top h-full w-full lg:w-[450px] transition-transform duration-300 group-hover:scale-105"
            />
            {/* Overlay Effect */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-300"></div>
            {/* Image Label */}
            <div className="absolute bottom-4 left-4 bg-white bg-opacity-90 px-4 py-2 rounded-lg shadow-md">
              <span className="text-gray-800 font-semibold text-lg">
              Mr. Ravi chaturvedi
              </span>
              <p className="text-sm text-gray-600">Registrar</p>
            </div>
          </div>

          {/* Right Column: Content */}
          <div className="lg:w-[55%] py-1">
            {/* Section Title */}
            <h2 className="about-title lg:block hidden font-semibold">
              Registrar's Message
            </h2>
            {/* Message Content */}
            <p className="text-gray-700 lg:mt-0 mt-5 mb-2">
              <h3 className="text-2xl font-semibold text-blue-700">
                Mr. Ravi chaturvedi
              </h3>
              <p className="about-description">
                Registrar, Dr. CV Raman University (Khandwa)
              </p>
            </p>
            <p className="text-gray-700 mb-4 text-justify leading-relaxed">
              Dear Students, Parents, and Guardians, one of the critical
              decisions for any parent, guardian, or student is to choose the
              right college, institute, or university for higher education. The
              decision often depends on senior secondary scores, entrance exam
              results, and ranks obtained, often ignoring the student’s future
              career goals. Many students fall prey to a rat race, influenced by
              lucrative advertisements, fee discounts, and false promises made
              by institutions.
            </p>
            <p className="text-gray-700 mb-4 text-justify leading-relaxed">
              Dr. C. V. Raman University, Khandwa, stands apart by inviting
              genuine students, especially from rural areas, to experience
              quality education across various disciplines, excluding
              conventional medical and engineering degrees. The university
              complies with NEP 2020, emphasizing vocationalization,
              entrepreneurship development, incubation, and mentoring as its key
              strategies.
            </p>
            <p className="text-gray-700 mb-4 text-justify leading-relaxed">
              CVRUK provides an outstanding learning environment with
              experienced academic professionals, global experts, Professors of
              Practice, visiting and adjunct faculties, and researchers.
              Industry professionals bridge the gap between academic principles
              and real-world practices. CVRUK goes the extra mile to offer
              library facilities, live laboratories, field exposures,
              internships, and apprenticeship-based learning. Vocational and
              skill-based education forms the foundation for students'
              holistic development.
            </p>
            <p className="text-gray-700 mb-4 text-justify leading-relaxed">
              The university offers sports facilities, NCC, NSS, student clubs,
              innovation cells, cultural activities, and memberships in
              professional bodies to enrich campus life. Government-sponsored
              scholarships, other recognitions, and facilities ease the
              financial burden of education. Training, placement, and alumni
              associations further prepare students for a promising future.
            </p>
            <p className="text-gray-700 mb-4 text-justify leading-relaxed">
              At CVRUK, we nurture future-ready professionals in the hinterlands
              of the nation. Join us in building the nation during this "Amrut
              Kal."
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Registrar;
