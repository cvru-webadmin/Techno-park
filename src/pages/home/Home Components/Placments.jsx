import React from 'react';

const companies = [
  { name: 'Google', logo: 'https://img.freepik.com/premium-vector/google-logo-icon-set-google-icon-searching-icons-vector_981536-453.jpg?w=740' },
  { name: 'Amazon', logo: 'https://img.freepik.com/premium-vector/amazon-logotype-white-background-logo-internet-service-sale-goods-online-store-platform-arrow-free-shipping-worldwide-shopping-editorial_661108-8065.jpg?w=1060' },
  { name: 'Microsoft', logo: 'https://img.freepik.com/premium-photo/letter-c-uppercase-colorful-font-black-background_1015980-296558.jpg?w=740' },
  { name: 'Facebook', logo: 'https://img.freepik.com/free-psd/social-media-logo-design_23-2151296987.jpg?t=st=1731149882~exp=1731153482~hmac=01661e3525cd69c499cdde9c36cec73061bdde7ae3b1139fdc5591b5fb2dfa89&w=740' },
  { name: 'IBM', logo: 'https://img.freepik.com/premium-photo/3d-render-ibm-logo-carved-from-frosted-translucent-plastic-gently-rotating-neon-blue-lines-pulse-f_1020495-782539.jpg?w=740' },
  { name: 'Oracle', logo: 'https://th.bing.com/th/id/OIP.LCZOl2QttQ4OruepDG9p5gHaHa?w=500&h=500&rs=1&pid=ImgDetMain' },
  { name: 'Cisco', logo: 'https://worldwide-wifi-experts.com/images/logos-vendors/cisco-logo.png' },
  { name: 'Intel', logo: 'https://th.bing.com/th/id/R.8e8e5d3e0b38ecd0688082625bbf1591?rik=KXVMRQZ4DisUpA&riu=http%3a%2f%2fpurepng.com%2fpublic%2fuploads%2flarge%2fpurepng.com-intel-logologobrand-logoiconslogos-251519939644r68ft.png&ehk=jBzDgPyZuKWPCApTheGKUI2UkgluVE%2bhStxECioQ3lg%3d&risl=&pid=ImgRaw&r=0' },
];

const students = [
  {
    name: 'John Doe',
    course: 'B.Tech Computer Science',
    company: 'Google',
    position: 'Software Engineer',
    image: 'https://th.bing.com/th/id/OIP.IQ6S3l9hywMapLzTA5M3bwAAAA?rs=1&pid=ImgDetMain',
  },
  {
    name: 'Jane Smith',
    course: 'B.Tech Information Technology',
    company: 'Amazon',
    position: 'Data Analyst',
    image: 'https://th.bing.com/th/id/OIP.toZe8IRYeEBghanNF8gmxwHaHG?w=480&h=460&rs=1&pid=ImgDetMain',
  },
  {
    name: 'Alice Johnson',
    course: 'M.Tech Computer Science',
    company: 'Microsoft',
    position: 'Cloud Engineer',
    image: 'https://ontechedge.com/wp-content/uploads/2022/10/istockphoto-1368496855-612x612-1.jpg',
  },
  {
    name: 'Bob Brown',
    course: 'B.Tech Computer Engineering',
    company: 'Facebook',
    position: 'Frontend Developer',
    image: 'https://img.freepik.com/premium-photo/female-student-home-office-learning-working-laptop-young-woman-engaged-remote-learning_94120-2490.jpg',
  },
  // Add more students as needed
];

function PlacementSection() {
  return (
    <div className="bg-gray-50 py-20 px-6 lg:px-20">
      {/* Section Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl lg:text-4xl font-bold text-blue-600">
          Campus Placements
        </h2>
        <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
          Our students have secured positions in leading tech companies, proving their skills and dedication to excellence.
        </p>
      </div>

      {/* Recruitment Companies */}
      <div className="mb-16 overflow-x-auto">
        <div className="flex space-x-8 items-center justify-start px-4 lg:px-8">
          {companies.map((company, index) => (
            <div
              key={index}
              className="flex flex-col items-center w-52 bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300"
            >
              <img src={company.logo} alt={`${company.name} logo`} className="object-contain h-24 mb-2" />
              <p className="text-sm font-semibold text-gray-700 text-center">{company.name}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Selected Students */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
        {students.map((student, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
            <div className="flex items-center space-x-6 mb-4">
              <img src={student.image} alt={student.name} className="w-24 h-24 rounded-full object-cover" />
              <div>
                <h3 className="text-lg font-semibold text-blue-600">{student.name}</h3>
                <p className="text-sm text-gray-500">{student.course}</p>
              </div>
            </div>
            <div>
              <p className="text-gray-700 text-sm">
                <span className="font-semibold text-gray-600">Company:</span> {student.company}
              </p>
              <p className="text-gray-700 text-sm">
                <span className="font-semibold text-gray-600">Position:</span> {student.position}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Explore Placements Button */}
      <div className="text-center">
      <button className="bg-gradient-to-r mt-4 from-blue-500 to-purple-600 text-white py-3 px-10 text-base font-semibold rounded-md shadow-md transform transition-all duration-300 ease-in-out hover:scale-105">
          Explore More Placements
        </button>
      </div>
    </div>
  );
}

export default PlacementSection;
