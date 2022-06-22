/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'charcoal':'#14151a',
        'charcoal-light':'#1c2023',
        'charcoal-lightest':'#3a4248',
      },
    },
  },
  plugins: [],
}
