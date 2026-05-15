/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["Manrope", "Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      colors: {
        ink: "#101828",
        muted: "#667085",
        line: "#e4e7ec",
        brand: {
          50: "#ecfdf5",
          100: "#d1fae5",
          500: "#10b981",
          600: "#059669",
          700: "#047857",
        },
        ocean: {
          500: "#0ea5e9",
          600: "#0284c7",
        },
      },
      boxShadow: {
        soft: "0 24px 70px rgba(16, 24, 40, 0.10)",
        lift: "0 16px 45px rgba(16, 24, 40, 0.14)",
      },
      animation: {
        float: "float 7s ease-in-out infinite",
        fadeUp: "fadeUp 0.75s ease both",
        shimmer: "shimmer 8s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-14px)" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(18px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "0% 50%" },
          "100%": { backgroundPosition: "200% 50%" },
        },
      },
    },
  },
  plugins: [],
};
