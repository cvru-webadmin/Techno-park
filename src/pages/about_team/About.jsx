import React from 'react'
import AboutTopImage from './AboutComponent/AboutMain'
import AboutUniversity from './AboutComponent/AboutCVRU'
import AboutSchool from './AboutComponent/AboutTechno'
import VisionMission from './AboutComponent/vision_mission'
import IntroCoS from './AboutComponent/CoSIntro'
import FacultyCard from './AboutComponent/FacultyCard'

export default function About() {
  return (
    <>
    <AboutTopImage/>
    <AboutUniversity/>
    <AboutSchool/>
    <VisionMission/>
    <IntroCoS/>
    <FacultyCard/>
    </>
  )
}
