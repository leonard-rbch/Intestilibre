/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: false, // ❌ Désactive totalement le mode sombre
    content: [
      "./app/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {},
    },
    plugins: [],
  }