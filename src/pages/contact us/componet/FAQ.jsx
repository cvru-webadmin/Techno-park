{/* IT Department FAQ Section */}
import React from "react";

const faqData = [
  {
    question: "What courses does the IT Department offer?",
    answer: "The IT Department offers undergraduate and postgraduate programs such as BCA, MCA, and specialized certifications in technologies like AI, Cloud Computing, Cybersecurity, and Web Development. Visit our curriculum page for more details.",
  },
  {
    question: "Are there industry collaborations or internships available?",
    answer: "Yes, the IT Department collaborates with leading companies for internships, live projects, and placement opportunities. Partnerships include major tech firms like TCS, Infosys, Wipro, and startups for hands-on industry exposure.",
  },
  {
    question: "What are the department’s lab facilities?",
    answer: "Our department has state-of-the-art labs for programming, networking, cloud computing, and artificial intelligence. Labs are equipped with high-speed internet and advanced software tools like MATLAB, VS Code, and Android Studio.",
  },
  {
    question: "Does the IT Department offer certifications or workshops?",
    answer: "Yes, we regularly organize workshops and certification programs in collaboration with companies like Google, Microsoft, and AWS. Popular workshops include Machine Learning, Cloud Development, and Full-Stack Web Development.",
  },
  {
    question: "How can I contact the IT Department for more information?",
    answer: "You can contact the IT Department via email at info@cvru.ac.in or call us at (+91) 6269001063 / (+91) 6269001060. Alternatively, visit our department office during working hours.",
  },
];

const FAQSection = () => {
  return (
    <div className="bg-gray-100 rounded-lg shadow-md p-6 my-10 max-w-7xl mx-auto">
      <h3 className="text-2xl font-bold text-blue-800 mb-4 text-center">Frequently Asked Questions</h3>
      <div className="space-y-4">
        {faqData.map((faq, index) => (
          <details key={index} className="group">
            <summary className="font-medium text-gray-800 cursor-pointer py-2.5 px-4 bg-white rounded-lg hover:bg-blue-100">
              {faq.question}
            </summary>
            <div className="pl-4 mt-2 text-gray-700 bg-blue-700/10 px-10 py-5">{faq.answer}</div>
          </details>
        ))}
      </div>
    </div>
  );
};

export default FAQSection;
