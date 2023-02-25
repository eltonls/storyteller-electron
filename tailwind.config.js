/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./packages/renderer/index.html",
    "./packages/renderer/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        cursive: ["Unica One", "cursive"],
        sans: ["Raleway", "sans-serif"],
        serif: ["Playfair Display", "serif"]
      }
    }
  },
  plugins: []
}
