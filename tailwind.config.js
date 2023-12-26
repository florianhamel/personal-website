/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    screens: {
      sm: { max: '680px' }
    },
    extend: {
      colors: {
        primary: '#96d7c8',
        secondary: '#d796a5'
      },
    }
  }, plugins: []
};
