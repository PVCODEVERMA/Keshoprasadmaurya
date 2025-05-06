/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class', 
  theme: {
    extend: {
      animation: {
        'star-movement-bottom': 'star-movement-bottom linear infinite alternate',
        'star-movement-top': 'star-movement-top linear infinite alternate',
        slideIn: 'slideIn 0.3s ease-out',
        progressStripe: 'progressStripe 1s linear infinite',
        scaleIn: 'scaleIn 0.2s ease-out',
        bounce: 'bounce 1s infinite',
        fadeIn: 'fadeIn 0.3s ease-out',
        progress: 'progress 1.5s ease-in-out infinite'
      },
      keyframes: {
        progress: {
          '0%': { width: '0%' },
          '50%': { width: '100%' },
          '100%': { width: '0%' },
        },
        'star-movement-bottom': {
          '0%': { transform: 'translate(0%, 0%)', opacity: '1' },
          '100%': { transform: 'translate(-100%, 0%)', opacity: '0' },
          slideIn: {
            '0%': { opacity: 0, transform: 'translateY(-10px)' },
            '100%': { opacity: 1, transform: 'translateY(0)' },
          },
          progressStripe: {
            '0%': { backgroundPosition: '0 0' },
            '100%': { backgroundPosition: '40px 0' },
          },
          scaleIn: {
            '0%': { transform: 'scale(0.95)', opacity: 0 },
            '100%': { transform: 'scale(1)', opacity: 1 },
          },
          fadeIn: {
            '0%': { opacity: 0 },
            '100%': { opacity: 1 },
          }
        },
        'star-movement-top': {
          '0%': { transform: 'translate(0%, 0%)', opacity: '1' },
          '100%': { transform: 'translate(100%, 0%)', opacity: '0' },
        },
      },
    },
  },
  plugins: [],
};
