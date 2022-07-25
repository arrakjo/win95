/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        green: "#008282",
        white: "#FFFFFF",
        black: "#000000",
        grey: {
          20: "#F0F0F0",
          50: "#E3E3E3",
          100: "#C3C3C3",
          200: "#A0A0A0",
          300: "#8E8E8E",
        },
        blue: {
          50: "#001CF5",
          100: "#000EA3",
          200: "#02007F",
        },
        red: {
          100: "#EB3323",
          200: "#9C2054",
        },
      },
    },
  },
  plugins: [],
};
