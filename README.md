# Storet - File Management Authentication

A modern React application with beautiful sign-in and sign-up pages built with Vite and Tailwind CSS.

## Features

- 🎨 Modern UI with gradient backgrounds
- 📱 Fully responsive design
- 🔐 Complete authentication system (Sign In & Sign Up)
- ✅ Zod validation with field-specific error messages
- 💾 LocalStorage-based user management
- 🔒 Protected dashboard route
- ⚡ Built with Vite for fast development
- 🎯 Tailwind CSS for styling
- 🧭 React Router for navigation
- ⏳ Loading states and error handling

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

The app will be available at `http://localhost:5173`

### Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
src/
├── components/
│   └── AuthLayout.jsx      # Shared layout for auth pages
├── pages/
│   ├── SignIn.jsx          # Sign in page with authentication
│   ├── SignUp.jsx          # Sign up page with registration
│   └── Dashboard.jsx       # Protected dashboard page
├── services/
│   └── authService.js      # Authentication logic (localStorage-based)
├── utils/
│   └── validation.js       # Zod validation schemas
├── App.jsx                 # Main app with routing
├── main.jsx               # Entry point
└── index.css              # Global styles with Tailwind
```

## Color Palette

- **Primary**: #FA7979
- **Secondary**: #E94B4B
- **Dark**: #1F1F1F
- **Accent Colors**:
  - Mint: #3FDDAD
  - Orange: #F9A87C
  - Purple: #E3A9FD
  - Blue: #3DB7FF
- **Error**: #B40000

## Routes

- `/` - Redirects to sign in
- `/signin` - Sign in page
- `/signup` - Sign up page
- `/dashboard` - Protected dashboard (requires authentication)

## How It Works

### Authentication Flow

1. **Sign Up**: 
   - User enters email and password
   - Zod validates the input (email format, password strength)
   - User data is stored in localStorage
   - User is automatically signed in and redirected to dashboard

2. **Sign In**:
   - User enters credentials
   - System checks against stored users in localStorage
   - On success, user session is created and redirected to dashboard
   - On failure, error message is displayed

3. **Dashboard**:
   - Protected route that checks for authentication
   - Displays user information
   - Provides sign out functionality

### Validation Rules

**Sign In:**
- Email must be valid format
- Password minimum 6 characters

**Sign Up:**
- Email must be valid format
- Password must be 6-100 characters
- Password must contain at least one uppercase letter
- Password must contain at least one lowercase letter
- Password must contain at least one number

### Storage

User data is stored in `localStorage` with keys:
- `storet_users` - Array of all registered users
- `storet_user` - Currently authenticated user

**Note:** This is a demo implementation. In production, use a proper backend API with secure password hashing and JWT tokens.

## Customization

You can customize the colors in `tailwind.config.js` and modify the components to fit your needs.

To integrate with a real backend API, replace the functions in `src/services/authService.js` with actual API calls.
