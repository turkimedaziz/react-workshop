// Slides: "Routing - results" and "Navigation between pages" (useNavigate hook)
import { useNavigate } from 'react-router-dom'

const contacts = ['President', 'General secretary', 'Project manager', 'Business manager']

const Contacts = () => {
  const navigate = useNavigate()

  return (
    <div>
      <ul className="list-group">
        {contacts.map((contact, index) => (
          <li className="list-group-item" key={index}>
            {contact}
          </li>
        ))}
      </ul>
      <button className="btn btn-primary mt-3" onClick={() => navigate('/home')}>
        Back to home
      </button>
    </div>
  )
}

export default Contacts
