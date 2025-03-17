import { FaBuilding, FaBriefcase, FaRupeeSign, FaCalendarAlt } from "react-icons/fa";
import border from "./hd.jpg"
import cornner from "./7103-removebg-preview.png"
import Sneha from "./Sneha1.jpeg"
import Uday from "./Uday.jpeg"
import Aayushi from "./Aayushi.jpeg"
import Burhan from "./Burhan.jpeg"
import Ubay from "./Ubay.jpg"
import Sujal from "./Sujal.jpeg"

const students = [
    {
      name: "Deepanshu Dashore",
      organization: "IndiDevelopers",
      position: "React Js Front-End Developer",
      duration: "3 months",
      stipend: "yes",
      image: "https://res.cloudinary.com/dcbniehli/image/upload/f_auto,q_auto/izldykfi2x4wudknil3m",
    },
    {
      name: "Khushi Yadav",
      organization: "IndiDevelopers",
      position: "React Js Front-End Developer",
      duration: "3 months",
      stipend: "yes",
      image: "https://res.cloudinary.com/dcbniehli/image/upload/v1741173159/wryh8qicnkgyjtve8ma3.jpg",
    },
    {
        name: "Divya Panwar",
        organization: "IndiDevelopers",
        position: "React Js Front-End Developer",
        duration: "3 months",
        stipend: "yes",
        image: "https://res.cloudinary.com/dcbniehli/image/upload/v1741172984/zazblesnrmxt6jl09nb5.jpg",
      },
      {
        name: "Sujal Kumrawat",
        organization: "AISECT Infotech Ltd",
        position: "Front-End Developer",
        duration: "28/02/2025 - 28/06/2025",
        stipend: "no",
        image:Sujal
      },
      {
        name: "Ubay Saifee",
        organization: "AISECT Infotech Ltd",
        position: "Front-End Developer",
        duration: "28/02/2025 - 28/06/2025",
        stipend: "no",
        image:Ubay
      },
      {
        name: "Burhanuddin saifee",
        organization: "AISECT Infotech Ltd",
        position: "Front-End Developer",
        duration: "28/02/2025 - 28/06/2025",
        stipend: "no",
        image:Burhan
      },
      {
        name: "Aayushi Dashore",
        organization: "AISECT Infotech Ltd",
        position: "Back-End Developer",
        duration: "28/02/2025 - 28/06/2025",
        stipend: "no",
        image:Aayushi
      },
      {
        name: "Uday Sharma",
        organization: "AISECT Infotech Ltd",
        position: "Front-End Developer",
        duration: "28/02/2025 - 28/06/2025",
        stipend: "no",
        image: Uday
      },
      {
        name: "Sneha Arzary",
        organization: "WinishTech IT Solutions Pvt.Ltd.",
        position: "React & UI Developer",
        duration: "4 to 6 months",
        stipend: "N/A",
        image: Sneha
        // image: "data:image/jpeg;base64,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",
      }
];

export default function InternshipCard() {
  return (
    <div 
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6 relative" 
      
    > {/* <div className="flex flex-wrap gap-6 justify-center "> */}
      {students.map((student, index) => (
        <div
          key={index}
          className="relative border-2 w-full h-64 bg-white shadow-lg rounded-lg p-6 flex flex-col md:flex-row md:items-center overflow-hidden transition-transform duration-300 hover:shadow-2xl"
        >
            <div className="absolute top-0 right-0 bg-red-500 text-white px-3 py-1 rounded-bl-lg text-xs font-semibold">
            Intern Spotlight
            </div>
          {/* Left Side: Name & Details */}
          <div className="flex-1">
            <h3 className="text-xl font-bold relative text-gray-900">{student.name}</h3>
            <p className="text-gray-700 flex items-center gap-2 mt-2">
              <FaBuilding className="text-blue-600  text-sm text-nowrap" /> {student.organization}
            </p>
            <p className="text-gray-700 flex items-center gap-2 mt-1">
              <FaBriefcase className="text-green-600  text-sm" /> {student.position}
            </p>
            <p className="text-gray-700 flex items-center gap-2 mt-1">
              <FaCalendarAlt className="text-purple-600  text-sm" /> {student.duration}
            </p>
            <p className="text-gray-700 flex items-center gap-2 mt-1">
              <FaRupeeSign className="text-yellow-600  text-sm" /> Stipend: {student.stipend}
            </p>
            <img src={cornner} alt="pattern" className=" absolute rotate-90 opacity-50 -top-14 -left-8 h-36" />
            <img src={cornner} alt="pattern" className=" absolute -rotate-90 opacity-40 bottom-0 right-0 h-36" />
          </div>

          {/* Right Side: Image */}
          <div className="w-[7rem] h-[7rem] relative rounded-full overflow-hidden border-2 border-gray-300 shadow-md ml-4">
            <img src={student.image} alt={student.name} className="w-full object-top h-full object-cover" />
          </div>
        </div>
      ))}
    {/* </div> */}
    </div>
  );
}