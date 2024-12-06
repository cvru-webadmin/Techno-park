import React from 'react'
import Intro from './Placement Component/Intro'
import VIHAN from './Placement Component/VIHAN'
import CareerInternship from './Placement Component/Career&Internship'
import IntroTPO from './Placement Component/TPOMessage'
import Companies from './Placement Component/Companies'
import StudentPlaced from './Placement Component/StudentPlaced'

export default function Placement() {
  return (
    <>
    <nav className="h-16 bg-gradient-to-r from-gray-600 via-gray-700 to-gray-800 text-white shadow-lg">
        {" "}
      </nav>
    <Intro/>
    <VIHAN/>
    <CareerInternship/>
    <IntroTPO/>
    <Companies/>
    <StudentPlaced/>
    </>
  )
}
