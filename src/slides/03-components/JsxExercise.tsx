// Slide: "Components - JSX Exercice" (solution)
// A table with 3 columns: index, city and a Tunisia flag shown ONLY for Tunisian cities.
// Uses: map + key, conditional rendering (&&), and a list of objects.

interface City {
  name: string
  country: string
}

const cities: City[] = [
  { name: 'Tunis', country: 'Tunisia' },
  { name: 'Paris', country: 'France' },
  { name: 'Sousse', country: 'Tunisia' },
  { name: 'London', country: 'United Kingdom' },
]

const JsxExercise = () => {
  return (
    <table className="table table-bordered w-50">
      <thead>
        <tr>
          <th scope="col">index</th>
          <th scope="col">Cities</th>
          <th scope="col">Tunisia</th>
        </tr>
      </thead>
      <tbody>
        {cities.map((city, index) => (
          <tr key={index}>
            <th scope="row">{index + 1}</th>
            <td>{city.name}</td>
            <td>{city.country === 'Tunisia' && '🇹🇳'}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default JsxExercise
