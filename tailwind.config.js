/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        "custom-green":"#00C853",
        "custom-blue":"#1E88E5"
      },
      height: {
        '60vh': '60vh',
        '50vh': '50vh',
        '100vh' : '100vh'
      }
    },
  },
  plugins: [],
}

