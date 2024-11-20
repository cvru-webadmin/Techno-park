import { useState } from 'react'
import './App.css'
import { Outlet } from 'react-router-dom'
import Navbar from './components/Nav'
import Footer from './components/Footer'
import { ExampleProvider } from './context/ExampleContext'

function App() {
  return (
    <>
    <ExampleProvider>
    <Navbar />
    <Outlet />
    <Footer />
    </ExampleProvider>

    </>
  )
}

export default App
