import { useState } from 'react'
import './App.css'
import { Outlet } from 'react-router-dom'
import Navbar from './components/Nav'
import Footer from './components/Footer'
import { ScrollProvider } from './context/DropDownScrollContext'

function App() {
  return (
    <>
    <ScrollProvider>
    <Navbar />
    <Outlet />
    <Footer />
    </ScrollProvider>

    </>
  )
}

export default App
