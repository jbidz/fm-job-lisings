/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-bg-desktop': "url('/images/bg-header-desktop.svg')",
        'custom-bg-mobile': "url('/images/bg-header-mobile.svg')"
      },
      colors: {
       primary: 'hsl(180, 29%, 50%)',
       'custom-cyan-100': 'hsl(180, 52%, 96%)',
       'custom-cyan-300': 'hsl(180, 31%, 95%)',
       'custom-cyan-500': 'hsl(180, 8%, 52%)',
       'custom-cyan-700': 'hsl(180, 14%, 20%)'
      }
    },
  },
  plugins: [],
}