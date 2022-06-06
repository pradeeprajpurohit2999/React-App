module.exports = {
  content: [
    "./src/views/*.{js,jsx,ts,tsx}",
    "./src/*.{js,jsx,ts}"
  ],
  theme: {
    color: {
      'light-pink': '#F9EBEB',
    },
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'), ]
}