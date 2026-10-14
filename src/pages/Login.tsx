// TODO 8a: uncomment / add the imports you need
// import { useForm } from 'react-hook-form'
// import { Link, useNavigate } from 'react-router-dom'
// import InputField from '../components/InputField'

// The shape of the data sent by the form (already given)
export interface LoginData {
  email: string
  password: string
}

const Login = () => {
  // TODO 8b: call useForm<LoginData>() and destructure { register, handleSubmit, reset }
  //          (bonus: also get `formState: { errors }`)
  // TODO 8c: get the navigate function with useNavigate()

  // TODO 9: write the onSubmit function. It receives `data: LoginData` and must:
  //         - console.log(data)
  //         - reset the form
  //         - navigate to '/home'

  return (
    <div className="auth-page">
      <div className="glass-card">
        {/* Logo */}
        <div className="logo-wrap">
          <img src="/jeeniso-logo.jpg" alt="JEENISo Logo" className="logo-img" />
        </div>

        <h2 className="auth-title">Welcome back</h2>
        <p className="auth-subtitle">Sign in to JEENISo's React Workshop</p>

        {/* TODO 10a: connect the form with onSubmit={handleSubmit(onSubmit)} */}
        <form>
          {/* TODO 10b: add 2 <InputField /> components: email (type email) and password (type password) */}

          <button type="submit" className="btn-jeeniso">
            Log in →
          </button>
        </form>

        <div className="auth-divider" />

        {/* TODO 11: replace the text "Sign up" by a <Link> to "/signup" */}
        <p className="auth-footer">Don't have an account? Sign up</p>
      </div>
    </div>
  )
}

export default Login
