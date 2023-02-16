/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      margin :{
        "150px" : "150px",
        "1450px" : "1450px",
        "500px": "550px",
        "55rem": "55rem",
        "60rem": "60rem",
        "85rem": "85rem"
      },
      width: {
        '1600': '1600px',
        "1597" : "1597px",
        "20": "20%",
        "50": "50%"
      },
      height: {
        '1550': '1550px',
        "780" : "780px",
        "500": "500px"
      },
      colors: {
        'barra': '#F3EFE0',
      },
      screens: {
        '3xl': '1880px',
      }
  },
  plugins: [],
}
}