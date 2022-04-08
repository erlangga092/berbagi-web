module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      theme: {
        screens: {
          xsm: "320px",
        },
      },
    },
  },
  plugins: [],
};
