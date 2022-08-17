/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primaryLighter: '#57b9f2',
        primary: '#1c7ed6',
        primaryDarker: '#315ce4',
        text: '#0a1c3e',
      },
    },
  },
  plugins: [],
}
