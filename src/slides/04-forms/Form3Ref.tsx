// Slides: "handle submission" with the ref hook
// useRef gives direct access to an input element, so we can read its value on submit.
import { useRef } from 'react'
import type { FormEvent } from 'react'

const Form3Ref = () => {
  const nameRef = useRef<HTMLInputElement>(null)
  const emailRef = useRef<HTMLInputElement>(null)

  const submission = {
    name: '',
    email: '',
  }

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()
    if (nameRef.current !== null) submission.name = nameRef.current.value
    if (emailRef.current !== null) submission.email = emailRef.current.value
    console.log(submission)
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="name3" className="form-label">
          Name
        </label>
        <input ref={nameRef} type="text" className="form-control" id="name3" placeholder="Name" />
      </div>
      <div className="mb-3">
        <label htmlFor="email3" className="form-label">
          Email
        </label>
        <input
          ref={emailRef}
          type="email"
          className="form-control"
          id="email3"
          placeholder="Email"
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  )
}

export default Form3Ref
