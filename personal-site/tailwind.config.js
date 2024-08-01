/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      gamay: ["gamay", "sans-serif"],
      gamaywide: ["gamay-wide", "sans-serif"],
      soleil: ["soleil", "sans-serif"],
      azo: ["azo-sans-web", "sans-serif"],
      azouber: ["azo-sans-uber", "sans-serif"],
      area: ["area-normal"],
      greycliff: ["greycliff-cf", "sans-serif"],
    },
    extend: {
      colors: {
        lightest: "#f5f4f0",
        "pris-purple": "#988BFA",
        "pris-pink": "#b6bcfa",
        "pris-light-pink": "#F1C2FF",
        "third-pink": "#fab6da",
        "pris-blue": "#B1DFFF",
        "pris-yellow": "#F8D283",
        "extra-yellow": "#ffe2a8",
        "extra-blue": "#a3d6ff",
        backwhite: "#f0eeeb",
        "third-blue": "#c5cffc",
        "second-blue": "#dfc5fc",
        "third-pink": "#F2C0CF",
        "second-pink": "#fcc5fc",
      },
      keyframes: {
        arrow: {
          "0%, 100%": { transform: "translate(2px, 0px)" },
          "80%": { transform: "translate(-2px, 0px) scale(1.1)" },
        },
        fadeIn: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
        gradient: {
          "0%": { backgroundPosition: "0% 50%" },
          "100%": { backgroundPosition: "100% 50%" },
        },
        blob: {
          "0%": { transform: "translate(0px, 0px) scale(1)" },
          "33%": { transform: "translate(30px, -50px) scale(1.1)" },
          "66%": { transform: "translate(-20px, 20px) scale(0.9)" },
          "100%": { transform: "translate(0px, 0px) scale(1)" },
        },
        slidein: {
          "0%": { transform: "translate(0, -100%)", opacity: 0 },
          "100%": { transform: "translate(0, 0)", opacity: 1 },
        },
      },
      animation: {
        arrow: "arrow infinite .8s ease-in-out",
        slidein: "slidein .5s ease-in-out",
        gradient: "gradient 6s linear infinite",
        blob: "blob 7s infinite",
        fade: "fadeIn .5s ease-in-out",
      },
    },
  },
  plugins: [],
};
