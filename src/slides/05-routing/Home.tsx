// Slides: "Routing - results" and "Navigation between pages" (Link component)
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
      <h1>Home page</h1>
      <p>Lorem ipsum dolor sit amet.</p>
      <Link to="/contacts">Contacts</Link>
    </>
  )
}

export default Home
