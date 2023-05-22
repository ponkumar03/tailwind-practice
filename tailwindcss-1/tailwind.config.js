/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    lineHeight: {
      'xs': '1.5rem',
      'sm': '2rem',
      'lg': '2.5rem',
      'xl': '3rem',
      '2xl': '3.5rem',
    },
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif']
      },
      backgroundImage: {
        'hero-pattern': "url('/dist/images/hero-pattern.jpg')"
      }
    },
  },
  plugins: [],
}

