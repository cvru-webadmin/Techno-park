import React from 'react'
import FeaturedCourses from './Home Components/FeaturedCourses'
import CampusExplore from './Home Components/ExploreCampus'
import Achievements from './Home Components/Achievements'
import HeroSection from './Home Components/HeroSection'
import WhyChooseUs from './Home Components/WhyWeus'
import UniversityLanding from './Home Components/HeroSection'
import HomePage from './Home Components/HeroSection'
import PlacementSection from './Home Components/Placments'
import CultureAndActivities from './Home Components/culture'
import ChatBot from '../../components/ChatBot/Assitent'
import FacultyList from './Home Components/team'
import GoToFeedback from './Home Components/Feedback'

export default function Home() {
  return (
    <>
    <div>
    <HomePage />
    {/* <UniversityLanding /> */}
    <WhyChooseUs />
    <FeaturedCourses/>
    <ChatBot />
    <PlacementSection />
    <CampusExplore/>
    <Achievements/>
    <CultureAndActivities/>
    <FacultyList/>
    <GoToFeedback />
    </div>
    </>
  )
}
