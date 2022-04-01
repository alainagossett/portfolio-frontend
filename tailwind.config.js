module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      'white': '#ffffff',
      'grey': '#545454',
      'blue': '#84CAF0',
      'dark-blue': '#0972a3',
      'purple': '#B4D2EE',
      'magenta': '#CBBEDD',
      'dark-pink': '#DCB5D4',
      'light-pink': '#E5B1D1'
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}