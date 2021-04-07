module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      height:{
        sm: '200px',
        md: '400px',
        lg: '400px'
      },
      keyframes: {
        fade: {
          "0%": {
            opacity: 0,
          },
          "50%": {
            opacity: 0.5,
          },
          "100%": {
            opacity: 1,
          },
        },
      },
      animation: {
        fade: "fade 3s",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
