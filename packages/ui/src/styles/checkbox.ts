import theme from "../theme";

export const CheckboxRootCSS = theme.css({
  position: "relative",
  display: "inline-flex",
  alignItems: "center",
  cursor: "pointer",

  variants: {
    disabled: {
      true: {
        opacity: 0.5,
        cursor: "not-allowed",
      }
    }
  },
})

export const CheckboxTextCSS = theme.css({
  marginLeft: "8px",
  userSelect: "none"
})

export const CheckboxInputCSS = theme.css({
  width: "20px",
  height: "20px",
  margin: "0",
  appearance: "none",
  position: "relative",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  "&:disabled": {
    cursor: "not-allowed"
  },

  "&:not(:disabled)": {
    cursor: "pointer"
  },

  "&::before": {
    content: "",
    position: "absolute",
    width: "100%",
    height: "100%",
    borderRadius: "4px",
    border: "1px solid $grey",
    backgroundColor: "$light",
  },

  "&:checked::before": {
    backgroundColor: "$primary",
    borderColor: "$primary"
  },

  "&:checked::after": {
    fontFamily: 'Material Icons',
    content: "check",
    color: "$white",
    position: "absolute",
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "18px"
  },

  variants: {
    variant: {
      default: {
        "&::before": {
          borderRadius: "4px",
        },
      },
      rounded: {
        borderRadius: "100%",

        "&::before": {
          borderRadius: "100%",
        },
        "&:checked::after": {
          fontSize: "16px"
        }
      }
    }
  },

  defaultVariants: {
    variant: "default"
  }
})
