// Slides: "Passing data via props" (reuse) and "Passing function via props"
import ItemsTable from './ItemsTable'

const cities = ['NewYork', 'London', 'Paris', 'Moscow']
const names = ['Ahmed', 'Ali', 'Salah', 'Hammadi']

const onSelectItem = (item: string) => {
  console.log(item)
}

const ItemsTableDemo = () => {
  return (
    <div className="d-flex">
      {/* The same component, used twice with different props */}
      <ItemsTable items={names} heading="Name" onSelectItem={onSelectItem} />
      <ItemsTable items={cities} heading="City" onSelectItem={onSelectItem} />
    </div>
  )
}

export default ItemsTableDemo
