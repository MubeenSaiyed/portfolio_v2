module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      shapiroMiddleExtd: [
        "Shapiro Middle Extd",
        "Helvetica",
        "Arial",
        "sans-serif",
      ],
      shapiroMiddleWide: [
        "Shapiro Middle Wide",
        "Helvetica",
        "Arial",
        "sans-serif",
      ],
      shapiroSuperWide: [
        "Shapiro Super Wide",
        "Helvetica",
        "Arial",
        "sans-serif",
      ],
      shapiroLightHeavy: [
        "Shapiro Light Heavy",
        "Helvetica",
        "Arial",
        "sans-serif",
      ],
      shapiroFeatherText: [
        "Shapiro Feather Text",
        "Helvetica",
        "Arial",
        "sans-serif",
      ],
    },

    colors: {
      white: "#fff",
      blue: "#1fb6ff",
      purple: "#7e5bef",
      pink: "#ff49db",
      orange: "#ff7849",
      green: "#13ce66",
      yellow: "#ffc82c",
      "gray-dark": "#273444",
      gray: "#8492a6",
      offWhite: "#d3dce6",
      // theme colors
      greyLight: "#f0f0f0",
      greyLightish: "#e8e8e8",
      greyMid: "#a7a7a7",
      blackDarkest: " #0a0a0a",
      blackDarker: "#2e2e2e",
      blackDark: "#333",
    },
    extend: {
      width: {
        "col-1": "8.33%",
        "col-2": "16.66%",
        "col-4": "33.33%",
        "col-8": "67.33%",
        "col-7": "58.33%",
        "38px": "38px",
        "24px": "24px",
      },
      height: {
        "1px": "1px",
      },
      lineHeight: {
        hero: "76px",
        "20px": "20px",
      },
      spacing: {
        "col-1": "8.33%",
        "col-2": "16.66%",
        "col-4": "33.33%",
        "0.85rem": "0.85rem",
      },
      fontSize: {
        "13px": "13px",
        "9px": "9px",
        "18px": "18px",
        "19px": "19px",
        "12px": "12px",
        hero: "76px",
      },
    },
  },
  plugins: [],
};
