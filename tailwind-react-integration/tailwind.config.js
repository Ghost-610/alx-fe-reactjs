/** @type {import('tailwindcss').Config} */
export default {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"], // Specify where to look for class usage
  theme: {
    extend: {}, // Extend default Tailwind CSS theme here
  },
  darkMode: false, // Disable dark mode (optional, can also set to 'media' or 'class')
  plugins: [], // Add Tailwind CSS plugins here if any
};
