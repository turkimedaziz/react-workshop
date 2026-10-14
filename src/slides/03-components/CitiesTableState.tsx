// Slide: "State management"
// useState stores the index of the clicked row; when it changes React re-renders the table
// and the row with the matching index gets the bootstrap class "table-active".
import { useState } from 'react'

const cities = ['NewYork', 'London', 'Paris', 'Moscow']

const CitiesTableState = () => {
  const [selectedIndex, setSelectedIndex] = useState(-1)

  return (
    <table className="table table-bordered w-50">
      <thead>
        <tr>
          <th scope="col">index</th>
          <th scope="col">City</th>
        </tr>
      </thead>
      <tbody>
        {cities.map((city, index) => (
          <tr
            className={selectedIndex === index ? 'table-active' : ''}
            key={index}
            onClick={() => setSelectedIndex(index)}
          >
            <th scope="row">{index + 1}</th>
            <td>{city}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default CitiesTableState
