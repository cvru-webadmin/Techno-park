import React from "react";
import SocialSkit from "../../../assets/images/Skitt.png"
import Teachersday from "../../../assets/images/TeachersDay.jpeg"
import Hackathon from '../../../assets/images/HackcraftChallenge.jpg'
import ProjectPresentation1 from '../../../assets/images/ProjectPresentation1.jpg'
import Ahluwalia from '../../../assets/Ai-lab.jpg'
import Ganeshji from '../../../assets/images/Ganeshji.jpg'
import CM from '../../../assets/images/CM_Visit.jpg'
import NCC from '../../../assets/images/NCC.jpg'
import RepublicDay from '../../../assets/images/RepublicDay.jpeg'
import SharadPurnima from '../../../assets/images/SharadPurnima.jpg'
import LabInaugration from '../../../assets/images/LabInaugration.jpeg'
import IndoorGame from '../../../assets/images/IndoorGame.jpg'
import OutdoorGame from '../../../assets/images/OutdoorGame.jpg'
import FoodStall from '../../../assets/images/FoodStall.jpg'
import ITClub from '../../../assets/images/ITClub.jpg'
import ClimateClock from '../../../assets/images/ClimateClock.jpg'
import BinarySearch from '../../../assets/images/BinarySearch.png'
import Documentary from '../../../assets/images/Documentary.png'
import FunnySkit from '../../../assets/images/FunnySkitt.png'
import EnvironmentDay from '../../../assets/images/EnvironmentDay.png'
import SolarMobile from '../../../assets/images/SolarMobile.jpg'
import SaveEnv from '../../../assets/images/SaveEnv.png'
import GardenActivity from '../../../assets/images/DINMAMA_activete.jpg'
import Quiz from '../../../assets/images/Quiz.jpg'
import ClassPPT from '../../../assets/images/ClassPPT.jpg'
import BloodCamp from '../../../assets/images/BloodCamp.jpg'
import AbhimanyuYojna from '../../../assets/images/AbhimanyuYojna.jpg'
import WomenDay from '../../../assets/images/WomenDay.jpg'
import PosterMaking from '../../../assets/images/PosterMaking.jpg'
import Counsil from '../../../assets/images/Counsil.jpg'
import GaneshVisarjan from '../../../assets/images/GaneshVisarjan.jpg'
import Plantation from '../../../assets/images/Plantation.jpg'
import HerbalGallery from '../../../assets/images/Herbal Gallery.jpg'

