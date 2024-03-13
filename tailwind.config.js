/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,jsx}"],
  theme: {
    fontSize: {
      xs: ['12px', '16px'],
      sm: ['14px', '20px'],
      base: ['16px', '19.5px'],
      lg: ['18px', '21.94px'],
      xl: ['20px', '24.38px'],
      '2xl': ['24px', '29.26px'],
      '3xl': ['28px', '50px'],
      '4xl': ['48px', '58px'],
      '8xl': ['96px', '106px']
    },

    extend: {
      fontFamily: {
        palanquin: ['Palanquin', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
      },
      colors: {
        'primary': "#3FC3A7",
        "light-green-bg": "#EFFFFE",
        "green-secondary": "#03BA9E",
        "shiny-green" : "#28FFD1",
        "green-dark": "#003B3F",
        "dark-text": "#2E3538",
        "gray-text": "#585858",
        "white-smoke": "#F6FAFA",
      },
      boxShadow: {
        'extra': '0 20px 70px rgba(0, 0, 0, 0.1)'
      },

    },
  },
  plugins: [],
}

