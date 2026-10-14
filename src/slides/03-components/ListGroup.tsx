// Slide: "Styling components - vanilla css"
import './ListGroup.css'

const cities = ['NewYork', 'London', 'Paris', 'Moscow']

const ListGroup = () => {
  return (
    <div>
      <ul className="listGroup">
        {cities.map((city, index) => (
          <li key={index}>{city}</li>
        ))}
      </ul>
    </div>
  )
}

export default ListGroup
