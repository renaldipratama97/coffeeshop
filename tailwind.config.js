module.exports = {
  mode: "jit",
  purge: ["./public/**/*.html", "./src/**/*.{js,jsx,ts,tsx,vue}"],
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    colors: {
      primary: "#6A4029",
      secondary: "#FFBA33",
      black: "#000000",
      blacked: "#0B132A",
      white: "#FFFFFF",
      gray: "#9F9F9F",
    },
  },
  plugins: [],
};
