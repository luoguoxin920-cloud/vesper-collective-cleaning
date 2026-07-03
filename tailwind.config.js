/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#14213d",
        harbor: "#1f6f78",
        mint: "#dff3ea",
        linen: "#f7f4ef",
      },
      boxShadow: {
        soft: "0 18px 50px rgba(20, 33, 61, 0.10)",
      },
    },
  },
  plugins: [],
};
