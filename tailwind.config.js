/** @type {import('tailwindcss').Config} */

const withMT = require("@material-tailwind/react/utils/withMT");


export default module.exports = withMT({
  darkMode : "selector",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        heebo: ["Montserrat", 'sans-serif'],
        nunito: ["Poppins", 'sans-serif'],
      },
      colors: {
        pmColor: '#98C33A',
      },

    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light", "dark"],
  },

});

