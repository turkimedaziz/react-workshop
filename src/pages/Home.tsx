// TODO 12a: import { useNavigate } from 'react-router-dom'

const skillIcons: Record<string, string> = {
  'JSX and TSX': '⚛️',
  'Components and props': '🧩',
  'Event handling': '🖱️',
  'State with useState': '🔄',
  'Forms with react-hook-form': '📋',
  'Routing with react-router-dom': '🗺️',
}

const skills = [
  'JSX and TSX',
  'Components and props',
  'Event handling',
  'State with useState',
  'Forms with react-hook-form',
  'Routing with react-router-dom',
]

const Home = () => {
  // TODO 12b: get the navigate function with useNavigate()

  return (
    <div className="home-page">
      {/* Navbar */}
      <nav className="home-navbar">
        <img src="/jeeniso-logo.jpg" alt="JEENISo" className="home-navbar-logo" />
        {/* TODO 12c: make the button navigate to '/login' when it is clicked (onClick) */}
        <button className="btn-logout">↩ Log out</button>
      </nav>

      {/* Welcome Banner */}
      <div className="welcome-banner">
        <h1>Welcome to JEENISo's React Workshop 🎉</h1>
        <p>You made it. Here is what you used in this mini project ({skills.length} things):</p>
      </div>

      {/* Skills Card */}
      <div className="skills-card">
        <div className="skills-card-header">
          <h2>Skills Unlocked</h2>
          <span className="badge-count">{skills.length}</span>
        </div>

        {/* TODO 14a: conditional rendering. If skills is empty, show
                      <p className="skills-empty">There is nothing to show</p> */}

        <ul className="skills-list">
          {/* TODO 14b: loop over `skills` with map and render a <li> with className="skill-item" for each one
                        Tip: add a <span className="skill-icon"> with skillIcons[skill] and the skill text */}
        </ul>
      </div>
    </div>
  )
}

export default Home
