/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/lib/esm/**/*.js',
  ],
  theme: {
    fontFamily:{
      primary:"Poppins"
    },
    extend: {
      animation: {
        'fadeIn': 'fadeIn 0.4s ease-in-out',
        
      },
      colors:{
        primary:"#222222",
        secondary:"#F5E6E0"
      }
    },
    container:{
      padding:{
        DEFAULT:"30px",
        lg:"0"
      },
    },
    screens:{
      sm:"640px",
      md:"768px",
      lg:"1024px",
      xl:"1440px"
    },

  },
  plugins: [
    require('tailwind-scrollbar-hide'),
    require('flowbite/plugin'),
  ],
}