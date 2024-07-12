/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'primary-blue':'#64AADD',
        'blue-bg':' #64AADD29',
        'btn-bl':'#2F2F2F',
        'btn-bl2':'#2B3136'
      }
    },
    fontFamily:{
      "ICON":["Irish Grover"],
      "body":["Jost"],
      "Rubik":["Rubik"]
    }
  },
  plugins: [],
}