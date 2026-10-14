import { createBrowserRouter } from 'react-router-dom'
// TODO 13a: import the Login and SignUp pages (they are in ./pages)
import Home from './pages/Home'

const router = createBrowserRouter([
  // TODO 13b: the app should start on the login page -> add a route for path "/" that shows <Login />
  // TODO 13c: add a route for "/login" that shows <Login />
  // TODO 13d: add a route for "/signup" that shows <SignUp />
  { path: '/home', element: <Home /> },
])

export default router
