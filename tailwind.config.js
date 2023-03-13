/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
      'Tilt-Prism': ['Tilt Prism', 'cursive'],
      'Lorinda-Solid': ['Lorinda-Solid', 'cursive'],
      'Tilt-Warp': ['Tilt Warp', 'cursive']
    }},
    colors: {
      primaryBeige: '#AD9A83',
      primaryDarkBlue: '#17252C',
      primaryLightGray: '#D9D9D9',
      primaryWhite: "#ffffff",
      primaryRed: "#b1270c",
      primaryGreen: "#09962f"
    },
    
  },
  plugins: [
    require('tailwind-scrollbar')
  ],
}
