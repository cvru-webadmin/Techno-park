import React, { useContext, useEffect, useState } from 'react';
import Welocome_model from './dashbord componet/welocome_model';
import DashboardPage from './dashbord componet/UnansweredQuestions';
import Topcards from './dashbord componet/Topcards';
import UnansweredQuestions from './dashbord componet/UnansweredQuestions';
import AnsweredNotAnsweredGraph from './dashbord componet/AnswerGraph';
import { FireContext } from '../../../context/context';

export default function Dashbord() {
 
  const [isModalOpen, setIsModalOpen] = useState(true); // Modal is open by default
  const [isTime,setTime] = useState("");
  const [totalEvents,setEvents]=useState([]);
  const [totalInqueies,setInquers]=useState([]);
  const [totalFeedbacks,setFeedbacks]=useState([]);
  const [answer,setAnswer]=useState(0);
  const [notAnswer,setNotAnswer]=useState(0);

 const{GetMessage,GetEvents,GetFeedbacks}=useContext(FireContext);

 useEffect(()=>{
  const fetchData =async()=>{
    try {
      let resMessages= await GetMessage();
      let resEvents= await GetEvents();
      let resFeedbacks= await GetFeedbacks();
      let messages=resMessages.docs.map((data)=>data.data());
      setInquers(messages);
      let events=resEvents.docs.map((data)=>data.data());
      setEvents(events);
      let feedbacks=resFeedbacks.docs.map((data)=>data.data());
      setFeedbacks(feedbacks);
      let notAns=messages.filter(((data)=>data.Answer==="")).length;
    setNotAnswer(notAns);
    let ans=messages.length-notAns;
    setAnswer(ans);
      // console.log(resFeedbacks)
    } catch (error) {
      console.log("Error to information: ",error);
    }
  }
  fetchData();
 },[])
  // console.log(totalFeedbacks);
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
    <section className='h-screen w-full overflow-y-auto'>
     {/* <Welocome_model isOpen={isModalOpen} isClose={closeModal} isTime={isTime} /> */}
      {/* main dashbord start here---- */}
      <div className='min-h-screen bg-gray-100 px-3 pb-6 w-full'>
      <Topcards isTime={isTime} events={totalEvents} feedbacks={totalFeedbacks} Inqueris={totalInqueies} />
      {/* <AnsweredNotAnsweredGraph answered={answer} notAnswered={notAnswer} />  */}
      <UnansweredQuestions Inqueris={totalInqueies} />
      </div>
    </section>
  )
}
