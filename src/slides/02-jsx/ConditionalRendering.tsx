// Slides: "Conditional rendering" (if, ternary operator, logical &&)
//
// Tip for the presentation: comment out the line `cities = []` to see the list appear.

let cities = ['NewYork', 'London', 'Paris', 'Moscow']
cities = []

// 1) With an if statement
export const CitiesListIf = () => {
  if (cities.length === 0) return <p style={{ color: 'red' }}>There is no city</p>

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

// 2) With the ternary operator inside the JSX
export const CitiesListTernary = () => {
  return (
    <div>
      <ul>
        {cities.length === 0 ? <p style={{ color: 'red' }}>There is no city</p> : null}
        {cities.map((city, index) => (
          <li key={index}>{city}</li>
        ))}
      </ul>
    </div>
  )
}

// 3) With the logical and (&&): the cleanest version
export const CitiesListAnd = () => {
  return (
    <div>
      <ul>
        {cities.length === 0 && <p style={{ color: 'red' }}>There is no city</p>}
        {cities.map((city, index) => (
          <li key={index}>{city}</li>
        ))}
      </ul>
    </div>
  )
}

const ConditionalRendering = () => {
  return (
    <>
      <h5>1. if statement</h5>
      <CitiesListIf />
      <h5 className="mt-3">2. Ternary operator</h5>
      <CitiesListTernary />
      <h5 className="mt-3">3. Logical and (&&)</h5>
      <CitiesListAnd />
    </>
  )
}

export default ConditionalRendering
