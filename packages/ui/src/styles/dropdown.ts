import theme from "../theme";

export const DropdownRootCSS = theme.css({
  "@bpLG": {
    position: "relative",
  }
})

export const DropdownContentCSS = theme.css({
  position: "absolute",
  top: "calc(100% + 2px)",
  width: "100%",
  backgroundColor: "$white",
  boxShadow: "$primary",
  padding: "1rem",
  borderRadius: "6px",

  "@bpLG": {
    width: "auto",
  },

  variants: {
    variant: {
      center: {
        left: "50%",
        transformX: "-50%"
      },
      left: {
        left: 0,
      },
      right: {
        right: 0
      }
    }
  }
})

export const DropdownTriggerCSS = theme.css({
  cursor: "pointer"
})
