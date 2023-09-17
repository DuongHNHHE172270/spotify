/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      height: {
        "screen-navbar-player": 'calc(100vh - 12rem)'
      }
    },
  },
  plugins: [],
}

