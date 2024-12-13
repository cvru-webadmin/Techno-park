import React, { useRef } from "react";
import Header from "./archivment componet/Header";
import Trophies from "./archivment componet/Trophies";
import departmet_excel from "../../assets/Trophies/Department excellence.jpg"
import best_perfomnce from "../../assets/Trophies/bestPerfomace.jpg"
import best_perfomnce2 from "../../assets/Trophies/Best perfoming.jpg"
import acadmicAward from "../../assets/Trophies/Acadmic professonal.jpg"
import InovationAward from "../../assets/Trophies/inovation2.jpg"
import InovationAward1 from "../../assets/Trophies/BestIdea1.jpg"
import TeachersAchievements from "./archivment componet/TeachersAchievements";
import StudentAchievements from "./archivment componet/student";
import ExcellenceAwards from "./archivment componet/ExcellenceAwards";
// import InovationAward1 from "./../assets/Trophies/BestIdea1.jpg"


// student archivment image import 
import solor from "./../../assets/Student archivment/solar2.jpg"
import merit from "./../../assets/Student archivment/merit.jpg"
import Inovation from "./../../assets/Student archivment/Inovation.jpg"
import Inovation2 from "./../../assets/Student archivment/Inovation2.jpg"
import hackathon from "./../../assets/Student archivment/hackathon.jpg"
import shooting from "./../../assets/Student archivment/shothing.png"
import HackCraft1 from "./../../assets/Student archivment/Hackcraft1.jpg"
import HackCraft2 from "./../../assets/images/hackathon.jpg"
import LogoDesign1 from "./../../assets/Student archivment/LogoDesign1.jpg"
import LogoDesign2 from "./../../assets/Student archivment/LogoDesign2.jpg"
import Ideapresent1 from "./../../assets/Student archivment/IdeaPresent1.jpg"
import MathExivition3 from "./../../assets/Student archivment/Math3.jpg"
import MathExivition from "./../../assets/Student archivment/GeetMaths.jpg"
import Debt1 from "./../../assets/Student archivment/Debet 1.jpg"
import Aditya from "./../../assets/Student archivment/Aditya.jpg"


//techers archivment image import
import facultAward from "./../../assets/FacultyAward.jpg"
import AcharyaAward from "./../../assets/Acharya award.jpg"
import KunalCyber from "../../assets/Techers Archivment/Cyber Security Certificate.png"
import KunalAqua from "../../assets/Techers Archivment/AQUA ASPIRE'24.png"
import KunalExcilance from "../../assets/Techers Archivment/image.png"
import AiPaper from "../../assets/Techers Archivment/AiPaper.png"


