/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['Passion One', 'sans-serif'],
        display2: ['Road Rage', 'sans-serif'],
        buttontext: ['Jomhuria', 'serif'],
        keterangan: ['Silkscreen', 'sans-serif']
      },
      backgroundImage: {
        'darkpattern': "url(./assets/img/backgroundpaper.jpg)",
      },
    },
  },
  plugins: [],
}

