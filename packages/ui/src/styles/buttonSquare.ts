import theme from "../theme";
import { pxToRem } from "../utils/rem";

export const ButtonSquareCSS = theme.css({
  border: 'none',
  outline: "none",
  color: "$dark",
  borderRadius: "6px",
  fontSize: pxToRem(15),
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",

  '& svg, & i': {
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
    size: {
      small: {
        width: "35px",
        height: "35px",
      },
      medium: {
        width: "40px",
        height: "40px",

        '& svg, & i': {
          fontSize: "22px",
        },
      },
      large: {
        width: "50px",
        height: "50px",

        '& svg, & i': {
          fontSize: "27px",
        },
      }
    },
    variant: {
      primary: {
        backgroundColor: "$primary",
        color: "$white",
        transition: "box-shadow 0.1s ease",

        '&:hover': {
          boxShadow: `0 8px 25px -8px ${theme.theme.colors.primary}`
        },
      },
      secondary: {
        backgroundColor: "$secondary",
        color: "$white",
        transition: "box-shadow 0.1s ease",

        '&:hover': {
          boxShadow: `0 8px 25px -8px ${theme.theme.colors.secondary}`
        }
      },
      outlined: {
        backgroundColor: "$white",
        border: "1px solid $dark",
        '&:hover': {
          boxShadow: `0 8px 25px -8px ${theme.theme.colors.secondary}`
        }
      }
    },
    rounded: {
      true: {
        borderRadius: "100%",
      }
    }
  },

  defaultVariants: {
    size: "medium",
    variant: "primary",
    rounded: false
  }
})
