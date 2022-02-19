const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./app/**/**/*.{ts,tsx,jsx,js}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fff2f0',
          100: '#f7e9e7',
          200: '#efd3ce',
          300: '#e8beb6',
          400: '#e0a89d',
          500: '#d89285',
          600: '#ad756a',
          700: '#825850',
          800: '#563a35',
          900: '#2b1d1b',
        },
        secondary: {
          50: '#edf3ec',
          100: '#deebdb',
          200: '#bdd6b7',
          300: '#9bc293',
          400: '#7aad6f',
          500: '#59994b',
          600: '#477a3c',
          700: '#355c2d',
          800: '#243d1e',
          900: '#121f0f',
        },
      },
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/line-clamp'),
  ],
}
