import React, { useEffect, useState } from 'react';
import Welocome_model from './dashbord componet/welocome_model';
import DashboardPage from './dashbord componet/UnansweredQuestions';
import Topcards from './dashbord componet/Topcards';
import UnansweredQuestions from './dashbord componet/UnansweredQuestions';

export default function Dashbord() {
 
  const [isModalOpen, setIsModalOpen] = useState(true); // Modal is open by default
  const [isTime,setTime] = useState("");
  
  const closeModal = () => {
    setIsModalOpen(false); // Close modal on button click
  };
  useEffect(()=>{
    const currentTime = new Date();
    const hours = currentTime.getHours();
    let timeOfDay;
    if (hours >= 6 && hours < 12) {
      timeOfDay = "Morning";
    } else if (hours >= 12 && hours < 18) {
      timeOfDay = "Afternoon";
    } else if (hours >= 18 && hours < 21) {
      timeOfDay = "Evening";
    } else {
      timeOfDay = "Night";
    }
    setTime(timeOfDay);

    setTimeout(() => {
      setIsModalOpen(false)
    }, 2400);
  },[])

  return (
    <>
     <Welocome_model isOpen={isModalOpen} isClose={closeModal} isTime={isTime} />

      {/* main dashbord start here---- */}
      <div className='min-h-screen bg-gray-100 px-3 pb-6 w-full'>
      <Topcards isTime={isTime} />
      <UnansweredQuestions />
      </div>
    </>
  )
}
