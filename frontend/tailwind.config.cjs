module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        forest: '#123D2A',
        fresh: '#4F8A5B',
        warm: '#F8F5EC',
        orange: '#F28C45',
        dark: '#202820',
      },
      fontFamily: {
        heading: ['Montserrat', 'sans-serif'],
        body: ['Source Serif Pro', 'serif'],
      },
    },
  },
  plugins: [],
};

