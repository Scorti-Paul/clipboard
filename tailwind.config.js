/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      sm: '378px',
      md: '768px',
      lg: '1440px'
    },
    extend: {},
  },
  plugins: [],
}