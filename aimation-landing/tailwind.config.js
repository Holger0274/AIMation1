/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: '#031d44',
        magenta: '#f90093',
        lightblue: '#60AFFF',
        black: '#071013',
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'sans-serif'],
      },
      backgroundImage: {
        'navy-gradient': 'linear-gradient(135deg, #031d44 0%, #052a5a 100%)',
        'lightblue-gradient': 'linear-gradient(135deg, #60AFFF 0%, #4a9de8 100%)',
        'hero-gradient': 'linear-gradient(135deg, #031d44 0%, #052a5a 70%, #60AFFF 100%)',
      },
      boxShadow: {
        'magenta': '0 10px 15px rgba(249, 0, 147, 0.3)',
        'magenta-hover': '0 20px 25px rgba(249, 0, 147, 0.4)',
      },
    },
  },
  plugins: [],
}
