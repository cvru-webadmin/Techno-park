import React, { useContext, useEffect, useState } from 'react'
import { FireContext } from '../../../Context/context'
import "../../Admin.css"
import AnswerModal from './enquery componet/AnswerModel';

export default function Enquery() {

  const {GetMessage, InqoeryAnswer,formatDate}=useContext(FireContext);
  const [isLoadding,setLoadding]=useState(false);
  const [Messages,setMessage]=useState([]);
  const [isModalOpen, setModalOpen] = useState(false);
  const [onAnswer, setOnAnswer] = useState(false);
  const [Inquery, setInquery] = useState({});
  const [totalInqueris,setTotalInqueries]=useState([]);
  const [filterMode,setMode]=useState("total");

  useEffect(()=>{
    setLoadding(true);
    
    let getdata=async()=>{
      try {
        let response=await GetMessage();
        let data=response.docs.map((doc)=>(
          {
            id:doc.id,...doc.data()
          }
        ))
        setMessage(data);
        setTotalInqueries(data);
      } catch (error) {
        alert("some problem for get data")
        setLoadding(false);
      }
      finally{
        setLoadding(false);
      }
    }
    getdata();
  },[onAnswer])

  //method for today inqueris
  const [todayEnquerys,setTodayEnquery]=useState(0);
  const todayEnquery =()=>{
    const today=formatDate();
    const todayCount = totalInqueris.filter((message) => message.createdAt === today).map((message)=>message);
    setTodayEnquery(todayCount);
  }
  //method for pandding inqueris
  const [panddingInquress,setPandding]=useState([]);
  const paddingInqueris =()=>{
    const paddingCount=totalInqueris.filter((message)=>message.Answer=="").map((message)=>message);
    setPandding(paddingCount);
  }

  //useeefect to manage panddings and today inqueies
  useEffect(()=>{
    todayEnquery();
    paddingInqueris();
  },[Messages])

  const handleAnswer =(inquiry)=>{
    setInquery(inquiry);
    setModalOpen(true);
  }



  return (
    <div className="h-screen w-full bg-gray-100 p-6 overflow-y-auto scrollbar">
      {/* Answer Modal */}
      <AnswerModal
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
        askerDetails={Inquery}
        onSave={InqoeryAnswer}
        Answer={onAnswer}
        setAnswer={setOnAnswer}
      />

    <div className="mx-auto p-6 pt-0">
      {/* Header Section */}
      <header className="bg-white shadow-md p-4 mb-6 rounded-lg">
        <h1 className="text-2xl font-bold text-gray-700">Admin - Incoming Inquiries</h1>
      </header>

      {/* Inquiries Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Total Inquiries Card */}
        <div onClick={()=>{setMessage(totalInqueris);setMode("total")}} className="bg-white cursor-pointer p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold text-gray-700">Total Inquiries</h2>
            <div className="p-3 bg-indigo-500 text-white rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" className='h-6 w-6' viewBox="0 0 24 24">
             	<rect width="24" height="24" fill="none" />
             	<path fill="currentColor" d="M12 8V2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V10h-6a2 2 0 0 1-2-2m-3.75 3.5h7.5a.75.75 0 0 1 0 1.5h-7.5a.75.75 0 0 1 0-1.5m0 2.75h7.5a.75.75 0 0 1 0 1.5h-7.5a.75.75 0 0 1 0-1.5m0 2.75h7.5a.75.75 0 0 1 0 1.5h-7.5a.75.75 0 0 1 0-1.5m5.25-9V2.5l6 6H14a.5.5 0 0 1-.5-.5" />
             </svg>
            </div>
          </div>
          <div className="mt-4 text-3xl font-bold text-indigo-600">{totalInqueris.length}</div>
          <p className="text-sm text-gray-500 mt-2">Total number of inquiries received to date.</p>
        </div>

        {/* Today's Inquiries Card */}
        <div onClick={()=>{setMessage(todayEnquerys);setMode("today")}} className="bg-white cursor-pointer p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold text-gray-700">Today's Inquiries</h2>
            <div className="p-3 bg-green-500 text-white rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" className='h-7 w-7' viewBox="0 0 24 24">
              	<rect width="24" height="24" fill="none" />
              	<path fill="currentColor" d="M8.5 14a1.25 1.25 0 1 0 0-2.5a1.25 1.25 0 0 0 0 2.5m0 3.5a1.25 1.25 0 1 0 0-2.5a1.25 1.25 0 0 0 0 2.5m4.75-4.75a1.25 1.25 0 1 1-2.5 0a1.25 1.25 0 0 1 2.5 0M12 17.5a1.25 1.25 0 1 0 0-2.5a1.25 1.25 0 0 0 0 2.5m4.75-4.75a1.25 1.25 0 1 1-2.5 0a1.25 1.25 0 0 1 2.5 0" />
              	<path fill="currentColor" fillRule="evenodd" d="M8 3.25a.75.75 0 0 1 .75.75v.75h6.5V4a.75.75 0 0 1 1.5 0v.758q.228.006.425.022c.38.03.736.098 1.073.27a2.75 2.75 0 0 1 1.202 1.202c.172.337.24.693.27 1.073c.03.365.03.81.03 1.345v7.66c0 .535 0 .98-.03 1.345c-.03.38-.098.736-.27 1.073a2.75 2.75 0 0 1-1.201 1.202c-.338.172-.694.24-1.074.27c-.365.03-.81.03-1.344.03H8.17c-.535 0-.98 0-1.345-.03c-.38-.03-.736-.098-1.073-.27a2.75 2.75 0 0 1-1.202-1.2c-.172-.338-.24-.694-.27-1.074c-.03-.365-.03-.81-.03-1.344V8.67c0-.535 0-.98.03-1.345c.03-.38.098-.736.27-1.073A2.75 2.75 0 0 1 5.752 5.05c.337-.172.693-.24 1.073-.27q.197-.016.425-.022V4A.75.75 0 0 1 8 3.25m10.25 7H5.75v6.05c0 .572 0 .957.025 1.252c.023.288.065.425.111.515c.12.236.311.427.547.547c.09.046.227.088.514.111c.296.024.68.025 1.253.025h7.6c.572 0 .957 0 1.252-.025c.288-.023.425-.065.515-.111a1.25 1.25 0 0 0 .547-.547c.046-.09.088-.227.111-.515c.024-.295.025-.68.025-1.252zM10.5 7a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 0-1.5z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
          <div className="mt-4 text-3xl font-bold text-green-600">{todayEnquerys.length}</div>
          <p className="text-sm text-gray-500 mt-2">Inquiries received today. Stay on top of the latest messages.</p>
        </div>

        {/* Pending Inquiries Card */}
        <div onClick={()=>{setMessage(panddingInquress);setMode("pandding")}} className="bg-white cursor-pointer p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold text-gray-700">Pending Inquiries</h2>
            <div className="p-3 bg-yellow-500 text-white rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" className='h-7 w-7' viewBox="0 0 24 24">
              	<rect width="24" height="24" fill="none" />
              	<path fill="currentColor" d="M12 20a8 8 0 1 0 0-16a8 8 0 0 0 0 16M10.756 8.4C10.686 7.65 11.264 7 12 7s1.313.649 1.244 1.4l-.494 4.15a.76.76 0 0 1-.75.7a.76.76 0 0 1-.75-.7zm2.494 7.35a1.25 1.25 0 1 1-2.5 0a1.25 1.25 0 0 1 2.5 0" />
              </svg>
            </div>
          </div>
          <div className="mt-4 text-3xl font-bold text-yellow-600">{panddingInquress.length}</div>
          <p className="text-sm text-gray-500 mt-2">Inquiries waiting to be addressed.</p>
        </div>
      </div> 
    </div>
    <main className="w-full max-w-full bg-white mt-6 shadow-lg rounded-lg">
        <div className="p-6">
          <h2 className="text-xl font-bold text-gray-700 py-2 text-center mb-4">
            {filterMode=="today"&&"Today "}
            {filterMode=="pandding"&&"Pandding "}
            Ask Questions
          </h2>
        <table className="table-auto w-full bg-white shadow-md rounded-lg">
          <thead className="bg-slate-500 text-white">
            <tr>
            <th className="border-b-2 py-3 px-6 text-left text-sm font-semibold uppercase tracking-wider">
                #
              </th>
              <th className="border-b-2 py-3 px-6 text-left text-sm font-semibold uppercase tracking-wider">
               Name
              </th>
              <th className="border-b-2 py-3 px-6 text-left text-sm font-semibold uppercase tracking-wider">
              Email
              </th>
              <th className="border-b-2 py-3 px-6 text-left text-sm font-semibold uppercase tracking-wider">
              Phone
              </th>
              <th className="border-b-2 py-3 px-6 text-center text-sm font-semibold uppercase tracking-wider">
              Subject
              </th>
              <th className="border-b-2 py-3 px-6 text-left text-sm font-semibold uppercase tracking-wider">
              Message
              </th>
              <th className="border-b-2 py-3 px-6 text-left text-sm font-semibold uppercase tracking-wider">
              Answer
              </th>
            </tr>
          </thead>
          <tbody>
          {isLoadding?
           (
            // Skeleton loader for loading rows
            Array(5)
              .fill(null)
              .map((_, index) => (
                <tr
                  key={index}
                  className={`border-b-2 ${
                    index+1 % 2 === 0 ? "bg-gray-100" : "bg-white"
                  }`}
                >
                  <td className="px-4 py-2.5">
                    <div className="h-4 bg-gray-200 rounded animate-pulse"></div>
                  </td>
                  <td className="px-4 py-2.5">
                    <div className="h-4 bg-gray-200 rounded animate-pulse"></div>
                  </td>
                  <td className="px-4 py-2.5">
                    <div className="h-4 bg-gray-200 rounded animate-pulse"></div>
                  </td>
                  <td className="px-4 py-2.5">
                    <div className="h-4 bg-gray-200 rounded animate-pulse"></div>
                  </td>
                  <td className="px-4 py-2.5">
                    <div className="h-4 bg-gray-200 rounded animate-pulse"></div>
                  </td>
                  <td className="px-4 py-2.5">
                    <div className="h-4 bg-gray-200 rounded animate-pulse"></div>
                  </td>
                  <td className="px-4 py-2.5">
                    <div className="h-4 bg-gray-200 rounded animate-pulse"></div>
                  </td>
                </tr>
              ))
          )
          :
          <>
          {Messages.length > 0 ? (
            Messages.map((inquiry, index) => (
              <tr
                key={index}
                className={`border-b text-sm ${
                  index % 2 === 0 ? "bg-gray-50" : "bg-white"
                }`}
              >
                <td className="px-4 py-3">{index + 1}</td>
                <td className="px-4 py-3 capitalize text-nowrap">{inquiry.Name}</td>
                <td className="px-4 py-3">{inquiry.Email}</td>
                <td className="px-4 py-3">{inquiry.PhoneNumber}</td>
                <td className="px-3 py-3 w-60 text-wrap">{inquiry.Subject}</td>
                <td className="px-4 py-3 w-1/4">{inquiry.Message}</td>
                <td className="px-4 py-3 w-1/4">
                  {inquiry.Answer === "" ? (
                    <button
                      className="flex items-center space-x-2 px-4 py-2 rounded-md bg-indigo-500 text-white text-sm font-semibold shadow-md hover:bg-indigo-600 focus:ring-2 focus:ring-indigo-300 transition"
                      onClick={() => handleAnswer(inquiry)}
                    >
                      {/* Icon */}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M20 6h-1v8c0 .55-.45 1-1 1H6v1c0 1.1.9 2 2 2h10l4 4V8c0-1.1-.9-2-2-2m-3 5V4c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v13l4-4h9c1.1 0 2-.9 2-2"></path>
                      </svg>
                      {/* Button Text */}
                      <span>Give Answer</span>
                    </button>
                  ) : (
                    <span className="text-gray-700">{inquiry.Answer}</span>
                  )}
                </td>
                
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6" className="px-4 py-6 text-center text-gray-500">
                No inquiries yet.
              </td>
            </tr>
          )}
        </>
          }
          </tbody>
          </table>
      </div>
      </main>
    </div>
  )
}
