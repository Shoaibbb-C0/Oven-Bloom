/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        magic: '#8E1F2D',
        ivory: '#F7F4EF',
        ink: '#171513',
        neutral: '#E8E4DE',
      },
    },
  },
  plugins: [],
}
