/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'serviceTeaser1': "url('/assets/images/LOGO_final 3.png')",
        'footer-texture': "url('/img/footer-texture.png')",
      },
      fontFamily: {
        dmSans: ['DM Sans', 'sans-serif'],
        manrope: ['Manrope', 'sans-serif'],
      },
    },
  },
  plugins: [],
}