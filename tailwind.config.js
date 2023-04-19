/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#00a3b7',
    },
    backgroundImage:{
      Equipo: "url('assets/equipo.jpg')",
      ima1: "url('assets/imagen4.jpg')",
      ima2: "url('assets/imagen5.jpg')",
      ima3: "url('assets/imagen3.jpg')"
    }
    },
  },
  plugins: [],
}