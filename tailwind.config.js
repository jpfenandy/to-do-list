/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{html}"
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}
