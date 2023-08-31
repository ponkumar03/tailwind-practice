/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.html"],
  theme: {
    fontSize: {
      '3xl': ['48px', {
        lineHeight: 'normal',
        letterSpacing: '-1.2px',
        fontWeight: '700',
        color: '#23273B'
      }],
      '2xl': ['1.5rem', {
        lineHeight: '2rem',
        letterSpacing: '-0.01em',
        fontWeight: '500',
      }],
      'sm':['18px', {
        lineHeight:'135%',
        fontWeight:'500',      
      }]
    },
  },
  plugins: [],
}
