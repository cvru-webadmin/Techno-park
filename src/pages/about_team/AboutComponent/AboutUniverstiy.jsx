import React from "react";
import "./About.css"; // Link to external CSS for professional styling

const AboutUniversity = () => {
  const handleRedirect = () => {
    window.open("https://www.cvrump.ac.in", "_blank"); // Replace with your university's main website URL
  };

  return (
    <section className="about-university">
      <div className="container">
        <div className="about-content">
          <div className="about-image">
            <img
              src="src/assets/cvru_campus.jpg" // Replace with the actual image path
              alt="Dr. C.V. Raman University Campus"
              className="university-image"
            />
          </div>
          <div className="about-text">
            <h2 className="about-title">About Dr. C.V. Raman University</h2>
            <p className="about-description">
              Dr. C.V. Raman University (Khandwa), the fifth under the AISECT Group of Universities, is located in Madhya Pradesh's Nimar region. 
              The university offers exceptional infrastructure, skilled faculty, and industry-focused education, blending academic knowledge with 
              practical skills. Through its AISECT-NSDC partnership, it provides NSDC-certified courses, enhancing employability, while its online 
              placement platform, <strong>Rojgar Mantra</strong>, connects students to top employers.
            </p>
            <p className="about-description">
              CVRU Khandwa focuses on holistic development, offering modern facilities, comprehensive programs, and opportunities for students 
              to excel academically and professionally. The university is committed to empowering the region's youth with quality education and 
              skill development.
            </p>
            <button className="redirect-button" onClick={handleRedirect}>
              Visit Main University Website
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUniversity;
