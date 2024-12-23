/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: 'rgb(27,172,255)',
          light: 'rgba(27,172,255,0.15)',
          hover: 'rgb(24,155,230)'
        },
        teal: {
          500: '#14b8a6',
          600: '#0d9488'
        },
        coral: {
          500: '#ff7f7f',
          600: '#ff6b6b'
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};