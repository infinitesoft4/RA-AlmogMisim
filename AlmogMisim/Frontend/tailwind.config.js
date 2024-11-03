/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#e8eaf6',
          100: '#c5cae9',
          200: '#9fa8da',
          300: '#7986cb',
          400: '#5c6bc0',
          500: '#3f51b5',
          600: '#3949ab',
          700: '#303f9f',
          800: '#283593',
          900: '#1a237e',
        },
      },
      boxShadow: {
        'luxury': '0 4px 20px 0 rgba(0, 0, 0, 0.1)',
        'luxury-hover': '0 8px 30px 0 rgba(0, 0, 0, 0.12)',
      },
    },
  },
  plugins: [],
};