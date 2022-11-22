/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      sm: '375px',
      md: '768px',
      lg: '1440px'
    },
    colors: {
      strongCyan: 'hsl(171, 66%, 44%)',
      lightBlue: 'hsl(233, 100%, 69%)',
      darkGrayishBlue: 'hsl(210, 10%, 33%)',
      grayishBlue: 'hsl(201, 11%, 66%)',
    },
    boxShadow: {
      '2xl': '0px 3px 0px 1px rgb(19, 82, 93, 0.6), 0px 3px 14px 3px hsl(171, 66%, 24%, 50%)',
      '3xl': '0px 3px 0px 1px rgb(24, 86, 140);, 0px 3px 14px 3px rgba(64, 76, 170, 0.7)',
    },
    extend: {
      backgroundImage: {
        'heroMobileBgImage': 'url(./assets/bg-header-mobile.png)',
        'heroDesktopBgImage': 'url(./assets/bg-header-desktop.png)'
      }
    },
  },
  plugins: [],
}