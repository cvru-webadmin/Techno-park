import React, { useContext, useState } from "react";
import FAQSection from "./componet/FAQ";
import { FireContext } from "../../Context/context";

const ContactPage = () => {

  //import Firebase context for send message
  const {SendMassage}= useContext(FireContext);

  //state define for form
  const [formData,setFormData] = useState({
    firstName:"",
    lastName:"",
    email:"",
    number:"",
    subject:"",
    message:"",
  })
  const handelSend=(e)=>{
    e.preventDefault();
    let Name=formData.firstName + " " +formData.lastName ;
    SendMassage(
      Name,
      formData.email,
      formData.number,
      formData.subject,
      formData.message
    )
    setFormData({
      firstName:"",
      lastName:"",
      email:"",
      number:"",
      subject:"",
      message:"",
    })
    // console.log(formData);
  }

  return (
    <>
    <div className='h-16 bg-[var(--DarkBlue)]'></div>
    <div className="bg-gray-50 text-gray-800 min-h-screen mb-16">
      {/* Heading Section */}
      <div className="text-center py-10">
        <h1 className="text-4xl font-extrabold text-blue-800">Get in Touch</h1>
        <p className="text-gray-600 mt-4 text-lg">
          Feel free to contact us for any inquiries or assistance. Our team is here to help you!
        </p>
      </div>

      {/* Contact Info Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-[85rem] mx-auto">
        {/* Card 1 */}
        <div className="bg-white shadow-md rounded-lg p-6 text-center hover:shadow-lg transition duration-300 group">
          <div className="w-12 h-12 mx-auto bg-gray-100 rounded-full text-blue-800 flex items-center justify-center mb-4 group-hover:bg-[var(--DarkBlue)] group-hover:text-white">
            {/* Icon Placeholder */}
            <svg xmlns="http://www.w3.org/2000/svg" className=' transition-colors duration-300  p-3 shadow-sm rounded-md h-14 w-14' viewBox="0 0 24 24">
                	<rect width="24" height="24" fill="none" />
                	<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.95">
                		<path stroke-dasharray="64" stroke-dashoffset="64" d="M8 3c0.5 0 2.5 4.5 2.5 5c0 1 -1.5 2 -2 3c-0.5 1 0.5 2 1.5 3c0.39 0.39 2 2 3 1.5c1 -0.5 2 -2 3 -2c0.5 0 5 2 5 2.5c0 2 -1.5 3.5 -3 4c-1.5 0.5 -2.5 0.5 -4.5 0c-2 -0.5 -3.5 -1 -6 -3.5c-2.5 -2.5 -3 -4 -3.5 -6c-0.5 -2 -0.5 -3 0 -4.5c0.5 -1.5 2 -3 4 -3Z">
                			<animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="64;0" />
                			<animateTransform id="lineMdPhoneCallLoop0" fill="freeze" attributeName="transform" begin="0.6s;lineMdPhoneCallLoop0.begin+2.7s" dur="0.5s" type="rotate" values="0 12 12;15 12 12;0 12 12;-12 12 12;0 12 12;12 12 12;0 12 12;-15 12 12;0 12 12" />
                		</path>
                		<path stroke-dasharray="4" stroke-dashoffset="4" d="M15.76 8.28c-0.5 -0.51 -1.1 -0.93 -1.76 -1.24M15.76 8.28c0.49 0.49 0.9 1.08 1.2 1.72">
                			<animate fill="freeze" attributeName="stroke-dashoffset" begin="lineMdPhoneCallLoop0.begin+0s" dur="2.7s" keyTimes="0;0.111;0.259;0.37;1" values="4;0;0;4;4" />
                		</path>
                		<path stroke-dasharray="6" stroke-dashoffset="6" d="M18.67 5.35c-1 -1 -2.26 -1.73 -3.67 -2.1M18.67 5.35c0.99 1 1.72 2.25 2.08 3.65">
                			<animate fill="freeze" attributeName="stroke-dashoffset" begin="lineMdPhoneCallLoop0.begin+0.2s" dur="2.7s" keyTimes="0;0.074;0.185;0.333;0.444;1" values="6;6;0;0;6;6" />
                		</path>
                	</g>
                </svg>
          </div>
          <h3 className="font-semibold text-lg text-blue-800">Call Us</h3>
          <p className="text-gray-600 mt-2 text-sm">
            +91 6269001063, 6269001060<br />
            Phone (India): +07320-247700/01
          </p>
        </div>
        {/* Card 2 */}
        <div className="bg-white shadow-md rounded-lg p-6 text-center hover:shadow-lg transition duration-300 group">
          <div className="w-12 h-12 mx-auto bg-gray-100 rounded-full text-blue-800 flex items-center justify-center mb-4 group-hover:bg-[var(--DarkBlue)] group-hover:text-white">
            {/* Icon Placeholder */}
            <svg xmlns="http://www.w3.org/2000/svg" className=' transition-colors duration-300  p-3 shadow-sm rounded-md h-14 w-14' viewBox="0 0 24 24">
                 	<rect width="24" height="24" fill="none" />
                 	<path fill="currentColor" d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m-.4 4.25l-6.54 4.09c-.65.41-1.47.41-2.12 0L4.4 8.25a.85.85 0 1 1 .9-1.44L12 11l6.7-4.19a.85.85 0 1 1 .9 1.44" />
                 </svg>
          </div>
          <h3 className="font-semibold text-lg text-blue-800">Email Us</h3>
          <p className="text-gray-600 mt-2 text-sm">info@cvru.ac.in</p>
        </div>
        {/* Card 3 */}
        <div className="bg-white shadow-md rounded-lg p-6 text-center hover:shadow-lg transition duration-300 group">
          <div className="w-12 h-12 mx-auto bg-gray-100 rounded-full text-blue-800 flex items-center justify-center mb-4 group-hover:bg-[var(--DarkBlue)] group-hover:text-white">
            {/* Icon Placeholder */}
            <svg xmlns="http://www.w3.org/2000/svg" className=' transition-colors duration-300  p-3 shadow-sm rounded-md h-14 w-14' viewBox="0 0 512 512">
                 	<rect width="512" height="512" fill="none" />
                 	<path fill="currentColor" d="M256 0C149.3 0 64 85.3 64 192c0 36.9 11 65.4 30.1 94.3l141.7 215c4.3 6.5 11.7 10.7 20.2 10.7s16-4.3 20.2-10.7l141.7-215C437 257.4 448 228.9 448 192C448 85.3 362.7 0 256 0m0 298.6c-58.9 0-106.7-47.8-106.7-106.8S197.1 85 256 85s106.7 47.8 106.7 106.8S314.9 298.6 256 298.6m0-170.6c-35.4 0-64 28.6-64 64s28.6 64 64 64s64-28.6 64-64s-28.6-64-64-64" />
                 </svg>
          </div>
          <h3 className="font-semibold text-lg text-blue-800">Visit Us</h3>
          <p className="text-gray-600 mt-2 text-sm">
            Village: Balkhandsura<br />
            Post: Chhaigaon Makhan<br />
            Khandwa, MP, PinCode: 450771
          </p>
        </div>
        {/* Card 4 */}
        <div className="bg-white shadow-md rounded-lg p-6 text-center hover:shadow-lg transition duration-300 group">
          <div className="w-12 h-12 mx-auto bg-gray-100 rounded-full text-blue-800 flex items-center justify-center mb-4 group-hover:bg-[var(--DarkBlue)] group-hover:text-white">
            {/* Icon Placeholder */}
            <svg xmlns="http://www.w3.org/2000/svg" className=' transition-colors duration-300  p-3 shadow-sm rounded-md h-14 w-14' viewBox="0 0 16 16">
                  	<rect width="16" height="16" fill="none" />
                  	<path fill="currentColor" fill-rule="evenodd" d="M1 8a7 7 0 1 1 14 0A7 7 0 0 1 1 8m7.5-4v3.793l2.854 2.853l-.708.708L7.5 8.207V4zm0-1V2h-1v1zm0 11v-1h-1v1zM13 7.5h1v1h-1zm-10 0H2v1h1z" clip-rule="evenodd" />
                  </svg>
          </div>
          <h3 className="font-semibold text-lg text-blue-800">Working Hours</h3>
          <p className="text-gray-600 mt-2 text-sm">Mon-Fri: 9:00 AM - 5:00 PM</p>
        </div>
      </div>

      {/* Map and Contact Form */}
      <div className="flex flex-col lg:flex-row mt-10 px-10 gap-8 mx-auto max-w-[85rem]">
        {/* Map Section */}
        <div className="w-full lg:w-1/3 h-11/12 bg-gray-300 rounded-lg shadow-md">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3703.914624760464!2d76.22298377971613!3d21.822229328550034!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd8116f759b43d1%3A0x7f69c9b8c7674282!2sDr.%20C.V.%20Raman%20University!5e0!3m2!1sen!2sin!4v1732006828806!5m2!1sen!2sin"
            title="map"
            className="w-full h-full rounded-md shadow-md"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        {/* Contact Form */}
        <div className="w-full lg:w-2/3 bg-white shadow-md rounded-lg p-6 px-14">
          <h3 className="text-xl font-semibold mb-4 text-blue-800">Send Us a Message</h3>
          <form className="space-y-6" onSubmit={handelSend}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="firstName"
                  className="block text-gray-700 font-medium mb-1"
                >
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  value={formData.firstName}
                  onChange={(data)=>{setFormData({...formData,firstName:data.target.value})}}
                  placeholder="Enter your first name"
                  className="w-full border rounded-md p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-800"
                />
              </div>
              <div>
                <label
                  htmlFor="lastName"
                  className="block text-gray-700 font-medium mb-1"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  value={formData.lastName}
                  onChange={(data)=>{setFormData({...formData,lastName:data.target.value})}}
                  placeholder="Enter your last name"
                  className="w-full border rounded-md p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-800"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-gray-700 font-medium mb-1"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(data)=>{setFormData({...formData,email:data.target.value})}}
                placeholder="Enter your email"
                className="w-full border rounded-md p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-800"
              />
            </div>
            <div>
              <label
                htmlFor="phone"
                className="block text-gray-700 font-medium mb-1"
              >
                Phone Number
              </label>
              <input
                type="text"
                id="phone"
                value={formData.number}
                onChange={(data)=>{setFormData({...formData,number:data.target.value})}}
                placeholder="Enter your phone number"
                className="w-full border rounded-md p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-800"
              />
            </div>
            <div>
              <label
                htmlFor="subject"
                className="block text-gray-700 font-medium mb-1"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                value={formData.subject}
                onChange={(data)=>{setFormData({...formData,subject:data.target.value})}}
                placeholder="Enter your subject"
                className="w-full border rounded-md p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-800"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-gray-700 font-medium mb-1"
              >
                Message
              </label>
              <textarea
                id="message"
                placeholder="Enter your message"
                value={formData.message}
                onChange={(data)=>{setFormData({...formData,message:data.target.value})}}
                className="w-full border rounded-md p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-800 h-28"
              ></textarea>
            </div>
            <div className="flex justify-center">
            <button
              type="submit"
              className="bg-blue-800 text-white px-5 py-3 w-1/3 rounded-md hover:bg-blue-700"
            >
              Submit
            </button>
            </div>
          </form>
        </div>
      </div>
    <FAQSection />
    </div>
    </>
  );
};

export default ContactPage;
