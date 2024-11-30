import React, { useContext, useEffect, useState } from 'react'
import { FireContext } from '../../../Context/context';

export default function FeedbackPage() {
  const [feedbacks,setFeedbacks] = useState([]);
  const [isLodding,setLoading]=useState(false);

  //context import
  const{GetFeedbacks}=useContext(FireContext);

  useEffect(()=>{
    setLoading(true);
    const getfeedback= async()=>{
    try {
      let res = await GetFeedbacks();
      let feedback=res.docs.map((feedback)=>(
        {id:feedback.id,...feedback.data()}
      ))
      if(res){
        setFeedbacks(feedback);

      }
    } catch (error) {
        console.log("errro to get feedback: ",error)
        setLoading(false);
    }
    finally{
      setLoading(false);
    }
  }
    getfeedback();
  },[])
  console.log(feedbacks)

  return (
    <div className="h-screen overflow-y-auto w-full p-12 pt-0 bg-gray-50 flex flex-col items-center">
      {/* Header */}
      <header className="bg-white shadow-md p-4 mb-6 w-full rounded-lg mt-6">
        <h1 className="text-2xl flex gap-3 font-bold text-gray-700">Admin - Techno Park Feedbacks
        </h1>
      </header>

      {/* Main Content */}
      <main className="w-full max-w-full bg-white mt-6 shadow-lg rounded-lg">
        <div className="p-6">
          <h2 className="text-xl font-bold text-gray-700 py-2 text-center mb-4">
            Feedback Overview
          </h2>
          <table className="w-full border-collapse text-left text-gray-700">
          <thead>
            <tr className="bg-slate-500 text-white">
              <th className="border-b-2 py-3 px-2 text-left text-sm font-semibold uppercase tracking-wider">
                #
              </th>
              <th className="border-b-2 py-3 px-6 text-left text-sm font-semibold uppercase tracking-wider">
              Name
              </th>
              <th className="border-b-2 py-3 px-6 text-left text-sm font-semibold uppercase tracking-wider">
              email
              </th>
              <th className="border-b-2 py-3 px-6 text-left text-sm font-semibold uppercase tracking-wider">
              Feedback
              </th>
              <th className="border-b-2 py-3 px-6 text-left text-sm font-semibold uppercase tracking-wider">
              Date
              </th>
            </tr>
          </thead>
            <tbody>
            {!isLodding ? (
               feedbacks.map((feedback, index) => (
                 <tr
                   key={index}
                   className={`${
                     index % 2 === 0 ? "bg-gray-50" : "bg-gray-100"
                   } hover:bg-gray-200 transition`}
                 >
                   <td className="border-b py-3 px-6">{index + 1}</td>
                   <td className="border-b py-3 px-4 capitalize text-nowrap">
                     {feedback.feedbackBy}
                   </td>
                   <td className="border-b py-3 px-3">{feedback.email}</td>
                   <td className="border-b py-3 px-2 w-2/5">{feedback.feedback}</td>
                   <td className="border-b py-3 px-4 w-36">{feedback.createdAt}</td>
                 </tr>
               ))
             ) : (
               Array(5)
                 .fill(null)
                 .map((_, index) => (
                   <tr key={index} className="animate-pulse">
                     <td className="border-b py-3 px-6">
                       <div className="h-4 bg-gray-300 rounded w-6 mx-auto"></div>
                     </td>
                     <td className="border-b py-3 px-6">
                       <div className="h-4 bg-gray-300 rounded w-24"></div>
                     </td>
                     <td className="border-b py-3 px-6">
                       <div className="h-4 bg-gray-300 rounded w-32"></div>
                     </td>
                     <td className="border-b py-3 px-6">
                       <div className="h-4 bg-gray-300 rounded w-40 mx-auto"></div>
                     </td>
                     <td className="border-b py-3 px-6">
                       <div className="h-4 bg-gray-300 rounded w-20 mx-auto"></div>
                     </td>
                   </tr>
                 ))
             )}
             
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}

