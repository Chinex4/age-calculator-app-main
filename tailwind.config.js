/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'mypurple': 'hsl(259, 100%, 65%)',
        'lightred': 'hsl(0, 100%, 67%)',
        'offwhite': 'hsl(0, 0%, 94%)',
        'lightgray': 'hsl(0, 0%, 86%)',
        'smokeygray': 'hsl(0, 1%, 44%)',
        'offblack': 'hsl(0, 0%, 8%)'
      },
    },
  },
  plugins: [],
}

