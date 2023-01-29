import theme from "../theme";
import { pxToRem } from "../utils/rem";

export const ButtonCSS = theme.css({
  border: 'none',
  outline: "none",
  color: "$dark",
  fontFamily: "$primary",
  borderRadius: "6px",
  fontSize: pxToRem(15),
  fontWeight: "$medium",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  
  '& svg, & i': {
    margin: "0 0 0 6px",
    fontSize: "20px",
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
        transition: "background-color 0.1s ease",
        padding: '8px 16px',
        minHeight: "40px",

        '&:not(:disabled):hover': {
          backgroundColor: "rgb(101, 91, 211)"
        },
      },
      secondary: {
        backgroundColor: "$secondary",
        color: "$white",
        transition: "background-color 0.1s ease",
        padding: '8px 16px',
        minHeight: "40px",

        '&:not(:disabled):hover': {
          backgroundColor: "rgb(148, 150, 153)"
        }
      },
      link: {
        backgroundColor: "transparent",
      }
    }
  }
})
