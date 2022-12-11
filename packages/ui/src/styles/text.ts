import theme from "../theme";
import { pxToRem } from "../utils/rem";

export const TextCSS = theme.css({
  display: "block",

  variants: {
    color: {
      grey: {
        color: "$grey"
      },
      dark: {
        color: "$dark"
      },
      danger: {
        color: "$danger"
      }
    },
    size: {
      xxlarge: {
        fontSize: pxToRem(72),
      },
      xlarge: {
        fontSize: pxToRem(30),
      },
      large: {
        fontSize: pxToRem(20),
      },
      normal: {
        fontSize: pxToRem(16),
      },
      small: {
        fontSize: pxToRem(14),
      },
      xsmall: {
        fontSize: pxToRem(12),
      }
    },
    weight: {
      thin: {
        fontWeight: "100"
      },
      light: {
        fontWeight: "300"
      },
      regular: {
        fontWeight: "400"
      },
      medium: {
        fontWeight: "500"
      },
      bold: {
        fontWeight: "700"
      }
    }
  },
  defaultVariants: {
    size: "normal",
    weight: "regular"
  }
})
