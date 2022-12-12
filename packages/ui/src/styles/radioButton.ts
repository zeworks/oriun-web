import theme from "../theme";

export const RadioButtonRootCSS = theme.css({
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

export const RadioButtonTextCSS = theme.css({
  marginLeft: "8px",
  userSelect: "none"
})

export const RadioButtonInputCSS = theme.css({
  width: "20px",
  height: "20px",
  margin: "0",
  appearance: "none",
  position: "relative",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  border: "1px solid $grey",
  borderRadius: "100%",
  backgroundColor: "$light",

  "&:disabled": {
    cursor: "not-allowed"
  },

  "&:not(:disabled)": {
    cursor: "pointer"
  },

  "&:checked": {
    backgroundColor: "$primary",
    border: "2px solid $primary",
  },

  "&:checked::after": {
    content: "",
    position: "absolute",
    width: "10px",
    height: "10px",
    backgroundColor: "$white",
    borderRadius: "100%",
  }
})
