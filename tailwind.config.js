/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}" , "./node_modules/flowbite/**/*.js"],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        lora: ['Lora', 'sans-serif'],
      },
    },
  },
  plugins: [ require('flowbite/plugin') , require('flowbite-typography')],
}