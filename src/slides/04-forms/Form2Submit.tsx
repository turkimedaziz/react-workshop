// Slide: "handle submission" (onSubmit)
// By default a form reloads the page when submitted: event.preventDefault() stops that.
import type { FormEvent } from 'react'

const handleSubmit = (event: FormEvent) => {
  event.preventDefault()
  console.log('Form submitted')
}

const Form2Submit = () => {
  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="name2" className="form-label">
          Name
        </label>
        <input type="text" className="form-control" id="name2" placeholder="Name" />
      </div>
      <div className="mb-3">
        <label htmlFor="email2" className="form-label">
          Email
        </label>
        <input type="email" className="form-control" id="email2" placeholder="Email" />
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  )
}

export default Form2Submit
