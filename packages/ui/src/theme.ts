import { createStitches } from "@stitches/core"
import { global } from "./global"

export default createStitches({
  media: {
    bpSM: "(min-width: 576px)",
    bpMD: "(min-width: 768px)",
    bpLG: "(min-width: 992px)",
    bpXL: "(min-width: 1200px)",
    bpXXL: "(min-width: 1400px)",
  },
  theme: {
    global,
    colors: {
      primary: "#7367f0",
      primaryTransparent: "rgba(115, 103, 240, 0.12)",
      secondary: "#82868b",
      success: "#28c76f",
      successTransparent: "rgba(40, 199, 111, 0.12)",
      info: "#00cfe8",
      warning: "#ff9f43",
      warningTransparent: "rgba(255, 159, 67, 0.12)",
      danger: "#ea5455",
      dangerTransparent: "rgba(234, 84, 85, 0.12)",
      light: "#f6f6f6",
      white: "#ffffff",
      dark: "#4b4b4b",
      grey: "#d8d6de",
      indigo: "#6610f2",
    },
    fonts: {
      primary: '"Roboto", sans-serif'
    },
    fontWeights: {
      thin: "100",
      light: "300",
      regular: "400",
      medium: "500",
      bold: "700"
    },
    borderRadius: {
      primary: "6px"
    },
    shadows: {
      primary: "0px 4px 24px rgba(0, 0, 0, 0.12)",
      secondary: "0px 4px 24px rgba(0, 0, 0, 0.06)"
    }
  }
}).config
