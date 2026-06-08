const colors = require("tailwindcss/colors");

module.exports = {
  purpleheart: {
    colors: {
      primary: colors.purple[700], secondary: colors.purple[800],
      dark: { primary: colors.purple[300], secondary: colors.purple[500] },
      accent: { gray: { light: colors.gray[300], dark: colors.gray[500] }, default: colors.blue[700] },
    },
  },
  pinktown: {
    colors: {
      primary: colors.pink[700], secondary: colors.pink[800],
      dark: { primary: colors.pink[300], secondary: colors.pink[500] },
      accent: { gray: { light: colors.gray[300], dark: colors.gray[500] }, default: colors.blue[700] },
    },
  },
  /**
   * AI News Radar — Electric Indigo theme
   */
  ferry: {
    colors: {
      primary: "#6366f1",
      secondary: "#8b5cf6",
      background: "#eef2ff",
      dark: {
        primary: "#818cf8",
        secondary: "#c4b5fd",
      },
      accent: {
        gray: { light: colors.gray[300], dark: colors.gray[600] },
        default: "#06b6d4",
      },
    },
  },
  default: {
    colors: {
      primary: colors.purple[700], secondary: colors.purple[800],
      dark: { primary: colors.purple[300], secondary: colors.purple[500] },
      accent: { gray: { light: colors.gray[300], dark: colors.gray[500] }, default: colors.blue[700] },
    },
  },
};
