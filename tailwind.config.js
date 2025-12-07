/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        slideInFromLeft: {
          '0%': { transform: 'translateX(-120%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        slideInFromBottom: {
          '0%': { transform: 'translateY(120%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideOutToLeft: {
          '0%': { transform: 'translateX(0)', opacity: '1' },
          '100%': { transform: 'translateX(-120%)', opacity: '0' },
        },
        slideOutToBottom: {
          '0%': { transform: 'translateY(0)', opacity: '1' },
          '100%': { transform: 'translateY(120%)', opacity: '0' },
        },
      },
      animation: {
        'slide-in-left': 'slideInFromLeft 0.5s ease-out forwards',
        'slide-in-bottom': 'slideInFromBottom 0.5s ease-out forwards',
        'slide-out-left': 'slideOutToLeft 0.5s ease-out forwards',
        'slide-out-bottom': 'slideOutToBottom 0.5s ease-out forwards',
      },
    },
  },
  plugins: [],
}