/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode:"class",
  content: ["./dist/*.html"],
  theme: {
    extend: {
      screens:{
        sm:"480px",
        md:"768px",
        lg:"1024px",
        xl:"1280px",
        xxl:"1536px"
      },
      spacing:{
         "big":"28rem"
      }
    },
    fontFamily:{
      nunito:['Nunito', 'sans-serif']
    }
  },
  plugins: [],
}

