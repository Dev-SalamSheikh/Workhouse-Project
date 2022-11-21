/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        Banner: "#F0F0F0",
        SearchBar: "#41A9F4",
        AverageSalary: "#8BC8DB",
        SearchBtnBg: "#EDEDED",
        EmployersBg: "#E3E3E3",
        ExpectedSalary: "#DEDEDE",
        FreelancerBg: "#AFB5B8",
        careerBtn: "#B4B5C3",
        bgGigBox: "#7CD175",
        searchbarBg: "#A4E0F6",
        freelancerBg: "#F3E8F6",
      },
      colors: {
        ThemeBlue: "#5DB5F3",
        borderColor: "#41A9F4",
        gigBorder: "#7CD175",
        freelancerOrange: "#D32F2F",
      },
    },
  },
  plugins: [],
};
