import React, { useContext, useRef } from 'react'
import AboutTopImage from './AboutComponent/AboutMain'
import AboutUniversity from './AboutComponent/AboutCVRU'
import AboutSchool from './AboutComponent/AboutTechno'
import VisionMission from './AboutComponent/vision_mission'
import IntroCoS from './AboutComponent/CoSIntro'
import FacultyCard from './AboutComponent/FacultyCard'
import { useEffect } from 'react'
import { ScrollContext } from '../../context/DropDownScrollContext'

export default function About() {
  const {dropDown,setDropDown}=useContext(ScrollContext)
  const Mission=useRef([])
  function ScrollToSection(index){
    if (Mission.current[index]) {
      const offset = 80; // Adjust this offset for fixed headers
      const elementPosition = Mission.current[index].getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: 'smooth',
      });
    }
  } 
  useEffect(()=>{
    if(dropDown=="Our Mission"){
      ScrollToSection(0)
    }
    if(dropDown=="Faculty"){
      ScrollToSection(1)
    }
    setDropDown("")
  },[dropDown])
  return (
    <>
    <AboutTopImage/>
    <AboutUniversity/>
    <AboutSchool/>
    <span ref={(e)=>{Mission.current[0]=e}}><VisionMission/></span>
    <span ref={(e)=>{Mission.current[1]=e}}>
    <IntroCoS/>
    <FacultyCard/>
    </span>
    </>
  )
}
