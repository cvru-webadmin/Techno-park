import React from 'react'
import FeaturedCourses from './Home Components/FeaturedCourses'
import ExploreCampus from './Home Components/ExploreCampus'
import Achievements from './Home Components/Achievements'
import HeroSection from './Home Components/HeroSection'
import WhyChooseUs from './Home Components/WhyWeus'
import UniversityLanding from './Home Components/HeroSection'
import HomePage from './Home Components/HeroSection'
import PlacementSection from './Home Components/Placments'

export default function Home() {
  return (
    <>
    <div>
    <HomePage />
    {/* <UniversityLanding /> */}
    <WhyChooseUs />
    <FeaturedCourses/>
    <PlacementSection />
    <Achievements/>
    <ExploreCampus/>
    </div>
    </>
  )
}
