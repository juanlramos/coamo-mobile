const { colors } = require('./src/theme/colors'); // 1. Importamos nossas cores

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],

  theme: {
    extend: {
      // 2. Aqui estendemos a paleta de cores padrão do Tailwind
      colors: {
        ...colors, // 3. Adicionamos todas as nossas cores do arquivo de tema
      },
    },
  },
  plugins: [],
};