// Slides: "Event handling" (table with bootstrap + onClick, two ways)
// Open the console (F12) and click a row.

const cities = ['NewYork', 'London', 'Paris', 'Moscow']

// Way 2: a separate function called from the onClick prop
const handleClick = (city: string) => {
  console.log(city)
}

// Way 1: inline arrow function inside onClick
export const CitiesTableInline = () => {
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
          <tr key={index} onClick={() => console.log(city)}>
            <th scope="row">{index + 1}</th>
            <td>{city}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export const CitiesTableMethod = () => {
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
          <tr key={index} onClick={() => handleClick(city)}>
            <th scope="row">{index + 1}</th>
            <td>{city}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

const CitiesTableClick = () => {
  return (
    <>
      <h5>Inline handler</h5>
      <CitiesTableInline />
      <h5 className="mt-4">Separate method</h5>
      <CitiesTableMethod />
    </>
  )
}

export default CitiesTableClick
