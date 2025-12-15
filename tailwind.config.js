/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#020204', // Very dark, almost black
        primary: '#2563eb', // Blue
        'primary-hover': '#1d4ed8',
        'dark-card': '#1e1e1e', // Placeholder for cards
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'hero-gradient': 'radial-gradient(circle at top left, #0f3d3e 0%, transparent 40%), radial-gradient(circle at bottom right, #2e1065 0%, transparent 40%)',
      }
    },
  },
  plugins: [],
}
