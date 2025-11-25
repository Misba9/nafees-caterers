/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          red: "#8B0000", // Dark Red
          gold: "#D4AF37", // Gold
          dark: "#1a1a1a",
          cream: "#FDFBF7", // Off-white background
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        sans: ['"Lato"', 'sans-serif'],
      },
      backgroundImage: {
        'pattern': "url('https://www.transparenttextures.com/patterns/arabesque.png')",
      }
    },
  },
  plugins: [],
}
