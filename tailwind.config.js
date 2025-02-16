/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./index.html",  // Include HTML files
      "./src/**/*.{js,ts,jsx,tsx}",  // Include JS/JSX files
    ],
    theme: {
      extend: {},
      fontFamily: {
        signature: ["Great Vibes"],
      },
    },
    plugins: [],
  };
  