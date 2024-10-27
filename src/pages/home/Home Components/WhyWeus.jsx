import { AcademicCapIcon, UserGroupIcon, LightBulbIcon, BriefcaseIcon } from '@heroicons/react/24/outline';
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function WhyChooseUsCard() {
  useEffect(() => {
    AOS.init({ duration: 800, offset: 100, once: true });
  }, []);

  const features = [
    {
      icon: AcademicCapIcon,
      title: "Cutting-edge Courses",
      description: "Explore advanced courses with state-of-the-art facilities and resources to lead the future.",
      additionalInfo: "Our modern curriculum is updated to match industry standards, ensuring students stay competitive.",
    },
    {
      icon: UserGroupIcon,
      title: "Experienced Faculty",
      description: "Learn from seasoned educators dedicated to delivering excellence and real-world insights.",
      additionalInfo: "Our faculty brings diverse industry experience to foster practical learning.",
    },
    {
      icon: LightBulbIcon,
      title: "Holistic Development",
      description: "Focusing on student growth with programs for personal, academic, and career success.",
      additionalInfo: "We offer workshops, seminars, and projects that encourage innovation and growth.",
    },
    {
      icon: BriefcaseIcon,
      title: "Industry Connections",
      description: "Gain hands-on experience with strong ties to industry leaders and internship opportunities.",
      additionalInfo: "Networking events and partnerships provide students with valuable career-building opportunities.",
    },
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto text-center mb-8">
        <h2 className="text-4xl font-semibold text-gray-800">Why Choose Us?</h2>
        <p className="text-gray-600 mt-2">Empowering students to shape the future with knowledge and innovation</p>
      </div>
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4">
        {features.map((feature, index) => (
          <div 
            key={index} 
            className="bg-white rounded-xl shadow-md p-8 px-6 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 transform"
            data-aos="fade-up"
          >
            <feature.icon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">{feature.title}</h3>
            <p className="text-gray-600 mb-4">{feature.description}</p>
            <p className="text-gray-500 text-sm">{feature.additionalInfo}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default WhyChooseUsCard;
