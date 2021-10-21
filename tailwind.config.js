const colors = require('tailwindcss/colors')

module.exports = {
  purge: [],
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
   darkMode: false, // or 'media' or 'class'
   theme: {
     extend: {
      fontFamily: {
        'sans': ['Chonburi', 'sans-serif'],
        'Open-sans': ['Open Sans', 'sans-serif'],
        'Train-One': ['Train One', 'cursive'],
        'Kanit': ['Kanit', 'sans-serif'],
        'Righteous': ['Righteous', 'cursive'],
      },
      colors: {
        crimson: '#ed143d',
        crimsonDark: '#ad1330',
        crimsonLight: '#ff8ba1'
      },
      backgroundColor: ['active'],
      transitionProperty: {
        'right': 'right'
      },
      letterSpacing: {
        wide: '.025em',
        wider: '.05em',
        widest: '.1em',
        widest: '.25em',
       },
    },
   },
   variants: {
     extend: {},
   },
   plugins: [],
 }
