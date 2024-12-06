import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './router/router.jsx'
import FireBaseProvider from './Context/context.jsx'
import { Toaster } from 'react-hot-toast';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FireBaseProvider>
      <RouterProvider router={router} />
    </FireBaseProvider>
    <Toaster toastOptions={{
    error: {
      className: 'bg-red-500 text-white font-semibold text-sm px-4 py-3 rounded-lg shadow-lg',
      iconTheme: {
        primary: '#ffffff',
        secondary: '#b91c1c',
      },
      style: {
        whiteSpace: 'nowrap', // Prevent text wrapping
        backgroundColor:"#ef4444",
        color:"white",
      },
      duration: 2500,
    },
    success:{
      className: 'font-semibold text-sm px-4 py-3 rounded-lg shadow-lg',
    }
  }}
  />
  </StrictMode>,
)
