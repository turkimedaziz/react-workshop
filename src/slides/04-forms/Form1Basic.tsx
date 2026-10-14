// Slides: "Building forms in react" and "submitButton"
// A plain form built with bootstrap form-control classes.
// Note: in JSX we write className (not class) and htmlFor (not for).

const Form1Basic = () => {
  return (
    <form>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input type="text" className="form-control" id="name" placeholder="Name" />
      </div>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">
          Email
        </label>
        <input type="email" className="form-control" id="email" placeholder="Email" />
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  )
}

export default Form1Basic
