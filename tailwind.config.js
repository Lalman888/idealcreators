/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    screens: {
      'mini' : {'max': '479px'},
      // => @media (max-width: 479px) { ... }
      'small' : {'max': '599px'},
      // => @media (max-width: 599px) { ... }
      'sm': {'min': '600px', 'max': '767px'},
      // => @media (min-width: 600px and max-width: 767px) { ... }

      'md': {'min': '768px', 'max': '1023px'},
      // => @media (min-width: 768px and max-width: 1023px) { ... }

      'lg': {'min': '1024px', 'max': '1280px'},
      // => @media (min-width: 1024px and max-width: 1280px) { ... }

      'xl': {'min': '1280px' },
      // => @media (min-width: 1280px and max-width: 1535px) { ... }

      '2xl': {'min': '1536px'},
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      
    },
  },
  plugins: [],
}
