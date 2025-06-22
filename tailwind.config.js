/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-pink': '#ffd4d0',
        'primary-red': '#fc3314',
        'primary-dark': '#1f1f1f',
        'gray-light': '#f7f7f7',
        'gray-medium': '#8d8d8d',
        'gray-border': '#e1e1e1',
      },
      fontFamily: {
        'montserrat': ['Montserrat', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
      },
      fontSize: {
        '48': '48px',
        '36': '36px',
        '30': '30px',
        '20': '20px',
        '18': '18px',
        '16': '16px',
        '14': '14px',
        '12': '12px',
      },
      lineHeight: {
        '72': '72px',
        '54': '54px',
        '45': '45px',
        '30': '30px',
        '24': '24px',
        '21': '21px',
        '18': '18px',
      },
    },
  },
  plugins: [],
} 