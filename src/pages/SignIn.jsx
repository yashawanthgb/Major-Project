import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import AuthLayout from '../components/AuthLayout'
import { signInSchema, validateForm } from '../utils/validation'
import { signIn } from '../services/authService'

function SignIn() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errors, setErrors] = useState({})
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setErrors({})
    
    // Validate with Zod
    const result = validateForm(signInSchema, { email, password })
    
    if (!result.success) {
      setErrors(result.errors)
      return
    }
    
    // Authenticate user
    setIsLoading(true)
    try {
      const user = await signIn(email, password)
      console.log('Signed in successfully:', user)
      
      // Redirect to dashboard or home page
      // For now, we'll show a success message
      alert(`Welcome back, ${user.email}!`)
      navigate('/dashboard') // You'll need to create this route
    } catch (error) {
      setErrors({ general: error.message })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <AuthLayout>
      <div className="w-full max-w-md">
        <h2 className="text-3xl font-bold text-dark mb-8">Sign In</h2>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={`w-full px-4 py-3 rounded-xl border ${
                errors.email ? 'border-error' : 'border-gray-300'
              } focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-dark`}
              placeholder="Enter your email"
            />
            {errors.email && (
              <p className="mt-1 text-sm text-error">{errors.email}</p>
            )}
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={`w-full px-4 py-3 rounded-lg border ${
                errors.password ? 'border-error' : 'border-gray-300'
              } focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-dark`}
              placeholder="Enter your password"
            />
            {errors.password && (
              <p className="mt-1 text-sm text-error">{errors.password}</p>
            )}
          </div>

          {errors.general && (
            <div className="text-error text-sm font-medium">
              {errors.general}
            </div>
          )}

          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-gradient-to-r from-primary to-secondary text-white font-semibold py-3 rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? 'Signing In...' : 'Sign In'}
          </button>
        </form>

        <p className="mt-6 text-center text-gray-600">
          Don't have an account?{' '}
          <Link to="/signup" className="text-primary font-semibold hover:underline">
            Create Account
          </Link>
        </p>
      </div>
    </AuthLayout>
  )
}

export default SignIn
