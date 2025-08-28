/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-dark': '#1a1a1a',
        'brand-red': '#ef4444',
        'brand-gray': '#3f3f46',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      },
      animation: {
        fadeInUp: 'fadeInUp 1s ease-out forwards',
      },
      boxShadow: {
        'glow-red': '0 0 15px rgba(239, 68, 68, 0.7)',
      }
    },
  },
  plugins: [],
}
