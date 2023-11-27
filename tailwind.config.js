const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT({
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': { 'min': '375px', 'max': '600px' },
        'ms': { 'min': '601px', 'max': '820px' }
      },
    },
    fontFamily: {
      'kalam': ['Kalam', 'cursive'],
      'Nuecha': ['Neucha', 'cursive']
    },
    colors: {
      'b1': ' #caf0f8',
      'b2': '#90e0ef',
      'o1': ' #219ebc',
      'sky100': '#e0f2fe'
    },

    plugins: [
      require('tailwindcss-animated')
    ],

  }
});


