// Mock authentication service
// Replace this with your actual API calls

const STORAGE_KEY = 'storet_user'
const USERS_KEY = 'storet_users'

// Simulate API delay
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms))

// Get all users from localStorage
const getUsers = () => {
  const users = localStorage.getItem(USERS_KEY)
  return users ? JSON.parse(users) : []
}

// Save users to localStorage
const saveUsers = (users) => {
  localStorage.setItem(USERS_KEY, JSON.stringify(users))
}

// Sign Up
export const signUp = async (email, password) => {
  await delay(800) // Simulate network delay
  
  const users = getUsers()
  
  // Check if user already exists
  const existingUser = users.find(user => user.email === email)
  if (existingUser) {
    throw new Error('An account with this email already exists')
  }
  
  // Create new user
  const newUser = {
    id: Date.now().toString(),
    email,
    password, // In production, this should be hashed on the backend
    createdAt: new Date().toISOString()
  }
  
  users.push(newUser)
  saveUsers(users)
  
  // Store current user (without password)
  const { password: _, ...userWithoutPassword } = newUser
  localStorage.setItem(STORAGE_KEY, JSON.stringify(userWithoutPassword))
  
  return userWithoutPassword
}

// Sign In
export const signIn = async (email, password) => {
  await delay(800) // Simulate network delay
  
  const users = getUsers()
  
  // Find user
  const user = users.find(u => u.email === email && u.password === password)
  
  if (!user) {
    throw new Error('Invalid email or password')
  }
  
  // Store current user (without password)
  const { password: _, ...userWithoutPassword } = user
  localStorage.setItem(STORAGE_KEY, JSON.stringify(userWithoutPassword))
  
  return userWithoutPassword
}

// Sign Out
export const signOut = () => {
  localStorage.removeItem(STORAGE_KEY)
}

// Get current user
export const getCurrentUser = () => {
  const user = localStorage.getItem(STORAGE_KEY)
  return user ? JSON.parse(user) : null
}

// Check if user is authenticated
export const isAuthenticated = () => {
  return getCurrentUser() !== null
}
