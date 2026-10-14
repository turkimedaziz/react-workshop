// Slides: "Loop over elements" (1 and 2)
// map() turns an array of data into an array of JSX elements.

const cities = ['New york', 'London', 'Paris', 'Moscow']

// Version 1: works, but React warns in the console:
// "Each child in a list should have a unique key prop."
export const ListWithoutKey = () => {
  return (
    <div>
      <ul>
        {cities.map((city) => (
          <li>{city}</li>
        ))}
      </ul>
    </div>
  )
}

// Version 2: the warning is gone once every element gets a unique key.
export const ListWithKey = () => {
  return (
    <div>
      <ul>
        {cities.map((city, index) => (
          <li key={index}>{city}</li>
        ))}
      </ul>
    </div>
  )
}

const List = () => {
  return (
    <>
      <h5>Without key (check the console warning)</h5>
      <ListWithoutKey />
      <h5 className="mt-4">With key</h5>
      <ListWithKey />
    </>
  )
}

export default List
