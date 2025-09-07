/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        // Indian National Colors
        indian: {
          saffron: '#FF9933',
          white: '#FFFFFF',
          green: '#138808',
          navy: '#000080',
          lightGreen: '#E2F0E2',
          lightSaffron: '#FFE4CC'
        }
      }
    },
  },
  plugins: [],
}