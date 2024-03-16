/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./lib/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    screens: {
      xs: "320px",
      md: "768px",
      lg: "1024px",
      xl: "1440px",
    },
    colors: {
      none: "none",
      transparent: "transparent",
      primary: {
        100: "#e8f3fe",
        200: "#cce4fd",
        300: "#a4cefc",
        400: "#77b6fb",
        500: "#4b9cf9",
        600: "#2382f7",
        700: "#196bde",
        800: "#1557c0",
        900: "#0f3375",
      },
      green: {
        100: "#e7f9f1",
        200: "#7acc7a",
        300: "#32a632",
        400: "#008000",
      },
      red: {
        100: "#f8ebeb",
        200: "#e35053",
        300: "#d02024",
        400: "#ac1c1e",
      },
      yellow: {
        100: "#faf3de",
        200: "#ffe97f",
        300: "#ffdc34",
        400: "#dbb754",
      },
      neutral: {
        100: "#f8f9fa",
        200: "#dee2e6",
        300: "#adb5bd",
        400: "#495057",
        500: "#212529",
      },
      white: "#ffffff",
      black: "#000000",
    },
    space: {
      0: "0rem",
      0.5: "0.13rem",
      1: "0.25rem",
      1.5: "0.5rem",
      2: "0.65rem",
      2.5: "0.75rem",
      3: "1rem",
      3.5: "1.25rem",
      4: "1.5rem",
      5: "1.75rem",
      6: "2rem",
      7: "2.25rem",
      8: "2.5rem",
      9: "2.75rem",
      10: "3rem",
      11: "3.5rem",
      12: "4rem",
      14: "5rem",
      16: "6rem",
      20: "7rem",
      24: "7.5rem",
      28: "8rem",
      32: "9rem",
      36: "10rem",
      40: "12rem",
      44: "13rem",
      48: "14rem",
      52: "16rem",
      56: "18rem",
      60: "20rem",
    },
    fontFamily: {
      sans: [
        "Montserrat",
        "system-ui",
        "-apple-system",
        "BlinkMacSystemFont",
        '"Segoe UI"',
        "Roboto",
        '"Helvetica Neue"',
        "Arial",
        '"Noto Sans"',
        "sans-serif",
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
        '"Noto Color Emoji"',
      ],
    },
    fontSize: {
      12: "12px", // 12px
      14: "14px", // 14px
      16: "16px", // 16px
      18: "18px", // 18px
      19: "19px", // 19px
      20: "20px", // 20px
      22: "22px", // 22px
      23: "23px", // 23px
      25: "25px", // 25px
      28: "28px", // 28px
      36: "36px", // 36px
      48: "48px", // 48px
      120: "120px"//120px;
    },
    letterSpacing: {
      wide: "0.25em",
    },
    lineHeight: {
      none: "1",
      heading: "1.2",
      link: "1.3",
      normal: "1.5",
    },
    extend: {
      boxShadow: {
        sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      },
      width: {
        '350': '350px',
      },
      height: {
        '400': '400px',
      },
    },
  },
  plugins: [],
};
