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
      '2xl': '0px 3px 0px 0px rgba(37,154,134, 1), 0px 3px 7px 3px rgba(19, 82, 93, 0.4)',
      '3xl': '0px 3px 0px 0px rgb(84, 105, 229, 1), 0px 3px 7px 3px rgba(64, 76, 170, 0.4)',
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