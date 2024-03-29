/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    screens: {
      sm: {max: '680px'}
    },
    extend: {
      fontFamily: {
        primary: 'var(primary-font)'
      },
      colors: {
        primary: '#96d7c8',
        secondary: '#d796a5',
        'primary-light': '#fefaf7',
        'smooth-black': 'rgba(0, 0, 0, 0.8)'
      },
      borderRadius: {
        xs: '2px'
      },
      boxShadow: {
        sm: '6px 6px 0 rgb(0, 0, 0 / 0.4)',
        md: '8px 8px 0 rgb(0, 0, 0 / 0.4)'
      }
    }
  }, plugins: []
};
