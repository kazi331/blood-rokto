/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./page-components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#EA062B',
        'dark1': '#161D31',
        'dark2': '#283046',
        'dark-hover': '#343D55'
      }
    },
    container: {
      center: true,

      screens: {
        sm: '600px',
        md: '728px',
        lg: '984px',
        xl: '1240px',
        '2xl': '1496px',
      },
    }
  },
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
  ]
}
