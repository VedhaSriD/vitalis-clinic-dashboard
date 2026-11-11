/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        ivory: {
          DEFAULT: '#FAF6EE',
          dark: '#F1EADC',
          border: '#E8E0D0',
        },
        charcoal: {
          light: '#2C2C32',
          DEFAULT: '#1E1E22',
          dark: '#141417',
          surface: '#242429',
        },
        scarlet: {
          DEFAULT: '#E5282B',
          light: '#FF6A4D',
          dark: '#B8181A',
          subtle: '#FEECEC',
        },
        status: {
          confirmed: '#15803D',
          'confirmed-bg': '#DCFCE7',
          waiting: '#B45309',
          'waiting-bg': '#FEF3C7',
          cancelled: '#E5282B',
          'cancelled-bg': '#FEE2E2',
          offduty: '#64748B',
          'offduty-bg': '#F1F5F9',
        },
      },
      fontFamily: {
        fraunces: ['Fraunces', 'serif'],
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 4px 20px -2px rgba(30, 30, 34, 0.05), 0 2px 6px -1px rgba(30, 30, 34, 0.02)',
        'soft-hover': '0 12px 30px -4px rgba(30, 30, 34, 0.08), 0 4px 10px -2px rgba(30, 30, 34, 0.04)',
        modal: '0 24px 48px -12px rgba(20, 20, 23, 0.25)',
      },
      borderRadius: {
        bento: '20px',
      },
    },
  },
  plugins: [],
};