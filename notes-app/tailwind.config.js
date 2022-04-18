// tailwind.config.js

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class',
  mode:'jit',
  theme: {
    container: {
      center: true,

       padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}