/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        overpass: ["Overpass", "sans-serif"],
        samurai: ["Big Samurai", "Big Shoulders Display"],
      },
      colors: {
        primary: "#325242",
        secondary:"#007481",
        tertiary:"#ffb304",
        primaryColor: "#0067FF",
        yellowColor: "#FEB60D",
        purpleColor: "#9771FF",
        irisBlueColor: "#01B5C5",
        headingColor: "#181A1E",
        textPrimary: "#ffffff",
        textColor: "#4E545F",
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
// 397a4a