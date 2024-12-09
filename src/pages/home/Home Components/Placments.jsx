import React from 'react';
import { NavLink } from 'react-router-dom';
import TCS from '../../../assets/images/TCS.png'
import ICICI from '../../../assets/images/ICICI.png'
import IDFC from '../../../assets/images/IDFC.png'
import NextEducation  from '../../../assets/images/Next Education.png'
import SKFinance  from '../../../assets/images/SK Finance.png'
import UPL from '../../../assets/images/UPL.png'
import Equitas from '../../../assets/images/Equitas.png'
import AtulBhaisare from '../../../assets/images/Atul-Bhaisare.png'
import FalguniRana from '../../../assets/images/Falguni-Rana.png'
import PranavAtre from '../../../assets/images/Pranav-Atre.png'
import GaneshJadhav from '../../../assets/images/Ganesh-Jadhav.png'

const companies = [
  { name: 'Tata Consultancy Services', logo: TCS },
  { name: 'ICICI Bank', logo: ICICI },
  { name: 'IDFC FIRST Bank Limited', logo: IDFC },
  { name: 'Next Education', logo: NextEducation },
  { name: 'SK Finance', logo: SKFinance },
  { name: 'UPL Limited', logo: UPL },
  { name: 'Equitas Small Finance Bank', logo: Equitas },
];

const students = [
  {
    name: 'Atul Bhaisaree',
    passingyear:"2025",
    companyname:"Central Bank of India",
    Package:"6.70 LPA",
    image: AtulBhaisare,
  },
  {
    name: 'Falguni Rana',
    passingyear:"2022",
    companyname:"Accenture",
    Package:"4.60 LPA",
    image: FalguniRana,
  },
  {
    name: 'Pranav Atre',
    passingyear:"2023",
    companyname:"SK FINANCE LIMITED",
    Package:"3.18 LPA",
    image: PranavAtre,
  },
  {
    name: 'Ganesh Jadhav',
    passingyear:"2023",
    companyname:"Nurture.Farm (UPL)",
    Package:"3.00 LPA",
    image: GaneshJadhav,
  },
];

function PlacementSection() {
  return (
    <div className="bg-gray-50 py-20 px-4 sm:px-6 lg:px-20">
      {/* Section Header */}
      <div className="text-center mb-12">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-600">
          Campus Placements
        </h2>
        <p className="text-gray-600 mt-2 max-w-2xl mx-auto text-sm sm:text-base lg:text-lg">
          Our department has placed students in top tech companies, highlighting our commitment to excellence in technical education and industry partnerships.
        </p>
      </div>

      {/* Recruitment Companies */}
      <div className="mb-16 overflow-hidden">
        <div className="flex flex-wrap justify-center gap-6">
          {companies.map((company, index) => (
            <div
              key={index}
              className="flex flex-col items-center w-28 sm:w-32 lg:w-40 bg-gradient-to-r from-gray-50 to-gray-100 p-4 rounded-lg shadow-md hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              <img
                src={company.logo}
                alt={`${company.name} logo`}
                className="object-contain h-14 sm:h-16 mb-2"
              />
              <p className="text-xs sm:text-sm font-semibold text-gray-700 text-center">
                {company.name}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Selected Students */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
        {students.map((student, index) => (
          <div
            key={index}
            className="relative bg-white p-6 sm:p-8 rounded-lg shadow-md hover:shadow-2xl transition duration-300"
          >
            {/* Ribbon for Placement */}
            <div className="absolute top-0 right-0 bg-blue-600 text-white px-3 py-1 rounded-bl-lg text-xs font-semibold">
              Placed by Techno Park
            </div>
            <div className="flex mb-4 h-2/3">
              <div className='w-2/5 flex items-center'>
              <div className='w-[90px] rounded-full flex items-center justify-center border-4 border-blue-500 overflow-hidden h-[90px]'>
              <img
                src={student.image}
                alt={student.name}
                className="sm:w-full sm:h-full object-top object-cover"
              />
              </div>
              </div>
              <div className="text-center pl-3 flex flex-col justify-center sm:text-left w-2/3 mt-4 sm:mt-0">
                <h3 className="text-sm sm:text-lg font-semibold text-blue-600">
                  {student.name}
                </h3>
                <p className="text-xs sm:text-sm text-gray-500">
                  {student.companyname}
                </p>
              </div>
            </div>
            <div className="text-gray-700 text-xs sm:text-sm mt-4">
              <p>
                <span className="font-semibold text-gray-600">Package - </span> {student.Package}
              </p>
              <p>
                <span className="font-semibold text-gray-600">Passing Year - </span> {student.passingyear}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Explore Placements Button */}
      <div className="text-center">
        <NavLink to="/placement" onClick={()=>{("/placement");useEffect(() => {window.scrollTo(0, 0);},[]);}} className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 px-8 sm:px-10 text-sm sm:text-base font-semibold rounded-md shadow-md transform transition-all duration-300 ease-in-out hover:scale-105">
          Explore More Placements
        </NavLink>
      </div>
    </div>
  );
}

export default PlacementSection;
