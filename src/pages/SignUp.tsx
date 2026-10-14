import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import InputField from '../components/InputField'
import Alert from '../components/Alert'

export interface SignUpData {
  name: string
  email: string
  phone: string
  password: string
}

const SignUp = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<SignUpData>()
  const [success, setSuccess] = useState(false)
  const navigate = useNavigate()

  const onSubmit = (data: SignUpData) => {
    console.log(data)
    setSuccess(true)
    reset()
  }

  return (
    <div className="auth-page">
      <div className="glass-card">
        {/* Logo */}
        <div className="logo-wrap">
          <img src="/jeeniso-logo.jpg" alt="JEENISo Logo" className="logo-img" />
        </div>

        <h2 className="auth-title">Create account</h2>
        <p className="auth-subtitle">Join JEENISo's React Workshop</p>

        {success && (
          <Alert>
            <p className="mb-2">🎉 Account created successfully!</p>
            <button className="btn-alert" onClick={() => navigate('/login')}>
              Go to login →
            </button>
          </Alert>
        )}

        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          <InputField
            id="name"
            label="Full Name"
            type="text"
            placeholder="Your name"
            registration={register('name', { required: 'Name is required' })}
            error={errors.name?.message}
          />
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
            id="phone"
            label="Phone number"
            type="tel"
            placeholder="+216 XX XXX XXX"
            registration={register('phone', {
              required: 'Phone number is required',
              pattern: { value: /^[0-9+ ]{8,}$/, message: 'Enter a valid phone number' },
            })}
            error={errors.phone?.message}
          />
          <InputField
            id="password"
            label="Password"
            type="password"
            placeholder="Min. 6 characters"
            registration={register('password', {
              required: 'Password is required',
              minLength: { value: 6, message: 'Password must have at least 6 characters' },
            })}
            error={errors.password?.message}
          />

          <button type="submit" className="btn-jeeniso">
            Create account →
          </button>
        </form>

        <div className="auth-divider" />

        <p className="auth-footer">
          Already have an account?{' '}
          <Link to="/login">Log in</Link>
        </p>
      </div>
    </div>
  )
}

export default SignUp
