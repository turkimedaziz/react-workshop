// Slides: "Passing data via props" and "Passing function via props"
// Props make a component reusable: the parent decides the data (items, heading)
// and what happens on selection (onSelectItem).
import { useState } from 'react'

// 1. Define the shape of the data the component accepts
interface Props {
  items: string[]
  heading: string
  onSelectItem: (item: string) => void
}

// 2. Receive the props in the parameters and destructure them
const ItemsTable = ({ items, heading, onSelectItem }: Props) => {
  const [selectedIndex, setSelectedIndex] = useState(-1)

  return (
    <table className="table table-bordered m-4 p-2 w-25">
      <thead>
        <tr>
          <th scope="col">index</th>
          <th scope="col">{heading}</th>
        </tr>
      </thead>
      <tbody>
        {items.map((item, index) => (
          <tr
            className={selectedIndex === index ? 'table-active' : ''}
            key={index}
            onClick={() => {
              setSelectedIndex(index)
              onSelectItem(item)
            }}
          >
            <th scope="row">{index + 1}</th>
            <td>{item}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default ItemsTable
