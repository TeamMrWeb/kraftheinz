/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        arial: ["Arial"],
        bebasNeue: ["BebasNeue"]
      },
      colors: {
        crimson: "#DF2827",
        "dark-crimson": "#c42623",
        mustard: "#FFC70A"
      }
    }
  },
  plugins: []
}
