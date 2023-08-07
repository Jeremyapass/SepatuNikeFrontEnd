/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage : {
        'sepatubesar' : "url('/src/Gambar/sepatubesar.jpg')"
      },
      spacing : {
        '70%' : "70%",
        '55%' : "55%",
      },
      rotate : {
        '270' : "270deg"
      }
    },
  },
  plugins: [],
}

