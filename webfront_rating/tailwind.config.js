/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily:{
           aqum:["aqum", "sans-serif"],
           aqum_2:["aqum-2", "sans-serif"]

      }
    },
  },
  plugins: [],
}

