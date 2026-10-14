import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import InputField from '../components/InputField'

export interface LoginData {
  email: string
  password: string
}

const Login = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<LoginData>()
  const navigate = useNavigate()

  const onSubmit = (data: LoginData) => {
    console.log(data)
    reset()
    navigate('/home')
  }

  return (
    <div className="auth-page">
      <div className="glass-card">
        {/* Logo */}
        <div className="logo-wrap">
          <img src="/jeeniso-logo.jpg" alt="JEENISo Logo" className="logo-img" />
        </div>

        <h2 className="auth-title">Welcome back</h2>
        <p className="auth-subtitle">Sign in to JEENISo's React Workshop</p>

        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          <InputField
            id="email"
            label="Email"
            type="email"
            placeholder="you@example.com"
            registration={register('email', {
              required: 'Email is required',
              pattern: { value: /^\S+@\S+\.\S+$/, message: 'Enter a valid email' },
            })}
            error={errors.email?.message}
          />
          <InputField
            id="password"
            label="Password"
            type="password"
            placeholder="••••••••"
            registration={register('password', { required: 'Password is required' })}
            error={errors.password?.message}
          />

          <button type="submit" className="btn-jeeniso">
            Log in →
          </button>
        </form>

        <div className="auth-divider" />

        <p className="auth-footer">
          Don't have an account?{' '}
          <Link to="/signup">Sign up</Link>
        </p>
      </div>
    </div>
  )
}

export default Login
