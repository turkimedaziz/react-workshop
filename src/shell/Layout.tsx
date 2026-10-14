// Presentation shell: sidebar menu (grouped by slide section) + the example on the right.
// This is only the "frame" used to browse examples; the examples themselves live in src/slides.
import { NavLink, Outlet } from 'react-router-dom'
import { examples } from './registry'

const sections = Array.from(new Set(examples.map((e) => e.section)))

const Layout = () => {
  return (
    <div className="d-flex vh-100">
      <nav className="border-end bg-light p-3 overflow-auto" style={{ width: 300, flexShrink: 0 }}>
        <NavLink to="/" className="d-block fw-bold fs-5 mb-3 text-decoration-none">
          React Workshop
        </NavLink>

        {sections.map((section) => (
          <div key={section} className="mb-3">
            <div className="text-uppercase small text-muted mb-1">{section}</div>
            <ul className="nav flex-column">
              {examples
                .filter((e) => e.section === section)
                .map((e) => (
                  <li className="nav-item" key={e.path}>
                    <NavLink
                      to={`/${e.path}`}
                      className={({ isActive }) =>
                        'nav-link py-1 px-2 rounded' + (isActive ? ' active' : '')
                      }
                    >
                      {e.title}
                    </NavLink>
                  </li>
                ))}
            </ul>
          </div>
        ))}
      </nav>

      <main className="flex-grow-1 p-4 overflow-auto">
        <Outlet />
      </main>
    </div>
  )
}

export default Layout
