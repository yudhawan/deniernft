module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        leaf: '#6fcf97',
        orange :'#ff754c',
        black:'#11142d'
      },
      backgroundImage:{
        chill: "url('https://jurnalposmedia.com/wp-content/uploads/2020/04/PicsArt_04-12-02.50.391.jpg')"
      }
    },
    fontFamily:{
      ubuntu: 'Ubuntu',
      nunito: 'Nunito Sans'
    }
  },
  plugins: [require('@tailwindcss/line-clamp'),],
}
