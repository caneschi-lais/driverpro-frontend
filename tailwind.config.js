/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./pages/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#1A237E", // Deep Navy Blue (Headers, botões principais, textos fortes)
          light: "#283593", // Tom um pouco mais claro do azul para cards internos/hover
          dark: "#121858", // Tom mais escuro para fundos e sombras
        },
        accent: {
          DEFAULT: "#FDD835", // Traffic Yellow (Botões de ação, ícones em destaque)
          light: "#FDF08B", // Amarelo bem suave para fundos de tags
        },
        background: {
          DEFAULT: "#F5F5F5", // Clean Off-White (Fundo principal do app)
          paper: "#FFFFFF", // Branco puro (Fundo de cards)
        },
      },
    },
  },
  plugins: [],
};
