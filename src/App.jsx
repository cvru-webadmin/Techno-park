import { useEffect, useState } from 'react'
import './App.css'
import { Outlet } from 'react-router-dom'
import Navbar from './components/Nav'
import Footer from './components/Footer'
import { ExampleProvider } from './context/ExampleContext'
import toast from 'react-hot-toast'
import { messaging } from './Context/context'
import { getToken } from 'firebase/messaging'

function App() {

  async function requestPermission() {
    console.log("Requesting permission...");
    let permission = await Notification.requestPermission();
    if (permission === "granted") {
      console.log("Notification permission granted.");
      let token = await getToken(messaging, {
        vapidKey:
          "BIa_yb1-u0TsgdcRt6P8OnVIKqTsXs0OfAeUNU-VkGEqOVoCVgarf7ddZ7ljRjpGERwbUdHTz798IftxXO-o5Ig",
      });
      console.log(token);
    } else if (permission == "denied") {
      toast("you denied permision of notification");
    }
      
    }

    useEffect(()=>{ 
      requestPermission(); 
    },[])
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
