const { colors } = require("./src/themes/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
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
