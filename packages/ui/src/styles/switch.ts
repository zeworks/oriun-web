import theme from "../theme";

export const SwitchInputWrapper = theme.css({
  position: "relative",
  width: "40px",
  height: "22px",
})

export const SwitchRootCSS = theme.css({
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

export const SwitchTextCSS = theme.css({
  marginLeft: "8px",
  userSelect: "none"
})

export const SwitchInputSliderCSS = theme.css({
  position: "absolute",
  cursor: "pointer",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: "$grey",
  borderRadius: "34px",
  transition: ".4s",

  "&::before": {
    position: "absolute",
    content: "",
    height: "16px",
    width: "16px",
    left: "3px",
    bottom: "3px",
    backgroundColor: "white",
    transition: ".4s",
    borderRadius: "100%"
  }
})

export const SwitchInputCSS = theme.css({
  opacity: 0,
  width: 0,
  height: 0,

  "&:checked + div": {
    backgroundColor: "$primary"
  },

  "&:checked + div::before": {
    transform: "translateX(18px)"
  }
})
