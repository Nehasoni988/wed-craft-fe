/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html', // For Vite projects
    './src/**/*.{vue,js,ts,jsx,tsx}', // For Vue components
  ],
  theme: {
    extend: {
      animation: {
        'curtain-open': 'curtainOpen 1s ease-out forwards',
      },
      keyframes: {
        curtainOpen: {
          '0%': { width: '0', backgroundColor: 'red', transform: 'translateX(50%)' },
          '100%': { width: '100%', backgroundColor: 'transparent', transform: 'translateX(0)' },
        },
      },
      colors: {
        customDarkTeal: '#2A4D4A',
        customGolden: '#D4AF37',
        customDarkGreenGray: '#1A3430',
        customMaroon: '#800020',
        customOliveGreen: '#A0B865',
        customLightPink: '#E8AEBF',
        customLightCream: '#D2BFAF',
        customBrightTeal: '#008080',
        customScarlet: '#C62828'
      },
      backgroundImage: {
        'custom-image': 'linear-gradient(rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.3)), url("https://ik.imagekit.io/zpxvtauqo/nehanaalnihal/back2.jpg?updatedAt=1752149915825")',
      },
    },
    fontFamily: {
      nunito: ['nunito', 'sans-serif'],
      MyFont: ['"My Font"', 'serif'], // Ensure fonts with spaces have " " surrounding it.
    },
  },
  plugins: [],
}
