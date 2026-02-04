/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./services.html",
    "./components/**/*.html",
    "./assets/js/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        'deep-plum': '#664875',
        'copper': '#CC9466',
        'powder-blue': '#bdd4e0',
        'blue': '#4e70af',
        'warm-grey': '#cabcb0',
        'light-text': '#f7f5f3',
        'dark-text': '#160F1A'
      },
      fontFamily: {
        'serif': ['DM Serif Display', 'serif'],
        'sans': ['Poppins', 'sans-serif']
      }
    },
  },
  plugins: [],
}
