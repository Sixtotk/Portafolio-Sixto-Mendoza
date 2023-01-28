/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      margin :{
        "150px" : "150px"
      },
      width: {
        '1600': '1600px',
      },
      height: {
        '3500': '1550px',
      }
    },
  },
  plugins: [],
}