import React from 'react'
import AtulBhaisare from '../../../assets/images/Atul-Bhaisare.png'
import FalguniRana from '../../../assets/images/Falguni-Rana.png'
import PranavAtre from '../../../assets/images/Pranav-Atre.png'
import GaneshJadhav from '../../../assets/images/Ganesh-Jadhav.png'
import SangeetaVasle from '../../../assets/images/SangeetaVasle.png'
import AwdheshParmar from '../../../assets/images/AwdheshParmar.png'
import RitikIngle from '../../../assets/images/RitikIngle.png'
import KishoreChouhan from '../../../assets/images/KishoreChouhan.png'
import PratikRaghwanshi from '../../../assets/images/PratikRaghwanshi.png'
import SakshiBarole from '../../../assets/images/SakshiBarole.png'
import SnehaChouhan from '../../../assets/images/SnehaChouhan.png'
import YogeshHirve from '../../../assets/images/YogeshHirve.png'
import ShubhamRajawat from '../../../assets/images/ShubhamRajawat.png'
import DevanshSharma from '../../../assets/images/DevanshSharma.png'
import SameerKhan from '../../../assets/images/SameerKhan.png'
import DanveerSingh from '../../../assets/images/DanveerSingh.png'

const StuData=[
    {
        image:AtulBhaisare,
        name:"Atul Bhaisare",
        passingyear:"2025",
        companyname:"Central Bank of India",
        Package:"6.70 LPA"
    },
    {
        image:FalguniRana,
        name:"Falguni Rana",
        passingyear:"2022",
        companyname:"Accenture",
        Package:"4.60 LPA"
    },
    {
        image:PranavAtre,
        name:"Pranav Atre",
        passingyear:"2023",
        companyname:"SK FINANCE LIMITED",
        Package:"3.18 LPA"
    },
    {
        image:GaneshJadhav,
        name:"Ganesh Jadhav",
        passingyear:"2023",
        companyname:"Nurture.Farm (UPL)",
        Package:"3.00 LPA"
    },
    {
        image:SangeetaVasle,
        name:"Sangeeta Vasle",
        passingyear:"2024",
        companyname:"Pratap digital communications Pvt Ltd Pithampur",
        Package:"4.80 LPA"
    },
    {
        image:AwdheshParmar,
        name:"Awdhesh Parmar",
        passingyear:"2024",
        companyname:"Next Education",
        Package:"4.60 LPA"
    },
    {
        image:RitikIngle,
        name:"Ritik Ingle",
        passingyear:"2022",
        companyname:"IDFC FIRST Bank Limited",
        Package:"2.40 LPA"
    },
    {
        image:KishoreChouhan,
        name:"Kishore Chouhan",
        passingyear:"2023",
        companyname:"IDFC FIRST Bank Limited",
        Package:"2.40 LPA"
    },
    {
        image:PratikRaghwanshi,
        name:"Pratik Raghwanshi",
        passingyear:"2024",
        companyname:"InGene Organics Pvt Ltd",
        Package:"2.16 LPA"
    },
    {
        image:SakshiBarole,
        name:"Sakshi Barole",
        passingyear:"2024",
        companyname:"Tata Consultancy Services (TCS)",
        Package:"1.80 LPA"
    },
    {
        image:SnehaChouhan ,
        name:"Sneha Chouhan",
        passingyear:"2024",
        companyname:"Tata Consultancy Services (TCS)",
        Package:"1.80 LPA"
    },
    {
        image:YogeshHirve,
        name:"Yogesh Hirve",
        passingyear:"2024",
        companyname:"Spandan Sphoorty Finance Limited",
        Package:"1.80 LPA"
    },
    {
        image:ShubhamRajawat,
        name:"Shubham Rajawat",
        passingyear:"2024",
        companyname:"Efasal",
        Package:"1.80 LPA"
    },
    {
        image:DevanshSharma,
        name:"Devansh Sharma",
        passingyear:"2023",
        companyname:"SK FINANCE LIMITED",
        Package:"1.50 LPA"
    },
    {
        image:SameerKhan,
        name:"Sameer Khan",
        passingyear:"2022",
        companyname:"KISAN4U",
        Package:"1.20 LPA"
    },
    {
        image:DanveerSingh,
        name:"Danveer Singh",
        passingyear:"2022",
        companyname:"KISAN4U",
        Package:"1.20 LPA"
    },
]

