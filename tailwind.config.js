module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        mont: ["Montserrat", "sans-serif"],
      },
      colors: {
        "brink-pink": {
          50: "#fef6f8",
          100: "#fdeef1",
          200: "#fad3dd",
          300: "#f7b9c8",
          400: "#f0859f",
          500: "#ea5076",
          600: "#d3486a",
          700: "#b03c59",
          800: "#8c3047",
          900: "#73273a",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
