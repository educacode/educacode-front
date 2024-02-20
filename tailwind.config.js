/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'my-color-theme-1': 'rgba(15, 23, 42, 1)',
        'my-color-theme-2': 'rgba(156, 106, 252, 1)',
        'my-color-theme-3': 'rgba(108, 106, 252, 1)',
        'my-color-theme-4': 'rgba(106, 196, 252, 1)',
        'my-color-theme-5': 'rgba(204, 106, 252, 1)',
        'my-color-theme-6': 'rgba(191, 190, 252, 1)',
        'background': '#0f0f0f'
      }
    },
  },
  plugins: [],
}
