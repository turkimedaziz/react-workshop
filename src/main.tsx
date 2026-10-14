import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// Slide: "Install bootstrap in react project"
import 'bootstrap/dist/css/bootstrap.css'
// Slide: "Routing - providing routes"
import { RouterProvider } from 'react-router-dom'
import router from './shell/routes'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
