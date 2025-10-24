import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import AuthLayout from '../components/AuthLayout'
import { signUpSchema, validateForm } from '../utils/validation'
import { signUp } from '../services/authService'

function SignUp() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errors, setErrors] = useState({})
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setErrors({})
    
    // Validate with Zod
    const result = validateForm(signUpSchema, { email, password })
    
    if (!result.success) {
      setErrors(result.errors)
      return
    }
    
    // Register user
    setIsLoading(true)
    try {
      const user = await signUp(email, password)
      console.log('Account created successfully:', user)
      
      // Redirect to dashboard or show success
      alert(`Account created successfully! Welcome, ${user.email}!`)
      navigate('/dashboard') // You'll need to create this route
    } catch (error) {
      setErrors({ general: error.message })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <AuthLayout showError={Object.keys(errors).length > 0}>
      <div className="w-full max-w-md">
        <h2 className="text-3xl font-bold text-dark mb-8">Create Account</h2>
        
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
              className={`w-full px-4 py-3 rounded-lg border ${
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
            <p className="mt-2 text-xs text-gray-500">
              Password must contain uppercase, lowercase, and number
            </p>
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
            {isLoading ? 'Creating Account...' : 'Create Account'}
          </button>
        </form>

        <p className="mt-6 text-center text-gray-600">
          Already have an account?{' '}
          <Link to="/signin" className="text-primary font-semibold hover:underline">
            Sign In
          </Link>
        </p>
      </div>
    </AuthLayout>
  )
}

export default SignUp
