import React from 'react'
import CoursePage from './courseComponent/course'
import CourseTopImage from './courseComponent/CourseMainImage'
import { useEffect } from 'react';

export default function Courses() {
  return (
    <>
    <CourseTopImage/>
    <CoursePage/>
    </>
  )
}
