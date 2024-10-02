/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        header: "#2e2e2e",
        sidebar: "#dddddd",
        accent: "#555555",
      },
    },
  },
  plugins: [],
};
