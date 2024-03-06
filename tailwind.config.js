/** @type {import('tailwindcss').Config} */
import defaultTheme from "tailwindcss/defaultTheme";
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#6366f1",
        secondary: "#f1f5f9",
        tine: {
          light: "#67e8f9",
          DEFAULT: "#06b6d4",
          dark: "#0e7490",
        },
      },
    },
    fontFamily: {
      poppins: ["Poppins"],
    },
    keyframes: {
      slideDownAndFade: {
        from: { opacity: "0", transform: "translateY(-2px)" },
        to: { opacity: "1", transform: "translateY(0)" },
      },
      slideLeftAndFade: {
        from: { opacity: "0", transform: "translateX(2px)" },
        to: { opacity: "1", transform: "translateX(0)" },
      },
      slideUpAndFade: {
        from: { opacity: "0", transform: "translateY(2px)" },
        to: { opacity: "1", transform: "translateY(0)" },
      },
      slideRightAndFade: {
        from: { opacity: "0", transform: "translateX(-2px)" },
        to: { opacity: "1", transform: "translateX(0)" },
      },
    },
    animation: {
      slideDownAndFade: "slideDownAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)",
      slideLeftAndFade: "slideLeftAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)",
      slideUpAndFade: "slideUpAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)",
      slideRightAndFade:
        "slideRightAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)",
    },
  },
  plugins: [],
};
