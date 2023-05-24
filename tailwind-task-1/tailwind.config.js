/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'pop': ['Poppins']
      },
      backgroundImage: {
        'hero-pattern': "url('/tailwind-task-1/dist/images/baneer.webp')",
        'choose-image': "url('/tailwind-task-1/dist/images/holiday.png')"
      }
    },
  },
  plugins: [],
}

