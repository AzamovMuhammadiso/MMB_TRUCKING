/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#000000',
        secondary: '#4B5563', // Steel Gray
        accent: '#FF0000', // Yellow for CTAs
        'accent-alt': '#EF4444', // Red alternative accent
        'dark-gray': '#1F2937',
        'light-gray': '#F3F4F6',
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
      backgroundImage: {
        'hero-pattern': "url('https://images.pexels.com/photos/2684214/pexels-photo-2684214.jpeg')",
        'about-pattern': "url('https://images.pexels.com/photos/2199293/pexels-photo-2199293.jpeg')",
      },
    },
  },
  plugins: [],
};