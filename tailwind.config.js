/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'serif': ['Montserrat', ...defaultTheme.fontFamily.serif],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        primary: '#D099EA',
        secondary: '#370051',
        mainBg: '#1C0029',
        neutral: {
          200: '#E6E0E9',
          800: '#3B383E',
          900: '#3A3A3A'
        }
      },
      borderRadius: {
        '2.5xl': '1.25rem',
        '5xl': '2.5rem',
      },
      fontSize: {
        '2.5xl': ['26px', '1.25'],
        '4.5xl': ['2.5rem', '1.25'],
        '5.5xl': ['54px', '1.25'],
        '7.5xl': ['80px', '98px'],
      },
      spacing: {
        '4.5': '1.125rem',
        '13': '3.25rem',
        '15': '3.75rem',
        '30': '7.5rem',
        '128': '32rem',
        '144': '36rem',
      }
    },
  },
  plugins: [],
}
