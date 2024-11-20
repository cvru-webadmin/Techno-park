const chatbotContext = {
  schoolInfo: {
    name: "Techno Park School of Computer Science and Information Technology",
    affiliation: "CVRUK",
    certification: "ISO 9001:2015 certified",
    introduction: {
      purpose: "To enhance and expand the visibility of innovative computing solutions to both national and global audiences.",
      objective: "To provide a professional environment ensuring the highest standards in computing technology."
    },
    vision: "Towards ubiquitous computing technology",
    mission: "To provide access to higher educational opportunities in computing technology programs that cultivate theoretical, practical, and ethical skills, aiming to boost productivity and foster innovation in society."
  },
  programsOffered: {
    BCA: {
      name: "Bachelor of Computer Applications (BCA)",
      duration: "3 Years",
      eligibility: "12th Pass with any stream",
      annualIntake: 60,
      totalEnrollment: 148,
      evaluationMethods: ["Mid-Semester Test (MST)", "End-Semester Test (PUT)", "Project Presentations", "Internships", "Problem-solving Activities"]
    },
    PGDCA: {
      name: "Post Graduate Diploma in Computer Applications (PGDCA)",
      duration: "1 Year",
      eligibility: "Any Graduate",
      annualIntake: 60,
      totalEnrollment: 180,
      evaluationMethods: ["Class Tests"]
    },
    DCA: {
      name: "Diploma in Computer Applications (DCA)",
      duration: "1 Year",
      eligibility: "12th Pass with any stream",
      annualIntake: 60,
      totalEnrollment: 180,
      evaluationMethods: ["Class Tests"]
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
      evaluationMethods: ["Mid-Semester Test (MST)", "End-Semester Test (PUT)", "Project Presentations", "Internships", "Problem-solving Activities"]
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
      { company: "Accenture", roles: ["Various"] },
      { company: "Central Bank of India", roles: ["Various"] },
      { company: "Post Office", roles: ["Various"] }
    ],
    researchActivities: [
      "Participation in research projects, paper presentations, earning certificates."
    ],
    competitions: [
      "Awards in hackathons, logo and webpage design competitions."
    ],
    otherRecognitions: [
      "Certificates in workshops on IPR and Professional Advancement Program",
      "Medals in shooting competitions"
    ]
  },
  libraryResources: [
    { program: "MCA", titles: 20, utilization: "50%" },
    { program: "BCA", titles: 122, utilization: "49.18%" },
    { program: "PGDCA", titles: 34, utilization: "23.53%" },
    { program: "DCA", titles: 34, utilization: "26.47%" },
    { program: "M.Sc. (IT)", titles: 18 }
  ],
  labs: [
    { name: "Programming Lab", capacity: 56 },
    { name: "Database Lab", capacity: 48 },
    { name: "Project Lab", capacity: 28 },
    { name: "Language Lab", capacity: 48 },
    { name: "IoT Lab", capacity: 28 }
  ],
  meritStudents: [
    { name: "Khushi Yadav", program: "BCA II", percentage: "90.25%" },
    { name: "Ayushi Dashore", program: "BCA II", percentage: "87.87%" },
    { name: "Divya Tanwar", program: "BCA II", percentage: "85%" }
  ],
  contactInfo: {
    phone: ["+07320-247700/01", "6269001060", "6269001063", "9575916565"],
    email: "info@cvrump.ac.in",
    socialMediaIcons: "Interactive social media icons used in the footer for enhanced engagement (e.g., Font Awesome)."
  },
  branding: {
    logoText: ["Techno Park", "School of Computer Science and Technology"]
  },
};

export default chatbotContext;
