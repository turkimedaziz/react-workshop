// Slide: "Styling components - Css modules"
import styles from './ListGroup.module.css'

const cities = ['NewYork', 'London', 'Paris', 'Moscow']

const ListGroupModule = () => {
  return (
    <div>
      <ul className={styles.listGroup}>
        {cities.map((city, index) => (
          <li key={index}>{city}</li>
        ))}
      </ul>
    </div>
  )
}

export default ListGroupModule
