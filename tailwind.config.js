/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FA7979',
        secondary: '#E94B4B',
        dark: '#1F1F1F',
        'dark-secondary': '#2D2D2D',
        'dark-tertiary': '#3D3D3D',
        'dark-light': '#4A6B87',
        accent: {
          mint: '#3FDDAD',
          orange: '#F9A87C',
          purple: '#E3A9FD',
          blue: '#3DB7FF',
        },
        error: '#B40000',
      },
    },
  },
  plugins: [],
}