const DetailActivities = () => {
  const activities = [
    {
      id: 1,
      name: "Skit play on social media",
      description:
        "A skit play on social media can creatively depict its impact on everyday life, blending humor and serious moments to deliver an engaging message. The story might follow a group of friends navigating different aspects of social media, such as seeking validation through likes, falling into the trap of misinformation, or dealing with cyberbullying. Alongside these challenges, the skit can also show positive aspects, like staying connected with loved ones, learning new skills, or spreading awareness for social causes. By portraying relatable scenarios, exaggerated behaviors, and thought-provoking outcomes, the play can encourage the audience to reflect on their own social media habits and promote mindful usage.",
      image: SocialSkit,
    },
    {
      id: 2,
      name: "Teacher's Day Celebration",
      description:
        "On Teacher's Day, we, come together to honor and appreciate the immense contributions of our teachers in shaping our futures. This special occasion is celebrated with enthusiasm and gratitude. The day includes heartfelt speeches, cultural performances, and fun activities planned by the students to make our teachers feel valued. We also organize games and interactive sessions to create a joyful atmosphere. To express our respect, we present handmade cards and tokens of appreciation to our teachers. This celebration reflects our deep gratitude and strengthens the bond between students and mentors, making it a memorable event for all.",
      image: Teachersday,
    },
    {
      id: 3,
      name: "Hackathon Challenge",
      description:
        "A Hackathon is an event where individuals, often in teams, come together to collaborate intensively on software or hardware projects within a set time frame, typically ranging from a few hours to several days. The primary goal is to solve a specific problem or create innovative solutions, often using coding, design, and engineering skills. Our School's exciting event, modeled after a hackathon, involves a range of tasks such as webpage making, logo designing, and idea presentations. All participants received certificates for their efforts, with several winning prizes for their outstanding contributions. This event not only enhances their technical skills but also fosters an environment of collaboration and achievement.",
      image: Hackathon,
    },
    {
      id: 4,
      name: "Innovative Idea Presentation",
      description:
        "Our brilliant students recently secured second place in an innovative idea presentation competition with their groundbreaking concept on digital water footprinting for agricultural products. The idea focused on leveraging digital tools and data analytics to measure and monitor the water usage of various crops, promoting sustainable farming practices. By integrating IoT sensors, satellite imagery, and AI-driven analytics, their solution aimed to optimize water consumption, minimize waste. This not only supports environmental conservation but also enhances crop yield efficiency. Their outstanding performance highlights the ingenuity and dedication nurtured in our school’s young innovators.",
      image: ProjectPresentation1,
    },
    {
      id: 5,
      name: "AI Expert Mr. Vedant Ahluwalia Visit",
      description:
        "It is a moment of immense pride and honor for our school’s students and faculty to interact with Mr. Vedant Ahluwalia, a luminary in the field of Artificial Intelligence. As the Managing Director of Dataviv Technology, Mr. Ahluwalia has made groundbreaking contributions to AI, working closely with pioneers in the field, including being associated with the Father of AI. His role as Vice President of Stanford Angels further reflects his exceptional leadership in fostering innovation and entrepreneurship. This rare opportunity to engage with such an eminent personality inspires our students to dream big, embrace cutting-edge technology, and aspire to make meaningful impacts in the world.",
      image: Ahluwalia,
    },
    {
      id: 6,
      name: "Ganesh Chaturthi Celebration",
      description:
        "Ganesh Chaturthi is one of the most cherished celebrations at our university, observed annually with great enthusiasm and joy. The festivities begin with the grand installation of Lord Ganesha's idol, accompanied by vibrant decorations and collective efforts of students and staff. The campus comes alive with devotional songs, cultural performances, and interactive events, fostering togetherness. Everyone participates in daily aartis and eco-friendly practices, highlighting the festival’s spiritual and environmental significance. The celebration culminates with a joyous visarjan procession, leaving unforgettable memories and strengthening bonds within our university community.",
      image: Ganeshji,
    },
    {
      id: 7,
      name: "Delivering a speech in front of the Honorable Chief Minister",
      description:
        "Delivering a speech in front of the Honorable Chief Minister of Madhya Pradesh, Mr. Mohan Yadav, is a cherished opportunity for our school students. This prestigious platform allows them to showcase their confidence and eloquence while reflecting the quality of education they receive. Standing before such a distinguished audience is an inspiring experience that motivates students to aim higher. This unique occasion highlights the achievements of our young talents, marking a proud milestone for the school and leaving a lasting impression on all present.",
      image: CM,
    },
    {
      id: 8,
      name: "NCC Activity",
      description:
        "Our university offers a proud opportunity for students to be a part of the National Cadet Corps (NCC), a prestigious organization that instills discipline, leadership, and a sense of service to the nation. Many students from our Techno Park School have taken advantage of this opportunity and are now active NCC cadets. Through their participation, they engage in various activities such as parades, camps, and community service, which help in building their physical fitness, team spirit, and leadership qualities. The involvement of our students in NCC reflects the values of dedication and patriotism, creating future leaders who are well-rounded, disciplined, and committed to serving society.",
      image: NCC,
    },
    {
      id: 9,
      name: "Republic Day Celebration",
      description:
        "The Republic Day celebration at our university begins with a proud parade by the NCC cadets, followed by the hoisting of the national flag and the singing of the national anthem. A cultural program featuring dance, music, and drama showcases India’s rich heritage. The event also includes various performances by students that highlight the diversity and unity of the nation. The celebration concludes with inspiring speeches by our esteemed guests, including the Vice Chancellor and the Registrar, who highlight the importance of unity, progress, and national pride. This event not only fosters patriotism but also deepens respect for the values of the Indian Constitution and encourages a sense of collective responsibility.",
      image: RepublicDay,
    },
    {
      id: 10,
      name: "Sharad Purnima Celebration",
      description:
        "The Sharad Purnima celebration at our university is a beautiful and spiritual event that brings together the entire community in a moment of reverence. The celebration begins with the lighting of lamps and diyas, creating a serene and vibrant atmosphere that symbolizes the victory of light over darkness. Following this, we sing the Saraswati Vandana, a traditional hymn dedicated to the Goddess Saraswati, seeking her blessings for wisdom, knowledge, and creativity. Prayers are offered with hopes for good health and educational success, fostering a sense of devotion and gratitude within the university community, and reinforcing our commitment to learning and well-being.",
      image: SharadPurnima,
    },
    {
      id: 11,
      name: "New Lab Inauguration",
      description:
        "The inauguration of our new computer lab was a moment of great pride and excitement for our school. We are extremely thankful to our Chancellor, Registrar, Vice Chancellor, and Pro Vice Chancellor for providing us with such a state-of-the-art facility. The lab is equipped with specialized areas such as a programming lab, language lab, database lab, IoT lab, and a project lab, catering to a wide range of academic needs. Additionally, it includes a server room and a faculty cabin, ensuring a comfortable and efficient environment for both students and faculty. Everyone in the school community is thrilled with this new addition, as it enhances learning opportunities and fosters innovation.",
      image: LabInaugration,
    },
    {
      id: 12,
      name: "Indoor Games",
      description:
        "Our university offers a dedicated sports room that provides a variety of indoor games for students to enjoy during their leisure time. The room is equipped with popular games such as chess, ludo, carom, and more, offering students a chance to relax, socialize, and sharpen their strategic thinking skills. This space promotes mental fitness and teamwork, allowing students to unwind and engage in friendly competition. Whether for relaxation or building focus, the sports room serves as a vibrant hub for indoor recreation at our university, fostering a balanced and enjoyable student life. It also encourages students to take breaks from their academic work and engage in activities that enhance their overall well-being.",
      image: IndoorGame,
    },
    {
      id: 13,
      name: "Outdoor Games",
      description:
        "Our university boasts a spacious outdoor ground where students can enjoy a variety of sports and games. The ground is ideal for playing cricket, football, badminton, kho-kho, and other outdoor activities, providing students with ample space for physical fitness and team-building. Whether it's a friendly match or a competitive game, the outdoor ground fosters teamwork, sportsmanship, and healthy competition among students. It also serves as a great place for relaxation and recreation, encouraging students to stay active and engaged while balancing their academic commitments. The availability of such a versatile space promotes a well-rounded student experience, supporting both physical and mental well-being.",
      image: OutdoorGame,
    },
    {
      id: 14,
      name: "Food Stall",
      description:
        "Our school encourages students to showcase their entrepreneurial skills by setting up food stalls during various events. These stalls provide an opportunity for students to prepare and sell a variety of food items, allowing them to gain hands-on experience in managing a small business. Students can earn profits from their sales, fostering teamwork, creativity, and business acumen. For instance, on Women's Day, students can set up special food stalls, offering delicious treats while celebrating the achievements and contributions of women. These food stalls not only add vibrancy to the events but also teach students valuable life skills, including budgeting, marketing, and customer service.",
      image: FoodStall,
    },
    {
      id: 15,
      name: "IT Club Activity",
      description:
        "The IT Club at our school provides a dynamic platform for students to explore and enhance their technological skills. The club organizes activities such as coding competitions, tech workshops, and project development sessions, where students can collaborate on innovative ideas and solutions. These activities encourage problem-solving, creativity, and teamwork while allowing students to dive deeper into fields like programming, web development, and app design. The IT Club also invites guest speakers from the tech industry to inspire students and provide insights into the latest trends. Through these engaging activities, the IT Club nurtures the next generation of tech enthusiasts and innovators.",
      image: ITClub,
    },
    {
      id: 16,
      name: "Climate Clock Project",
      description:
        "The Climate Clock project, created by our school students, is an innovative initiative designed to raise awareness about climate change and the urgency of action. The project involves creating a digital or physical clock that displays a countdown to critical climate milestones, such as the time remaining to prevent global warming from exceeding 1.5°C. Students can use sensors and data visualization tools to showcase the impact of human activities on the planet. This project helps students develop skills in data analysis, and environmental science, while promoting sustainable practices. It serves as a powerful reminder of the collective responsibility we all share in protecting the environment for future generations.",
      image: ClimateClock,
    },
    {
      id: 17,
      name: "Explaining Binary Search by Play",
      description:
        "In our school, students and teachers explain binary search through an interactive game. Students play the role of searchers, with numbers arranged in a sorted order. They find a specific number by repeatedly halving the search space, mimicking the binary search process. By asking if the target number is higher or lower than the middle value, students eliminate half of the remaining options until the number is found. This hands-on activity helps students visualize and understand how binary search efficiently narrows down possibilities, promoting active learning and problem-solving. It also fosters teamwork and collaboration as students work together to solve the problem, making the concept more engaging.",
      image: BinarySearch,
    },
    {
      id: 18,
      name: "Documentry on Climate Change",
      description:
        "Our school students created an impactful documentary on climate change, highlighting the urgent need for global awareness and action. In this documentary, students explored the causes, effects, and potential solutions to climate change, using visuals, expert interviews, and real-world examples. They demonstrated how human activities accelerate global warming and its environmental consequences, while emphasizing sustainable practices, renewable energy, and conservation efforts. Through this project, students deepened their understanding of the climate crisis and effectively communicated their findings, inspiring others to take responsibility in preserving the planet for future generations.",
      image: Documentary,
    },
    {
      id: 19,
      name: "Thakur-Sambha Comedy Play",
      description:
        "The `Thakur-Sambha` comedy play is a delightful and humorous performance that has become a favorite. The play features two central characters, Thakur and Sambha, who engage in witty banter and amusing situations that highlight their unique personalities. Thakur, with his serious demeanor, is often caught in comical circumstances due to Sambha's playful and mischievous nature. Their interactions lead to a series of laugh-out-loud moments, filled with clever dialogues and slapstick humor. The play not only entertains the audience but also brings out themes of friendship and miscommunication, leaving everyone in high spirits and eager for more, making it a highly anticipated event in the school.",
      image: FunnySkit,
    },
    {
      id: 20,
      name: "Environment Day Celebration",
      description:
        "The Environment Day celebration at our university was a meaningful event focused on raising awareness about the importance of preserving nature. As part of the celebration, our school students performed a skit that highlighted environmental issues such as pollution, deforestation, and climate change. Through their lively performance, the students portrayed the consequences of human activities on the environment and emphasized the need for collective action to protect our planet. The celebration inspired everyone to reflect on their role in safeguarding the environment, commit to sustainability, and take actionable steps toward a greener future, creating a lasting impact on all attendees.",
      image: EnvironmentDay,
    },
    {
      id: 21,
      name: "Solar Mobile Charging Station Project",
      description:
        "The Solar Mobile Charging Station project is an innovative initiative that can be developed by our school students to promote renewable energy and sustainability. Students can design and build a mobile charging station powered by solar energy, using solar panels to capture sunlight, store energy in batteries, and provide charging ports for various devices. The project teaches students about solar energy, electronics, and sustainable practices while reducing reliance on traditional energy sources. It also raises awareness about renewable energy's potential in addressing modern energy needs, helping students gain practical skills and contribute to environmental conservation.",
      image: SolarMobile,
    },
    {
      id: 22,
      name: "Skit Play on Save Environment",
      description:
        "The skit play on saving the environment, performed by our school students, was an engaging way to raise awareness about environmental conservation. The students depicted various environmental issues such as pollution, deforestation, and climate change, emphasizing the importance of taking action to protect the planet. Through their performances, they conveyed the message that small changes in daily habits, like reducing waste, conserving water, and planting trees, can make a big difference. The skit was both entertaining and educational, leaving the audience with a powerful message about the need for collective efforts to preserve the environment and inspire positive change.",
      image: SaveEnv,
    },
    {
      id: 23,
      name: "Open Garden Activity",
      description:
        "The Open Garden activity at our school is a wonderful initiative aimed at promoting a fresh and healthy environment. In this activity, students actively participate in planting and maintaining a variety of plants, flowers, and trees around the school premises. The garden serves as a green space where students learn about the importance of biodiversity, plant care, and sustainability. Through this hands-on experience, they understand how plants improve air quality, reduce pollution, and enhance the environment, while also contributing to the well-being of the school community. The Open Garden fosters teamwork, responsibility, and pride as students create a vibrant, green space that supports a healthier ecosystem.",
      image: GardenActivity,
    },
    {
      id: 24,
      name: "Quiz Activity",
      description:
        "Our school organizes an exciting quiz activity where students form teams and compete to showcase their knowledge on various subjects. Each team answers questions covering topics like general knowledge, science, history, current affairs, and computer subjects such as programming, algorithms, networking, and hardware. This activity encourages teamwork, critical thinking, and quick decision-making, making learning fun and engaging. Students also improve their communication skills and ability to work collaboratively under pressure. At the end of the quiz, the team with the highest score is declared the winner, and certificates or prizes are awarded to celebrate their achievement.",
      image: Quiz,
    },
    {
      id: 25,
      name: "Giving Presentations to Explain the Topics",
      description:
        "In our school, students deliver presentations on various topics to improve their communication and presentation skills. They research and prepare topics, ranging from academic subjects, and present their findings to peers. This activity helps students practice speaking confidently, structure their thoughts clearly, and use visual aids effectively. It also enhances public speaking, critical thinking, and time management skills. By receiving feedback from teachers and classmates, students learn to refine their delivery, making this a valuable experience for personal and academic growth.",
      image: ClassPPT,
    },
    {
      id: 26,
      name: "Blood Donation Camp",
      description:
        "Our university organizes a blood donation camp to encourage a spirit of community service and social responsibility. In this camp, both teachers and students from our school actively participate by donating blood to help those in need. The event is conducted with the support of medical professionals who ensure the safety and well-being of all donors. The blood donation camp not only contributes to saving lives but also raises awareness about the importance of regular donations in maintaining a steady supply of blood for medical emergencies. This initiative fosters a sense of compassion and unity among students and staff while making a meaningful impact on the local community.",
      image: BloodCamp,
    },
    {
      id: 27,
      name: "Abhimanyu Yojna Seminar",
      description:
        "Our university organizes an insightful seminar on the `Abhimanyu Yojna`, where several police officers are invited to explain the details and importance of this initiative. The seminar educates students about the scheme's objectives, which aim to empower and support young individuals in becoming responsible citizens. The police officers share valuable information on how the program promotes discipline, law awareness, and social responsibility. At the end of the seminar, all participants take an oath to uphold the values of the Abhimanyu Yojna, pledging to contribute positively to society. This event helps foster a sense of responsibility and community engagement among students.",
      image: AbhimanyuYojna,
    },
    {
      id: 28,
      name: "Women's Day Celebration",
      description:
        "The Women's Day celebration at our university is a vibrant event filled with a variety of activities. The program includes cultural performances, games, and food stalls, providing a platform for students and faculty to showcase their talents. Students participate in cultural dances, music performances, and games that celebrate women’s achievements and contributions. Additionally, a documentary-making activity is organized, where students create films highlighting the stories of inspiring women. Food stalls run by students add a lively touch to the celebration, offering delicious treats and promoting community interaction. The event honors the spirit of women and fosters unity, creativity, and social responsibility.",
      image: WomenDay,
    },
    {
      id: 29,
      name: "Poster Making Competition",
      description:
        "The poster-making competition on environment and plastic at our school allows students to express their creativity while raising awareness about environmental issues. Participants create eye-catching posters that highlight the harmful effects of plastic pollution and the need for sustainable practices. Through vibrant colors, visuals, and strong messages, students convey the importance of reducing plastic usage, recycling, and adopting eco-friendly alternatives. The competition fosters creativity and encourages students to become active advocates for environmental conservation. It also helps instill a sense of responsibility among students to make a positive impact on the environment.",
      image: PosterMaking,
    },
    {
      id: 30,
      name: "Student Counsil",
      description:
        "The Student Council at our university manages various programs and ensures smooth communication across schools and departments. Comprised of elected student representatives, the council organizes academic, cultural, and extracurricular events efficiently. They act as a bridge between students and the administration, providing a platform for students to voice their concerns and ideas. The council is also responsible for disseminating important information to the student body, including event updates and academic notices. Through their leadership and coordination, the Student Council fosters a sense of community and collaboration among students and faculty.",
      image: Counsil,
    },
    {
      id: 31,
      name: "Ganesh Visarjan",
      description:
        "Ganesh Visarjan at our university is a lively and joyous celebration, marked by a vibrant atmosphere of music, dance, and devotion. The event features a traditional procession with students and faculty members actively participating, accompanied by the beats of dhol and energetic DJ music. The participants dance joyfully, celebrating the festive spirit as they bid farewell to Lord Ganesha in a grand and colorful procession. The atmosphere is filled with excitement and happiness, as everyone comes together to celebrate the occasion with enthusiasm and unity. The visarjan (immersion) of Lord Ganesha is conducted with great respect and devotion, marking a fitting and joyful end to the celebrations.",
      image: GaneshVisarjan,
    },
    {
      id: 32,
      name: "Plantation",
      description:
        "The plantation drive at our university, organized by the NSS (National Service Scheme) students and teachers, promotes environmental sustainability. During this activity, our school's students actively participate in planting trees and plants around the campus, contributing to a greener environment. The event emphasizes the importance of tree planting in combating climate change, improving air quality, and enhancing biodiversity. Students work together with faculty members, learning the value of environmental conservation and taking part in efforts to make the campus more eco-friendly. This activity instills a sense of responsibility and environmental awareness among students.",
      image: Plantation,
    },
    {
      id: 33,
      name: "Herbal Gallery Project Idea Presentation",
      description:
        "The Herbal Gallery project idea presentation, presented by our school's students, earned them the 1st prize. The project showcased various herbal plants and their medicinal benefits, explaining how they can treat common ailments and promote wellness. The students presented their research with engaging visuals and interactive elements, highlighting the importance of herbal medicine and sustainable living. Their creativity and dedication to spreading awareness about the benefits of herbal solutions earned them recognition and the top award.",
      image: HerbalGallery,
    },
  ];

  return (
    <div className="lg:w-[90%] mx-auto p-6 mt-4 md:mt-8 lg:mt-12">
      <div className="lg:space-y-16 space-y-10 md:space-y-12">
        {activities.map((activity, index) => (
          <div
            key={activity.id}
            className={`flex flex-col ${
              index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
            } items-center lg:gap-20 md:gap-6 gap-4`}
          >
            {/* Image Section */}
            <div className="w-full relative overflow-hidden md:w-[95%] lg:w-1/2">
              <img
                src={activity.image}
                alt={activity.name}
                className="shadow-md transform transition duration-300 hover:scale-105 w-full h-[250px] md:h-[450px] lg:h-[400px] object-cover"
              />
            </div>

            {/* Text Section */}
            <div className="md:w-[95%] w-full lg:w-1/2 text-center lg:text-left">
              <h3 className="md:text-[2.5rem] lg:text-[2rem] text-[1.4rem] text-[#2c3e50] font-semibold capitalize mb-2">{activity.name}</h3>
              <p className="text-[#555] text-justify lg:text-[1.1rem] md:text-[1.3rem] text-[0.9rem] leading-relaxed">{activity.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DetailActivities;
