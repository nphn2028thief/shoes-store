/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      width: {
        15: "3.75rem",
      },
      height: {
        navbar: "var(--navbar-height)",
      },
      colors: {
        ccc: "#ccc",
      },
      borderWidth: {
        "b-1": "border-bottom-width: 1px",
      },
      transitionProperty: {
        width: "width",
      },
      transitionTimingFunction: {
        ease: "ease",
      },
    },
  },
  plugins: [],
};
