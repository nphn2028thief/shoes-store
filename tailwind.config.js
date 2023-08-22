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
        "1": "1px",
      },
      transitionProperty: {
        width: "width",
      },
      transitionTimingFunction: {
        ease: "ease",
      },
      boxShadow: {
        headless: "0 -4px 32px rgba(0, 0, 0, 0.2)",
      },
      borderColor: {
        tippy: "rgba(0, 0, 0, 0.05)",
      },
    },
  },
  plugins: [],
};
