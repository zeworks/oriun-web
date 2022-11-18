import theme from "../theme";
import { pxToRem } from "../utils/rem";

export const HeadingCSS = theme.css({
  color: "$dark",

  variants: {
    variant: {
      '2xl': {
        fontSize: pxToRem(40),
      },
      'xl': {
        fontSize: pxToRem(35),
      },
      'lg': {
        fontSize: pxToRem(30),
      },
      'md': {
        fontSize: pxToRem(26),
      },
      'sm': {
        fontSize: pxToRem(22),
      },
      'xs': {
        fontSize: pxToRem(19),
      }
    }
  }
});

export const TextCSS = theme.css({
  variants: {
    variant: {
      text: {
        fontSize: pxToRem(16),
        display: "block"
      },
      textSmall: {
        fontSize: pxToRem(13),
        display: "block"
      }
    }
  }
})
