// Slides: "Styling components - UI library" and "Install bootstrap in react project"
// Bootstrap is installed with `npm i bootstrap@5.3.2` and imported once in main.tsx:
//   import 'bootstrap/dist/css/bootstrap.css'
// After that, every component can use its classes through className.

const BootstrapDemo = () => {
  return (
    <div>
      <div className="alert alert-success" role="alert">
        Bootstrap is working: this is an <strong>alert-success</strong>.
      </div>
      <button className="btn btn-primary me-2">Primary</button>
      <button className="btn btn-outline-secondary me-2">Outline</button>
      <button className="btn btn-danger">Danger</button>
    </div>
  )
}

export default BootstrapDemo