export default function StudentPlaced() {
  return (
    <>
    <div className='bg-white lg:pt-16 pt-10 lg:px-0 flex flex-col'>
    <div className="text-center lg:mb-12 mb-3">
          <h2 className="lg:text-4xl md:text-3xl text-2xl font-bold lg:px-0 px-5 text-gray-800 mb-4">
          STAR ACHIEVERS OF TRAINING AND PLACEMENT CELL
          </h2>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 lg:w-[85%] mx-auto lg:gap-10 gap-5 mb-12">
  {StuData.map((student, index) => {
    return (
      <div className="w-11/12 md:w-[350px] lg:w-[400px] h-auto lg:h-[200px] mx-auto p-4 bg-white shadow-sm border rounded-lg transform transition duration-500 hover:scale-105 hover:shadow-2xl">
      <div className="flex items-center h-full">
        {/* Left Side - Image with Gradient Border */}
        <div className="relative w-24 h-24 flex-shrink-0">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full p-[3.5px]">
            <img
              src={student.image}
              alt={student.name}
              className="w-full h-full object-cover object-top rounded-full"
            />
          </div>
        </div>

        {/* Right Side - Details */}
        <div className="ml-4 flex flex-col justify-center">
          <h3 className="text-xl font-semibold text-gray-800">{student.name}</h3>
          <p className="text-sm text-gray-600 mt-1">
            Passing Year: <span className="font-medium text-gray-800">{student.passingyear}</span>
          </p>
          <p className="text-sm text-gray-600 mt-1">
            Company: <span className="font-medium text-gray-800">{student.companyname}</span>
          </p>
          <p className="text-sm text-gray-600 mt-1">
            Package: <span className="font-medium text-gray-800">{student.Package}</span>
          </p>
        </div>
      </div>
    </div>
      // <div
      //   key={index}
      //   className="w-52 mx-auto shadow-lg rounded-lg overflow-hidden border border-gray-200 transform hover:scale-105 transition-transform duration-300"
      // >
      //   <div className="relative h-60">
      //     <img
      //       src={student.image}
      //       alt={`${student.name}'s photo`}
      //       className="w-full h-full object-top object-cover"
      //     />
      //     <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent text-white p-3">
      //       <h3 className="font-bold text-lg">{student.name}</h3>
      //       <p className="text-sm font-light">{student.companyname}</p>
      //     </div>
      //   </div>
      //   <div className="p-4">
      //     <div className="mb-2">
      //       <p className="text-gray-700 text-sm">
      //         <span className="font-semibold">Passing Year:</span>{" "}
      //         {student.passingyear}
      //       </p>
      //       <p className="text-gray-700 text-sm">
      //         <span className="font-semibold">Annual Package:</span> ₹
      //         {student.Package}
      //       </p>
      //     </div>
      //   </div>
      // </div>
    );
  })}
</div>






      {/* Selected Students */}
      {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-[85%] mx-auto gap-12 mb-12">
        {StuData.map((student, index) => (
          <div
            key={index}
            className="relative bg-white border-2 border-blue-100 p-6 sm:p-8 rounded-lg shadow-md hover:shadow-2xl transition duration-300"
          >
            <div className="flex flex-col items-center sm:flex-row sm:items-start space-x-0 sm:space-x-6 mb-4">
              <img
                src={student.image}
                alt={student.name}
                className="w-20 h-20 sm:w-28 sm:h-28 rounded-full object-top object-cover border-4 border-blue-500"
              />
              <div className="text-center sm:text-left mt-4 sm:mt-0">
                <h3 className="text-sm sm:text-xl font-semibold text-blue-600">
                  {student.name}
                </h3>
                <p className="text-xs sm:text-base text-gray-500">
                  {student.companyname}
                </p>
                <p className='text-[15px] mt-2'>
                <span className="font-medium text-[15px] text-gray-600">Passing Year:</span> {student.passingyear}
              </p>
              <p className='text-[15px]'>
                <span className="font-medium text-[15px] text-gray-600">Package:</span> {student.Package}
              </p>
              </div>
            </div>
          </div>
        ))}
      </div> */}
    </div>
    </>
  )
}
