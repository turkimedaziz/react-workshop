// Slide: "Adding JS to JSX"
// The only way to write JavaScript inside JSX is with curly braces { }.

const message = 'Hello World'

const AddingJs = () => {
  return (
    <div>
      {/* Wrong way: this prints the word "message", not the variable's value */}
      <p>
        <strong>Wrong way:</strong> message
      </p>

      {/* Right way: curly braces evaluate the JavaScript expression */}
      <p>
        <strong>Right way:</strong> {message}
      </p>
    </div>
  )
}

export default AddingJs
