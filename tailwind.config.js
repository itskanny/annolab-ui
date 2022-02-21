module.exports = {
  prefix: 'tw-',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary":"#4D47C3",
        "primary-light":"#F0EFFF",
        "on-primary-light":"#A7A3FF",
        "background": "#ffffff",
        "icon": "#9A9AAF",
      },
      boxShadow: {
        // '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
        "input-icon":"12px 0 10px -10px rgba(0,0,0,.05);",
        "input-icon-suffix":"-12px 0 10px -10px rgba(0,0,0,.05);",
        "input-icon-focus":" rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.25) 0px 8px 32px;"
      },
      screens: {
        'xs': '480px',
        'sm': '576px',
        'md': '768px',
        'lg': '992px',
        'mlg': '1045px',
        'xl': '1200px',
        'xxl': '1600px',
      },
    },
  },
  plugins: [],
}
