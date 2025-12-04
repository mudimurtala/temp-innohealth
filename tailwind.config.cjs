/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
  extend: {
    colors: {
      brand: "#2563eb",     // your main color
      danger: "#dc2626",    // error color
    },
    borderRadius: {
      xl: "1rem",
    },
  },
},
  plugins: []
};
