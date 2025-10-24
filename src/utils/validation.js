import { z } from 'zod'

// Sign In validation schema
export const signInSchema = z.object({
  email: z
    .string()
    .min(1, 'Email is required')
    .email('Please enter a valid email address'),
  password: z
    .string()
    .min(1, 'Password is required')
    .min(6, 'Password must be at least 6 characters'),
})

// Sign Up validation schema
export const signUpSchema = z.object({
  email: z
    .string()
    .min(1, 'Email is required')
    .email('Please enter a valid email address'),
  password: z
    .string()
    .min(1, 'Password is required')
    .min(6, 'Password must be at least 6 characters')
    .max(100, 'Password must be less than 100 characters')
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
      'Password must contain at least one uppercase letter, one lowercase letter, and one number'
    ),
})

// Helper function to validate form data
export const validateForm = (schema, data) => {
  try {
    schema.parse(data)
    return { success: true, errors: {} }
  } catch (error) {
    if (error instanceof z.ZodError) {
      const errors = {}
      error.errors.forEach((err) => {
        if (err.path[0]) {
          errors[err.path[0]] = err.message
        }
      })
      return { success: false, errors }
    }
    return { success: false, errors: { general: 'Validation failed' } }
  }
}
