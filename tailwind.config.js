/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        Banner: "#F0F0F0",
        SearchBar: "#41A9F4",
        SearchBtnBg: "#EDEDED",
        EmployersBg: "#E3E3E3",
        FreelancerBg: "#AFB5B8",
      },
      colors: {
        ThemeBlue: "#5DB5F3",
        borderColor: "#41A9F4",
      },
    },
  },
  plugins: [],
};
