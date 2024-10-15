/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        overpass: ["Overpass", "sans-serif"],
      },
      colors: {
        primary: "#325242",
        secondary:"#397a4a",
        textPrimary: "#ffffff",
      },
      backgroundImage: {
        'hero-texture': "url('https://assets.betterhelp.com/betterhelp_two/css-elements/bg-texture.png')",
      }
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.scrollbar-hide': {
          '-ms-overflow-style': 'none',  // Internet Explorer 10+
          'scrollbar-width': 'none',     // Firefox
          '&::-webkit-scrollbar': {
            display: 'none',             // Chrome/Safari
          },
        },
      });
    },
  ],
};