const AchievementsPage = () => {

  const trophies = [
    { title: "University Department Excellence Award", year: 2024, image: departmet_excel },
    { title: "Department Excellence Award", year: 2023, image: best_perfomnce },
    { title: "Department Excellence Award", year: 2022, image: best_perfomnce2 },
    { title: "Raman Best Academic Professional Award", year: 2023, image: acadmicAward },
    { title: "Innovative Idea Presentation (I prize)", year: 2024, image: InovationAward1 },
    { title: "Innovative Idea Presentation (II prize)", year: 2024, image: InovationAward },
  ];

  const achievements = [
    {
      name: "Ms. Swati Atre",
      title: "Raman Best Academic Professional Award",
      description: "Recognized for outstanding contributions to educational innovation, this award celebrates the impact of creative solutions in enhancing learning experiences and advancing education.",
      year: 2023,
      image: facultAward,
    },
    {
      name: "Ms. Swati Atre",
      title: "Jyestha Acharya Award",
      description: "Awarded for groundbreaking research in machine learning, this recognition highlights exceptional contributions to the field, advancing the understanding and application of AI tech.",
      year: 2022,
      image: AcharyaAward,
    },
    {
      name: "Prof. Swati Atre",
      title: "Bharat Education Excellence Awards (Jyeshtha Acharya Award of recognition)",
      description: "Received from BRAIN O VISION for significant contributions in education, this recognition acknowledges dedication to advancing teaching methods and fostering innovation.",
      year: 2023-24,
      image: "", // Empty string for image path
    },
    {
      name: "Prof. Swati Atre",
      title: "Vanmali Certificate of Recognition",
      description: "Awarded by CVRUK for excellence in research and innovation, this recognition highlights groundbreaking work and the commitment to advancing knowledge in the field.",
      year: "2023-09-05",
      image: "", // Empty string for image path
    },
    {
      name: "Prof. Swati Atre",
      title: "Certificate of Commendation (For Research & Innovation)",
      description: "Recognized by CVRUK for exceptional research and innovative contributions, this award celebrates efforts in advancing knowledge and shaping new possibilities.",
      year: "2023-09-05",
      image: "", // Empty string for image path
    },
    {
      name: "Prof. Swati Atre",
      title: "Certificate of Recognition (Reviewer for INSC International Publishing Platform)",
      description: "Recognized by INSC for her contributions as a reviewer for CS & IT publications, highlighting her expertise and commitment to advancing research.",
      year: "2023-24",
      image: "", // Empty string for image path
    },
      {
        name: "Mr. Kunal Mishra",
        title: "Bhartiya Gyan Parampara (Certificate of Appreciation)",
        description: "Awarded for excellence in academics and contributions to the department, recognizing both academic achievement and departmental growth.",
        year: "2024-12-09",
        image: KunalExcilance  // Empty string for image path
      },
      {
        name: "Mr. Kunal Mishra",
        title: "ACU ASPIRE'24 (Certificate of Appreciation)",
        description: "Awarded for significant contribution to the event ACU ASPIRE'24, this recognition celebrates dedication and effort in making the event a success.",
        year: "2024-12-09",
        image: KunalAqua  // Empty string for image path
      },
      {
        name: "Mr. Kunal Mishra",
        title: "Cyber Security Certificate",
        description: "Completed training session in Cyber Security under AISECT's initiative, gaining valuable skills to enhance expertise in safeguarding digital environments.",
        year: "2024-08-09",
        image: KunalCyber  // Empty string for image path
      },
      {
        name: "Ms. Swati Atre",
        patentNumber: "202321087483",
        title: "Blockchain-based secure data management system for Internet of Things (IoT) Devices",
        dateOfFiling: "2023-12-21",
        status: "Published",
        image: "",
        description: "This patent presents a secure data management system leveraging blockchain technology for enhancing data integrity and security in IoT devices."
      },
      {
        name: "Ms. Swati Atre",
        patentNumber: "202221069879",
        title: "A novel method for preparing data for processing by artificial intelligence and machine learning systems",
        dateOfFiling: "2022-12-04",
        status: "Published",
        image: "",
        description: "This patent introduces an innovative method to preprocess data effectively for AI and ML systems, improving the accuracy and efficiency of computations."
      },
      {
        name: "Ms. Vaidehi Bakshi",
        patentNumber: "6303338",
        title: "Biogas Leakage Detecting Device",
        dateOfFiling: "2023-08-13",
        dateOfGrant: "2023-08-25",
        status: "Granted",
        image: "",
        description: "This patent describes a device designed to detect and mitigate biogas leakage, ensuring safety and environmental protection in biogas systems."
      },
        {
          name: "Ms. Swati Atre",
          title: "Published in World Journal of Engineering",
          description: "Ms. Swati Atre published research on using convolution neural networks for COVID-19 prediction through X-ray images in the World Journal of Engineering (2022, ISSN 1708-5284).",
          year: "2022",
          image: ""
        },
        {
          name: "Ms. Swati Atre",
          title: "Published in International Conference IEEE",
          description: "Ms. Swati Atre published a paper on leveraging blockchain for credit card data privacy at the International Conference IEEE (2022, ISSN 54933-117).",
          year: "2022",
          image: ""
        },
        {
          name: "Ms. Swati Atre",
          title: "Published in IRJMETS",
          description: "Ms. Swati Atre published research on using blockchain technology to improve transparency, traceability, and efficiency in agriculture in IRJMETS (2023, ISSN 2582-5208).",
          year: "2023",
          image: ""
        },
        {
          name: "Ms. Swati Atre",
          title: "Published in JETIR",
          description: "Ms. Swati Atre published a paper on data mining techniques for detecting network intrusions in JETIR (2023, ISSN 2349-5162), contributing valuable insights to the field of cybersecurity.",
          year: "2023",
          image: ""
        },
        {
          name: "Ms. Vaidehi Bakshi",
          title: "Published in IJAEM",
          description: "Ms. Vaidehi Bakshi co-authored a paper on machine learning approaches for stock market prediction, published in IJAEM (2023, ISSN 23198-8753).",
          year: "2023",
          image: ""
        },
        {
          name: "Mr. Amit Sawanni",
          title: "Published in IJAEM",
          description: "Mr. Amit Sawanni co-authored a paper on machine learning approaches for stock market prediction, published in IJAEM (2023, ISSN 23198-8753).",
          year: "2023",
          image: ""
        },
        {
          name: "Ms. Vaidehi Bakshi",
          title: "Published in IJRESM",
          description: "Ms. Vaidehi Bakshi published a paper on detecting DIO suppression attacks in RPL and IoT networks in IJRESM (2023, ISSN 2455-9679), research in network security and IoT protection.",
          year: "2023",
          image: ""
        },
        {
          name: "Ms. Vaidehi Bakshi",
          title: "Published in ICSSR",
          description: "Ms. Vaidehi Bakshi published a paper on innovative teaching methods for vocational education to improve skill development and employability, published in ICSSR (2024).",
          year: "2024",
          image: ""
        },
        {
          name: "Mr. Amit Sawanni",
          title: "Published in IJETAE",
          description: "Mr. Amit Sawanni published research on an efficient multipath routing technique using directed acyclic graphs in IJETAE (2015, ISSN 2250-2459).",
          year: "2015",
          image: ""
        }, 
        {
          name: "Ms. Shruti Sriwas",
          title: "Impact of Artificial Intelligence on Human Society",
          description: "This paper reviews AI's impact on society, highlighting its contributions and concerns about its effects on human rights and consciousness.",
          author: "Ms. Shruti Sriwas",
          institution: "Dr. C.V. Raman University, Khandwa (M.P), India",
          contact: "shrutisriwascvru@gmail.com",
          abstract: "The paper explores how artificial intelligence influences human society, from AI-assisted surgeries and mental health applications to its role in factories and transportation. It also discusses concerns over AI's impact on human rights and the debate around artificial consciousness. The conclusion suggests AI is both a potential boon and a risk for humanity, depending on how it is utilized.",
          keywords: ["Artificial Intelligence", "human intelligence", "human emotion", "human communication", "Natural Language Processing", "Knowledge Base System"],
          year: "2023",
          image:AiPaper
        },
            
  ];

  const Studentachievements = [
    {
      name: "Solar Model",
      title: "Solar Mobile Charging Station",
      description:
        "A solar mobile charging station is a portable, eco-friendly solution with photovoltaic panels, a battery storage system, and multiple outlets for charging devices like smartphones, tablets, and laptops, offering a sustainable alternative to traditional charging methods.",
      year: 2023,
      image: solor, // Update with the correct image path
    },
    {
      name: "Innovative Idea",
      title: "Digital Water Footprint Calculator",
      description:
        "Our students won second prize for their innovative digital water footprinting concept, using IoT and AI to optimize water use in farming and promote sustainability. This achievement reflects their creativity and commitment to environmental conservation.",
      year: 2023,
      image: Inovation, // Update with the correct image path
    },    
    {
      name: "Innovative Idea",
      title: "Herbal Gallery",
      description:
        "Our students won 1st prize for their Herbal Gallery project, showcasing the medicinal benefits of herbal plants and promoting wellness through engaging visuals. Their creativity highlighted the importance of herbal medicine and sustainable living.",
      year: 2023,
      image: Inovation2, // Update with the correct image path
    },       
    {
      name: "National Shooting",
      title: "Selected for Pre-National Shooting Competition",
      description:
        "Aksha Siddiqui, an NCC cadet, showcased exceptional performance in the 50-meter rifle shooting event and earned a silver medal. She has been selected for the Pre-National Shooting Competition, bringing pride to the region.",
      year: 2024,
      image:shooting,
    },
    {
      name: "Hackcraft Event",
      title: "1st Rank in Idea Presentation Challenge",
      description:
        "Rishabh Sharma secured first place in the Hackcraft Idea Presentation Challenge, showcasing innovation, problem-solving, and impactful solutions. His achievement highlights his talent and inspires aspiring innovators.",
      year: 2024,
      image:Ideapresent1,
    },
    {
      name: "Hackcraft Event",
      title: "1st Rank in Webpage Design Challenge",
      description:
        "Yogesh Yadav won first place in the Hackcraft Webpage Design Challenge, impressing judges with his creative, user-friendly, and functional design, showcasing his expertise in web development and setting a high standard for innovation.",
      year: 2024,
      image:HackCraft1,
    },
    {
      name: "Hackcraft Event",
      title: "1st Rank in Logo Design Challenge",
      description:
        "Aditya Pratap Singh won first prize in the Hackcraft Logo Design Challenge, showcasing creativity and skill in branding with a unique and impactful design, setting a high standard for visual communication and inspiring future designers.",
      year: 2024,
      image:LogoDesign1,
    },
    {
      name: "Hackcraft Event",
      title: "2nd Rank in Logo Design Challenge",
      description:
        "Geetansh Jain won second prize in the Hackcraft Logo Design Challenge, demonstrating creativity and skill in impactful branding, with a design that effectively captured the brand’s essence and stood out for its originality.",
      year: 2024,
      image:LogoDesign2,
    },
    {
      name: "Shodh Shikhar",
      title: "Research Paper Presentation",
      description:
        "Mr. Mandeep Pawar presented 'Transforming Education through Digital Technologies' at RNTU (Shodh Shikhar), highlighting the integration of innovative tools in education, emphasizing their potential to revolutionize teaching and learning.",
      year: 2024,
      image:"",
    },
    {
      name: "University Topper",
      title: "BCA University Topper, June 2023",
      description:
        "Atul Bhaisare achieved the prestigious title of University Topper in BCA for June 2023, showcasing exceptional academic performance, and setting a benchmark for excellence among his peers with his hard work and dedication.",
      year: 2023,
      image: merit,
    },
    {
      name: "Sports Shooting",
      title: "Silver Medal in Inter-Group Sports Shooting Competition",
      description:
        "Aksha Siddiqui earned a silver medal in the Inter-Group Sports Shooting Competition, demonstrating her skill and dedication in sports, and reflecting her commitment to excellence and focus in competitive shooting, inspiring others to pursue their passions.",
      year: 2024,
      image:shooting,
    },
    {
      name: "Hackcraft Event",
      title: "2nd Rank in Webpage Design Challenge",
      description:
        "Deepanshu Dashore earned second place in the Webpage Design Challenge at the Hackcraft event, showcasing his design acumen. His innovative approach to layout and user experience impressed the judges, highlighting his potential in web design.",
      year: 2024,
      image:HackCraft2,
    },
    {
      name: "Research Paper",
      title: "AI & Marketing",
      description:
        "Ms. Payal Jagtap and Ms. Prachi Parwani presented their research paper 'AI & Marketing' at RNTU, exploring the integration of AI in market strategies, and highlighting its potential to revolutionize the marketing landscape with data-driven insights.",
      year: 2024,
      image:"",
    },
    {
      name: "Professional Program",
      title: "Participation in Professional Advancement Program (Course III)",
      description:
        "Students from BCA and MCA actively participated in the Professional Advancement Program (Course III), gaining industry-relevant skills and knowledge, and preparing themselves for future career success in the tech industry.",
      year: 2024,
      image:"",
    },
    {
      name: "Hackcraft Event",
      title: "Participation in Web Designing Challenge",
      description:
        "Khushi Yadav participated in the Web Designing Challenge during the Hackcraft event, demonstrating her creativity and technical skills in crafting innovative and user-friendly web designs. Her efforts were recognized with a certificate of participation.",
      year: 2024,
      image: "", // No image provided
    },
    {
      name: "IPR Seminar",
      title: "Participation in IPR Seminar",
      description:
        "Deepnashu dashore participated in the IPR Seminar, gaining valuable insights into intellectual property rights and their role in fostering innovation and protecting creative works. Her active involvement was recognized with a certificate of participation.",
      year: 2024,
      image: "", // No image provided
    },    
    {
      name: "IPR Seminar",
      title: "Participation in IPR Seminar",
      description:
        "Shivam dubey participated in the IPR Seminar, gaining valuable insights into intellectual property rights and their role in fostering innovation and protecting creative works. Her active involvement was recognized with a certificate of participation.",
      year: 2024,
      image: "", // No image provided
    },    
    {
      name: "IPR Seminar",
      title: "Participation in IPR Seminar",
      description:
        "Geetensh Jain participated in the IPR Seminar, gaining valuable insights into intellectual property rights and their role in fostering innovation and protecting creative works. Her active involvement was recognized with a certificate of participation.",
      year: 2024,
      image: "", // No image provided
    },    
    {
      name: "IPR Seminar",
      title: "Participation in IPR Seminar",
      description:
        "Khushi Yadav participated in the IPR Seminar, gaining valuable insights into intellectual property rights and their role in fostering innovation and protecting creative works. Her active involvement was recognized with a certificate of participation.",
      year: 2024,
      image: "", // No image provided
    },  
    {
      name: "Maths Exhibition",
      title: "Participation in of Maths Exhibition",
      description: "Awarded for outstanding participation in the Maths Exhibition, securing a position, the recognition highlights the student's creativity in presenting mathematical concepts and dedication to academic excellence, showcasing their problem-solving abilities.",
      year: 2023,
      image: MathExivition,
    },
    {
      name: "Participation Certificate",
      title: "Certificate of participation in the Professional Advancement Program",
      description: "In recognition of your participation in the Professional Advancement Program - Course III: Taking Invention to Market and to Commerce: Role of Intellectual Property, highlighting your understanding of the link between innovation and intellectual property.",
      year: 2024,
      image: Aditya,  
    },
    {
      name: "Maths Exhibition",
      title: "Certificate of Achievement",
      description: "This certificate is presented to Rishabh Sharma for his exceptional performance in the Maths Exhibition, securing 3rd position on December 21, 2023, at Dr. C.V. Raman University, Khandwa. His dedication and skills have been recognized with this achievement.",
      year: 2023,
      image: MathExivition3  // Empty string for image path
    },
    {
      name: "Debate Competition",
      title: "Participation in Debate Competition",
      description: "Awarded for outstanding participation in the Debate Competition, securing the first position, this recognition highlights exceptional communication skills, critical thinking, and the ability to engage effectively in discussions, setting a high standard for future participants.",
      year: 2023,
      image: Debt1,
    },    
  ];

  const Sectionacroll=useRef(null);

  const gotoAchivment=()=>{
    Sectionacroll.current.scrollIntoView({ behavior: "smooth" })
  }  
  

  return (
    <div className=" min-h-screen">
      {/* Header Section */}
      <Header scroll={gotoAchivment} />
       {/* Trophies  */}
       <span ref={Sectionacroll}></span>
       <ExcellenceAwards />

       <Trophies trophies={trophies} />

       <TeachersAchievements achievements={achievements} />

       <StudentAchievements achievements={Studentachievements} />

      {/* Categories Section */}
      {/* <section className="py-10">
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
      </section> */}

      
    </div>
  );
};

export default AchievementsPage;
