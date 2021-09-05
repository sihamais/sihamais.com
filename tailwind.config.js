module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      height: {
        sm: "200px",
        md: "400px",
        lg: "400px",
      },
      keyframes: {
        fadeIn: {
          "0%": {
            opacity: 0,
          },
          "100%": {
            opacity: 1,
          },
        },
        fadeOut: {
          "0%": {
            opacity: 1,
          },
          "100%": {
            opacity: 0,
          },
        },
      },
      animation: {
        fadeIn: "fadeIn ease 3s",
        fadeOut: "fadeOut ease 3s",
      },
    },
  },
  variants: {
    extend: {
      justifyContent: ["dark"],
    },
  },
  plugins: [],
};
