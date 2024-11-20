import React, { useContext, useRef } from 'react'
import AboutTopImage from './AboutComponent/AboutMain'
import AboutUniversity from './AboutComponent/AboutCVRU'
import AboutSchool from './AboutComponent/AboutTechno'
import VisionMission from './AboutComponent/vision_mission'
import IntroCoS from './AboutComponent/CoSIntro'
import FacultyCard from './AboutComponent/FacultyCard'
import { useEffect } from 'react'
import { ExampleContext } from '../../context/ExampleContext'

export default function About() {
  const {about}=useContext(ExampleContext)
  const Mission=useRef([])
  function ScrollToSection(index){
    if (Mission.current[index]) {
      Mission.current[index].scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
  useEffect(()=>{
    if(about=="Our Mission"){
      ScrollToSection(0)
    }
    if(about=="Faculty"){
      ScrollToSection(1)
    }
  },[about])
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
