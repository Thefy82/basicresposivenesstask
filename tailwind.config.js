/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        "grey-darkest": "#08090a",
        "blue-1": "#0096c8",
        red: "#c0504d",
        green: "#77933c",
        "primary-full": "#8064a2",
        "base-black": "#000",
        "grey-hover": "#f8f9fa",
        "grey-dark": "#939ca3",
        "grey-lighter": "#ebedf0",
        "purple-3": "#f7f5f9",
        "grey-darker": "#6d747a",
        "blue-2": "#f7fdff",
        "purple-2": "#ccc1da",
        "grey-light": "#ced4da",
        grey1: "#969696",
      },
      spacing: {},
      fontFamily: {
        "text-sm-bold": "Poppins",
      },
      borderRadius: {
        "12xs-4": "0.4px",
      },
    },
    fontSize: {
      xl: "20px",
      xs: "12px",
      lg: "18px",
      sm: "14px",
      base: "16px",
      "5xl": "24px",
      "29xl": "48px",
      "4xs": "9px",
      "5xs": "8px",
      "3xs": "10px",
      "17xl": "36px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
