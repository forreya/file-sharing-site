/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        'yellow': {
          light: '#F3F7FD'
        },
      },
    },
  },
  plugins: [],
}
