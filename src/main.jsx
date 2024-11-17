import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './router/router.jsx'
import FireBaseProvider from './Context/context.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FireBaseProvider>
      <RouterProvider router={router} />
    </FireBaseProvider>
  </StrictMode>,
)
