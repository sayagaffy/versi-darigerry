/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'goli': ['Goli', 'sans-serif'],
      },
      colors: {
        primary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
        },
        purple: {
          50: '#f8f4ff',
          100: '#f0e6ff',
          200: '#e1ccff',
          300: '#d1b3ff',
          400: '#b380ff',
          500: '#9547ff',
          600: '#6A2FF7',
          700: '#5A1FE7',
          800: '#4A0FD7',
          900: '#3A00C7',
        },
        mint: {
          50: '#f0fffe',
          100: '#ccfff9',
          200: '#99fff4',
          300: '#5cffed',
          400: '#33F2CD',
          500: '#1dd1ae',
          600: '#14a085',
          700: '#0f7c66',
          800: '#0c5c4a',
          900: '#0a4d3d',
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'purple-gradient': 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        'blue-gradient': 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      },
      animation: {
        'slide-left': 'slide-left 15s linear infinite',
      },
      keyframes: {
        'slide-left': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
}
