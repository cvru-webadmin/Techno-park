const chatbotContext = {
  schoolInfo: {
    name: "Techno Park School of Computer Science and Information Technology",
    affiliation: "CVRUK",
    certification: "ISO 9001:2015 certified",
    introduction: {
      purpose: "To lead the development and application of innovative computing technologies, contributing to the advancement of IT solutions that can address both local and global challenges.",
      objective: "To create a cutting-edge learning environment that fosters excellence in computing technology, ensuring that students are well-prepared for the rapidly evolving tech industry."
    },
    vision: "To be a leading institution in the field of computing technology, shaping future leaders who will drive innovation and advancements in IT, making technology more accessible and impactful for society.",
    mission: "To provide high-quality education in computing technology, focusing on a blend of theoretical knowledge and hands-on experience. Our mission is to equip students with the necessary skills in programming, problem-solving, and ethical practices, empowering them to contribute meaningfully to the tech industry and society."
  },
  programsOffered_FeaturedCourses: {
    BCA: {
      name: "Bachelor of Computer Applications (BCA)",
      duration: "3 Years",
      eligibility: "12th Pass with any stream",
      annualIntake: 60,
      totalEnrollment: 148,
    },
    PGDCA: {
      name: "Post Graduate Diploma in Computer Applications (PGDCA)",
      duration: "1 Year",
      eligibility: "Any Graduate",
      annualIntake: 60,
      totalEnrollment: 180,
    },
    DCA: {
      name: "Diploma in Computer Applications (DCA)",
      duration: "1 Year",
      eligibility: "12th Pass with any stream",
      annualIntake: 60,
      totalEnrollment: 180,
    },
    BScIT: {
      name: "B.Sc. in IT",
      duration: "3 Years",
      eligibility: "12th Pass with Mathematics",
      annualIntake: 60
    },
    MScIT: {
      name: "M.Sc. in IT",
      duration: "2 Years",
      eligibility: "B.Sc. (IT/CS/BCA), BE (CS/IT)",
      annualIntake: 30,
      totalEnrollment: 7
    },
    MCA: {
      name: "Master of Computer Applications (MCA)",
      duration: "2 Years",
      eligibility: "Graduation with at least 50% marks (45% for reserved categories), ideally with math at 10+2 or graduation level",
      annualIntake: 60,
      totalEnrollment: 14,
    }
  },
  educationalApproach: {
    values: [
      "Programs emphasize foundational scientific and engineering principles essential to IT, which serve as the core of its skill-based curriculum.",
      "The approach empowers graduates to leverage knowledge, creativity, and technical abilities in developing future information systems.",
      "Reflecting the transformative impact of technology on modern life, the school equips students with core IT principles while fostering innovation and adaptability."
    ],
    methodology: [
      "Outcome-centric approach driven by practical, real-world applications of knowledge, research, and innovation.",
      "NEP 2020-compliant, offering flexibility in courses, CBCS, and multidisciplinary options.",
      "Access to state-of-the-art IoT labs, cybrary, digital platforms, and hands-on learning programs like Mission HAPPY and Mission Samarth Bharat."
    ],
    continuousEvaluation: {
      BCA_MSc_MCA: ["Mid-Semester Test (MST)", "End-Semester Test (PUT)", "Project Presentations", "Internships", "Problem-solving Activities"],
      PGDCA_DCA: ["Class Tests"]
    }
  },
  faculty: [
    {
      name: "Ms. Swati Atre",
      role: "Chair of the School, UQAC Coordinator",
      qualification: "MCA",
      experience: "12 Years",
      expertise: ["Programming Language", "Web Technology"],
      awards: ["Young Researcher Award 2023", "Best Academic Professional Award 2023", "Jyestha Acharya Award 2023-2024"]
    },
    {
      name: "Mr. Amit Sawanni",
      role: "Assistant Professor",
      qualification: "M.Tech (CS)",
      experience: "11 Years",
      expertise: ["Programming Language"]
    },
    {
      name: "Ms. Vaidehi Bakshi",
      role: "Assistant Professor",
      qualification: "M.Tech (CS)",
      experience: "3 Years",
      expertise: ["IoT"]
    },
    {
      name: "Ms. Shruti Sriwas",
      role: "Assistant Professor",
      qualification: "MCA",
      experience: "1 Year",
      expertise: ["Database"]
    },
    {
      name: "Mr. Ganesh Nimje",
      role: "Assistant Professor",
      qualification: "MCA",
      experience: "5 Years",
      expertise: ["Full Stack Development"]
    },
    {
      name: "Mr. Gourav Soni",
      role: "Research Associate",
      qualification: "B.Tech",
      experience: "2 Years",
      expertise: ["Digital Marketing"]
    },
    {
      name: "Mr. Kunal Mishra",
      role: "Network Administrator",
      qualification: "B.Sc (CS)",
      expertise: ["Networking"]
    }
  ],
  studentAchievements: {
    placements: [
      "Accenture - Various Roles",
      "Central Bank of India - Various Roles",
      "Post Office - Various Roles"
    ],    
    researchActivities: ["Participation in research projects, paper presentations, earning certificates."],
    competitions: ["Awards in hackathons, logo and webpage design competitions."],
    otherRecognitions: ["Certificates in workshops on IPR and Professional Advancement Program","Medals in shooting competitions"]
  },
  labs: [
    { name: "Programming Lab", capacity: 56 },
    { name: "Database Lab", capacity: 48 },
    { name: "Project Lab", capacity: 28 },
    { name: "Language Lab", capacity: 48 },
    { name: "IoT Lab", capacity: 28 }
  ],
  contactInfo: { email: "info@cvrump.ac.in", phone: "+07320-247700" },
  branding: {
    logoText: ["Techno Park", "School of Computer Science and Technology"]
  },
};

export default chatbotContext;
