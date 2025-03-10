import React, { useContext, useEffect, useRef, useState } from "react";
import Header from "./componet/Header";
import EventCard from "./componet/EventCard";
import upcoming from "./image/upcoming-events-label-collection_662550-1788.webp";
import SelectionCard from "./componet/SelectionCard";
import { FireContext } from "../../Context/context";


const EventsPage = () => {

  const {GetEvents}=useContext(FireContext);
  const [Events,setEvents]=useState([])
  const [allEvents,setAllEvents]=useState([]);
  const [upcomingEvents,setUpcomingEvents]=useState([]);
  const [activeEvents,setActiveEvents]=useState([]);
  const [newsEvents,setNewsEvents]=useState([]);
  const [tab,setTab]=useState("all-event")

  useEffect(()=>{
    const FetchEvents =async()=>{
      try {
        const res= await GetEvents();
        const events=res.docs.map(doc=>({
          ...doc.data(),
          id:doc.id
        }))
        setEvents(events);
        setAllEvents(events);
      } catch (error) {
        
      }
    }
    FetchEvents();
  },[])

  //filter for Active events

  const ActiveEvents=()=>{
    const ActiveEvent=allEvents.filter((event)=>event.status==="Active").map((event)=>event);
    setActiveEvents(ActiveEvent);
  }
  //filter for upcoming events

  const UpcomingEvents=()=>{
    const UpcomingEvent=allEvents.filter((event)=>event.status==="Upcoming").map((event)=>event);
    setUpcomingEvents(UpcomingEvent);
  }
  //filter for news events

  const NewsEvents=()=>{
    const NewsEvent=allEvents.filter((event)=>event.status==="News").map((event)=>event);
    setNewsEvents(NewsEvent)
  }

  useEffect(()=>{
    UpcomingEvents();
    ActiveEvents();
    NewsEvents();
  },[allEvents])
  
  const eventSection=useRef(null);
  const expolor=useRef(null);

  const scroll=(To,pos)=>{
    const offset = pos; // Adjust this value to control the offset
    const elementPosition = To.current.getBoundingClientRect().top + window.pageYOffset;
    const offsetPosition = elementPosition - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* nav and header  */}
      <nav className="h-16 bg-gradient-to-r from-gray-600 via-gray-700 to-gray-800 text-white shadow-lg">
        {" "}
      </nav>
      <Header scroll={()=>scroll(expolor,80)} />

      <div className="py-0 px-6 lg:px-16 bg-gray-50" ref={expolor}>
        <h2 className="text-3xl lg:text-4xl font-extrabold text-indigo-900 text-center mb-5  mt-2 md:mt-0">
          Explore Our Events
        </h2>
        <p className="text-md lg:text-lg text-gray-600 text-center">
          Select any category to filter events and find out what’s happening
          next!
        </p>
        <SelectionCard
          Upcoming={upcomingEvents}
          Active={activeEvents}
          AllEvent={allEvents}
          News={newsEvents}
          setEvent={setEvents}
          scroll={()=>scroll(eventSection,30)}
          tab={setTab}
        />
      </div>

      {/*Events Section */}
      <section ref={eventSection} className="py-12 px-6 lg:px-16 bg-[#fff3e7]">
        <h2 className="text-3xl lg:text-4xl font-extrabold text-indigo-900 text-center mb-8">
          {tab==="upcoming"&&"Upcoming Events"}
          {tab==="all-event"&&"All Events"}
          {tab==="active"&&"Event Spotlight"}
          {tab==="news"&&"News & Announcement"}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-1 gap-8 max-w-6xl mx-auto">
          {Events.map((event) => (
            <EventCard key={event.id} {...event} />
          ))}
        </div>
      </section>

      {/* Active Events Section */}
      {/* <section className="py-12 px-6 lg:px-16 bg-gray-100">
        <h2 className="text-4xl font-bold text-indigo-900 mb-8">
          Active Events
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {activeEvents.map((event) => (
            <EventCard key={event.id} {...event} />
          ))}
        </div>
      </section> */}

      {/* News Section
      <section className="py-12 px-6 lg:px-16 bg-white">
        <h2 className="text-4xl font-bold text-indigo-900 mb-8">Latest News</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {news.map((event) => (
            <EventCard key={event.id} {...event} />
          ))}
        </div>
      </section> */}
    </div>
  );
};

export default EventsPage;
