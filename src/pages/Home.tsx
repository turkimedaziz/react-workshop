import { useNavigate } from 'react-router-dom'

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
  const navigate = useNavigate()

  return (
    <div className="home-page">
      {/* Navbar */}
      <nav className="home-navbar">
        <img src="/jeeniso-logo.jpg" alt="JEENISo" className="home-navbar-logo" />
        <button className="btn-logout" onClick={() => navigate('/login')}>
          ↩ Log out
        </button>
      </nav>

      {/* Welcome Banner */}
      <div className="welcome-banner">
        <h1>Welcome to JEENISo's React Workshop 🎉</h1>
        <p>You've successfully completed the mini project. Here's what you mastered:</p>
      </div>

      {/* Skills Card */}
      <div className="skills-card">
        <div className="skills-card-header">
          <h2>Skills Unlocked</h2>
          <span className="badge-count">{skills.length}</span>
        </div>

        {skills.length === 0 && (
          <p className="skills-empty">There is nothing to show</p>
        )}

        <ul className="skills-list">
          {skills.map((skill, index) => (
            <li
              className="skill-item"
              key={index}
              style={{ animationDelay: `${index * 0.07}s` }}
            >
              <span className="skill-icon">{skillIcons[skill] ?? '✅'}</span>
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Home
