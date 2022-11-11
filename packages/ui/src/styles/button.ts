import { css } from "@stitches/core";
import theme from "../theme";
import { pxToRem } from "../utils/rem";

export const ButtonCSS = css({
  border: 'none',
  outline: "none",
  color: "$dark",
  fontFamily: "$primary",
  padding: '8px 16px',
  borderRadius: theme.theme.borderRadius.primary,
  fontSize: pxToRem(15),
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  minHeight: "40px",

  '& svg, & i': {
    margin: "0 0 0 4px",
  },

  '&:not(:disabled)': {
    cursor: 'pointer',
  },

  '&:disabled': {
    opacity: "0.5",
    cursor: "not-allowed"
  },

  variants: {
    variant: {
      primary: {
        backgroundColor: "$primary",
        color: "$white",
        transition: "box-shadow 0.1s ease",

        '&:hover': {
          boxShadow: `0 8px 25px -8px ${theme.theme.colors.primary}`
        }
      },
      secondary: {
        backgroundColor: "$secondary",
        color: "$white",
        transition: "box-shadow 0.1s ease",

        '&:hover': {
          boxShadow: `0 8px 25px -8px ${theme.theme.colors.secondary}`
        }
      }
    }
  }
})
