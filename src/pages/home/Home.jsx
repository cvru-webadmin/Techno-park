import React from 'react'
import FeaturedCourses from './Home Components/FeaturedCourses'
import ExploreCampus from './Home Components/ExploreCampus'
import Achievements from './Home Components/Achievements'
import HeroSection from './Home Components/HeroSection'
import WhyChooseUs from './Home Components/WhyWeus'

export default function Home() {
  return (
    <>
    <div>
    <HeroSection />
    <WhyChooseUs />
    <FeaturedCourses/>
    <Achievements/>
    <ExploreCampus/>
    </div>
    </>
  )
}
