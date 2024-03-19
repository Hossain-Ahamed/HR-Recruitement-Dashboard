/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  important : "#root",
  theme: {
    extend: {
      colors : {
        "root-100" : "#B9F2E5",
        "root-200" : "#11998E",

        "black-text" : "#060709",
        "gray-text" : "#7B7B7B"
      },
    
    },
  },
  plugins: [],
}

