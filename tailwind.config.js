/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    screens: {
      'sm': '480px',
      'md': '768px',
      'lg': '976px',
      'xl': '1440px',
    },
    extend: {
      fontFamily: {
        sans: [
          'Montserrat',
          'faktum-test'
        ],
        display: ['Montserrat'],
        body: ['Montserrat'],
      }
    }
  },
  plugins: [],
}
