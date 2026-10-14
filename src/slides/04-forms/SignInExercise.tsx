// Slide: "Building forms in react - Exercice" (solution)
// Sign in page with: name, mail, phone number, password and a sign in button.
import { useForm } from 'react-hook-form'
import type { FieldValues } from 'react-hook-form'

const SignInExercise = () => {
  const { register, handleSubmit, reset } = useForm()

  const onSubmit = (data: FieldValues) => {
    console.log(data)
    reset()
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-50">
      <h3 className="mb-3">Sign in</h3>

      <div className="mb-3">
        <label htmlFor="ex-name" className="form-label">
          Name
        </label>
        <input {...register('name')} type="text" className="form-control" id="ex-name" placeholder="Name" />
      </div>

      <div className="mb-3">
        <label htmlFor="ex-mail" className="form-label">
          Mail
        </label>
        <input {...register('mail')} type="email" className="form-control" id="ex-mail" placeholder="Mail" />
      </div>

      <div className="mb-3">
        <label htmlFor="ex-phone" className="form-label">
          Phone number
        </label>
        <input
          {...register('phone')}
          type="tel"
          className="form-control"
          id="ex-phone"
          placeholder="Phone number"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="ex-password" className="form-label">
          Password
        </label>
        <input
          {...register('password')}
          type="password"
          className="form-control"
          id="ex-password"
          placeholder="Password"
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Sign in
      </button>
    </form>
  )
}

export default SignInExercise
