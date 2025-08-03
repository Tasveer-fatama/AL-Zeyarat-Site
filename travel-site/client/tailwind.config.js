/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        'gradient-x': 'gradient-x 6s ease infinite',
        'fade-in-up': 'fadeInUp 1s ease-out',
        'bounce': 'bounce 2s infinite',
        fadeIn: "fadeIn 0.5s ease-in-out",
        fadeUp: "fadeUp 0.6s ease-in-out",
      },
      colors: {
        backgroundColor: "#FFFFFF",
        textColor: "#1A1E18",
        accentColor: "#F4F4F4",
        secondaryTextColor: "#6B7280",
        borderColor: "#D1D5DB",
        hoverColor: "#306366",
      },
      fontFamily: {
        sans: ['"Open Sans"', "sans-serif"],
        serif: ['"Playfair Display"', "serif"],
      },
      spacing: {
        128: "32rem",
        144: "36rem",
      },
      container: {
        padding: "1rem",
        screens: {
          lg: "1024px",
          xl: "1208px",
          "2xl": "1536px",
        },
      },
      keyframes: {
        'gradient-x': {
          '0%, 100%': {
            'background-size':'200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size':'200% 200%',
            'background-position': 'right center'
          }
        },
        'fadeInUp': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
  ],
};