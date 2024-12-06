import React, { useContext, useState } from 'react';
import FAQ from './componet/FAQ';
import FAQSection from './componet/FAQ';
import { FireContext } from '../../Context/context';
import { Link } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import MessageReply from './componet/Replay';

const ContactUs = () => {

  
  //import Firebase context for send message
  const {SendMassage}= useContext(FireContext);

  const [Replay,setReplay]=useState(false);
  const [MessageDetails,setMessageDetails]=useState(null);

  //state define for form
  const [formData,setFormData] = useState({
    firstName:"",
    lastName:"",
    email:"",
    number:"",
    subject:"",
    message:"",
  })
  const handelSend=async(e)=>{
    e.preventDefault();
    let Name=formData.firstName + " " +formData.lastName ;
    let res=await SendMassage(
      Name,
      formData.email,
      formData.number,
      formData.subject,
      formData.message
    )
    
    if(res){
      setMessageDetails(formData);
      setReplay(true);
      setFormData({
        firstName:"",
        lastName:"",
        email:"",
        number:"",
        subject:"",
        message:"",
      })
    }
      
    // console.log(formData);
  }

  return (
    <section>
    {/* Map */}
    <div className='h-16 bg-[var(--DarkBlue)]'></div>
    <MessageReply onOpen={Replay} MessageDetails={MessageDetails} onClose={()=>{setReplay(false);setMessageDetails(null)}} />

    <div>
      <div className="w-full h-72">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3703.914624760464!2d76.22298377971613!3d21.822229328550034!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd8116f759b43d1%3A0x7f69c9b8c7674282!2sDr.%20C.V.%20Raman%20University!5e0!3m2!1sen!2sin!4v1732006828806!5m2!1sen!2sin" 
        title="map"
        className="w-full h-full rounded-md shadow-md"
        allowFullScreen="" 
        loading="lazy" 
        referrerPolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </div>
    {/* Heading */}
    <div className="absolute md:top-1/4 top-[36%] left-1/2 -translate-x-1/2 bg-blue-800/80 rounded-lg shadow-lg p-5 md:w-auto w-[59%] flex items-center justify-center">
      <h2 className="md:text-4xl text-2xl font-extrabold text-center text-white tracking-wider uppercase" style={{textShadow:"2px 2px 2px black"}}>
        Contact Us
      </h2>
    </div>
    
    <div className="bg-gray-100 py-10 px-5 md:px-20">
      <div className="flex justify-center">
        <div className="lg:grid lg:grid-cols-3 gap-8 mx-auto max-w-7xl">
          {/* Contact Info */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">Get in Touch</h3>
            <div className="space-y-4">
              {/* card  */}
              <div className="gap-5 border-2 border-gray-300/30 h-auto group hover:scale-105 hover:shadow-lg transition-all duration-300 shadow-sm flex p-5 rounded-lg">              
                <span className='h-full'>
                <svg xmlns="http://www.w3.org/2000/svg" className='text-blue-800 transition-colors duration-300  group-hover:bg-[var(--DarkBlue)] group-hover:text-white  p-3 border-2 shadow-sm rounded-md h-14 w-14 border-gray-400/20' viewBox="0 0 24 24">
                	<rect width="24" height="24" fill="none" />
                	<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.95">
                		<path strokeDasharray="64" strokeDashoffset="64" d="M8 3c0.5 0 2.5 4.5 2.5 5c0 1 -1.5 2 -2 3c-0.5 1 0.5 2 1.5 3c0.39 0.39 2 2 3 1.5c1 -0.5 2 -2 3 -2c0.5 0 5 2 5 2.5c0 2 -1.5 3.5 -3 4c-1.5 0.5 -2.5 0.5 -4.5 0c-2 -0.5 -3.5 -1 -6 -3.5c-2.5 -2.5 -3 -4 -3.5 -6c-0.5 -2 -0.5 -3 0 -4.5c0.5 -1.5 2 -3 4 -3Z">
                			<animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="64;0" />
                			<animateTransform id="lineMdPhoneCallLoop0" fill="freeze" attributeName="transform" begin="0.6s;lineMdPhoneCallLoop0.begin+2.7s" dur="0.5s" type="rotate" values="0 12 12;15 12 12;0 12 12;-12 12 12;0 12 12;12 12 12;0 12 12;-15 12 12;0 12 12" />
                		</path>
                		<path strokeDasharray="4" strokeDashoffset="4" d="M15.76 8.28c-0.5 -0.51 -1.1 -0.93 -1.76 -1.24M15.76 8.28c0.49 0.49 0.9 1.08 1.2 1.72">
                			<animate fill="freeze" attributeName="stroke-dashoffset" begin="lineMdPhoneCallLoop0.begin+0s" dur="2.7s" keyTimes="0;0.111;0.259;0.37;1" values="4;0;0;4;4" />
                		</path>
                		<path strokeDasharray="6" strokeDashoffset="6" d="M18.67 5.35c-1 -1 -2.26 -1.73 -3.67 -2.1M18.67 5.35c0.99 1 1.72 2.25 2.08 3.65">
                			<animate fill="freeze" attributeName="stroke-dashoffset" begin="lineMdPhoneCallLoop0.begin+0.2s" dur="2.7s" keyTimes="0;0.074;0.185;0.333;0.444;1" values="6;6;0;0;6;6" />
                		</path>
                	</g>
                </svg>
                </span>
                
                <span className='flex flex-col gap-1'>
                <span className="text-blue-800 text-md font-bold">Call us</span>
                <p className="text-gray-500 text-sm">Mon to Fri from 8pm to 9pm</p>
                <p className="text-gray-700 text-sm">(+91) 6269001063<br/>(+91) 6269001060</p>
                <p className="text-gray-700 text-sm">Phone +07320-247700/01</p>
                </span>
              </div>
              
              {/* card  */}
              <div className="gap-5 border-2 border-gray-300/30 h-auto group hover:scale-105 hover:shadow-lg transition-all duration-300 shadow-sm flex p-5 rounded-lg">
                <span className='h-full'>
                 <svg xmlns="http://www.w3.org/2000/svg" className='text-blue-800 transition-colors duration-300  group-hover:bg-[var(--DarkBlue)] group-hover:text-white  p-3 border-2 shadow-sm rounded-md h-14 w-14 border-gray-400/20' viewBox="0 0 24 24">
                 	<rect width="24" height="24" fill="none" />
                 	<path fill="currentColor" d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m-.4 4.25l-6.54 4.09c-.65.41-1.47.41-2.12 0L4.4 8.25a.85.85 0 1 1 .9-1.44L12 11l6.7-4.19a.85.85 0 1 1 .9 1.44" />
                 </svg>
                </span>
                
                <span className='flex flex-col gap-1'>
                <span className="text-blue-800 text-md font-bold">Email us</span>
                <p className="text-gray-500 text-sm">we are here to help you</p>
                <p className="text-gray-700 text-sm">info@cvru.ac.in</p>
                </span>
              </div>
              {/* card  */}
              <div className="gap-5 border-2 border-gray-300/30 h-auto group hover:scale-105 hover:shadow-lg transition-all duration-300 shadow-sm flex p-5 rounded-lg">
                <span className='h-full'>
                <svg xmlns="http://www.w3.org/2000/svg" className='text-blue-800 transition-colors duration-300  group-hover:bg-[var(--DarkBlue)] group-hover:text-white  p-3 border-2 shadow-sm rounded-md h-14 w-14 border-gray-400/20' viewBox="0 0 512 512">
                 	<rect width="512" height="512" fill="none" />
                 	<path fill="currentColor" d="M256 0C149.3 0 64 85.3 64 192c0 36.9 11 65.4 30.1 94.3l141.7 215c4.3 6.5 11.7 10.7 20.2 10.7s16-4.3 20.2-10.7l141.7-215C437 257.4 448 228.9 448 192C448 85.3 362.7 0 256 0m0 298.6c-58.9 0-106.7-47.8-106.7-106.8S197.1 85 256 85s106.7 47.8 106.7 106.8S314.9 298.6 256 298.6m0-170.6c-35.4 0-64 28.6-64 64s28.6 64 64 64s64-28.6 64-64s-28.6-64-64-64" />
                 </svg>
                </span>
                
                <span className='flex flex-col gap-1'>
                <span className="text-blue-800 text-md font-bold">Visit us</span>
                <p className="text-gray-500 text-sm">come viste University</p>
                <p className="text-gray-700 text-sm">Balkhandsura,chhaigaon Makhan, Khandwa MP, 450771</p>
                </span>
              </div>
              {/* card  */}
              <div className="gap-5 border-2 border-gray-300/30 h-auto group hover:scale-105 hover:shadow-lg transition-all duration-300 shadow-sm flex p-5 rounded-lg">
                <span className='h-full'>
                 <svg xmlns="http://www.w3.org/2000/svg" className='text-blue-800 transition-colors duration-300  group-hover:bg-[var(--DarkBlue)] group-hover:text-white  p-3 border-2 shadow-sm rounded-md h-14 w-14 border-gray-400/20' viewBox="0 0 16 16">
                  	<rect width="16" height="16" fill="none" />
                  	<path fill="currentColor" fillRule="evenodd" d="M1 8a7 7 0 1 1 14 0A7 7 0 0 1 1 8m7.5-4v3.793l2.854 2.853l-.708.708L7.5 8.207V4zm0-1V2h-1v1zm0 11v-1h-1v1zM13 7.5h1v1h-1zm-10 0H2v1h1z" clipRule="evenodd" />
                  </svg>
                </span>
                
                <span className='flex flex-col gap-1'>
                <span className="text-blue-800 text-md font-bold">Working Hours</span>
                <p className="text-gray-500 text-sm">working time</p>
                <p className="text-gray-700 text-sm">Mon-Fri: 9:00 AM - 5:00 PM</p>
                </span>
              </div>
              
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white shadow-md rounded-lg p-6 lg:mt-0 mt-8 md:px-16 col-span-2">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">Send Us a Message</h3>
            <form className="space-y-4" onSubmit={handelSend}>
              <div className='md:grid grid-cols-2 gap-6'>
              <div>
                <label htmlFor="name" className="block text-gray-700 font-medium mb-1">First Name</label>
                <input
                  type="text"
                  required
                  id="name"
                  value={formData.firstName}
                  onChange={(e)=>{setFormData({...formData,firstName:e.target.value})}}
                  placeholder="Enter your first name"
                  className="w-full border rounded-md p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-800"
                />
              </div>
              <div>
                <label htmlFor="name" className="block text-gray-700 font-medium mb-1 md:mt-0 mt-4">Last Name</label>
                <input
                  type="text"
                  required
                  id="name"
                  value={formData.lastName}
                  onChange={(e)=>{setFormData({...formData,lastName:e.target.value})}}
                  placeholder="Enter your last name"
                  className="w-full border rounded-md p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-800"
                />
              </div>
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-700 font-medium mb-1">Email</label>
                <input
                  type="email"
                  required
                  id="email"
                  value={formData.email}
                  onChange={(e)=>{setFormData({...formData,email:e.target.value})}}
                  placeholder="Enter your email"
                  className="w-full border rounded-md p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-800"
                />
              </div>
              <div>
                <label htmlFor="number" className="block text-gray-700 font-medium mb-1">Phone Number</label>
                <input
                  type="tel"
                  required                  
                  id="number"
                  maxLength={10}
                  minLength={10}
                  value={formData.number}
                  onChange={(e)=>{setFormData({...formData,number:e.target.value})}}
                  placeholder="Enter your phone number"
                  className="w-full border rounded-md p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-800"
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-gray-700 font-medium mb-1">Subject</label>
                <input
                  type="text"
                  required
                  id="subject"
                  value={formData.subject}
                  onChange={(e)=>{setFormData({...formData,subject:e.target.value})}}
                  placeholder="Enter your subject"
                  className="w-full border rounded-md p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-800"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-700 font-medium mb-1">Message</label>
                <textarea
                  id="message"
                  required
                  value={formData.message}
                  onChange={(e)=>{setFormData({...formData,message:e.target.value})}}
                  placeholder="Enter your message"
                  className="w-full border resize-none rounded-md p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-800 h-24"
                ></textarea>
              </div>
              <div className="text-gray-500 text-xs flex my-3 gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2m1 15h-2v-6h2zm0-8h-2V7h2z"
                  ></path>
                </svg>
                <h4>
                 If you want to give feedback, please use the feedback form. This form is for inquiries and messages only.
                 <NavLink className='text-blue-700 font-semibold capitalize ml-1' to="/feedback">Go to feedback page</NavLink>
                </h4>
                </div>
              <div className='flex justify-center'>
              <button
                type="submit"
                className="bg-blue-800 text-white px-20 py-3 rounded-md hover:bg-blue-700"
              >
                Submit
              </button>
              </div>
            </form>
          </div>
        </div>


      </div>
    </div>
    <FAQSection />
    </section>
  );
};

export default ContactUs;
