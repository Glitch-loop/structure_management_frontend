/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.jsx", "/index.html"],
  theme: {
    colors: {
      "prpl": "#7E55F3",
      "d-prpl": "#86469C",
      "pink": "#FFCDEA",
      "d-pink": "#EF65B2",
      "d-blue": "#26265A"
    },
    extend: {
      fontFamily: {
        "Montserrat": ["Montserrat", "sans-serif"]
      }
    },
  },
  plugins: [],
}

