// Slides: "react hook form" (npm i react-hook-form)
// useForm manages the form state for us:
//   register     -> connects an input to the form under a given name
//   handleSubmit -> validates then calls our function with all the values
//   reset        -> clears the form
import { useForm } from 'react-hook-form'
import type { FieldValues } from 'react-hook-form'

const Form4HookForm = () => {
  const { register, handleSubmit, reset } = useForm()

  const onSubmit = (data: FieldValues) => {
    console.log(data)
    reset()
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-3">
        <label htmlFor="name4" className="form-label">
          Name
        </label>
        <input {...register('name')} type="text" className="form-control" id="name4" placeholder="Name" />
      </div>
      <div className="mb-3">
        <label htmlFor="email4" className="form-label">
          Email
        </label>
        <input
          {...register('email')}
          type="email"
          className="form-control"
          id="email4"
          placeholder="Email"
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  )
}

export default Form4HookForm
