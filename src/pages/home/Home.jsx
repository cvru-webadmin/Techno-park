import React from 'react'
import FeaturedCourses from './Home Components/FeaturedCourses'
import CampusExplore from './Home Components/ExploreCampus'
import Achievements from './Home Components/Achievements'
import HeroSection from './Home Components/HeroSection'
import WhyChooseUs from './Home Components/WhyWeus'
import UniversityLanding from './Home Components/HeroSection'
import HomePage from './Home Components/HeroSection'
import CultureAndActivities from './Home Components/culture'

export default function Home() {
  return (
    <>
    <div>
    <HomePage />
    {/* <UniversityLanding /> */}
    <WhyChooseUs />
    <FeaturedCourses/>
    <CampusExplore/>
    <Achievements/>
    <CultureAndActivities/>
    </div>
    </>
  )
}
