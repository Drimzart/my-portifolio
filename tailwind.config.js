/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      colors: {
        primary: '#121212',
        secundary: '#212121',
        third: '#3F0071',
        four: '#FB2576'
      },
      fontFamily: {
        Prompt: "'Prompt', sans-serif"
      }
    }
  },
  plugins: []
}
