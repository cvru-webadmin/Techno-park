import './About.css';
import Chancellorsir from "../../../assets/images/vedant.png";

// import VedantImage from '../../../assets/images/vedant.png';

export default function Vedant() {
  return (
    <>
      {/* nav and header  */}
      <nav className="h-16 bg-gray-900 text-white shadow-lg"></nav>
      <section className="p-6 pb-0 lg:p-12 lg:pb-4 justify-center flex items-center">
        <div className="w-[100%] text-justify flex justify-evenly flex-col lg:flex-row overflow-hidden">
          {/* Section Title */}
          <h2 className="about-title lg:hidden text-left font-semibold">
            Vedant Ahluwalia Profile
          </h2>
          {/* Image Container */}
          <div className="relative lg:h-[520px] h-[400px] overflow-hidden rounded-lg shadow-lg group">
            <img
              src={Chancellorsir}
              alt="Vedant Ahluwalia"
              className="object-cover object-top md:hidden lg:block block h-full w-full lg:w-[450px] transition-transform duration-300 group-hover:scale-105"
            />
            {/* Overlay Effect */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-300"></div>
            {/* Image Label */}
            <div className="absolute bottom-4 left-4 bg-white bg-opacity-90 px-4 py-2 rounded-lg shadow-md">
              <span className="text-gray-800 font-semibold text-lg">
                Vedant Ahluwalia
              </span>
              <p className="text-sm text-gray-600">Founder Profile - Dataviv Technologies</p>
            </div>
          </div>

          {/* Right Column: Content */}
          <div className="lg:w-[55%] mt-6 lg:mt-0 text-gray-700 space-y-6">
            
            {/* Section Title for Large Screens */}
            <h2 className="about-title lg:block hidden font-semibold">
              Vedant Ahluwalia
            </h2>

            {/* Profile Details */}
            <div className="space-y-6">
              
              {/* Education & AI Expertise */}
              <div>
                <h3 className="text-2xl font-semibold text-blue-700">
                  Education & AI Expertise
                </h3>
                <p>
                  Vedant Ahluwalia is a distinguished AI researcher and innovator who earned his MS in Artificial Intelligence from Stanford University. With a deep specialization in Artificial Intelligence Brain Technology, he has contributed to groundbreaking research under the mentorship of world-renowned AI pioneers. His work includes direct collaborations with the creator of Google’s AI Brain, the inventor of self-driving cars, and esteemed professors at the Stanford AI Lab.
                </p>
              </div>

              {/* Professional Experience */}
              <div>
                <h3 className="text-2xl font-semibold text-blue-700">
                  Professional Experience
                </h3>
                <p>
                  Throughout his career, Vedant has played an integral role in the growth of major billion-dollar ventures. His early contributions to the EdTech giant Coursera and fintech innovator Earnin helped shape these industries. His expertise in AI and technology also extended to strategic advisory roles at the White House, where he supported critical technological initiatives. Additionally, he has shared his knowledge by co-teaching AI courses alongside NASA professors at Stanford University.
                </p>
                <p>
                  Beyond academia and corporate ventures, Vedant has been an influential figure in venture capital and early-stage investment. As Vice President at Stanford Angels, he was instrumental in funding and mentoring high-potential startups, including Unacademy and Tread (later acquired by Tata). He has also contributed to the UNDP Social Impact Venture Fund and held key positions at Siemens Financial Services and BlackRock Assets.
                </p>
              </div>
            </div>
          </div>
          
        </div>
        
      </section>
      <section className='lg:px-24 px-5 text-gray-700 text-justify pb-10'>
       {/* Leadership & Contributions */}
       <div className='pb-5'>
                <h3 className="text-2xl font-semibold text-blue-700">
                  Leadership & Contributions
                </h3>
                <p>
                  Vedant Ahluwalia has been at the forefront of AI innovation, making significant contributions to major industries such as healthcare, pharmaceuticals, education, media, real estate, and e-commerce. His visionary leadership has been instrumental in integrating AI-driven solutions into these domains, shaping the future of technology in various sectors.
                </p>
                <p>
                  As the Managing Director of Dataviv Technologies, he leads a global team dedicated to pioneering advancements in AI. His work has garnered recognition for its impact, particularly in delivering research-level AI solutions to large institutions and governments worldwide.
                </p>
              </div>

              {/* Global Reach & Influence */}
              <div className='pb-5'>
                <h3 className="text-2xl font-semibold text-blue-700">
                  Global Reach & Influence
                </h3>
                <p>
                  Vedant’s expertise and contributions extend across multiple continents, establishing his influence on a global scale. He has actively collaborated with over 32 corporations, 16 non-profits, 15 universities, 56 startups, and 9 government institutions. His extensive work spans key regions, including the USA, Canada, India, Singapore, Dubai, Germany, Australia, and beyond. Through these collaborations, he continues to drive AI innovation, investment, and educational transformation worldwide.
                </p>
              </div>

              {/* Career & Research Achievements */}
              <div className='pb-5'>
                <h3 className="md:text-2xl text-xl text-nowrap font-semibold text-blue-700">
                  Career & Research Achievements
                </h3>
                <p>
                  A leader in both academic and financial sectors, Vedant has held prestigious positions such as Chair of the Judicial Council, Partner at Kudla Fund, and Portfolio Manager at Blyth Fund. His entrepreneurial mindset led to the founding of Divvy Up, a startup that secured funding from NEA’s $1.3 billion investment fund.
                </p>
                <p>
                  His research collaborations with Henry Kautz, Director of AI at NSF, USA, have contributed to groundbreaking advancements in AI applications. He has also played a significant role in the Education Committee for Future Skills under the Government of Andhra Pradesh, shaping policy frameworks for AI and emerging technologies.
                </p>
              </div>

              {/* Additional Contributions */}
              <div className='pb-5'>
                <h3 className="text-2xl font-semibold text-blue-700">
                  Additional Contributions
                </h3>
                <p>
                  With a passion for research and development, Vedant has worked closely with top-tier investment firms such as the $40 billion Tudor Investment Corporation, developing quantitative investment strategies. His expertise in AI-driven analytics has made a significant impact on financial modeling and predictive systems.
                </p>
                <p>
                  In addition to his corporate and academic contributions, Vedant remains committed to fostering AI innovation through mentorship, investment, and leadership roles at Stanford University and beyond. His unwavering dedication to technology and education continues to shape the future of AI on a global scale.
                </p>
              </div>
              </section>
    </>
  );
}
