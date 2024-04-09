const flowbite = require("flowbite-react/tailwind");
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    flowbite.content(),
],
  theme: {
    extend: {
      colors:{
        "body-bg": "#0c0c1d"
      }
    },
  },
  plugins: [ flowbite.plugin()],
}
