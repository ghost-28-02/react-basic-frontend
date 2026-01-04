/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#EFF6FF',     // Light Blue
        primary: '#1E3A8A',        // Navy Blue
        secondary: '#2563EB',      // Medium Blue
      },
    },
  },
  plugins: [],
}

