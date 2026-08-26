/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          green: {
            900: '#1F4A3C', // deep-kaya-green
            700: '#2E5E4E',
            600: '#4A6B5D', // sage-whisper
            50: '#F2F7F5',
          },
          gold: {
            500: '#C08A3E', // turmeric-gold
            600: '#A87C2E',
            50: '#FDFBF7',
          },
          teal: {
            900: '#16302B', // dusk-teal
          },
        },
        tier: {
          platinum: '#D9D9E3',
          gold: '#A87C2E',
          silver: '#B8BCC2',
        },
        neutral: {
          parchment: '#F3EEE2', // parchment background
          cream: '#FAF7F1',
          charcoal: '#26241F', // ink-charcoal
          grey: '#5B5B5B',
        },
      },
      fontFamily: {
        heading: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        body: ['"Plus Jakarta Sans"', 'sans-serif'],
        display: ['"Outfit"', 'sans-serif'],
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
      },
      maxWidth: {
        '8xl': '1440px',
        '9xl': '1600px',
      },
    },
  },
  plugins: [],
};
