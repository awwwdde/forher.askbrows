/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'montserrat': ['Montserrat', 'sans-serif'],
        'orbitron': ['Orbitron', 'sans-serif'],
      },
      colors: {
        'black': '#000000',
        'white': '#ffffff',
        'gray': {
          100: '#f5f5f5',
          200: '#eeeeee',
          300: '#e0e0e0',
          400: '#bdbdbd',
          500: '#9e9e9e',
          600: '#757575',
          700: '#616161',
          800: '#424242',
          900: '#212121',
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      screens: {
        'xs': '480px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
      spacing: {
        '2': '0.5rem',
        '4': '1rem',
        '8': '2rem',
      },
    },
  },
  plugins: [],
};