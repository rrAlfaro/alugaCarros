/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')

export default {
  content: ["./src/**/*.{html,js,vue}"],
  theme: {
    extend: {
      spacing: {
        '18': '4.5rem',
      },
      gridTemplateRows: {
        '8': 'repeat(8, minmax(0, 1fr))',
      },
      gridRowEnd: {
        '8': '8',
      }
    },
  },
  plugins: [
    plugin(function ({ addVariant }) {
      addVariant('child', '& > *');
    })],
}