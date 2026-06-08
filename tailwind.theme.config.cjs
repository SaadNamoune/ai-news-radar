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
   * AI News Radar — Research publication theme (sky blue, no violet)
   */
  ferry: {
    colors: {
      primary: "#0284c7",
      secondary: "#0369a1",
      background: "#f0f9ff",
      dark: {
        primary: "#38bdf8",
        secondary: "#7dd3fc",
      },
      accent: {
        gray: { light: colors.gray[300], dark: colors.gray[600] },
        default: "#0d9488",
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
