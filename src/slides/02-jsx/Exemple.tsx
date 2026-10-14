// Slide: "Writing JSX"
// A component is a function that returns JSX: HTML-like tags mixed with JavaScript.

const Exemple = () => {
  return (
    <div>
      <button
        className="btn btn-primary"
        onClick={() => {
          for (let i = 0; i < 5; i++) {
            console.log(i)
          }
        }}
      >
        Click me
      </button>
      <p className="mt-3 text-muted">Open the browser console (F12) and click the button.</p>
    </div>
  )
}

export default Exemple
