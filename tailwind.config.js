module.exports = {
  // purge: { //ENABLE TO TEST LOCALLY
  //   enabled: true,
  //   content: ['./public/**/*.html', './src/**/*.html', './src/**/*.vue',],
  // },
  purge: {
    enabled: true,
    content: ["./src/**/*.vue", "./public/**/*.html"]
  },
  theme: {
    fontSize: {
      xs: ".75rem",
      sm: ".875rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "1.875rem",
      "4xl": "2.25rem",
      "5xl": "3rem",
      "6xl": "4rem",
      "8xl": "8rem"
    }
  }
};
