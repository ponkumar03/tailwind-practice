/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'pop': ['Poppins', 'sans-serif']
      },
      backgroundImage: {
        'hero-pattern': "url('/tailwind-task-1/dist/images/baneer.webp')"
      }
    },
  },
  plugins: [],
}

