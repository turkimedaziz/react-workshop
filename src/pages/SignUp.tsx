// TODO 3a: uncomment / add the imports you need
// import { useState } from 'react'
// import { useForm } from 'react-hook-form'
// import { Link, useNavigate } from 'react-router-dom'
// import InputField from '../components/InputField'
// import Alert from '../components/Alert'

// The shape of the data sent by the form (already given)
export interface SignUpData {
  name: string
  email: string
  phone: string
  password: string
}

const SignUp = () => {
  // TODO 3b: call useForm<SignUpData>() and destructure { register, handleSubmit, reset }
  //          (bonus: also get `formState: { errors }`)
  // TODO 3c: create a state `success` (false at the start) with useState
  // TODO 3d: get the navigate function with useNavigate()

  // TODO 4: write the onSubmit function. It receives `data: SignUpData` and must:
  //         - console.log(data)
  //         - set success to true
  //         - reset the form

  return (
    <div className="auth-page">
      <div className="glass-card">
        {/* Logo */}
        <div className="logo-wrap">
          <img src="/jeeniso-logo.jpg" alt="JEENISo Logo" className="logo-img" />
        </div>

        <h2 className="auth-title">Create account</h2>
        <p className="auth-subtitle">Join JEENISo's React Workshop</p>

        {/* TODO 5: conditional rendering.
               Only when `success` is true, show an <Alert> containing:
                 - a message: "Account created successfully!"
                 - a button that calls navigate('/login') on click ("Go to login") */}

        {/* TODO 6a: connect the form to react-hook-form with onSubmit={handleSubmit(onSubmit)} */}
        <form>
          {/* TODO 6b: add 4 <InputField /> components, one per field:
                 name     (type text)
                 email    (type email)
                 phone    (type tel, label "Phone number")
                 password (type password)
               each one needs id, label, type, placeholder and
               registration={register('fieldName')} using the same field names as SignUpData */}

          <button type="submit" className="btn-jeeniso">
            Sign up →
          </button>
        </form>

        <div className="auth-divider" />

        {/* TODO 7: replace the text "Log in" by a <Link> to "/login" */}
        <p className="auth-footer">Already have an account? Log in</p>
      </div>
    </div>
  )
}

export default SignUp
