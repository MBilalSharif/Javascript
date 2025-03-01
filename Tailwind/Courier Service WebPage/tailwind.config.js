// tailwind.config.js
module.exports = {
  content: ["./*.html", "./src/**/*.{html,js}"], // Adjust paths as necessary
  theme: {
    extend: {
      keyframes: {
        drive: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
      },
      animation: {
        drive: 'drive 5s linear infinite',
      },
    },
  },
  plugins: [],
};
